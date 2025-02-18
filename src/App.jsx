import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AlertModal from "./components/UI/AlertModal";
import ClientOnboardingStep1 from "./components/screens/onboarding/ClientOnboardingStep1";
import ClientOnboardingStep2 from "./components/screens/onboarding/ClientOnboardingStep2";

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
          <Route
            path="/client-profile-setup/step-1"
            element={<ClientOnboardingStep1 />}
          />
          <Route
            path="/client-profile-setup/step-2"
            element={<ClientOnboardingStep2 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
