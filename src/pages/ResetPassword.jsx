import ValidationError from "../components/UI/ValidaionError";
import { useState } from "react";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [passwordReveal, setPasswordReveal] = useState("password");
  const [validationErrors, setValidationErrors] = useState();

  const handlePasswordReveal = () => {
    if (passwordReveal === "password") {
      setPasswordReveal("text");
    } else {
      setPasswordReveal("password");
    }
  };

  const validateResetForm = async () => {
    const validate = await runValidation([
      {
        input: { value: password, field: "password", type: "password" },
        rules: { required: true, email: true },
      },
      {
        input: {
          value: confirm_password,
          field: "confirm_password",
          type: "password",
        },
        rules: {
          required: true,
          min_length: 6,
          must_have_number: true,
          has_special_character: true,
        },
      },
    ]);

    if (validate?.status === false) {
      setValidationErrors(validate.errors);
    } else {
      // alert("kkkkkk")
      signUp();
    }
  };
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
              Reset Your<span className="text-[#6360F1]"> Password </span>
            </h1>
            <p className="text-base text-text-center font-normal text-[#3B4752] text-[#3B4752]">
              Enter your a new password
            </p>

            <form className="space-y-3 md:space-y-5 mt-4" action="#">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                  Password
                </label>
                <input
                  type={passwordReveal}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary  block w-full p-2.5 outline-none bg-[#F9FAFB] focus:bg-[#F9FAFB] placeholder-gray-400 text-ftvblack  focus:ring-ftvsecondary ring-1 ring-gray-200"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePasswordChange;
                  }}
                  value={password}
                />
                <span
                  onClick={handlePasswordReveal}
                  className={` absolute inset-x-[85%] inset-y-10 text-[#6D7B88] fa ${
                    passwordReveal === "password" ? "fa-eye-slash " : "fa-eye"
                  }`}></span>{" "}
                <ValidationError
                  validationErrors={validationErrors}
                  field="password"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack-400">
                  Confirm Password
                </label>
                <input
                  type={passwordReveal}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="••••••••"
                  className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary  block w-full p-2.5 outline-none bg-[#F9FAFB] focus:bg-[#F9FAFB] placeholder-gray-400 text-ftvblack  focus:ring-ftvsecondary ring-1 ring-gray-200"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    handlePasswordChange;
                  }}
                  value={confirm_password}
                />
                <span
                  onClick={handlePasswordReveal}
                  className={` absolute inset-x-[85%] inset-y-10 text-[#6D7B88] fa ${
                    passwordReveal === "password" ? "fa-eye-slash " : "fa-eye"
                  }`}></span>{" "}
                <ValidationError
                  validationErrors={validationErrors}
                  field="password"
                />
              </div>

              <button
                onClick={validateResetForm}
                type="button"
                className="w-full text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-ftvprimary  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer">
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
