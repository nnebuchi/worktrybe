import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <section className="bg-ftvwine-25 dark:bg-linear-45 dark:bg-opacity-4 from-ftvgradient-via   to-ftvgradient-to pt-40 pb-10 min-h-[600px] flex items-center flex-col  justify-center relative mobilelg:px-15 w-full ">
        <div className="absolute bg-white w-full min-h-[600px] opacity-70 z-5 inset-0"></div>
          <div className="flex lg:justify-between justify-content-center items-center z-10 tabletmd:flex-nowrap flex-wrap mobilesm:px-8 px-4">
            <div className="tabletmd:w-6/12 mobilelg:w-10/12 w-full mx-auto tabletmd:text-start text-center flex flex-col tabletmd:items-start items-center xl:justify-between lg:justify-evenly">
              <h1 className="mb-4 text-3xl mobilelg:text-4xl sm:text-[40px] font-extrabold tracking-wide leading-none dark:text-ftvblack text-ftvblack lg:text-5xl tabletmd:text-4xl xl:text-[45px] w-full">
                Free yourself from Administrative tasks
              </h1>
              <p className="mb-8 text-base mobilelg:text-lg font-normal text-ftvblack lg:text-xl   dark:text-ftvblack">
                ... and boost your business growth with <br /> Fast Track, a guaranteed
                path to success.
              </p>

              <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-normal text-center text-white rounded-lg border border-ftvwine-300 hover:bg-ftvwine-100 focus:ring-2 focus:ring-ftvwine-100 dark:text-white hover:text-white hover:dark:bg-ftvsecondary dark:bg-ftvprimary uppercase">
                Book a consultation
              </a>
            </div>
            <div className="tabletmd:w-6/12 w-full ">
            <div className="relative inline-block rounded-xl">
              <div className="w-full overflow-hidden rounded-xl">
                  <img
                    src="/hero-img.jpg" // Update this path
                    alt="Team working"
                    className="w-full h-auto rounded object-cover transform scale-150"
                    // style={{objectFit:"200%"}}
                  />

              </div>
              
              
              <div className="absolute left-0 flex flex-col gap-4 bottom-4" style={{marginLeft:"-30px"}}>
                <div className="flex items-center gap-2 bg-ftvprimary text-white font-medium px-4 py-3 rounded-lg shadow-lg hero-service">
                  <span className="text-lg"><img src="/icons/customer-service.svg" alt="" /></span>
                  <span>Customer Support</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-900 text-white font-medium px-4 py-3 rounded-lg shadow-lg hero-service ms-4">
                  <span className="text-lg"><img src="/icons/task.svg" alt="" /></span>
                  <span>Project Management</span>
                </div>

                <div className="flex items-center gap-2 bg-ftvsecondary text-white font-medium px-4 py-3 rounded-lg shadow-lg hero-service">
                  <span className="text-lg"><img src="/icons/money-bag.svg" alt="" /></span>
                  <span>Finance Management</span>
                </div>
              </div>
            </div>

              {/* <img
                src="/hero-img.png"
                alt=""
                className="w-full sm:min-h-[450px] h-fit rounded object-cover"
              /> */}
            </div>
          </div>
        {/* <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 py-5 z-10">
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between partners">
            <a href="#" className="mr-5 mb-5 lg:mb-0  dark:hover:text-gray-400">
              <img src="partners/indybiz-pass.png" alt="indybiz-pass-logo" />
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <img src="partners/innopower.png" alt="innopower-logo"></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <img src="partners/javat.png" alt="innopower-logo" />
            </a>
          </div>
        </div> */}
      </section>

      <section className="bg-white dark:bg-white flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8">
        <div className="flex justify-between items-center mobilesm:p-8 p-4 gap-10 tabletmd:flex-nowrap flex-wrap">
          <div className=" shadow-lg rounded-lg shadow-ftvgrey-500 hover:shadow-none transition all ease-in-out 300 tabletmd:w-6/12 w-full">
            <img
              className="w-full rounded-lg object-cover  "
              src="/stressed.png"
              alt="office content 1"
            />
          </div>
          <div className="tabletmd:w-6/12 w-full">
            <h2 className="mb-4 lg:text-4xl mobilelg:text-3xl mobilemd:text-2xl text-xl font-normal text-ftvblack dark:text-ftvblack">
              The National Small Business Association (NSBA) survey found
            </h2>

            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvgrey mobilelg:text-lg text-base plusjakartasans">
                82% of small business owners (including sole proprietors) worked
                over 40 hours per week.
              </li>

              <li className="mb-4 text-ftvgrey mobilelg:text-lg text-base plusjakartasans">
                39% reported spending 3-10 hours per week on administrative
                tasks alone
              </li>
            </ul>
            <button
              onClick={() => {
                user?.token ? navigate("/dashboard") : navigate("/register");
              }}
              type="button"
              className="text-white bg-ftvprimary hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg py-3 px-5 text-center dark:bg-ftvsecondary dark:hover:bg-ftvprimary dark:focus:ring-ftvgrey cursor-pointer  sm:w-5/12 tabletmd:w-7/12 mobilelg:w-6/12 w-8/12 mt-5 text-lg">
              JOIN FAST TRACK
            </button>
          </div>
        </div>
      </section>
      <section className="bg-ftvpurple-100 dark:bg-ftvpurple-100 flex flex-col justify-center items-center  min-h-[400px] mobilelg:py-15 mobilelg:px-8 ">
        <div className="  min-h-100 w-full mx-auto flex justify-evenly items-center mobilesm:p-8 p-4 tabletmd:flex-nowrap flex-wrap gap-y-10">
          <div className="tabletmd:w-6/12 flex-col flex lg:justify-between justify-evenly items-start mobilelg:min-h-[550px] mobilelg:gap-0 gap-5">
            <span className=" tabletmd:w-5/12 mobilelg:w-4/12 w-7/12 bg-ftvprimary uppercase text-white text-center py-3 px-5 rounded-full">
              key benefits
            </span>
            <h1 className="text-ftvblue mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
              Reclaim Your Time for What Matters
            </h1>
            <img
              src="/benefit.png"
              alt=""
              className="mobilelg:w-10/12 w-full h-fit rounded-lg"
            />
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="text-white bg-ftvblack hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg py-3 px-5 text-center dark:bg-ftvblack dark:hover:bg-transparent dark:hover:ring-1 dark:hover:ring-ftvblack dark:hover:text-ftvblack dark:focus:ring-ftvgrey cursor-pointer tabletmd:w-7/12 mobilelg:w-4/12 w-7/12 mt-5 text-lg uppercase">
              Read more
            </button>
          </div>
          <div className="tabletmd:w-6/12 w-full border-red-500 space-y-7">
            <div className="flex space-x-3">
              <span className="bg-ftvsecondary text-white text-center flex justify-center items-center w-11 font-bold text-lg h-9 rounded-full">
                1
              </span>
              <div className="space-y-3">
                <h3 className="text-ftvsecondary font-medium mobilelg:text-xl text-lg">
                  Financial Management
                </h3>
                <p className="text-[#030303] mobilelg:text-base text-sm plusjakartasans">
                  Stay on top of your budget with real-time tracking and expert
                  insights. Let’s optimize your expenses effortlessly.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <span className="bg-ftvsecondary text-white text-center flex justify-center items-center w-11 font-bold text-lg h-9 rounded-full">
                2
              </span>
              <div className="space-y-3">
                <h3 className="text-ftvsecondary font-medium mobilelg:text-xl text-lg">
                  Social Media and Marketing
                </h3>
                <p className="text-[#030303] mobilelg:text-base text-sm plusjakartasans">
                  Boost engagement and grow your brand with data-driven
                  strategies. We handle the content, you enjoy the results.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <span className="bg-ftvsecondary text-white text-center flex justify-center items-center w-11 font-bold text-lg h-9 rounded-full">
                3
              </span>
              <div className="space-y-3">
                <h3 className="text-ftvsecondary font-medium mobilelg:text-xl text-lg">
                  Administrative Tasks
                </h3>
                <p className="text-[#030303] mobilelg:text-base text-sm plusjakartasans">
                  Free up your time with seamless scheduling, data entry, and
                  task coordination. Efficiency starts here.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <span className="bg-ftvsecondary text-white text-center flex justify-center items-center w-11 font-bold text-lg h-9 rounded-full">
                4
              </span>
              <div className="space-y-3">
                <h3 className="text-ftvsecondary font-medium mobilelg:text-xl text-lg">
                  Email and Customer Service Management
                </h3>
                <p className="text-[#030303] mobilelg:text-base text-sm plusjakartasans">
                  Keep your inbox organized and customers happy. Prompt
                  responses, professional support, zero stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobilelg:min-h-[300px] mobilelg:py-15 mobilelg:px-8 bg-ftvprimary-400 services">
        <div className="xl:w-6/12 tabletmd:w-8/12 md:w-10/12 w-full flex-col flex justify-between items-start space-y-4 mobilesm:p-8 p-4">
          <span className="sm:w-4/12 mobilelg:w-5/12 w-7/12  bg-white uppercase text-ftvblue font-semibold text-center py-3 px-5 rounded-full">
            Our Services
          </span>
          <h1 className="text-white mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
            We Provide a Wide Range Of Services That Help Businesses
          </h1>
        </div>
      </section>
      <section className=" mobilelg:min-h-[300px] mobilelg:py-15 py-15 xl:px-10 lg:px-8 md:px-6 px-4  dark:bg-ftvoffwhite bg-ftvoffwhite flex justify-center items-center">
        <div className="flex flex-wrap justify-center xl:gap-10 gap-5 mobilelg:p-8 p-0 w-full">
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3 ">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Marketing & Social Media
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Content creation
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Social media management
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Marketing campaign execution
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                84% need help with digital marketing
              </p>
            </div>
          </div>
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Customer Service
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Customer inquiry responses
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Follow-up communications
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Client relationship management
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                71% require assistance with online customer engagement
              </p>
            </div>
          </div>
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Administrative Support
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Email management
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Calendar scheduling
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Document organization
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Customer response management
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                60% of owners spend too much time on administrative tasks
              </p>
            </div>
          </div>
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Financial Tasks
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Basic bookkeeping
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Invoice processing
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Expense tracking
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                55% handle their own bookkeeping
              </p>
            </div>
          </div>
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Video Editing
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Basic bookkeeping Invoice processing Expense tracking
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Invoice processing
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Expense tracking
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                55% handle their own bookkeeping
              </p>
            </div>
          </div>
          <div className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3">
            <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
              Software Development
            </h3>
            <ul className="list-disc ps-10 ">
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Basic bookkeeping Invoice processing Expense tracking
              </li>

              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Invoice processing
              </li>
              <li className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans">
                Expense tracking
              </li>
            </ul>
            <div className="flex justify-start items-center space-x-2">
              <img
                src="/quote-up.svg"
                alt="quotation"
                className="mobilelg:w-8 mobilelg:h-8 w-6 h-6"
              />{" "}
              <p className="text-ftvblue mobilelg:text-base text-sm plusjakartasans">
                55% handle their own bookkeeping
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" mobilelg:min-h-[200px] mobilelg:py-15 mobilelg:px-8 dark:bg-white bg-white flex justify-center items-center">
        <div className="flex flex-col  justify-center items-center space-y-4 mobilesm:p-8 p-4 ">
          <h1 className="text-ftvblack font-medium mobilelg:text-3xl text-2xl">
            Contact us
          </h1>
          <p className="text-ftvblack plusjakartasans mobilelg:text-lg text-base text-center tabletmd:w-7/12 w-full">
            Ready to accelerate your business growth? Schedule a free
            consultation to learn how Fatstrack Virtual can save you up to 20
            hours per week
          </p>
        </div>
      </section>
      <section className=" mobilelg:min-h-[300px] py-15 mobilesm:px-8 px-4 dark:bg-white bg-white flex justify-center items-center cta">
        <div className="flex  w-full justify-center items-center ">
          <button
            onClick={() => {
              user?.token ? navigate("/dashboard") : navigate("/register");
            }}
            type="button"
            className="text-white bg-ftvblack hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium  py-3 px-5 text-center dark:bg-ftvblack dark:hover:bg-transparent dark:hover:ring-1 dark:hover:ring-ftvblack dark:hover:text-ftvblack dark:focus:ring-ftvgrey cursor-pointer tabletmd:w-3/12 mobilelg:w-5/12 mobilemd:w-8/12 w-10/12 mt-5 text-lg capitalize rounded-full">
            Reach out today
          </button>
        </div>
      </section>
      <footer className="bg-ftvsecondary antialiased dark:bg-ftvsecondary">
        <div className="mx-auto  mobilesm:p-8 p-4">
          <div className="flex justify-between items-center py-8 mobilelg:flex-nowrap flex-wrap gap-y-10">
            <div className="tabletmd:w-7/12 mobilelg:w-5/12 w-full ">
              <img
                src="/fasttrack-logo-footer.svg"
                className="tabletmd:w-3/12 w-5/12 "
                alt=""
              />
            </div>
            <div className="tabletmd:w-5/12 mobilelg:w-7/12 w-full flex justify-content-between items-center tabletmd:gap-0 gap-10 mobilelg:flex-nowrap flex-wrap">
              <div className="mobilelg:w-6/12 w-full space-y-3 text-white ">
                <h1 className="">Quicklinks</h1>
                <div className="space-x-4 plusjakartasans">
                  <span className="">
                    <a href="" className="text-sm">
                      Features
                    </a>
                  </span>
                  <span className="">
                    <a href="" className="text-sm">
                      Services
                    </a>
                  </span>
                  <span className="">
                    <a href="" className="text-sm">
                      Jobs
                    </a>
                  </span>
                </div>
              </div>
              {/* <div className="mobilelg:w-6/12 w-full space-y-3 text-white  ">
                <h1 className="">Socials</h1>
                <div className="space-x-4 plusjakartasans flex">
                  <a href="" className="text-sm">
                    <img src="/facebook.svg" alt="" className="w-7 h-7" />
                  </a>
                  <a href="" className="text-sm">
                    <img src="/facebook.svg" alt="" className="w-7 h-7" />
                  </a>
                  <a href="" className="text-sm">
                    <img src="/facebook.svg" alt="" className="w-7 h-7" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <div className="">
            <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
              <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center plusjakartasans">
                <li className="text-sm text-ftvwine-25 dark:text-ftvwine-25">
                  © 2025{" "}
                  <a href="#" className="hover:underline plusjarkatasans">
                    Fasttrack Virtuals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="hover:underline plusjarkatasans">
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="hover:underline plusjarkatasans">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
