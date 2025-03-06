import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ValidationError from "../../UI/ValidaionError";
import { toast } from "react-toastify";
import { updateProfile } from "../../../services/api";
import { runValidation } from "../../../utils/buchi";
import { UserContext } from "../../../contexts/UserContext";
const SelectRequiredService = () => {
  const [validationErrors, setValidationErrors] = useState();
  const navigate = useNavigate();

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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                      <option value="AUT" selected disabled>
                        Select engagement type
                      </option>
                      <option value="AUT">Full Time</option>
                      <option value="ACCT">Part Time</option>
                      <option value="SOFT">Contract</option>
                    </select>
                    <ValidationError
                      validationErrors={validationErrors}
                      field="industry"
                    />
                  </div>
                  <div className="w-6/12">
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                      Preferred Work Hours
                    </label>

                    <select
                      id="company_size"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                      <option value="AUT" selected disabled>
                        Select work time
                      </option>
                      <option value="">1-4 hours</option>
                      <option value="">4-8 hours</option>
                      <option value="">4-12 hours</option>
                      <option value="">12+ hours</option>
                    </select>
                    <ValidationError
                      validationErrors={validationErrors}
                      field="industry"
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Preferred Experience Level
                  </label>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    step="25"
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none"
                  />

                  <div className="flex justify-between w-full mt-2">
                    <span className="text-xs text-gray-500">Beginner (0)</span>
                    <span className="text-xs text-gray-500">
                      Intermediate (25)
                    </span>
                    <span className="text-xs text-gray-500">Senior (50)</span>
                    <span className="text-xs text-gray-500">Expert (75)</span>
                  </div>
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
                      // onClick={validateSignupForm}
                      type="button"
                      className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  dark:bg-[#DBDBDB]  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer">
                      
                      <span className="fa fa-arrow-left" ></span>
                      
                    </Link>
                    <button
                      // onClick={validateSignupForm}
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
