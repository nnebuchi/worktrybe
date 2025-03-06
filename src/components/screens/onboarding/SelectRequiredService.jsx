import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";

const SelectRequiredService = () => {
  const { user, fetchUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    fetchUserData(user?.token);
  }, []);
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
                What kind of service do you need?
              </h1>

              <form className="space-y-3 md:space-y-5 mt-4 " action="#">
                <div className="flex flex-wrap gap-x-0 gap-y-5 justify-between max-h-[400px] overflow-y-auto p-3 ring-1 ring-gray-300 rounded-lg services-container ">
                  <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`flex justify-content-between items-center mobilelg:w-[48%] w-full relative ring-1 rounded-lg ps-5 min-h-[150px] cursor-pointer ${
                      isChecked ? "ring-ftvprimary " : "ring-gray-300 "
                    }`}>
                    <div className="space-y-2 mobilelg:w-10/12 w-full">
                      <div
                        className={`w-10 h-10   flex justify-center items-center rounded-full ${
                          isChecked ? "bg-[#F0FDF4] " : "bg-[#F8FAFC] "
                        }`}>
                        <img src="/bag.svg" alt="" className="w-6/12" />
                      </div>
                      <h6 className="text-base font-semibold text-ftvblack">
                        Hire a Virtual Assistant
                      </h6>
                      <p className="text-sm text-[#475569]">
                        Administration and operations
                      </p>
                    </div>
                    <div className="w-4/12 right-img self-end  rounded-br-lg mobilelg:inline-flex hidden">
                      <img
                        src="/va.png"
                        alt=""
                        className="ms-auto w-full h-full object-cover "
                      />
                    </div>
                    <input
                      id="va"
                      type="checkbox"
                      checked={isChecked}
                      name="va"
                      className={`outline-none absolute rounded-full border-0 top-3 ring-1 focus:border-0 bg-[#F8FAFC] right-3 ${
                        isChecked ? "ring-ftvprimary " : "ring-gray-300"
                      } `}
                    />
                  </div>
                  <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`flex justify-content-between items-center mobilelg:w-[48%] w-full relative ring-1 rounded-lg p-5 min-h-[150px] cursor-pointer ${
                      isChecked ? "ring-ftvprimary " : "ring-gray-300 "
                    }`}>
                    <div className="space-y-2 w-full">
                      <div
                        className={`w-10 h-10   flex justify-center items-center rounded-full ${
                          isChecked ? "bg-[#F0FDF4] " : "bg-[#F8FAFC] "
                        }`}>
                        <img src="/Palette.svg" alt="" className="w-6/12" />
                      </div>
                      <h6 className="text-base font-semibold text-ftvblack">
                        Web Development
                      </h6>
                      <p className="text-sm text-[#475569]">
                        Design my business or company website
                      </p>
                    </div>

                    <input
                      id="va"
                      type="checkbox"
                      checked={isChecked}
                      name="va"
                      className={`outline-none absolute rounded-full border-0 top-3 ring-1 focus:border-0 bg-[#F8FAFC] right-3 ${
                        isChecked ? "ring-ftvprimary " : "ring-gray-300"
                      } `}
                    />
                  </div>
                  <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`flex justify-content-between items-center mobilelg:w-[48%] w-full relative ring-1 rounded-lg p-5 min-h-[150px] cursor-pointer ${
                      isChecked ? "ring-ftvprimary " : "ring-gray-300 "
                    }`}>
                    <div className="space-y-2 w-full">
                      <div
                        className={`w-10 h-10   flex justify-center items-center rounded-full ${
                          isChecked ? "bg-[#F0FDF4] " : "bg-[#F8FAFC] "
                        }`}>
                        <img src="/video-01.svg" alt="" className="w-6/12" />
                      </div>
                      <h6 className="text-base font-semibold text-ftvblack">
                        Hire a Virtual Assistant
                      </h6>
                      <p className="text-sm text-[#475569]">
                        Administration and operations
                      </p>
                    </div>

                    <input
                      id="va"
                      type="checkbox"
                      checked={isChecked}
                      name="va"
                      className={`outline-none absolute rounded-full border-0 top-3 ring-1 focus:border-0 bg-[#F8FAFC] right-3 ${
                        isChecked ? "ring-ftvprimary " : "ring-gray-300"
                      } `}
                    />
                  </div>
                  <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`flex justify-content-between items-center mobilelg:w-[48%] w-full relative ring-1 rounded-lg p-5 min-h-[150px] cursor-pointer ${
                      isChecked ? "ring-ftvprimary " : "ring-gray-300 "
                    }`}>
                    <div className="space-y-2 w-full">
                      <div
                        className={`w-10 h-10   flex justify-center items-center rounded-full ${
                          isChecked ? "bg-[#F0FDF4] " : "bg-[#F8FAFC] "
                        }`}>
                        <img src="/video-01.svg" alt="" className="w-6/12" />
                      </div>
                      <h6 className="text-base font-semibold text-ftvblack">
                        Hire a Virtual Assistant
                      </h6>
                      <p className="text-sm text-[#475569]">
                        Administration and operations
                      </p>
                    </div>

                    <input
                      id="va"
                      type="checkbox"
                      checked={isChecked}
                      name="va"
                      className={`outline-none absolute rounded-full border-0 top-3 ring-1 focus:border-0 bg-[#F8FAFC] right-3 ${
                        isChecked ? "ring-ftvprimary " : "ring-gray-300"
                      } `}
                    />
                  </div>
                  <div
                    onClick={() => setIsChecked(!isChecked)}
                    className={`flex justify-content-between items-center mobilelg:w-[48%] w-full relative ring-1 rounded-lg p-5 min-h-[150px] cursor-pointer ${
                      isChecked ? "ring-ftvprimary " : "ring-gray-300 "
                    }`}>
                    <div className="space-y-2 w-full">
                      <div
                        className={`w-10 h-10   flex justify-center items-center rounded-full ${
                          isChecked ? "bg-[#F0FDF4] " : "bg-[#F8FAFC] "
                        }`}>
                        <img src="/video-01.svg" alt="" className="w-6/12" />
                      </div>
                      <h6 className="text-base font-semibold text-ftvblack">
                        Hire a Virtual Assistant
                      </h6>
                      <p className="text-sm text-[#475569]">
                        Administration and operations
                      </p>
                    </div>

                    <input
                      id="va"
                      type="checkbox"
                      checked={isChecked}
                      name="va"
                      className={`outline-none absolute rounded-full border-0 top-3 ring-1 focus:border-0 bg-[#F8FAFC] right-3 ${
                        isChecked ? "ring-ftvprimary " : "ring-gray-300"
                      } `}
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
                            width: `${50}%`, // 25% for step 1
                          }}
                        />
                      </div>
                    </div>
                    <small className="plusjakartasans font-semibold text-ftvblack w-3/12 text-[0.7rem]">
                      Step 2/4
                    </small>
                  </div>
                  <div className="xl:w-6/12 mobilelg:w-7/12 w-full flex space-x-3 items-center mobilelg:justify-end">
                  <Link to="/company-info"
                      type="button"
                      className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  dark:bg-[#DBDBDB]  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer">
                      
                      <span className="fa fa-arrow-left" ></span>
                      
                    </Link>
                    <button
                      // onClick={validateSignupForm}
                      type="button"
                      className="xl:w-9/12 tabletlg:w-8/12 w-9/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-ftvblack  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer plusjakartasans">
                      Next: VA Info
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
