import { useNavigate } from "react-router-dom";
import { InlineWidget } from "react-calendly";
const BookMeeting = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="py-5 min-h-full overflow-auto bg-ftvwine-25 shadow-3xl dark:bg-linear-65 from-ftvwine-100 via-ftvwine-50 to-ftvwine-25  dark:shadow-ftvwine-200 shadow-ftvwine-200  dark:bg-ftvwine-25 flex flex-col justify-center items-center">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-ftvblack-400">
          <img
            className="w-full h-12 mr-2"
            src="/fasttrack-logo.png"
            alt="logo"
          />
        </a>
        <div className="h-full w-7/12 space-y-10  flex-col flex items-center pb-4 bg-ftvsky-50 rounded-lg shadow dark:border md:mt-0   dark:bg-ftvsky-50 dark:border-ftvwine-200 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-center w-3/12">
                <span className="text-2xl font-semibold text-ftvblue-500">
                  1
                </span>
                <h6 className="text-ftvblue-500 font-semibold">
                  Personal Info
                </h6>
              </div>

              <span className="fa fa-check-circle text-2xl text-ftvblue-500 "></span>
              <div className="flex flex-col justify-center items-center w-3/12">
                <span className="text-2xl font-semibold text-ftvblue-500">
                  2
                </span>
                <h6 className="text-ftvblue-500"> Matching</h6>
              </div>
              <span className="fa fa-check-circle text-2xl text-ftvblue-500 "></span>

              <div className="flex flex-col justify-center items-center w-3/12">
                <span className="text-2xl font-semibold text-ftvblue-500">
                  3
                </span>
                <h6 className="text-ftvblue-500"> Book Meeting</h6>
              </div>
            </div>

            <p className="text-ftvblack-200 font-medium text-base text-center">
              Hang on you're almost schedule a brief meeting with our rep to get
              you fully started
            </p>
            <InlineWidget
              url="https://calendly.com/emmanueljoce/30min"
              styles={{
                height: "800px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            type="submit"
            className="w-5/12 text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer s">
            Back to Dashboard
          </button>
        </div>
      </section>
    </>
  );
};

export default BookMeeting;
