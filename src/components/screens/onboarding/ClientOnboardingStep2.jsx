import { useNavigate } from "react-router-dom";
import BudgetDropdown from "../../UI/BudgetDropdown";
const ClientOnboardingStep2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-[500px] bg-ftvwine-25 shadow-3xl dark:bg-linear-65 from-ftvwine-100 via-ftvwine-50 to-ftvwine-25  dark:shadow-ftvwine-200 shadow-ftvwine-200  dark:bg-ftvwine-25 ">
        <div className="h-fit flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-ftvblack-400">
            <img
              className="w-full h-12 mr-2"
              src="/fasttrack-logo.png"
              alt="logo"
            />
          </a>
          <div className=" h-fit w-7/12 bg-ftvsky-50 rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-ftvsky-50 dark:border-ftvwine-200 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvblue-500">
                    1
                  </span>
                  <h6 className="text-ftvblue-500 font-semibold">
                    Personal Info
                  </h6>
                </div>
                {/* <hr className="border-ftvblue-500  w-1/12" /> */}
                <span className="fa fa-check-circle text-2xl text-ftvblue-500 "></span>
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvblue-500">
                    2
                  </span>
                  <h6 className="text-ftvblue-500"> Matching</h6>
                </div>
                <hr className="border-ftvblue-500 w-1/12" />
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvgrey-400">
                    3
                  </span>
                  <h6 className="text-ftvgrey-400"> Book Meeting</h6>
                </div>
              </div>

              <form
                className="space-y-3 md:space-y-5 w-full flex flex-col items-center justify-center"
                action="#">
                <div className="w-8/12">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    What tasks do you need help with?
                  </label>

                  <select
                    id="industry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                    <option value="ENT">Admin Support</option>
                    <option value="MID">Finance & Accounting</option>
                    <option value="EXP">Customer Service</option>
                    <option value="EXP">Data Entry & Research</option>
                    <option value="EXP">Other</option>
                  </select>
                </div>
                <div className="w-8/12">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    How experienced should your VA be?
                  </label>

                  <select
                    id="industry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                    <option value="ENT">Entry Level</option>
                    <option value="MID">Mid Level</option>
                    <option value="EXP">Expert Level</option>
                  </select>
                </div>

                <BudgetDropdown />
                <div className="w-8/12">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    What is your preferred work hours & time zones?
                  </label>

                  <select
                    id="industry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                    <option selected>Choose a suitable work timezone</option>
                    <option value="US">WAT</option>
                    <option value="CA">EST</option>
                    <option value="FR">UTC</option>
                  </select>
                </div>

                <div className="flex justify-center w-9/12 space-x-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/client-profile-setup/step-1");
                    }}
                    type="submit"
                    className="w-4/12 text-ftvwine-500 hover:text-white bg-transparent ring-1 ring-ftvwine-500  hover:bg-ftvwine-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent dark:ring-ftvwine-500  dark:hover:bg-ftvwine-500 dark:focus:ring-primary-800 cursor-pointer">
                    <span className=" fa fa-arrow-left-long me-3"></span>
                    Prev
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/book-meeting");
                    }}
                    type="submit"
                    className="w-6/12 text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer">
                    Next: Book Meeting{" "}
                    <span className=" fa fa-arrow-right-long ms-3"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientOnboardingStep2;
