import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="dark:bg-white bg-white min-h-[400px] flex flex-col gap-5 justify-between items-center px-10 py-15">
      <div>
        <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-ftvblue-500 capitalize text-center">
          Start Delegating Today
        </h1>
        <p className="mb-4 text-ftvblue-400 text-lg w-9/12 text-center mx-auto">
          Fasttrack Virtuals combines practical innovations with proven
          expertise⁠—so you’re guaranteed top-tier assistance, for top-tier
          results.
        </p>
      </div>
      <div>
        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-5/12">
            {[
              `Email and Customer Service Management
`,
              `Social Media and Marketing
`,
              `Administrative Tasks
`,
              `Financial Management`,
            ].map((tab, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTabClick(index)}
                  className={`inline-flex items-center  rounded-lg w-full flex-col justify-center items-start text-base bg-blue-700 dark:bg-white border-t-4 border-ftvgrey-500  dark:border-t-4 dark:border-ftvblue-500 gap-4 ring-1 dark:ring-ftvgrey-400 ring-ftvgrey-400  ${
                    activeTab === index
                      ? "text-ftvblue-400 bg-blue-700 dark:bg-ftvblue-50 h-fit pb-4 border-t-4 border-ftvgreen-500  dark:border-t-4 dark:border-ftvgreen-500 shadow-lg "
                      : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-ftvgrey-50 dark:hover:bg-gray-700 dark:hover:text-ftvblue-400"
                  }`}
                  aria-current={activeTab === index ? "page" : undefined}>
                  <span className="flex items-center dark:bg-ftvgreen-25 bg-ftvgreen-25 w-full px-4 py-3 rounded-lg">
                    {tab}
                  </span>
                  {activeTab === index && (
                    <p className="text-ftvblue-400 text-sm text-start px-4">
                      Lorem ipsum dolor sit amet.{tab}
                    </p>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content w-full">
            {activeTab === 0 && (
              <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Profile Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content the Profile tab's associated
                  content, clicking another tab will toggle the visibility of
                  this one for the next.
                </p>
                <p>
                  The tab JavaScript swaps classes to control the content
                  visibility and styling.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Dashboard Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content the Profile tab's associated
                  content, clicking another tab will toggle the visibility of
                  this one for the next.
                </p>
                <p>
                  The tab JavaScript swaps classes to control the content
                  visibility and styling.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Settings Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content the Profile tab's associated
                  content, clicking another tab will toggle the visibility of
                  this one for the next.
                </p>
                <p>
                  The tab JavaScript swaps classes to control the content
                  visibility and styling.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Contact Tab
                </h3>
                <p className="mb-2">
                  This is some placeholder content the Profile tab's associated
                  content, clicking another tab will toggle the visibility of
                  this one for the next.
                </p>
                <p>
                  The tab JavaScript swaps classes to control the content
                  visibility and styling.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg text-sm py-3 px-5 text-center text-xl dark:bg-ftvblue-500 dark:hover:bg-ftvgreen-600 dark:focus:ring-ftvgrey-400 cursor-pointer w-2/12 ">
        Get started
      </button>
    </section>
  );
};

export default Tabs;
