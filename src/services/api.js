import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});


// Add the interceptor
api.interceptors.response.use(
    (response) => {
      // Check if the response message is "unauthorized
      if (
        response?.message === "unauthorized" &&
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"&&
        window.location.pathname !== "/"
      ) {
        // Clear ghm_user from local storage
        localStorage.removeItem("ghm_user");
        // Redirect to the login route
        window.location.href = "/";
      } else {
        return response;
      }
    },
    (error) => {
      if (
        error?.response?.data?.message === "unauthorized" &&
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"&&
        window.location.pathname !== "/"
      ) {
        // Clear ghm_user from local storage
        localStorage.removeItem("ghm_user");
  
        // Redirect to the login route
        // You will need to replace '/login' with the actual login route in your application
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );

  export const registerUser = async (email, password) => {
    return await api
      .post(
        "/auth/register", 
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          //   Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      )
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        return err.response?.data;
      });
  };



  export const loginUser = async (email, password) => {
    return await api
      .post(
        "/auth/login", 
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          //   Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      )
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        return err.response?.data;
      });
  };