import Navbar from "../components/Navbar";
import RatingCard from "../components/RatingCard";
import BenefitTabs from "../components/BenefitTabs";
import ServiceDetailsTab from "../components/ServiceDetailsTab";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className="bg-pink pt-20 b">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide leading-none text-darkred md:text-5xl lg:text-6xl ">
            Free yourself from administrative tasks and accelerate your business
            growth.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-ftvblue-400">
            Here at Fasttrack we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-ftvblue-400 rounded-lg bg-primary-700 focus:ring-4 focus:ring-ftvblue-400 dark:focus:ring-ftvblue-400 hover bg-darkred">
              Find a VA
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvblue-300 hover:bg-ftvblue-100 focus:ring-2 focus:ring-ftvblue-100 dark:text-ftvblue-400 dark:border-ftvblue-500 dark:hover:bg-ftvblue-500 dark:focus:ring-ftvblue-500 hover:text-ftvblue-25">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              See how it works
            </a>
          </div>

          <div className="bg-darkred flex flex-col justify-center items-center rounded-lg min-h-[400px] py-15 px-10 ">
            <div className="flex justify-between items-center w-full mb-4">
              <h1 className="mb-4 text-3xl tracking-wide font-bold text-white capitalize  ">
                Find talents by categories
              </h1>
              <form className="flex items-center max-w-sm mx-auto me-3 w-7/12">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <span className="fa fa-arrow-down-wide-short text-ftvgrey-200"></span>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-ftvgrey-50 border border-ftvgrey-300 text-ftvgrey-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   focus:dark:bg-ftvblue-400  dark:border-ftvgrey-300 dark:placeholder-ftvgrey-200 bg-grey dark:focus:ring-none dark:focus:border-none outline-none h-12 "
                    placeholder="Search virtual talents..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-ftvblue-500 hover:bg-blue-800 focus:ring-none focus:outline-none focus:ring-blue-300 dark:bg-ftvblue-500 ">
                  <i className="fa fa-filter"></i>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            <div className="rounded-lg bg-grey dark:bg-linear-65 from-pink via-grey to-light-blue flex  min-h-100 w-full mx-auto flex justify-evenly items-center flex-wrap py-7">
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </div>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 py-5">
            <h4 className="font-bold text-ftvblue-500 capitalize text-xl mt-5">
              trusted by
            </h4>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between partners">
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0  dark:hover:text-gray-400">
                <img src="partners/indybiz-pass.png" alt="Google" />
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img src="partners/innopower.png" alt="Google" ></img>
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <img src="partners/javat.png" alt="Google" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="survey-section bg-white dark:bg-linear-65 from-ftvblue-25 via-ftvpurple-50 to-pink flex justify-center items-center h-[500px]">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-wide font-extrabold text-gray-900 dark:text-ftvblue-500">
              The National Small Business Association (NSBA) survey found
            </h2>
            <div className="flex">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </span>
              <p className="mb-4 text-ftvblue-400 text-lg">
                82% of small business owners (including sole proprietors) worked
                over 40 hours per week.
              </p>
            </div>
            <p className="mb-4 text-ftvblue-400 text-lg">
              39% reported spending 3-10 hours per week on administrative tasks
              alone
            </p>
            <button
              type="button"
              className="text-ftvblue-25 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center dark:bg-ftvblue-500 dark:focus:ring-ftvgrey-400 cursor-pointer w-4/12 mt-5 text-xl">
              Hire assistant
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full rounded-lg ring-ftvgrey-500 ring-1 "
              src="/remote.svg"
              alt="office content 1"
            />
            <img
              className="mt-4 h-full w-full lg:mt-10 rounded-lg ring-ftvgrey-500 ring-1"
              src="/work.svg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      
      <BenefitTabs />
      <ServiceDetailsTab />
      <section className=" min-h-[300px] py-15 px-10 bg-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full gap-10">
          <h1 className="mb-4 text-3xl tracking-wide font-bold dark:text-ftvblue-500 text-ftvblue-500  text-center w-10/12">
            {"You're just 3 steps away from time freedom"}
          </h1>
          <div className="flex justify-between items-center w-full space-x-10">
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvblue-400 ring-ftvblue-400 dark:bg-ftvblue-25  bg:ftvblue-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvblue-500 dark:border-ftvblue-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvblue-500 text-lg">
                1. Discovery
              </h1>
              <p className="font-normal text-ftvblue-400 text-lg">
                Schedule a meeting with us so we understand what you need.
              </p>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvblue-300 hover:bg-ftvblue-100 focus:ring-2 focus:ring-ftvblue-100 dark:text-ftvblue-400 dark:border-ftvblue-500 dark:hover:bg-ftvblue-500 dark:focus:ring-ftvblue-500 hover:text-ftvblue-25">
                Schedule a Call
                <span className="fa fa-calendar-plus ms-2"></span>
              </a> */}
            </div>
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvblue-400 ring-ftvblue-400 dark:bg-ftvblue-25  bg:ftvblue-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvblue-500 dark:border-ftvblue-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvblue-500 text-lg">
                2. Talent Matching
              </h1>
              <p className="font-normal text-ftvblue-400 text-lg">
                We give you access to our talent pool for accessment.
              </p>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvblue-300 hover:bg-ftvblue-100 focus:ring-2 focus:ring-ftvblue-100 dark:text-ftvblue-400 dark:border-ftvblue-500 dark:hover:bg-ftvblue-500 dark:focus:ring-ftvblue-500 hover:text-ftvblue-25">
                Schedule a Call
                <span className="fa fa-calendar-plus ms-2"></span>
              </a> */}
            </div>
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvblue-400 ring-ftvblue-400 dark:bg-ftvblue-25  bg:ftvblue-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvblue-500 dark:border-ftvblue-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvblue-500 text-lg">
                {" "}
                3. Coontracts & Onboarding
              </h1>
              <p className="font-normal text-ftvblue-400 text-lg">
                Once you pick your preferred talent, we will send you our
                contract document for signing and onboarding.
              </p>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvblue-300 hover:bg-ftvblue-100 focus:ring-2 focus:ring-ftvblue-100 dark:text-ftvblue-400 dark:border-ftvblue-500 dark:hover:bg-ftvblue-500 dark:focus:ring-ftvblue-500 hover:text-ftvblue-25">
                Schedule a Call
                <span className="fa fa-calendar-plus ms-2"></span>
              </a> */}
            </div>
          </div>
          <a href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvblue-300 bg-ftvblue-500 text-ftvblue-2  dark:text-white dark:border-ftvblue-500 dark:hover:bg-blue-800 dark:focus:ring-ftvblue-500 hover:text-ftvblue-25">
            Schedule a Call
            <span className="fa fa-calendar-plus ms-2"></span>
          </a>
        </div>
      </section>
      <section className=" min-h-[300px] py-15 px-10 bg-darkred flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="mb-4 text-3xl tracking-wide font-bold text-white  text-center w-10/12">
            Ready to accelerate your business growth? Schedule a free
            consultation to learn how Fasttrack VA can save you up to 20 hours
            per week.
          </h1>
          <button
            type="button"
            className="text-dark focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center bg-light hover:bg-light-blue dark:focus:ring-ftvgrey-400 cursor-pointer w-4/12 mt-5 text-xl">
            Book a Call
          </button>
        </div>
      </section>
    </>
  );
};

export default Landing;
