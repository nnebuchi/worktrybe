const Login = () => {
  return (
    <>
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
                Login
              </h1>

              <div className="gap-4 space-y-4 sm:flex sm:space-y-0 justify-between w-full">
                <a
                  href="#"
                  className="inline-flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-ftvwine-500 ring-1 dark:ring-ftvwine-500 ring-ftvblack-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-ftvwine-25 dark:hover:bg-ftvwine-500 dark:focus:ring-gray-800 sm:w-auto space-x-2 hover:text-white ">
                  <svg
                    className="w-6 h-6 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="text-left">
                    <div className="mb-1 text-xs">Login with Google</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-ftvwine-500 ring-1 dark:ring-ftvwine-500 ring-ftvblack-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-ftvwine-25 dark:hover:bg-ftvwine-500 dark:focus:ring-gray-800 sm:w-auto hover:text-white ">
                  <svg
                    className="mr-3 h-7 w-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Log in with Apple</div>
                  </div>
                </a>
              </div>
              <form className="space-y-3 md:space-y-5" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Password
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

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded dark:border-ftvgrey-200  focus:outline-none dark:outline-none"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm flex justify-between w-full">
                    <label
                      htmlFor="terms"
                      className="font-light text-ftvblack-400 dark:text-ftvblack-400">
                      Remember me{" "}
                    </label>
                    <a
                      href=""
                      className="font-medium text-primary-600 hover:underline dark:text-ftvwine-500">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer">
                  Sign In
                </button>
                <p className="text-sm font-light text-ftvblack-400 dark:text-ftvblack-400">
                  Don’t have an account yet?
                  <a
                    href="/register"
                    className="font-medium text-ftvwine-500 hover:underline dark:text-ftvwine-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
