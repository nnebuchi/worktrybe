import { useState, useContext, useEffect} from "react";
import { runValidation } from "../utils/buchi";
import ValidationError from "../components/UI/ValidaionError";
import Select from 'react-select';
import{updateProfile, getServices, getWorkTool, updateProfessionalData, uploadCV} from "../services/api";
import {timezones} from "../utils/time";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const employmentOptions = ["Full-time", "Part-time", "Contract", "Internship"];

const TalentOnboarding = () => {
    
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedTools, setSelectedTools] = useState([]);

    const [services, setServices] = useState([]);

    const [toolOptions, setToolOptions] = useState([]);

    const [formData, setFormData] = useState({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        phone: user.phone || '',
        employmentType: user.professional_profile?.job_type || '',
        rate: user.professional_profile?.monthly_rate || '',
        preferredTimezone: user.professional_profile?.timezone || '',
        skills: user.professional_profile?.skills || [],
        tools: user.professional_profile?.tools || [],
        resume: null,
    });
    const [validationErrors, setValidationErrors] = useState();

    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
        setFormData((prev) => ({
        ...prev,
        skills: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
        }));
    };

    const handleToolChange = (selectedOptions) => {
        setSelectedTools(selectedOptions);
        setFormData((prev) => ({
        ...prev,
        tools: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
        }));
    };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fetchServices = async () => {
    const response = await getServices(user?.token);
    if (response?.status === "success") {
      setServices(response?.data.map((tool) => ({ value: tool.title, label: tool.title })));
    }else{
      console.log(response);
    }
  };

   const fetchWorkTools = async () => {
      const response = await getWorkTool(user?.token);
      if (response?.status === "success") {
        setToolOptions(response?.data.map((tool) => ({ value: tool.name, label: tool.name })))
        // setWorkTools();
      
      }else{
        console.log(response)
      }
    }


const handleNext = async () => {
    const validationMap = {
        1: [
            { input: { value: formData.first_name, field: "first_name", type: "text" }, rules: { required: true } },
            { input: { value: formData.last_name, field: "last_name", type: "text" }, rules: { required: true } },
            { input: { value: formData.phone, field: "phone", type: "text" }, rules: { required: true } },
        ],
        2: [
            { input: { value: formData.employmentType, field: "employmentType", type: "text" }, rules: { required: true } },
            { input: { value: formData.rate, field: "rate", type: "text" }, rules: { required: true } },
            { input: { value: formData.preferredTimezone, field: "preferredTimezone", type: "text" }, rules: { required: true } },
        ],
        3: [
            { input: { value: formData.skills, field: "skills", type: "array" }, rules: { required: true } },
            { input: { value: formData.tools, field: "tools", type: "array" }, rules: { required: true } },
        ],
    };

    const validate = await runValidation(validationMap[step] || []);
    if (validate?.status === false) {
    setValidationErrors(validate.errors);
    } else {
        setValidationErrors();
        if(step === 1){
            const update = await updateProfile(user?.token, {
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone: formData.phone,
                role: "talent",
            });
            if(update?.status == "success"){
                setStep((s) => s + 1);
            }
        }

        if(step === 2){
            console.log(formData);
            const update = await updateProfessionalData(user?.token, {
                job_type: formData.employmentType,
                monthly_rate: formData.rate,
                timezone: formData.preferredTimezone,
            });
            if(update?.status == "success"){
                setStep((s) => s + 1);
            }
        }

        
        if(step === 3){
            console.log(formData);
            const update = await updateProfessionalData(user?.token, {
                tools: formData.tools,
                skills: formData.skills,
            });
            if(update?.status == "success"){
                setStep((s) => s + 1);
            }
        }

        if(step === 4){
            console.log(formData);
            const uploadData = new FormData();
            uploadData.append('cv', formData.resume);

            const update = await uploadCV(user?.token, uploadData);
            if(update?.status == "success"){
                navigate('/completed');
            }else{
                if(update.error ){
                    // toast.error(update.message);
                    setValidationErrors(update.error);
                }
            }
        }
    
    }
};

  const handleFileChange = (e) => {
    handleChange("resume", e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Submitting", formData);
    // submit logic here
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const inputClasses = "bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary block w-full p-2.5 outline-none bg-[#F9FAFB] focus:bg-[#F9FAFB] placeholder-gray-400 text-ftvblack focus:ring-ftvsecondary ring-1 ring-gray-200";

    useEffect(()=>{
        fetchServices();
        fetchWorkTools();
    }, []);

    useEffect(()=>{
        setSelectedTools(user.professional_profile?.tools?.map((tool) => ({ value: tool, label: tool })));
        setSelectedSkills(user.professional_profile?.skills?.map((skill) => ({ value: skill, label: skill })));
    }, [user]);
    
  return (
    <section className="mx-auto px-0">
      <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
        <div className="tabletmd:w-6/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden ">
          <img
            src="/right-column.png"
            alt="Visual"
            className="h-[680px] w-full tabletmd:object-none object-cover"
          />
        </div>

        <div className="tabletmd:w-6/12 mobilelandscape:w-7/12 mobilelg:w-9/12 w-full bg-white tabletmd:px-8 px-4">
          <div className="mobilesm:p-6 p-0 w-full">
            <img src="/fasttrack-logo.svg" alt="Logo" className="mb-10" />
            <h1 className="text-2xl mobilemd:text-3xl font-bold text-ftvblack tabletmd:text-4xl mb-3">
              Digital Talent Onboarding
            </h1>
            <p className="text-base font-normal text-[#3B4752]">
              Step {step} of 4
            </p>

            {step === 1 && (
              <div className="space-y-5 mt-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    // value={formData.first_name}
                    defaultValue={user?.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    className={inputClasses}
                    placeholder="Enter your first name"
                  />
                  <ValidationError validationErrors={validationErrors} field="first_name" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    // value={formData.last_name}
                    defaultValue={user?.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    className={inputClasses}
                    placeholder="Enter your last name"
                  />
                  <ValidationError validationErrors={validationErrors} field="last_name" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    // value={formData.phone}
                    defaultValue={user?.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClasses}
                    placeholder="Enter your phone number"
                  />
                  <ValidationError validationErrors={validationErrors} field="phone" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 mt-4">
                <div>
                  <label className="block text-sm font-medium">Employment Type Preference</label>
                  <select
                    defaultValue={formData.employmentType}
                    onChange={(e) => handleChange("employmentType", e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select employment type</option>
                    {employmentOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ValidationError validationErrors={validationErrors} field="employmentType" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Hourly/Monthly Rate</label>
                  <input
                    type="text"
                    value={formData.rate}
                    onChange={(e) => handleChange("rate", e.target.value)}
                    className={inputClasses}
                    placeholder="e.g. $50/hr or $3000/mo"
                  />
                  <ValidationError validationErrors={validationErrors} field="rate" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Preferred Timezone</label>
                  <select
                    value={formData.preferredTimezone}
                    onChange={(e) => handleChange("preferredTimezone", e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select a timezone</option>
                    {timezones().map((zone) => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                  <ValidationError validationErrors={validationErrors} field="preferredTimezone" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5 mt-4">
                <div>
                    <label className="block text-sm font-medium">Skill Tags</label>
                    <Select
                        isMulti
                        options={services}
                        value={selectedSkills}
                        onChange={handleSkillChange}
                        placeholder="Select skills..."
                    />
                    <ValidationError validationErrors={validationErrors} field="skills" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Tools Used</label>
                  <Select
                    isMulti
                    options={toolOptions}
                    value={selectedTools}
                    onChange={handleToolChange}
                    placeholder="Select tools..."
                />
                  <ValidationError validationErrors={validationErrors} field="tools" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="mt-4">
                <label className="block text-sm font-medium">Upload Resume/CV</label>
                <input type="file" onChange={handleFileChange} className={inputClasses} />
                <ValidationError validationErrors={validationErrors} field="cv" />
              </div>
            )}

            {/* <div className="mt-6 flex justify-between gap-2">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="w-full text-ftvblack bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  onClick={handleNext}
                  className="w-full text-white bg-ftvprimary hover:bg-ftvsecondary font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Next
                </button>
              )}
              {step === 4 && (
                <button
                  onClick={handleSubmit}
                  className="w-full text-white bg-ftvprimary hover:bg-ftvsecondary font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Submit
                </button>
              )}
            </div> */}

            <div className="flex mobilelg:justify-between justify-center mobilelg:flex-nowrap flex-wrap mobilelg:flex-row flex-row-reverse items-center gap-y-5 mt-6">
                <div className="xl:w-6/12 mobilelg:w-5/12 w-full flex items-center space-x-3">
                <div className="w-8/12">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-full bg-ftvsecondary rounded-full"
                        style={{
                        width: `${75}%`, 
                        }}
                    />
                    </div>
                </div>
                <small className="plusjakartasans font-semibold text-ftvblack w-3/12 text-[0.7rem]">
                    Step {step}/4
                </small>
                </div>
                <div className="xl:w-6/12 mobilelg:w-7/12 w-full flex space-x-3 items-center mobilelg:justify-end">
                {step > 1 && (
                    <span 
                        onClick={handleBack}
                        type="button"
                        className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  bg-ftvsecondary  hover:bg-[#DBDBDB] focus:ring-ftvgrey cursor-pointer">
                        
                        <span className="fa fa-arrow-left-long" ></span>
                        
                    </span>
                )}
                {step < 4 ?
                <button
                    onClick={handleNext}
                    type="button"
                    className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center bg-ftvblack  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer plusjakartasans">
                    Next: <span className="fa fa-arrow-right-long" ></span> 
                    {/* {step==3 && "Book a call"} */}
                </button>
                :
                <button
                    onClick={handleNext}
                    type="button"
                    className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center bg-ftvblack  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer plusjakartasans">
                    Submit 
                    {/* {step==3 && "Book a call"} */}
                </button>       
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentOnboarding;