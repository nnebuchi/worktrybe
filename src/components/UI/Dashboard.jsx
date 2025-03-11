import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";

const Dashboard = () => {
  const dashboardCardValues = [
    {
      cardValue: "170+",
      cardSubtitle: "Active VA's",
      iconBgColor: "red-100",
      iconColor: "red-500",
      icon: "fa-heart",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Active VA's",
      iconBgColor: "blue-100",
      iconColor: "blue-500",
      icon: "fa-briefcase",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Completed Tasks",
      iconBgColor: "green-100",
      iconColor: "green-500",
      icon: "fa-check-circle",
    },
    {
      cardValue: "170+",
      cardSubtitle: "Pending Tasks",
      iconBgColor: "orange-100",
      iconColor: "orange-500",
      icon: "fa-clock",
    },
  ];
  const dashboardNavigation = [
    {
      navTitle: "Dashboard",
      navIcon: "/dashboard-icons/dashboard-square-01.svg",
    },

    {
      navTitle: "My VA List",
      navIcon: "/dashboard-icons/customer-service-01.svg",
    },
    {
      navTitle: "Assessment",
      navIcon: "/dashboard-icons/task-daily-01.svg",
    },
    {
      navTitle: "Calendar",
      navIcon: "/dashboard-icons/calendar-03.svg",
      iconBgColor: "orange-100",
      iconColor: "orange-500",
      icon: "fa-clock",
    },
    {
      navTitle: "Settings",
      navIcon: "/dashboard-icons/settings-01.svg",
    },
  ];

  const selectedVAs = [
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "MBA",
      ratings: "80%",
      date: "15-05-2024",
    },
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "Bsc",
      ratings: "80%",
      date: "15-05-2024",
    },
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "Msc",
      ratings: "80%",
      date: "15-05-2024",
    },
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "MBA",
      ratings: "80%",
      date: "15-05-2024",
    },
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "Bsc",
      ratings: "80%",
      date: "15-05-2024",
    },
    {
      firstName: "Olivia ",
      lastName: "Rhyne",
      jobRole: "Product Manager",
      location: "Nigeria",
      experience: "expert",
      education: "Msc",
      ratings: "80%",
      date: "15-05-2024",
    },
  ];
  const upcomingMeetings = [
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
    {
      participantFirstName: "Olivia ",
      participantLastName: "Rhyne",
      startTime: "08:00",
      endTime: "09:00",
      purpose: "Interview",
      participantTitle: "Business Analyst",
    },
  ];
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 dark:group-hover:text-ftvwine-25 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-ftvwine-400 dark:hover:bg-ftvwine-300 dark:focus:ring-ftvwine-300">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <div className="antialiased bg-gray-50 dark:bg-ftvwine-25">
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
                        : "Hey, what's up? All set for the presentation?"
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
              <button className="p-2 ml-1 text-ftverror bg-red-100 bg-opacity-80 rounded-lg hover:text-ftvblack hover:bg-green-100  dark:hover:text-white dark:hover:bg-ftverror focus:ring-1 focus:ring-gray-300 dark:focus:ring-ftvwine-300">
                <span className="fa fa-arrow-right-from-bracket text-xl  "></span>
              </button>
            </div>
          </div>
        </nav>
        {/* Sidebar */}
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pt-0"
          aria-label="Sidenav">
          <div className="overflow-y-auto py-5  h-full bg-white  dark:bg-ftvwine-50 dark:border-gray-700">
            <img
              src="/fasttrack-logo.svg"
              alt="fasttrack-logo"
              className="ms-5 mb-10 w-7/12"
            />
            <ul className="space-y-1 plusjakartasans">
              {dashboardNavigation.map((navlink, index) => (
                <li className="hover:bg-[#DAD9FF] py-2 px-6" key={index}>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-ftvblack rounded-lg dark:text-ftvwine-400 ">
                    <img src={`${navlink.navIcon}`} alt="" />
                    <span className="ml-3  ">{navlink.navTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-ftvsecondary dark:bg-ftvwine-400 z-20  dark:border-gray-700">
            <a
              href="#"
              className="inline-flex justify-center p-2 text-white rounded cursor-pointer dark:text-ftvwine-25  dark:hover:text-white ">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
            </a>

            <button
              type="button"
              data-dropdown-toggle="language-dropdown"
              className="inline-flex justify-center p-2 text-white rounded cursor-pointer dark:hover:text-white dark:text-ftvwine-25 ">
              <svg
                aria-hidden="true"
                className="h-5 w-5 rounded-full mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900">
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlinkHref="#a" y="420" />
                          <use xlinkHref="#a" y="840" />
                          <use xlinkHref="#a" y="1260" />
                        </g>
                        <use xlinkHref="#a" y="1680" />
                      </g>
                      <use xlinkHref="#b" x="247" y="210" />
                    </g>
                    <use xlinkHref="#c" x="494" />
                  </g>
                  <use xlinkHref="#d" x="988" />
                  <use xlinkHref="#c" x="1976" />
                  <use xlinkHref="#e" x="2470" />
                </g>
              </svg>
            </button>
            {/* <!-- Dropdown --> */}
            <div
              className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-white"
              id="language-dropdown">
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-ftvwine-500 dark:hover:bg-ftvwine-100"
                    role="menuitem">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512">
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-ftvwine-500 dark:hover:text-white dark:hover:bg-ftvwine-100"
                    role="menuitem">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512">
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-ftvwine-500 dark:hover:text-white dark:hover:bg-ftvwine-100"
                    role="menuitem">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512">
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-ftvwine-500 dark:hover:bg-ftvwine-100"
                    role="menuitem">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512">
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      中文 (繁體)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="p-4 md:ml-64 h-auto pt-20 bg-[#EEF0F2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardCardValues.map((card, index) => {
              return (
                <div
                  className="hover:bg-ftvblue-25 dark:bg-white border-gray-300 rounded-lg h-32 md:h-32 bg-white flex items-center justify-start px-3 plusjarkatasans"
                  key={index}>
                  <div className="flex space-x-5 items-center ">
                    <div
                      className={`h-12 w-12 rounded-full bg-${card.iconBgColor} flex items-center justify-center`}>
                      <span
                        className={`fa ${card.icon} text-${card.iconColor}`}></span>
                    </div>
                    <div>
                      <h1 className="text-lg text-ftvblack font-bold">
                        {card.cardValue}
                      </h1>
                      <p className="text-sm text-[#030229]">
                        {card.cardSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Preselected VA */}
          <div className="max-w-6xl mx-auto plusjakartasans mb-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
              <div className="pb-4 flex justify-between items-center w-full">
                <h2 className="text-lg font-semibold">Preselected VAs</h2>
                <button
                  data-modal-target="static-modal"
                  data-modal-toggle="static-modal"
                  type="button"
                  className="w-2/12 text-white bg-ftvwine-500  hover:bg-ftvprimary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvsecondary  dark:hover:bg-ftvprimaryy dark:focus:ring-ftvgrey cursor-pointer space-x-2">
                  <span className="fa fa-checklist me-3"></span>
                  Start Assessment
                </button>
                {/* <button
                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button">
                  Toggle modal
                </button> */}
              </div>

              <div className="overflow-auto max-h-70 border-1 border-[#EEF0F2] rounded-lg  ">
                <table className="w-full border-collapse relative">
                  <thead className="bg-gray-100 ">
                    <tr className="text-left text-sm text-gray-600">
                      <th className="p-3">
                        <input
                          type="checkbox"
                          className="outline-none border-none ring-1 ring-[#EEF0F2] rounded"
                        />
                      </th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Job Role</th>
                      <th className="p-3">Location</th>
                      <th className="p-3">Experience</th>
                      <th className="p-3">Education</th>
                      <th className="p-3">Ratings</th>
                      <th className="p-3">Date Added</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody className="max-h-50 ">
                    {selectedVAs.map((va, index) => {
                      return (
                        <tr
                          className=" text-ftvblack text-sm even:bg-gray-50 odd:bg-white"
                          key={index}>
                          <td className="p-3">
                            <input
                              type="checkbox"
                              className="outline-none border-none ring-1 ring-[#EEF0F2] rounded mb-3"
                            />
                          </td>
                          <td className="p-3 flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <span className="text-ellipsis">
                              {va.firstName}
                              {va.lastName}
                            </span>
                          </td>
                          <td className="p-3 text-ellipsis">{va.jobRole}</td>
                          <td className="p-3">{va.location}</td>
                          <td className="p-3">{va.experience}</td>
                          <td className="p-3">{va.education}</td>
                          <td className="p-3 text-green-600 font-semibold">
                            ▲ {va.ratings}
                          </td>
                          <td className="p-3">{va.date}</td>
                          <td className="p-3">
                            <button className="px-4 py-2 text-blue-600 border hover:bg-blue-50 cursor-pointer rounded-lg">
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Assessments Modal */}

          {/* <!-- Modal toggle --> */}

          {/* <!-- Main modal --> */}
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-grey-200">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5  rounded-t ">
                  <h3 className="text-xl font-semibold text-ftvblack dark:text-ftvblack">
                    Upload Accessment
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-ftvblack rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal">
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div></div>
                <FroalaEditor
                  tag="textarea"
                  config={{
                    placeholder: "Enter any additional task description here",
                  }}
                  style={{ margin: "10px", borderRadius: "none" }}
                />

                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-4 md:p-5 rounded-b space-x-5 ">
                  <button
                    data-modal-target="static-modal"
                    type="button"
                    className="min-w-3/12 text-white bg-ftvtransparent  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvprimary  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer space-x-2">
                    Send Assessment
                  </button>
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    className="min-w-3/12 text-ftvsecondary bg-transparent  hover:bg-blue-50 focus:ring-1 focus:outline-none  ring-1 ring-ftvsecondary focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent  dark:hover:bg-blue-50 dark:focus:ring-ftvgrey cursor-pointer space-x-2">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between item-center space-x-5 plusjakartasans">
            <div className="rounded-lg bg-white min-h-48 md:min-h-72 w-7/12"></div>
            <div className="rounded-lg bg-white min-h-48 md:min-h-72 w-5/12 p-5">
              <div className="flex justify-between mb-4">
                <h1 className="text-lg text-gray-500 font-semibold">
                  Upcoming Meetings
                </h1>
                <button type="button">
                  <span className="fa fa-ellipsis text-gray-400"></span>
                </button>
              </div>
              <div className="max-h-72 overflow-auto">
                {upcomingMeetings.map((meeting, index) => {
                  return (
                    <div
                      className="border-l-blue-300 border-b-0 border-r-0 border-t-0 border-4 rounded-xl  bg-white space-y-1 p-3 mb-2"
                      key={index}>
                      <div className="flex justify-between items-center">
                        <div className="space-x-3 text-sm">
                          <span className="fa fa-circle text-sm text-ftvsecondary"></span>
                          <span className="font-medium">
                            {meeting.startTime} - {meeting.endTime}
                          </span>
                        </div>
                        <span className="h-8 flex items-center bg-[#24DDF0] px-3 text-xs rounded-full">
                          {meeting.purpose}
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <div className="w-6 h-6 rounded-full  bg-gray-300">
                          <img
                            src="/bag.svg"
                            alt=""
                            className="rounded-full w-full"
                          />
                        </div>
                        <div className="w-10/12">
                          <h3 className="font-normal text-ftvblack text-sm">
                            Your interview meeting with{" "}
                            <span className="font-semibold">
                              {" "}
                              {meeting.participantFirstName} {""}{" "}
                              {meeting.participantLastName}
                            </span>
                          </h3>
                          <p className="text-[#72777A] text-xs">
                            {meeting.participantTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
