import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AlertModal from "./components/UI/AlertModal";
import EmployerCompanyInfo from "./components/screens/onboarding/EmployerCompanyInfo";
import SelectRequiredService from "./components/screens/onboarding/SelectRequiredService";
import JobRoleRequirement from "./components/screens/onboarding/JobRoleRequirement";
import BookMeeeting from "./components/screens/onboarding/BookMeeting";
import Dashboard from "./components/UI/Dashboard";
import Completed from "./components/screens/onboarding/Completed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/successful" element={<AlertModal />} />
          <Route path="/company-info" element={<EmployerCompanyInfo />} />
          <Route path="/select-service" element={<SelectRequiredService />} />
          <Route path="/role-requirement" element={<JobRoleRequirement />} />
          <Route path="/book-meeting" element={<BookMeeeting />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
