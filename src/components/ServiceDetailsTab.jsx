import { useState } from "react";

const ServiceDetailsTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const helps = [
    {
      title: `Administrative Support`,
      desc: "60% of Administrative tasks that takes up 80% of worktime can be delegated.",
      items: [
        "Email management",
        "Calendar scheduling",
        "Document organization",
        "Customer response management",
      ],
    },
    {
      title: `Social Media and Marketing`,
      desc: "84% of businesses and brands need help with digital marketing.",
      items: [
        "Content creation",
        "Social media management",
        "Marketing campaign execution",
      ],
    },
    {
      title: `Customer Service`,
      desc: "71% of businesses and personal brands require assistance with online customer engagement.",
      items: [
        "Customer inquiry responses",
        "Follow-up communications",
        "Client relationship management",
      ],
    },

    {
      title: `Financial Tasks`,
      desc: "55% handle their own bookkeeping, which can be time-consuming.",
      items: ["Basic bookkeeping", "Invoice processing", "Expense tracking"],
    },
  ];

  return (
    <section className="dark:bg-ftvwine-500 bg-ftvwine-500 min-h-[400px] flex flex-col gap-5 justify-between items-center px-10 py-15 w-full">
      <div>
        <h1 className="mb-4 text-4xl tracking-tight font-bold text-white dark:text-white text-center">
          See how much Fasttrack VA can help you with
        </h1>
        <p className="mb-4 dark:text-white text-white  text-lg w-9/12 text-center mx-auto">
          Fasttrack Virtuals combines practical innovations with proven
          expertise⁠—so you’re guaranteed top-tier assistance, for top-tier
          results.
        </p>
      </div>
      <div className="w-full ">
        <div className="md:flex md:flex-col gap-10 w-full dark:bg-ftvwine-25 p-10 rounded-lg ring-1 ring-ftvgrey-400">
          <ul className="flex justify-evenly  space-y space-y-4 text-sm font-medium text-ftvgrey-500 dark:text-ftvgrey-400 md:me-4 mb-4 md:mb-0 w-full space-x-4">
            {helps.map((tab, index) => (
              <li key={index} className="w-4/12 ">
                <button
                  onClick={() => handleTabClick(index)}
                  className={`inline-flex items-center  rounded-lg w-full flex-col justify-center text-base bg-blue-700 dark:bg-white border-t-4 border-ftvgrey-500  dark:border-t-4 cursor-pointer dark:border-ftvgrey-400 gap-4 ring-1 dark:ring-ftvgrey-400 ring-ftvgrey-400  ${
                    activeTab === index
                      ? "text-ftvwine-400 bg-blue-700 dark:bg-ftvwine-50 h-fit  border-t-4 dark:border-ftvwine-400 gark:border-t-4 ring-1 ring-ftvwine-400 dark:ring-ftvwine-400"
                      : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-ftvgrey-50 dark:hover:bg-gray-700 dark:hover:text-ftvwine-400"
                  }`}
                  aria-current={activeTab === index ? "page" : undefined}>
                  <span className=" dark:bg-ftvblue-25 bg-ftvblue-25 w-full px-4 py-3 rounded-lg">
                    {tab.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content w-full ">
            <div className=" flex justify-between p-6  text-medium text-gray-500 dark:text-gray-400  rounded-lg w-full">
              <div className="w-6/12">
                <h3 className="text-xl font-semibold text-gray-900 text-ftv-blue-400 dark:text-light-blue mb-7">
                  {helps[activeTab].desc}
                </h3>
                <ul className="w-full flex flex-col gap-4 mb-7">
                  {helps[activeTab].items.map((item, ii) => (
                    <li
                      key={ii}
                      className="flex gap-3 items-center text-lg text-ftvblack-400 dark:text-ftvblack-400 ">
                      <span className="fa fa-check text-2xl text-ftvwine-500 dark:text-ftvwine-500 "></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="text-white dark:text-white hover:text-ftvwine-500 rounded-lg hover:ring-1 hover:border-ftvwine-500 bg-ftvwine-500 hover:bg-transparent cursor-pointer py-3 px-5 w-5/12 ">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsTab;
