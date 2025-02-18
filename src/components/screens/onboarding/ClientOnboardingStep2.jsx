const ClientOnboardingStep1 = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-ftvwine-25 shadow-3xl dark:bg-linear-65 from-ftvwine-100 via-ftvwine-50 to-ftvwine-25  dark:shadow-ftvwine-200 shadow-ftvwine-200  dark:bg-ftvwine-25 ">
        <div className="h-fit flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-ftvblack-400">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className=" h-fit w-7/12 bg-ftvsky-50 rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-ftvsky-50 dark:border-ftvwine-200 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvwine-500">
                    1
                  </span>
                  <h6 className="text-ftvwine-500 font-semibold">
                    Personal Info
                  </h6>
                </div>
                <hr className="border-ftvwine-500  w-1/12" />
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvwine-500">
                    2
                  </span>
                  <h6 className="text-ftvwine-500"> Matching</h6>
                </div>
                <hr className="border-ftvgrey-200 w-1/12" />
                <div className="flex flex-col justify-center items-center w-3/12">
                  <span className="text-2xl font-semibold text-ftvgrey-400">
                    3
                  </span>
                  <h6 className="text-ftvgrey-400"> Suggestions</h6>
                </div>
              </div>

              <form
                className="space-y-3 md:space-y-5 w-full flex flex-col items-center justify-center"
                action="#">
                <div className="w-8/12">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    What is the name of your current company?
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    placeholder="Google"
                    required=""
                  />
                </div>
                <div className="w-8/12">
                  <label
                    htmlFor="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    What industry best describe your company?
                  </label>

                  <select
                    id="industry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200 ">
                    <option selected>Choose applicable industry</option>
                    <option value="US">IT and Computer</option>
                    <option value="CA">Banking and Finance</option>
                    <option value="FR">HR and Recruiting</option>
                    <option value="DE">Maritime and Shipping</option>
                  </select>
                </div>

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
                    <option value="CA">WAT</option>
                    <option value="FR">HR and Recruiting</option>
                    <option value="DE">Maritime and Shipping</option>
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

                <div className="flex justify-center w-full space-x-4">
                  <button
                    type="submit"
                    className="w-4/12 text-ftvwine-500 hover:text-white bg-transparent ring-1 ring-ftvwine-500  hover:bg-ftvwine-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent dark:ring-ftvwine-500  dark:hover:bg-ftvwine-500 dark:focus:ring-primary-800 cursor-pointer">
                    <span className=" fa fa-arrow-left-long me-3"></span>
                    Prev: Personal Info{" "}
                  </button>
                  <button
                    type="submit"
                    className="w-4/12 text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer">
                    Next: Recommendations{" "}
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

export default ClientOnboardingStep1;
