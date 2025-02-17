import { useState } from "react";

const ServiceDetailsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="dark:bg-linear-65 from-ftvsky-400 via-ftvsky-200 to-ftvsky-50 bg-white min-h-[400px] flex flex-col gap-5 justify-between items-center px-10 py-15 w-full">
      <div>
        <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-ftvblue-500  text-center">
          See how much Fasttrack VA can help you with
        </h1>
        <p className="mb-4 text-ftvblue-400 text-lg w-9/12 text-center mx-auto">
          Fasttrack Virtuals combines practical innovations with proven
          expertise⁠—so you’re guaranteed top-tier assistance, for top-tier
          results.
        </p>
      </div>
      <div className="w-full">
        <div className="md:flex md:flex-col gap-10 w-full dark:bg-linear-65 from-white via-ftvsky-25 to-ftvblue-25 p-10 rounded-lg ring-1 ring-ftvgrey-400">
          <ul className="flex justify-evenly  space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full space-x-4">
            {[
              `Administrative Support
`,
              `Social Media and Marketing
`,
              `Customer Service

`,
              `Financial Tasks
`,
            ].map((tab, index) => (
              <li key={index} className="w-4/12 ">
                <button
                  onClick={() => handleTabClick(index)}
                  className={`inline-flex items-center  rounded-lg w-full flex-col justify-center text-base bg-blue-700  dark:bg-white border-t-4 border-ftvgrey-500  dark:border-t-4 dark:border-ftvgrey-500 gap-4 ring-1 dark:ring-ftvgrey-400 ring-ftvgrey-400${
                    activeTab === index
                      ? " bg-blue-700 dark:bg-ftvwine-50 h-fit border-t-4 dark:border-t-ftvblue-500  dark:border-t-4 shadow-lg  dark:text-ftvblue-500  "
                      : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-ftvgrey-50 dark:hover:bg-gray-700 dark:hover:text-ftvblue-500"
                  }`}
                  aria-current={activeTab === index ? "page" : undefined}>
                  <span className=" dark:bg-ftvsky-200 bg-ftvblue-200 w-full px-4 py-3 rounded-lg">
                    {tab}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content w-full ">
            {activeTab === 0 && (
              <div className=" flex justify-between p-6  text-medium text-gray-500 dark:text-gray-400  rounded-lg w-full">
                <div className="w-6/12">
                  <h3 className="text-xl font-semibold text-gray-900 text-ftv-blue-400 dark:text-ftvblack-500 mb-7">
                    60% of Administrative tasks that takes up 80% of worktime
                    can be delegated.
                  </h3>
                  <ul className="w-full flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Email management
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Calendar scheduling
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Document organization
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Customer response management
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center text-xl dark:bg-ftvblack-500 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-5/12 ">
                    Get started
                  </button>
                </div>
                <div className="w-5/12 h-full">
                  <img
                    src="/work.svg"
                    className="ring-1 ring-ftvgrey-400 rounded-lg w-full h-full shadow-lg shadow-ftvwine-200"
                    alt="administrative tasks"
                  />
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className=" flex justify-between p-6  text-medium text-gray-500 dark:text-gray-400  rounded-lg w-full">
                <div className="w-6/12">
                  <h3 className="text-xl font-semibold text-gray-900 text-ftv-blue-400 dark:text-ftvblack-500 mb-7">
                    84% of businesses and brands need help with digital
                    marketing.
                  </h3>
                  <ul className="w-full flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Content creation
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Social media management
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Marketing campaign execution
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center text-xl dark:bg-ftvblack-500 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-5/12 ">
                    Get started
                  </button>
                </div>
                <div className="w-5/12 h-full">
                  <img
                    src="/work.svg"
                    className="ring-1 ring-ftvgrey-400 rounded-lg w-full h-full shadow-lg shadow-ftvwine-200"
                    alt="administrative tasks"
                  />
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className=" flex justify-between p-6  text-medium text-gray-500 dark:text-gray-400  rounded-lg w-full">
                <div className="w-6/12">
                  <h3 className="text-xl font-semibold text-gray-900 text-ftv-blue-400 dark:text-ftvblack-500 mb-7">
                    71% of businesses and personal brands require assistance
                    with online customer engagement
                  </h3>
                  <ul className="w-full flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Customer inquiry responses
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Follow-up communications
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Client relationship management
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center text-xl dark:bg-ftvblack-500 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-5/12 ">
                    Get started
                  </button>
                </div>
                <div className="w-5/12 h-full">
                  <img
                    src="/work.svg"
                    className="ring-1 ring-ftvgrey-400 rounded-lg w-full h-full shadow-lg shadow-ftvwine-200"
                    alt="administrative tasks"
                  />
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className=" flex justify-between p-6  text-medium text-gray-500 dark:text-gray-400  rounded-lg w-full">
                <div className="w-6/12">
                  <h3 className="text-xl font-semibold text-gray-900 text-ftv-blue-400 dark:text-ftvblack-500 mb-7">
                    55% handle their own bookkeeping, which can be
                    time-consuming.
                  </h3>
                  <ul className="w-full flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Basic bookkeeping
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Invoice processing
                    </li>
                    <li className="flex gap-3 items-center text-lg text-ftvblack-300">
                      <span className="fa fa-check text-ftvblue-600 text-2xl"></span>
                      Expense tracking
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center text-xl dark:bg-ftvblack-500 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-5/12 ">
                    Get started
                  </button>
                </div>
                <div className="w-5/12 h-full">
                  <img
                    src="/work.svg"
                    className="ring-1 ring-ftvgrey-400 rounded-lg w-full h-full shadow-lg shadow-ftvwine-200"
                    alt="administrative tasks"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsTab;
