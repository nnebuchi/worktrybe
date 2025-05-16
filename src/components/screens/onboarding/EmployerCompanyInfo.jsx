import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ValidationError from "../../UI/ValidaionError";
import { toast } from "react-toastify";
import { updateOrganizationProfile, getIndustries, getWorkTool } from "../../../services/api";
import { runValidation } from "../../../utils/buchi";
import { UserContext } from "../../../contexts/UserContext";
import Select from 'react-select';


const EmployerCompanyInfo = () => {
  const { user, fetchUserData } = useContext(UserContext);
  
  const location = useLocation();
  const searchParams  = new URLSearchParams(location.search );
  const hireId = searchParams.get('hireId');
  
  const [organization, setOrganization] = useState(
    user?.company ? {
      contact_email: user?.company?.contact_email,
      contact_name: user?.company?.contact_name,
      contact_phone: user?.company?.contact_phone,
      technology_tools: user?.company?.communication_tools,
      employee_size: user?.company?.employee_size,
      industry: user?.company?.industry,
      name: user?.company?.name,
      website: user?.company?.website,
      years_in_operation: user?.company?.years_in_operation
    }:{}
  );
  
  const [industries, setIndustries] = useState([]);
  const [validationErrors, setValidationErrors] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [workTools, setWorkTools] = useState([]);

  const navigate = useNavigate();
  const updateOrganization = (field, value) => {
    console.log(field);
    console.log(value);
    
    
    const organizationClone = {...organization};
    organizationClone[field] = value;
    
    setOrganization(organizationClone)
  }

  const fetchIndustries = async () => {
    const response = await getIndustries(user?.token);
    if (response?.status === "success") {
      setIndustries(response?.data);
    }else{
      console.log(response)
    }
  }

  const fetchWorkTools = async () => {
    const response = await getWorkTool(user?.token);
    if (response?.status === "success") {
      setWorkTools(response?.data.map((tool) => ({ value: tool.name, label: tool.name })));
    
    }else{
      console.log(response)
    }
  }

  const handleWorkToolChange = (options) => {
    setSelectedOptions(options);
    updateOrganization('technology_tools', options.map((option) => option.value));
  };

  const profileUpdate = async () => {
    try {
      const update = await updateOrganizationProfile(user?.token, {
        company_name:organization?.name,
        company_website:organization?.website,
        employee_size:organization?.employee_size,
        industry:organization?.industry,
        years_in_operation:organization?.years_in_operation,
        technology_tools:organization?.technology_tools,
        contact_name:organization?.contact_name,
        contact_email:organization?.contact_email,
        contact_phone:organization?.contact_phone
      });
      if (update?.status === "success") {
        toast.success(update?.message);
        navigate(hireId ?`/select-service?hireId=${hireId}`:"/select-service");
      } else {
        if (update.error) {
          toast.error(update.message);
          setValidationErrors(update.error);
        }
      }
    } catch (error) {
      toast.error(error?.message);
    }
   
  };

  
  const validateProfileForm = async () => {
    
    const validate = await runValidation([
      
      {
        input: {value: organization?.employee_size, field: "company_size", type: "text"},
        rules: { required: true },
      },
      {
        input: { value: organization?.website, field: "company_website", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.name, field: "business_name", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.industry, field: "industry", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.years_in_operation.toString(), field: "years_in_operation", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.technology_tools, field: "technology_tools", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.contact_name, field: "primary_contact", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.contact_email, field: "contact_email", type: "text" },
        rules: { required: true, email:true },
      },
      {
        input: { value: organization?.contact_phone, field: "contact_phone", type: "text" },
        rules: { required: true, min_length:11, max_length:14 },
      },
    ]);

    if (validate?.status === false) {
      
      setValidationErrors(validate.errors);
    } else {
      profileUpdate();
    }
  };

  

  

  useEffect(() => {
    setSelectedOptions(organization?.technology_tools?.map((tool) => ({ value: tool, label: tool })));
  }, [organization]);

  useEffect(() => {
    fetchUserData(user?.token);
    fetchIndustries();
    fetchWorkTools();
    
    // updateOrganization('technology_tools', organization?.technology_tools);
  }, []);

  return (
    <>
      <section className="mx-auto px-0 mobilelg:py-0 py-8">
        <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
          <div className="xl:w-6/12 lg:w-5/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden ">
            <img
              src="/right-column.png"
              alt=""
              className=" h-[680px] w-full tabletmd:object-none object-cover"
            />
          </div>
          <div className="xl:w-6/12 lg:w-7/12 mobilelandscape:w-7/12 mobilelg:w-11/12 w-full bg-white xl:px-8 px-4  ">
            <div className="mobilesm:p-6 p-0    w-full">
              <img src="/fasttrack-logo.svg" alt="" className="mb-10 " />
              <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-4xl mb-3">
                Company Information
              </h1>
              <p className="text-base text-text-center font-normal text-[#3B4752] text-[#3B4752]">
                Tell us a bit about your company
              </p>

              <form className="space-y-3 md:space-y-5 mt-4" action="#">
                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label
                      htmlFor="company_name"
                      className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                      placeholder="ABC Company"
                      onChange={(e) => {
                        updateOrganization('name', e.target.value);
                      }}
                      defaultValue={organization?.name}
                    />

                    <ValidationError
                      validationErrors={validationErrors}
                      field="business_name"
                    />
                  </div>
                <div className="mobilelg:w-6/12 w-full">
                  <label htmlFor="company_website" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    Company Website URL
                  </label>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                    placeholder="company.com"
                    onChange={(e) => {
                      updateOrganization('website', e.target.value);
                    }}
                    defaultValue={organization?.website}
                  />
                  <ValidationError
                    validationErrors={validationErrors}
                    field="company_website"
                  />
                </div>
                </div>
                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                      Industry
                    </label>

                    <select
                      id="industry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200 "
                      defaultValue={organization?.industry}
                      onChange={(e) => updateOrganization('industry', e.target.value)}
                      name="industry"
                      >
                      <option value={"Select Industry"} selected disabled>
                        Select related industry
                      </option>
                      {
                        industries.map((sector, index)=>(
                          <option key={index} value={sector?.name}>{sector?.name}</option>
                        ))
                      }
                      
                      
                    </select>
                    <ValidationError
                      validationErrors={validationErrors}
                      field="industry"
                    />
                  </div>
                  <div className="mobilelg:w-6/12 w-full">
                    <label
                      htmlFor="company_size"
                      className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                      Company Size
                    </label>

                    <select
                      id="company_size" defaultValue={organization.employee_size}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200 "
                      onChange={
                        (e) => updateOrganization('employee_size', e.target.value)
                      }
                    >
                      <option value="AUT" selected disabled>
                        Select company size
                      </option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100 </option>
                      <option value="100+">100+ </option>
                    </select>
                    <ValidationError
                      validationErrors={validationErrors}
                      field="company_size"
                    />
                  </div>
                </div>

                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label htmlFor="years_in_operation" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    Years in operation
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      name="years_in_operation"
                      id="years_in_operation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                      onChange={(e) => {
                        updateOrganization('years_in_operation', e.target.value);
                      }}
                      defaultValue={organization?.years_in_operation}
                    />
                    <ValidationError
                      validationErrors={validationErrors}
                      field="years_in_operation"
                    />
                  </div>
                  <div className="mobilelg:w-6/12 w-full">
                    <label htmlFor="years_in_operation" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    Primary Contact
                    </label>
                    <input
                      type="text"
                      name="primary_contact"
                      id="primary_contact"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                      onChange={(e) => {
                        updateOrganization('contact_name', e.target.value);
                      }}
                      defaultValue={organization.contact_name || ""}
                    />
                    <ValidationError
                      validationErrors={validationErrors}
                      field="primary_contact"
                    />
                  </div>
                  
                </div>

                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label htmlFor="contact_phone" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    Contact Phone
                    </label>
                    <input
                      type="text"
                      name="contact_phone"
                      id="contact_phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                      onChange={(e) => {
                        updateOrganization('contact_phone', e.target.value);
                      }}
                      defaultValue={organization.contact_phone || ""}
                    />
                    <ValidationError
                      validationErrors={validationErrors}
                      field="contact_phone"
                    />
                  </div>
                  <div className="mobilelg:w-6/12 w-full">
                    <label htmlFor="contact_email" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    Contact Email
                    </label>
                    <input
                      type="text"
                      name="contact_email"
                      id="contact_email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none bg-ftvwine-25 focus:bg-ftvgrey-25 border-ftvgrey-200  placeholder-gray-400 text-ftvblack-300 focus:ring-ftvwine-300 focus:border-ftvwine-200"
                      onChange={(e) => {
                        updateOrganization('contact_email', e.target.value);
                      }}
                      defaultValue={organization.contact_email || user.email}
                    />
                    <ValidationError
                      validationErrors={validationErrors}
                      field="contact_email"
                    />
                  </div>
                  
                </div>
                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-12/12 w-full">
                    <label htmlFor="technology_took" className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                    What tools, software, or platforms do you use? <small>(Select all that apply)</small> 
                    </label>
                    <Select
                      isMulti
                      options={workTools}
                      value={selectedOptions}
                      onChange={handleWorkToolChange}
                      // defaultInputValue={organization.communication_tools}
                      // onInputChange={updateOrganization}
                      placeholder="Select options..."
                    />
                    <ValidationError
                      validationErrors={validationErrors}
                      field="technology_tools"
                    />
                  </div>
                </div>
                <div className="flex mobilelg:justify-between justify-center mobilelg:flex-nowrap flex-wrap mobilelg:flex-row flex-row-reverse items-center gap-y-5">
                  <div className="xl:w-6/12 mobilelg:w-5/12 w-full flex items-center space-x-3">
                    <div className="w-8/12">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-ftvsecondary rounded-full"
                          style={{
                            width: `${25}%`, // 25% for step 1
                          }}
                        />
                      </div>
                    </div>
                    <small className="plusjakartasans font-semibold text-ftvblack w-3/12 text-[0.7rem]">
                      Step 1/4
                    </small>
                  </div>
                  <div className="xl:w-6/12 mobilelg:w-7/12 w-full flex space-x-3 items-center mobilelg:justify-end">
                  
                    <button
                      onClick={validateProfileForm}
                      type="button"
                      className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center bg-ftvblack  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer plusjakartasans">
                      Next: Choose Service
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

export default EmployerCompanyInfo;
