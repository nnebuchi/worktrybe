import { BrowserRouter, Route, Routes, Navigate, useLocation   } from "react-router-dom";
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

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('fasttrack_user') !== null;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component {...rest} />;
};

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
          {/* <ProtectedRoute path="/protected" component={ProtectedComponent} /> */}
          <Route path="/company-info" element={<ProtectedRoute component={EmployerCompanyInfo} />} />
          <Route path="/select-service" element={<ProtectedRoute component={SelectRequiredService} />} />
          <Route path="/role-requirement/:hireId" element={<ProtectedRoute component={JobRoleRequirement} />} />
          <Route path="/book-meeting" element={<ProtectedRoute component={BookMeeeting} />} />
          <Route path="/completed" element={ <ProtectedRoute component={Completed} />} />
          <Route path="/dashboard"element={<ProtectedRoute component={Dashboard} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
