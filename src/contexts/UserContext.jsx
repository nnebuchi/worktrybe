/* eslint-disable react/prop-types */
// src/context/UserContext.js
import { createContext, useState, useEffect } from 'react';
import { getUserProfile, logout } from '../services/api';
import { toast } from 'react-toastify';
import { registerUser } from '../services/api';
import {getRandomEmail, generatePassword} from '../utils/generic';

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user_data = localStorage.getItem('fasttrack_user') && localStorage.getItem('fasttrack_user') != "undefined" ? JSON.parse(localStorage.getItem('fasttrack_user')) : null;
  const [user, setUser] = useState(user_data);   // Store user data
  const [fetching, setFetching] = useState(true); // Loading state to manage API request status

  // Function to fetch user data
  const fetchUserData = async (token) => {
    setFetching(true);  // Start loading state
        const response = await getUserProfile(token);  // Replace with actual API URL
        if(response?.status === 'success'){
          console.log(response)
          setFetching(false);
          response.data.token = token;
          setUser(response.data);
          localStorage.setItem('fasttrack_user', JSON.stringify(response.data))
        }else{
            setFetching(false);
            if(response.error){
                console.log(response.error);
            }else if(response.message){
                console.log(response.message);
            }
        }
  };

  const signOut = async () => {
    const response = await logout(user?.token);
    if(response?.status === 'success'){
      localStorage.removeItem('fasttrack_user');
      window.location.pathname = "/"
    }else{
      toast.error('Something went wrong')
    }
  }


  const signUp = async () => {
      const email = await getRandomEmail();
      const password = await generatePassword();
      const reg = await registerUser(email, password);
      if (reg?.status === "success") {
        toast.success(reg?.message);
        localStorage.setItem("fasttrack_user", JSON.stringify(reg?.data));
        window.location.href = "/company-info";
      } else {
        if (reg.error) {
          console.log(reg.error);
          toast.error("Something went wrong");
        }
      }
  };

  // Fetch user data only once when the provider is mounted
  useEffect(() => {
    if(user?.token){
        fetchUserData(user.token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetching, fetchUserData, signOut, signUp }}>
      {children}
    </UserContext.Provider>
  );
};
