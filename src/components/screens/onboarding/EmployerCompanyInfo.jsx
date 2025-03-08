import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ValidationError from "../../UI/ValidaionError";
import { toast } from "react-toastify";
import { updateOrganizationProfile, getIndustries } from "../../../services/api";
import { runValidation } from "../../../utils/buchi";
import { UserContext } from "../../../contexts/UserContext";

const EmployerCompanyInfo = () => {
  const { user, fetchUserData } = useContext(UserContext);
  

  const [organization, setOrganization] = useState(
    user?.organization ? user?.organization : {}
  );
  
  
  const [industries, setIndustries] = useState([]);

  const [validationErrors, setValidationErrors] = useState();
  const navigate = useNavigate();

  const updateOrganization = (field, value) => {
    const organizationClone = {...organization};
    organizationClone[field] = value;
    console.log(organizationClone);
    
    setOrganization(organizationClone)
  }

  const fetchIndustries = async () => {
    const response = await getIndustries();
    if (response?.status === "success") {
      setIndustries(response?.data);
    }else{
      console.log(response)
    }
  }

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
        input: { value: organization?.name, field: "company_name", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: organization?.industry, field: "industry", type: "text" },
        rules: { required: true },
      },
    ]);

    if (validate?.status === false) {
      console.log(validate.errors);
      
      setValidationErrors(validate.errors);
    } else {
      profileUpdate();
    }
  };

  const profileUpdate = async () => {
    try {
      const update = await updateOrganizationProfile(user?.token, {
        company_name:organization?.name,
        company_website:organization?.website,
        employee_size:organization?.employee_size,
        industry:organization?.industry
      });
      if (update?.status === "success") {
        toast.success(update?.message);
        navigate("/select-service");
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    fetchUserData(user?.token);
    fetchIndustries();

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
              <p className="text-base text-text-center font-normal text-[#3B4752] dark:text-[#3B4752]">
                Tell us a bit about your company
              </p>

              <form className="space-y-3 md:space-y-5 mt-4" action="#">
                <div className="w-full">
                  <label
                    htmlFor="company_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    placeholder="ABC Company"
                    onChange={(e) => {
                      updateOrganization('name', e.target.value);
                    }}
                    value={organization?.name}
                  />

                  <ValidationError
                    validationErrors={validationErrors}
                    field="company_name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="company_website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Company Website
                  </label>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    placeholder="company.com"
                    onChange={(e) => {
                      updateOrganization('website', e.target.value);
                    }}
                    value={organization?.website}
                  />
                  <ValidationError
                    validationErrors={validationErrors}
                    field="company_website"
                  />
                </div>

                <div className="flex items-start mobilelg:flex-nowrap flex-wrap space-x-10 w-full space-y-4">
                  <div className="mobilelg:w-6/12 w-full">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                      Industry
                    </label>

                    <select
                      id="industry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 "
                      defaultValue={organization?.industry_id}
                      onChange={(e) => updateOrganization('industry', e.target.value)}
                      name="industry"
                      >
                      <option value={"Select Industry"} selected disabled>
                        Select related industry
                      </option>
                      {
                        industries.map((sector, index)=>(
                          <option key={index} value={sector?.id}>{sector?.name}</option>
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
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                      Company Size
                    </label>

                    <select
                      id="company_size" defaultValue={organization?.company_size}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 "
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
                      className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-ftvblack  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer plusjakartasans">
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
