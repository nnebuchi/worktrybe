import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
const Navbar = () => {

  const { user } = useContext(UserContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (!showMobileMenu) {
      setIsAnimatingOut(true);
      const timeoutId = setTimeout(() => {
        setIsAnimatingOut(false);
      }, 300); // adjust the delay to match the animation duration
      return () => clearTimeout(timeoutId);
    }
  }, [showMobileMenu]);

  useEffect(() => {
    console.log(user);
    
  }, [])
  return (
    <header>
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0  backdrop-blur navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mobilelg:px-15 px-8 py-4 relative">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/fasttrack-logo.svg"
              className="h-12  mobilelg:w-9/12 w-9/12"
              alt="Fasttrack VA Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-ftvblack-300">
              Fasttrack VA
            </span> */}
          </a>

          <div className="flex md:order-2 flex-row-reverse justify-start gap-x-7 items-center space-x-3 md:space-x-0 rtl:space-x-reverse tabletlg:w-6/12 mobilelg:w-7/12 ">
            {showMobileMenu || isAnimatingOut ? (
              <div
                className={`justify-between absolute inset-0 h-[100vh] dark:bg-linear-45 dark:bg-opacity-4 from-ftvgradient-via to-ftvgradient-to w-full md:flex md:w-auto md:order-1 z-30 flex-col items-start space-y-6 ${
                  showMobileMenu ? "animate-slide-in" : "animate-slide-out"
                }`}
                // id="navbar-sticky"
              >
                <div className="absolute bg-white w-full h-fit opacity-80 z-5 inset-0"></div>
                <div className="flex justify-between px-8 py-4 z-30">
                  <h3 className="text-[#909CA7] text-lg font-semibold uppercase ">
                    Menu
                  </h3>
                  <span
                    className="fa fa-close text-ftvblack text-lg"
                    onClick={() => setShowMobileMenu(false)}></span>
                </div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-transparent  uppercase space-y-6 z-30 ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-ftvblack rounded-sm md:bg-transparent md:text-ftvblue-700 md:p-0 md:dark:text-ftvprimary"
                      aria-current="page">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent navlink">
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent navlink">
                      Pricing
                    </a>
                  </li>
                 
                </ul>
                {
                  user ?

                  <Link
                    to={"/dashboard"}
                    className="dark:text-white text-white hover:bg-ftvsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 ms-7 text-center dark:bg-ftvprimary dark:focus:ring-ftvprimary cursor-pointer plusjakartasans uppercase z-30">
                    Dashboard
                  </Link>
                  :
                    <Link
                    to={"/register"}
                    className="dark:text-white text-white hover:bg-ftvsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 ms-7 text-center dark:bg-ftvprimary dark:focus:ring-ftvprimary cursor-pointer plusjakartasans uppercase z-30">
                    Get started
                  </Link>
                }
                

                <a
                  href="#"
                  className="flex items-center ms-7 rtl:space-x-reverse mt-50">
                  <img
                    src="/fasttrack-logo.svg"
                    className="h-12  w-2/12"
                    alt="Fasttrack VA Logo"
                  />
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-ftvblack-300">
              Fasttrack VA
            </span> */}
                </a>
              </div>
            ) : null}
            {
                  user ?

                  <Link
                    to={"/dashboard"}
                    className="dark:text-white text-white hover:bg-ftvsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 ms-7 text-center dark:bg-ftvprimary dark:focus:ring-ftvprimary cursor-pointer plusjakartasans uppercase z-30">
                    Dashboard
                  </Link>
                  :
                    <Link
                    to={"/register"}
                    className="dark:text-white text-white hover:bg-ftvsecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 ms-7 text-center dark:bg-ftvprimary dark:focus:ring-ftvprimary cursor-pointer plusjakartasans uppercase z-30">
                    Get started
                  </Link>
                }

            <ul className="md:flex uppercase justify-between space-x-6 hidden">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvblack rounded-sm md:bg-transparent md:text-ftvblue-700 md:p-0 md:dark:text-ftvprimary"
                  aria-current="page">
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent navlink">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-ftvprimary md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent navlink">
                  Pricing
                </a>
              </li>
            </ul>

            <button
              onClick={() => setShowMobileMenu(true)}
              // data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ftvgrey-500 rounded-lg md:hidden hover:bg-ftvgrey-100 focus:outline-none focus:ring-2 focus:ring-ftvgrey dark:text-[#909CA7] dark:hover:bg-ftvgrey-700 dark:focus:ring-ftvgrey-600"
              // aria-controls="navbar-sticky"
              // aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* <form className="flex items-center max-w-sm mx-auto me-3 bg-grey rounded">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <span className="fa fa-user-plus text-ftvblack-300"></span>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-grey text-ftvgrey-500  dark:text-ftvgrey-500 text-sm rounded-lg focus:ring-ftvblack-500  focus:border-ftvblack-300 block w-full ps-10 p-2.5  dark:bg-ftvgrey focus:dark:bg-ftvgrey-100 focus:ring-1  outline-none"
                  placeholder="Search virtual talents..."
                  required
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer inset-y-0 end-4">
                  <span className="fa fa-search text-ftvblack-300"></span>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
