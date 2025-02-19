const ResetPassword = () => {
  return (
    <section className="bg-ftvwine-25 shadow-3xl dark:bg-linear-65 from-ftvwine-100 via-ftvwine-50 to-ftvwine-25  dark:shadow-ftvwine-200 shadow-ftvwine-200  dark:bg-ftvwine-255">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-ftvwine-200 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-ftvblack-400 md:text-2xl dark:text-ftvblack-400">
              Reset Password
            </h1>
            <p className=" mb-4 text-sm text-text-center font-medium text-gray-900 dark:text-ftvblack-400">
              Enter a new password for your account
            </p>

            <form className="space-y-3 md:space-y-5" action="#">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                  New password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200 dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200 dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
