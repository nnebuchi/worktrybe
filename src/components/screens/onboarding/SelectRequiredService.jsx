import { useNavigate } from "react-router-dom";
import BudgetDropdown from "../../UI/BudgetDropdown";
const SelectRequiredService = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="mx-auto px-0">
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
              <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-3xl mb-3">
                What kind of service do you need?
              </h1>

              <form className="space-y-3 md:space-y-5 mt-4" action="#">
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
                      // onClick={validateSignupForm}
                      type="button"
                      className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  dark:bg-[#DBDBDB]  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer">
                      <span className="fa fa-arrow-left"></span>
                    </button>
                    <button
                      // onClick={validateSignupForm}
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

export default SelectRequiredService;
