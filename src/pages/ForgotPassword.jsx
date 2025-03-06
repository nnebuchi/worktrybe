import ValidationError from "../components/UI/ValidaionError";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validationErrors, setValidationErrors] = useState();

  return (
    <section className="mx-auto px-0">
      <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
        <div className="tabletmd:w-6/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden ">
          <img
            src="/right-column.png"
            alt=""
            className=" h-[680px] w-full tabletmd:object-none object-cover"
          />
        </div>
        <div className="tabletmd:w-6/12 mobilelandscape:w-7/12 mobilelg:w-9/12 w-full bg-white tabletmd:px-8 px-4  ">
          <div className="mobilesm:p-6 p-0    w-full">
            <img src="/fasttrack-logo.svg" alt="" className="mb-10 " />
            <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-4xl mb-3">
              Forgot Your <span className="text-[#6360F1]">Password </span>?
            </h1>
            <p className="text-base text-text-center font-normal text-[#3B4752] dark:text-[#3B4752]">
              Enter your email address to reset your password
            </p>

            <form className="space-y-3 md:space-y-5 mt-4" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary  block w-full p-2.5 outline-none dark:bg-[#F9FAFB] focus:bg-[#F9FAFB] dark:placeholder-gray-400 dark:text-ftvblack  dark:focus:ring-ftvsecondary ring-1 ring-gray-200"
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />

                <ValidationError
                  validationErrors={validationErrors}
                  field="email"
                />
              </div>

              <div className="flex items-start">
                <div className="ml-3 text-sm ">
                  <span>I changed my mind, </span>
                  <a
                    href="forgot-password"
                    className="text-ftvblack underline font-medium">
                    take me back
                  </a>
                </div>
              </div>
              <button
                // onClick={validateLoginForm}
                type="button"
                className="w-full text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvprimary  dark:hover:bg-ftvsecondary dark:focus:ring-ftvgrey cursor-pointer">
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
