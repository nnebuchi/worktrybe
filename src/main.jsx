import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    <ToastContainer
      position="top-right"
      autoClose="5000"
      closeButton={true}
      style={{ width: "400px" }}
    />
  </StrictMode>,
)
