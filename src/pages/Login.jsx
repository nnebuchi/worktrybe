import { loginUser } from "../services/api";
import { useState } from "react";
import ValidationError from "../components/UI/ValidaionError";
import { runValidation } from "../utils/buchi";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordReveal, setPasswordReveal] = useState("password");
  const [validationErrors, setValidationErrors] = useState();
  const navigate = useNavigate();

  const handlePasswordReveal = () => {
    if (passwordReveal === "password") {
      setPasswordReveal("text");
    } else {
      setPasswordReveal("password");
    }
  };

  const validateLoginForm = async () => {
    const validate = await runValidation([
      {
        input: { value: email, field: "email", type: "text" },
        rules: { required: true },
      },
      {
        input: { value: password, field: "password", type: "text" },
        rules: { required: true },
      },
    ]);

    if (validate?.status === false) {
      setValidationErrors(validate.errors);
    } else {
      // alert("kkkkkk")
      signIn();
    }
  };

  const signIn = async () => {
    const log = await loginUser(email, password);
    if (log?.status === "success") {
      // toast.success(loginUser?.message);
      // const { token, is_verified } = loginUser;
      // setUser({ token, is_verified });
      localStorage.setItem("fasttrack_user", JSON.stringify(log.data));
      if (log?.data?.company?.id) {
        navigate("/dashboard");
      } else {
        location.href = "/company-info";
        // navigate("/client-profile-setup/step-1");
      }

      // setIsLoginModalOpen(false);
    } else {
      /*setDisableBtn(false)
      setLoading(false)*/
      toast.error(log?.error);
      setValidationErrors(log.error);
    }
  };
  return (
    <>
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
              <Link to="/">
                <img src="/fasttrack-logo.svg" alt="" className="mb-10 " />
              </Link>
              <h1 className="text-2xl mobilemd:text-3xl font-bold  text-ftvblack tabletmd:text-4xl mb-3">
                Welcome to <span className="text-[#6360F1]">FastTrack </span>
              </h1>
              <p className="text-base text-text-center font-normal text-[#3B4752] text-[#3B4752]">
                You need to be signed in to access your account
              </p>

              <form className="space-y-3 md:space-y-5 mt-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary  block w-full p-2.5 outline-none bg-[#F9FAFB] focus:bg-[#F9FAFB] placeholder-gray-400 text-ftvblack  focus:ring-ftvsecondary ring-1 ring-gray-200"
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
                      // handlePasswordChange;
                    }}
                    value={password}
                  />
                  <span
                    onClick={handlePasswordReveal}
                    className={` absolute  inset-x-[85%] inset-y-10 text-[#6D7B88] fa ${
                      passwordReveal === "password" ? "fa-eye-slash " : "fa-eye"
                    }`}></span>{" "}
                  <ValidationError
                    validationErrors={validationErrors}
                    field="password"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border-none ring-1 ring-ftvprimary checked:bg-ftvprimary rounded-sm border-ftvgrey-200  focus:outline-none outline-none"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm flex justify-between w-full">
                    <label
                      htmlFor="remember"
                      className="font-light text-ftvblack-400 text-ftvblack-400">
                      keep me signed in
                    </label>
                    <a
                      href="forgot-password"
                      className="text-ftvblack underline font-medium">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <button
                  onClick={validateLoginForm}
                  type="button"
                  className="w-full text-white bg-ftvwine-500  hover:bg-ftvsecondary focus:ring-1 focus:outline-none focus:ring-ftvgrey font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-ftvprimary  hover:bg-ftvsecondary focus:ring-ftvgrey cursor-pointer">
                  Login 
                </button>
                {/* <button className="gap-4 justify-center items-center w-full">
                  <a
                    href="#"
                    className="flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-ftvwine-500 ring-1 ring-ftvgrey ring-ftvgrey hover:bg-ftvsecondary focus:outline-none focus:ring-1 focus:ring-ftvgrey bg-transparent hover:bg-ftvsecondary focus:ring-ftvgrey hover:ring-0  space-x-2 hover:text-white justify-center">
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

                    <span className="mb-1 text-xs">Signup with Google</span>
                  </a>
                </button> */}
                <p className="text-sm font-normal text-ftvblack-400 text-[#3B4752] text-center ">
                  Haven't joined yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-ftvblack hover:underline text-ftvblack">
                    Sign up
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

export default Login;
