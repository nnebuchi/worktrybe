import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const DashboardNavbar = () => {
    
      const { signOut } = useContext(UserContext);
    return (
        <nav className="w-full bg-[#EEF0F2]   px-4 py-2.5  fixed left-0 right-0 top-0 z-10">
          <div className="flex flex-wrap justify-between items-center w-full">
            <div className="flex justify-start items-center w-4/12 ">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-ftvblack hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-ftvwine-400 dark:hover:bg-ftvwine-200 dark:hover:text-white">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <a href="#" className="flex items-center justify-between mr-4">
                <img
                  src="/fasttrack-logo.svg"
                  className="mr-3 h-12 w-8/12"
                  alt="fasttrack Logo"
                />
              </a>
            </div>

            <div className="flex items-center justify-end lg:order-2 w-7/12 space-x-5 ">
              {/* <!-- Notifications --> */}
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-ftvsecondary bg-ftvpurple-100 bg-opacity-80 rounded-lg hover:text-ftvblack hover:bg-green-100  dark:hover:text-white dark:hover:bg-ftvprimary focus:ring-1 focus:ring-gray-300 dark:focus:ring-ftvwine-300">
                <span className="sr-only">View notifications</span>
                {/* <!-- Bell icon --> */}
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-ftvwine-400 dark:bg-white-25 rounded-xl"
                id="notification-dropdown">
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-ftvwine-100 dark:text-ftvwine-500">
                  Notifications
                </div>
                <div>
                  <a
                    href="#"
                    className="flex py-3 px-4  hoverftvblack-100 dark:hover:bg-ftvwine-25 dark:border-ftvgrey-500">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Bonnie Green avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-ftvwine-400">
                        New message from
                        <span className="font-semibold text-ftvblack dark:text-ftvwine-500">
                          Bonnie Green
                        </span>
                        : {`"Hey, what's up? All set for the presentation?"`}
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-ftvblack-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4  hoverftvblack-100 dark:hover:bg-ftvwine-25 dark:border-ftvgrey-500">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-ftvblack rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-ftvwine-400">
                        <span className="font-semibold text-ftvblack dark:text-ftvwine-500">
                          Jese leos
                        </span>
                        and
                        <span className="font-medium text-ftvblack dark:text-ftvwine-500">
                          5 others
                        </span>
                        started following you.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-ftvblack-500">
                        10 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4  hoverftvblack-100 dark:hover:bg-ftvwine-25 dark:border-ftvgrey-500">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="Joseph McFall avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-ftvwine-400">
                        <span className="font-semibold text-ftvblack dark:text-ftvwine-500">
                          Joseph Mcfall
                        </span>
                        and
                        <span className="font-medium text-ftvblack dark:text-ftvwine-500">
                          141 others
                        </span>
                        love your story. See it and view more stories.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-ftvblack-500">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4  hoverftvblack-100 dark:hover:bg-ftvwine-25 dark:border-ftvgrey-500">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="Roberta Casas image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-ftvwine-400">
                        <span className="font-semibold text-ftvblack dark:text-ftvwine-500">
                          Leslie Livingston
                        </span>
                        mentioned you in a comment:
                        <span className="font-medium text-primary-600 dark:text-primary-500">
                          @bonnie.green
                        </span>
                        what do you say?
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-ftvblack-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-ftvwine-25">
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                        alt="Robert image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-ftvwine-400">
                        <span className="font-semibold text-ftvblack dark:text-ftvwine-500">
                          Robert Brown
                        </span>
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-ftvblack-500">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 text-md font-medium text-center text-ftvblack bg-gray-50 hover:bg-ftvwine-50 dark:bg-ftvwine-100 dark:text-ftvwine-500 dark:hover:underline">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-4 h-4 text-gray-500 dark:text-ftvwine-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"></path>
                    </svg>
                    View all
                  </div>
                </a>
              </div>

              <button
                type="button"
                className="w-3/12 text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvprimary  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer space-x-2">
                <span className="fa fa-calendar-plus me-3"></span>
                Book a Meeting
              </button>

              <img
                className="w-10 h-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="user photo"
              />
              <button 
                className="p-2 ml-1 text-ftverror bg-red-100 bg-opacity-80 rounded-lg hover:text-ftvblack hover:bg-green-100  dark:hover:text-white dark:hover:bg-ftverror focus:ring-1 focus:ring-gray-300 dark:focus:ring-ftvwine-300"
                onClick={signOut}
              >
                <span className="fa fa-arrow-right-from-bracket text-xl  "></span>
              </button>
            </div>
          </div>
        </nav>
    );
};

export default DashboardNavbar;