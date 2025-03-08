import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import ValidationError from "../../UI/ValidaionError";
import { toast } from "react-toastify";
import { updateHire } from "../../../services/api";
import { runValidation } from "../../../utils/buchi";
import { UserContext } from "../../../contexts/UserContext";
import { time } from "framer-motion";


const SelectRequiredService = () => {
  const { hireId } = useParams();
  const { user } = useContext(UserContext);
  const [validationErrors, setValidationErrors] = useState();
  const [experienceLevel, setExperienceLevel] = useState("25");
  const [budgetLevel, setBudgetLevel] = useState(0);
  const [jobType, setJobType] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);

  const [experienceLevels, setExperienceLevels] = useState([
    { id: 1, label: "Beginner", value: 0 },
    { id: 2, label: "Intermediate", value: 50 },
    { id: 3, label: "Senior", value: 75 },
    { id: 4, label: "Expert", value: 100 },
  ]);
  const budgetLevels =[
    { id: 1, label: "0", value: 0 },
    { id: 2, label: "50-100", value: "50-100" },
    { id: 3, label: "100-200", value: "100-200" },
    { id: 4, label: "200-500", value: "200-500" },
    { id: 4, label: "500-1000", value: "500-1000" },
    { id: 4, label: "1000-2000", value: "1000-2000" },
    { id: 4, label: "2000-5000", value: "2000-5000" },
  ];

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/,/g, "");
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "," || event.key === " ") {
      const newTag = inputValue.trim();
      if (newTag && tags.length < 8) {
        setTags([...tags, newTag]);
        setInputValue("");
      }
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(value);
    
    setExperienceLevel(value.toString());
  };
  const handleBudgetSliderChange = (event) => {
    const value = parseInt(event.target.value);
    console.log(value);
    
    setBudgetLevel(value);
  };

  const timezones = [
    "UTC-12", "UTC-11", "UTC-10", "UTC-9", "UTC-8", "UTC-7", "UTC-6", "UTC-5", "UTC-4", "UTC-3", "UTC-2", "UTC-1", "UTC", "UTC+1", "UTC+2", "UTC+3","UTC+4", "UTC+5", "UTC+6", "UTC+7", "UTC+8", "UTC+9", "UTC+10", "UTC+11", "UTC+12"
  ];


  const navigate = useNavigate();

  const validateForm = async () => {
    const validate = await runValidation([
      
      {
        input: {value: jobType, field: "job_type", type: "text"},
        rules: { required: true },
      },
      {
        input: { value: selectedTimeZone, field: "timezone", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: experienceLevel, field: "experience_level", type: "text" },
        rules: { required: true, min_value: 25 },
      },
      {
        input: { value: budgetLevel*5, field: "budget", type: "text" },
        rules: { min_value:50 },
      },
    ]);

    if (validate?.status === false) {
      console.log(validate.errors);
      
      setValidationErrors(validate.errors);
    } else {
      updateHiring()
      // profileUpdate();
    }
  };

   const updateHiring = async () => {
      const budgetConvert = {
        "0": "0",
        "10":"50-100",
        "20":"100-200",
        "30":"200+",
        "40":"200-500",
        "50":"500+",
        "60":"500-1000",
        "70":"1000+",
        "80":"1000-2000",
        "90":"2000+",
        "100":"2000-5000",
      }
      const response = await updateHire(user?.token, {
        job_type: jobType,
        timezone: selectedTimeZone,
        experience_level: experienceLevel,
        budget: budgetConvert[budgetLevel],
        id: hireId
      });
      if (response?.status === "success") {
        toast.success(" updated successfully");
        navigate(`/book-meeting`);
      }else{
        console.log(response);
      }
    }

  return (
    <>
      <section className="mx-auto px-0 mobilelg:py-0 py-8">
        <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
          <div className="xl:w-6/12 lg:w-5/12 mobilelandscape:w-5/12 tabletmd:inline-flex hidden ">
            <img
              src="/right-column.png"
              alt=""
              className=" h-[680px] w-full tabletmd:object-none object-cover"
            />
          </div>
          <div className="xl:w-6/12 lg:w-7/12 tabletmd:w-7/12 mobilelandscape:w-10/12 w-full bg-white xl:px-8 px-4  ">
            <div className="mobilesm:p-6 p-0    w-full">
              <img src="/fasttrack-logo.svg" alt="" className="mb-10 " />
              <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-3xl mb-3">
                What kind of VA do you prefer
              </h1>

              <form className="space-y-3 md:space-y-5 mt-4 " action="#">
                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                      Job Type
                    </label>

                    <select
                      id="industry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                      onChange={(e) => {setJobType(e.target.value)}}
                      >
                      <option value="AUT" selected disabled>
                        Select engagement type
                      </option>
                      <option value="full_time">Full Time</option>
                      <option value="part_time">Part Time</option>
                      <option value="contract">Contract</option>
                    </select>
                    <ValidationError
                      validationErrors={validationErrors}
                      field="job_type"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                      Preferred Timezone
                    </label>

                    <select
                      id="company_size"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 "
                      onChange={(e) => {setSelectedTimeZone(e.target.value)}}
                      >
                      <option value="AUT" selected disabled>
                        Select work time
                      </option>
                      {timezones.map((timezone, index) => (
                        <option key={index} value={timezone}>
                          {timezone}
                        </option>
                      ))}
                      
                    </select>
                    <ValidationError  validationErrors={validationErrors} field="timezone"/>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Preferred Experience Level
                  </label>

                  <div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={experienceLevel}
                      step="25"
                      onChange={handleSliderChange}
                      style={{
                        background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${experienceLevel}%, #ccc ${experienceLevel}%, #ccc 100%)`,
                      }}
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none"

                    />
                    <div className="flex justify-between w-full mt-2">
                      {experienceLevels.map((level) => (
                        <span
                          key={level.id}
                          className={`text-xs text-ftvblack ${
                            experienceLevel >= level.value
                              ? "font-bold text-ftvprimary"
                              : ""
                          }`}>
                          {level.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ValidationError validationErrors={validationErrors} field="experience_level"/>
                </div>
                {/* <div className="w-full">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Required Skills(8 max)
                  </label>

                  <div className="flex flex-wrap gap-y-5 items-center justify-start w-full mt-2 ring-1 ring-gray-300 rounded-lg min-h-20  p-3">
                    <div className="flex justify-center items-center flex-wrap w-full gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className=" min-h-10 rounded-lg p-2 text-base text-ftvgray-300 bg-[#EAECF0] flex items-center ">
                          {tag}
                          <button
                            className=" text-gray-500 hover:text-gray-700 ms-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleRemoveTag(index);
                            }}>
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      className=" ring-none border-none focus:outline-0 border-0 focus:border-0 focus:ring-0"
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div> */}
                <div className="w-full">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Budget Range (in USD)
                  </label>

                  <div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={budgetLevel}
                      step="10"
                      onChange={handleBudgetSliderChange}
                      style={{
                        background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${budgetLevel}%, #ccc ${budgetLevel}%, #ccc 100%)`,
                      }}
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none"
                    />
                    <div className="flex justify-between w-full mt-2">
                      {budgetLevels.map((level) => (
                        <span
                          key={level.id}
                          className={`text-xs text-ftvblack ${
                            budgetLevel === level.value
                              ? "font-bold text-ftvprimary"
                              : ""
                          }`}>
                          {level.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ValidationError validationErrors={validationErrors} field="budget"/>
                </div>

                <div className="flex mobilelg:justify-between justify-center mobilelg:flex-nowrap flex-wrap mobilelg:flex-row flex-row-reverse items-center gap-y-5">
                  <div className="xl:w-6/12 mobilelg:w-5/12 w-full flex items-center space-x-3">
                    <div className="w-8/12">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-ftvsecondary rounded-full"
                          style={{
                            width: `${75}%`, // 25% for step 1
                          }}
                        />
                      </div>
                    </div>
                    <small className="plusjakartasans font-semibold text-ftvblack w-3/12 text-[0.7rem]">
                      Step 3/4
                    </small>
                  </div>
                  <div className="xl:w-6/12 mobilelg:w-7/12 w-full flex space-x-3 items-center mobilelg:justify-end">
                    <Link to="/company-info"
                      type="button"
                      className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  dark:bg-[#DBDBDB]  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer">
                      
                      <span className="fa fa-arrow-left" ></span>
                      
                    </Link>
                    <button
                      onClick={validateForm}
                      type="button"
                      className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-ftvblack  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer plusjakartasans">
                      Next: Book a call
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectRequiredService;
