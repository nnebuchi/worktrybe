import {useNavigate} from "react-router-dom";

const Completed = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <section className="mx-auto px-0 mobilelg:py-0 py-0">
        <div className="flex items-center justify-center min-h-[680px] w-full">
          <div className="md:w-10/12 w-full bg-white xl:px-8 px-4   text-center">
            <div className="mobilemd:p-0 mobilesm:p-2 p-0 w-full flex flex-col justify-center items-center">
              <img
                src="/fasttrack-logo.svg"
                alt=""
                className="mobilelg:mb-10 mb-5 tabletmd:w-2/12 w-4/12"
              />
              <div className="w-full">
                <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-4xl mb-3">
                  {"You're All Set!"} <br /> {"Let’s Find Your Perfect VA 🎯"}
                </h1>
                <p className="mobilelg:text-base text-sm text-text-center font-normal text-[#3B4752] text-[#3B4752] mx-auto tabletlg:w-7/12 w-full ">
                  {"You've successfully set up your employer profile. Our team will review your requirements, and you'll be matched with top  VAs shortly"}
                </p>
              </div>
              <div className="tabletlg:w-7/12 w-full mt-4">
                <img
                  src="/completed-img.png"
                  alt=""
                  className="rounded-lg w-full object-cover h-[300px]"
                />
              </div>
              <div className="flex justify-center items-center gap-y-5 w-full mt-6 space-x-3">
                <button
                  onClick={() => navigate("/")}
                  type="button"
                  className="h-12 text-ftvblack flex justify-center items-center  focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full py-2 mobilesm:text-sm text-xs mobilesm:px-5  bg-[#DBDBDB]  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer tabletlg:w-3/12 tabletmd:w-4/12 mobilemd:w-5/12 w-6/12">
                  Return Home
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  type="button"
                  className="tabletlg:w-3/12 tabletmd:w-4/12 mobilemd:w-5/12 w-6/12 h-12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-full mobilesm:text-sm text-xs mobilesm:px-5 py-2 text-center bg-ftvblack  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer plusjakartasans">
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Completed;
