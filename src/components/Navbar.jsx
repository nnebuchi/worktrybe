import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-ftvgrey-200 dark:border-ftvgrey-600 backdrop-blur navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Fasttrack VA Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-ftvblack-300">
              Fasttrack VA
            </span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <form className="flex items-center max-w-sm mx-auto me-3 bg-grey rounded">
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
                  className="bg-grey text-ftvgrey-500  dark:text-ftvgrey-500 text-sm rounded-lg focus:ring-ftvblack-500  focus:border-ftvblack-300 block w-full ps-10 p-2.5  dark:bg-ftvgrey-200 focus:dark:bg-ftvgrey-100 focus:ring-1  outline-none"
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
            </form>
            <Link
              to={"register"}
              className="dark:text-white text-white hover:bg-ftvblue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 text-center dark:bg-ftvblack-500 dark:focus:ring-ftvblack-500 cursor-pointer ">
              Get started
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ftvgrey-500 rounded-lg md:hidden hover:bg-ftvgrey-100 focus:outline-none focus:ring-2 focus:ring-ftvgrey-200 dark:text-ftvgrey-400 dark:hover:bg-ftvgrey-700 dark:focus:ring-ftvgrey-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
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
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-ftvgrey-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-ftvgrey-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvwine-500 rounded-sm md:bg-transparent md:text-ftvblue-700 md:p-0 md:dark:text-ftvwine-500"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700 navlink">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700 navlink">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvblack-300 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700 navlink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
