import { runValidation } from "../utils/buchi";
import { useState } from "react";
import ValidationError from "../components/UI/ValidaionError";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState();

  const navigate = useNavigate();

  const validateSignupForm = async () => {
    const validate = await runValidation([
      {
        input: { value: email, field: "email", type: "text" },
        rules: { required: true, email: true },
      },
      {
        input: { value: password, field: "password", type: "text" },
        rules: {
          required: true,
          min_length: 6,
          must_have_number: true,
          has_special_character: true,
        },
      },
      {
        input: {
          value: confirm_password,
          field: "confirm_password",
          type: "text",
        },
        rules: { required: true, must_match: "password" },
      },
    ]);

    if (validate?.status === false) {
      setValidationErrors(validate.errors);
    } else {
      // alert("kkkkkk")
      signUp();
    }
  };
  const signUp = async () => {
    const reg = await registerUser(email, password);
    if (reg?.status === "success") {
      toast.success(reg?.message);
      // const { token, is_verified } = loginUser;
      // setUser({ token, is_verified });
      // localStorage.setItem("fasttrack_user", JSON.stringify({ token, is_verified }));
      navigate("/login");
      // setIsLoginModalOpen(false);
    } else {
      /*setDisableBtn(false)
        setLoading(false)
        toast.error(loginUser?.error);*/
      if (reg.error) {
        toast.error(reg.error);
        setValidationErrors(reg.error);
      }
    }
  };

  return (
    <>
      <section className="mx-auto px-0">
        <div className="flex items-center justify-center h-[500px]">
          <div className="w-6/12 left-col  border-2 border-red-700"></div>
          <div className="w-6/12 bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-white dark:border-ftvwine-200 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-ftvblack-400 md:text-2xl dark:text-ftvblack-400">
                Create an account
              </h1>

              <div className="gap-4 space-y-4 sm:flex sm:space-y-0 justify-center w-full">
                <a
                  href="#"
                  className="inline-flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-ftvwine-500 ring-1 dark:ring-ftvwine-500 ring-ftvblack-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-ftvwine-25 dark:hover:bg-ftvwine-500 dark:focus:ring-gray-800 sm:w-auto space-x-2 hover:text-white ">
                  <svg
                    className="w-6 h-6 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="text-left">
                    <div className="mb-1 text-xs">Login with Google</div>
                  </div>
                </a>
              </div>
              <form className="space-y-3 md:space-y-5" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200  dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
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
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200 dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                  <ValidationError
                    validationErrors={validationErrors}
                    field="password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-ftvblack-400">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none dark:bg-ftvwine-25 focus:bg-ftvgrey-25 dark:border-ftvgrey-200 dark:placeholder-gray-400 dark:text-ftvblack-300 dark:focus:ring-ftvwine-300 dark:focus:border-ftvwine-200"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    value={confirm_password}
                  />
                  <ValidationError
                    validationErrors={validationErrors}
                    field="confirm_password"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded dark:border-ftvgrey-200  focus:outline-none dark:outline-none"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-ftvblack-400 dark:text-ftvblack-400">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-ftvwine-500"
                        href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  onClick={validateSignupForm}
                  type="button"
                  className="w-full text-white bg-ftvwine-500  hover:bg-ftvwine-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-ftvwine-500  dark:hover:bg-ftvwine-400 dark:focus:ring-primary-800 cursor-pointer">
                  Create an account
                </button>
                <p className="text-sm font-light text-ftvblack-400 dark:text-ftvblack-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-ftvwine-500 hover:underline dark:text-ftvwine-500">
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
