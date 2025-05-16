import { useNavigate, Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
const BookMeeting = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="mx-auto px-0 mobilelg:py-0 py-0">
        <div className="flex  items-center justify-center lg:min-h-[680px] min-h-[620px] mobilelandscape:flex-nowrap flex-wrap">
          {/* <div className="lg:w-4/12 lg:inline-flex  mobilelandscape:w-5/12  hidden ">
            <img
              src="/right-column.png"
              alt=""
              className=" h-[680px] w-full tabletmd:object-none object-cover"
            />
          </div> */}
          <div className="lg:w-12/12 flex flex-col lg:p-10 mobilelg:px-10  px-4 py-0  w-full">
            <div className="ring-1 ring-gray-300 min-h-[80] rounded-lg overflow-hidden w-full">
              <div className="flex justify-between items-center tabletmd:flex-nowrap flex-wrap w-full ">
                <div className="xl:w-5/12 lg:w-7/12 tabletlg:w-5/12 mobilelandscape:w-5/12 w-full bg-white mobilelg:inline-flex hidden  ">
                  <div className="mobilesm:p-6 p-0    w-full">
                    <img
                      src="/fasttrack-logo.svg"
                      alt=""
                      className="tabletmd:mb-10 mb-0  tabletmd:w-fit w-3/12"
                    />
                    <h1 className="text-2xl mobilemd:text-2xl font-bold  text-ftvblack tabletmd:text-3xl mb-3 tabletmd:inline-flex hidden">
                      Book Consultation
                    </h1>

                    <p className="text-ftvblack text-base plusjakartasans">
                      Connect with us so we understand your request and provide you with the best personnel
                    </p>
                  </div>
                </div>
                <div className="xl:w-7/12 lg:w-7/12 tabletmd:w-7/12 mobilelandscape:w-7/12 w-full bg-white flex flex-col justify-start  border-l-[1px] border-gray-300 lg:p-5 min-h-[500px]">
                  <div>
                    <InlineWidget
                      url="https://calendly.com/emmanueljoce/30min"
                      styles={{
                        height: "500px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-3 md:space-y-5 mt-4 " action="#">
              <div className="flex mobilelg:justify-between justify-center mobilelg:flex-nowrap flex-wrap mobilelg:flex-row flex-row-reverse items-center mobilelemd:gap-y-5 gap-y-2">
                <div className="xl:w-6/12 mobilelg:w-5/12 w-full flex items-center space-x-3 mobilelg:justify-start justify-center ">
                  <div className="w-8/12  mx-auto ">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-ftvsecondary rounded-full"
                        style={{
                          width: `${100}%`, // 25% for step 1
                        }}
                      />
                    </div>
                  </div>
                  <small className="plusjakartasans font-semibold text-ftvblack w-3/12 text-[0.7rem]">
                    Step 4/4
                  </small>
                </div>
                <div className="xl:w-6/12 mobilelg:w-7/12 w-full flex space-x-3 items-center mobilelg:justify-end justify-center">
                  <button
                    // onClick={validateSignupForm}
                    type="button"
                    className="w-8 h-8 text-white flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full p-5  bg-[#DBDBDB]  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer">
                    <span className="fa fa-arrow-left"></span>
                  </button>
                  <button
                    // onClick={validateSignupForm}
                    type="button"
                    onClick={() => navigate("/completed")}
                    className="xl:w-6/12 tabletlg:w-8/12 mobilelg:w-9/12 w-7/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full text-sm px-5 py-2 text-center bg-ftvblack  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer plusjakartasans">
                    Proceed to Dashboard
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookMeeting;
