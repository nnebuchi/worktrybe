import Navbar from "../components/Navbar";
import RatingCard from "../components/RatingCard";
import BenefitTabs from "../components/BenefitTabs";
import ServiceDetailsTab from "../components/ServiceDetailsTab";

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className="bg-ftvwine-25 dark:bg-ftvwine-25 pt-20 b">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide leading-none dark:text-ftvwine-500 text-ftvwine-500 md:text-5xl lg:text-6xl ">
            Free yourself from administrative tasks and accelerate your business
            growth.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-ftvwine-400">
            Here at Fasttrack we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center dark:text-ftvwine-500 text-ftvwine-500  rounded-lg bg-primary-700 focus:ring-4 focus:ring-ftvwine-400 dark:focus:ring-ftvwine-400 hover ">
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
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvwine-300 hover:bg-ftvwine-100 focus:ring-2 focus:ring-ftvwine-100 dark:text-ftvwine-400 dark:border-ftvwine-500 dark:hover:bg-ftvwine-500 dark:focus:ring-ftvwine-500 hover:text-ftvwine-25">
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
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 py-5">
            <h4 className="font-bold text-ftvwine-500 capitalize text-xl mt-5">
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
                <img src="partners/innopower.png" alt="Google"></img>
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
      <section className="bg-white dark:bg-white flex justify-center items-center h-[500px]">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-wide font-extrabold text-gray-900 dark:text-ftvblack-500">
              The National Small Business Association (NSBA) survey found
            </h2>
            <div className="flex">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </span>
              <p className="mb-4 text-ftvblack-300 text-lg">
                82% of small business owners (including sole proprietors) worked
                over 40 hours per week.
              </p>
            </div>
            <p className="mb-4 text-ftvblack-300 text-lg">
              39% reported spending 3-10 hours per week on administrative tasks
              alone
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center dark:bg-ftvblack-600 dark:hover:bg-ftvblack-300 dark:focus:ring-ftvgrey-400 cursor-pointer w-4/12 mt-5 text-xl">
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
      <section className="bg-ftvsky-500 dark:bg-ftvsky-500 flex flex-col justify-center items-center  min-h-[400px] py-15 px-10 ">
        <div className="rounded-lg bg-white dark:bg-ftvblue-500 min-h-100 w-full mx-auto flex justify-evenly items-center flex-wrap p-8">
          <div className="flex justify-between items-center w-full mb-4">
            <h1 className="mb-4 text-3xl tracking-wide font-bold ftvsky-500 dark:text-ftvsky-500 capitalize  ">
              Find talents by categories
            </h1>
            <form className="flex items-center max-w-sm mx-auto me-3 w-7/12">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <span className="fa fa-arrow-down-wide-short text-ftvblack-300"></span>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-ftvgrey-50 border border-ftvgrey-300 focus:ring-1 text-ftvgrey-500 text-sm rounded-lg focus:ring-ftvblue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-ftvsky-100 focus:dark:bg-ftvsky-400  dark:border-ftvgrey-300 dark:placeholder-ftvgrey-200 dark:text-ftvblack-300 dark:focus:ring-none dark:focus:border-none outline-none h-12 "
                  placeholder="Search virtual talents..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-none focus:outline-none focus:ring-blue-300 dark:bg-ftvblue-500 dark:hover:bg-ftvblue-400 dark:focus:ring-ftvblue-500 ">
                <i className="fa fa-filter"></i>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="w-full flex justify-evenly items-center flex-wrap dark:bg-ftvsky-50 rounded-lg py-8 gap-y-8">
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
        </div>
      </section>

      <BenefitTabs />
      <ServiceDetailsTab />
      <section className=" min-h-[300px] py-15 px-10 bg-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full gap-10">
          <h1 className="mb-4 text-3xl tracking-wide font-bold dark:text-ftvwine-500 text-ftvwine-500  text-center w-10/12">
            {"You're just 3 steps away from time freedom"}
          </h1>
          <div className="flex justify-between items-center w-full space-x-10">
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvwine-400 ring-ftvwine-400 dark:bg-ftvwine-25  bg:ftvwine-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvwine-500 dark:border-ftvwine-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvwine-500 text-lg">
                1. Discovery
              </h1>
              <p className="font-normal text-ftvwine-400 text-lg">
                Schedule a meeting with us so we understand what you need.
              </p>
            </div>
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvwine-400 ring-ftvwine-400 dark:bg-ftvwine-25  bg:ftvwine-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvwine-500 dark:border-ftvwine-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvwine-500 text-lg">
                2. Talent Matching
              </h1>
              <p className="font-normal text-ftvwine-400 text-lg">
                We give you access to our talent pool for accessment.
              </p>
            </div>
            <div className="w-4/12 min-h-60 flex flex-col p-4  justify-evenly items-start rounded-lg ring-1 dark:ring-ftvwine-400 ring-ftvwine-400 dark:bg-ftvwine-25  bg:ftvwine-100  hover:dark:bg-white transition ease-in-out duration-300 border-t-5 border-ftvwine-500 dark:border-ftvwine-500 hover:shadow-xl">
              <h1 className="font-bold text-ftvwine-500 text-lg">
                {" "}
                3. Contracts & Onboarding
              </h1>
              <p className="font-normal text-ftvwine-400 text-lg">
                Once you pick your preferred talent, we will send you our
                contract document for signing and onboarding.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-ftvwine-300 bg-ftvwine-500 text-ftvwine-2  dark:text-white dark:border-ftvwine-500 dark:hover:bg-ftvwine-400 dark:focus:ring-ftvwine-500 hover:text-ftvwine-25">
            Schedule a Call
            <span className="fa fa-calendar-plus ms-2"></span>
          </a>
        </div>
      </section>
      <section className=" min-h-[300px] py-15 px-10 dark:bg-ftvblue-500 bg-ftvblue-500  flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="mb-4 text-3xl tracking-wide font-bold text-ftvsky-500  text-center w-10/12">
            Ready to accelerate your business growth? Schedule a free
            consultation to learn how Fasttrack VA can save you up to 20 hours
            per week.
          </h1>
          <button
            type="button"
            className="text-ftvsky-500 focus:ring-1 focus:outline-none focus:ring-ftvgrey-400 font-medium rounded-lg py-3 px-5 text-center bg-light hover:bg-ftvblue-600  dark:bg-ftvblue-500 border-1 border-ftvsky-500 dark:ring-ftvsky-500 ring-ftvsky-500 dark:focus:ring-ftvgrey-400 cursor-pointer w-4/12 mt-5 text-xl">
            Book a Call
          </button>
        </div>
      </section>
      <footer class="bg-ftvwine-500 antialiased dark:bg-ftvwine-500">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="border-b border-gray-100 py-6 dark:border-ftvgrey-200 md:py-8 lg:py-16">
            <div class="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
              <div class="grid min-w-0 flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3">
                <div>
                  <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Company
                  </h6>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        {" "}
                        About{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        {" "}
                        Services
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        {" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Fasttrack Virtuals
                  </h6>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Administrative Tasks
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Financial Management
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Payment Methods
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    Support & Services
                  </h6>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Contact Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title=""
                        class="text-gray-500 hover:text-gray-900 dark:text-ftvwine-25 dark:hover:text-white">
                        Returns & Refunds
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
                <div class="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-ftvwine-100">
                  <a
                    href="#"
                    title=""
                    class="text-base font-medium text-ftvwine-500  hover:underline dark:text-ftvwine-500">
                    {" "}
                    Sign In or Create Account{" "}
                  </a>

                  <hr class="border-ftvwine-500 dark:borderftvwine-500" />

                  <form action="#">
                    <div class="items-end space-y-4 sm:flex sm:space-y-0">
                      <div class="relative mr-3 w-full sm:w-96 lg:w-full">
                        <label
                          for="email"
                          class="mb-2 block text-sm font-medium text-ftvwine-500 dark:text-ftvwine-500">
                          {" "}
                          Get the latest deals and more.{" "}
                        </label>
                        <input
                          class="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-ftvblack-300 focus:border-ftvwine-300 focus:ring-primary-500 dark:border-gray-500 dark:bg-ftvgrey-100 dark:text-ftvblack-300 dark:placeholder-gray-400 dark:focus:border-ftvwine-400 dark:focus:ring-primary-500 sm:w-96 lg:w-full outline-none"
                          placeholder="Enter your email address"
                          type="email"
                          id="email"
                          required=""
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-ftvwine-400 focus:ring-4 focus:ring-primary-300 dark:bg-ftvwine-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>

                  <hr class="border-ftvwine-500 dark:borderftvwine-500" />

                  <div class="flex space-x-4">
                    <a
                      href="#"
                      class="text-ftvwine-500 hover:text-ftvwine-500 dark:text-ftvwine-500 dark:hover:text-ftvwine-400">
                      <svg
                        class="w-6 h-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href="#"
                      class="text-ftvwine-500 hover:text-ftvwine-500 dark:text-ftvwine-500 dark:hover:text-ftvwine-400">
                      <svg
                        class="w-6 h-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clip-rule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      class="text-ftvwine-500 hover:text-ftvwine-500 dark:text-ftvwine-500 dark:hover:text-ftvwine-400">
                      <svg
                        class="w-6 h-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      class="text-ftvwine-500 hover:text-ftvwine-500 dark:text-ftvwine-500 dark:hover:text-ftvwine-400">
                      <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-6 md:py-8">
            <div class="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
              <a href="#" title="" class="block">
                <img
                  class="block h-8 w-auto dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
                <img
                  class="hidden h-8 w-auto dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt=""
                />
              </a>

              <ul class="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center">
                <li>
                  <a href="#" title="" class="font-medium hover:underline">
                    {" "}
                    Legal Notice{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="font-medium hover:underline">
                    {" "}
                    Assistant Onboarding Policy{" "}
                  </a>
                </li>
                <li>
                  <a href="#" title="" class="font-medium hover:underline">
                    {" "}
                    Terms of Use{" "}
                  </a>
                </li>
              </ul>

              <p class="text-sm text-ftvwine-25 dark:text-ftvwine-25">
                © 2025{" "}
                <a href="#" class="hover:underline">
                  Innopower
                </a>
                , Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
