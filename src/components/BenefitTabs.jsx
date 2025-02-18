import { useState } from "react";

const BenefitTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const services = [
    {
      title: "Email and Customer Service Management",
      desc: "We handle customer inquiries, manage inbox organization, and ensure timely responses to improve customer satisfaction.",
    },
    {
      title: "Social Media and Marketing",
      desc: "From content creation to audience engagement, we craft marketing strategies that enhance brand visibility and growth.",
    },
    {
      title: "Administrative Tasks",
      desc: "We efficiently manage scheduling, data entry, document organization, and other essential administrative duties to streamline operations.",
    },
    {
      title: "Financial Management",
      desc: "Our services include bookkeeping, invoicing, expense tracking, and financial reporting to keep your finances organized and optimized.",
    },
  ];

  return (
    <section className="benefits-section min-h-[400px] flex flex-col gap-5 justify-between items-center px-10 py-15">
      <div>
        <h1 className="mb-4 text-4xl tracking-tight font-bold text-ftvblack-500 dark:text-ftvblack-500 capitalize text-center">
          Start Delegating Today
        </h1>
        <p className="mb-4 dark:text-ftvblack-400  text-ftvblack-400 text-lg w-9/12 text-center mx-auto">
          Fasttrack Virtuals combines practical innovations with proven
          expertise⁠—so you’re guaranteed top-tier assistance, for top-tier
          results.
        </p>
      </div>
      <div>
        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-5/12">
            {services.map((tab, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTabClick(index)}
                  className={`inline-flex items-center  rounded-lg w-full flex-col justify-center text-base border-t-4 border-ftvgrey-400  dark:border-t-4 dark:border-ftvgrey-400 gap-4 ring-1 dark:ring-ftvgrey-400 ring-ftvgrey-400  ${
                    activeTab === index
                      ? "text-ftvblack-500 bg-white dark:bg-white h-fit border-ftvblack-500  border-t-4 dark:border-ftvblack-500 pb-4"
                      : "  dark:hover:text-ftvblack-400 hover:dark:ring-ftvblack-400 hover:dark:border-ftvblack-500"
                  }`}
                  aria-current={activeTab === index ? "page" : undefined}>
                  <span className="flex items-center dark:bg-ftvblue-25 bg-ftvsky-25 w-full px-4 py-3 rounded-lg">
                    {tab.title}
                  </span>
                  {activeTab === index && (
                    <p className="text-ftvblack-400 text-sm text-center px-4">
                      {tab.title}
                    </p>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content w-full">
            <div className="p-6 bg-ftvblack-400 text-medium text-gray-500 dark:text-gray-400 bg-darkred rounded-lg w-full">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {services[activeTab].title}
              </h3>
              <div className="mb-2">{services[activeTab].desc}</div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-ftvblack-500 hover:bg-ftvblack-300 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center text-xl dark:bg-ftvblack-500 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-2/12 ">
        Get started
      </button>
    </section>
  );
};

export default BenefitTabs;
