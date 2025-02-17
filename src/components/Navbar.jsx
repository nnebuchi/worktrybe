const Navbar = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-ftvwine-25 fixed w-full z-20 top-0 start-0 border-b border-ftvgrey-200 dark:border-ftvgrey-600 backdrop-blur">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-ftvwine-25">
              Flowbite
            </span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <form class="flex items-center max-w-sm mx-auto me-3">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <span className="fa fa-user-plus text-ftvwine-50"></span>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="border border-ftvgrey-300 text-ftvwine-25 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-ftvwine-100 focus:dark:bg-ftvwine-400  dark:border-ftvwine-200 dark:placeholder-ftvwine-50  dark:focus:ring-none dark:focus:border-none outline-none"
                  placeholder="Search virtual talents..."
                  required
                />
              </div>
              <button
                type="submit"
                class="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-none focus:outline-none focus:ring-blue-300 dark:bg-ftvwine-500 dark:hover:bg-ftvwine-400 dark:focus:ring-ftvblue-500 ">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
            <button
              type="button"
              className="text-ftvwine-25 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 text-center dark:bg-ftvwine-500 dark:hover:bg-transparent dark:focus:ring-ftvwine-600 hover:ring-1 hover:ring-ftvwine-500 hover:text-ftvwine-500 cursor-pointer ">
              Get started
            </button>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-ftvgrey-100 rounded-lg bg-ftvgrey-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-ftvwine-25 dark:border-ftvgrey-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvwine-25 bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-ftvwine-500"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvgrey-900 rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvwine-200 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvgrey-900 rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvwine-200 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-ftvgrey-900 rounded-sm hover:bg-ftvgrey-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-ftvwine-500 dark:text-ftvwine-200 dark:hover:bg-ftvgrey-700 dark:hover:text-ftvwine-25 md:dark:hover:bg-transparent dark:border-ftvgrey-700">
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
