import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Protected from "./components/protected";
import RoleProtected from "./components/roleProtected";

import LandingPage from "./routes/landing-page";

import Login from "./routes/auth/login";
import ChooseSignup from "./routes/auth/choose-signup";
import RegisterCompany from "./routes/auth/register-company";
import RegisterUser from "./routes/auth/register-user";

import CustomerDashboard from "./routes/user/customer-dashboard";
import Settings from "./routes/user/settings";
import Jobs from "./routes/user/jobs";
import JobDetails from "./routes/user/job-details";

import CompanyDashboard from "./routes/company/company-dashboard";
import CreateJob from "./routes/company/create-job";
import Candidates from "./routes/company/candidates";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        {/* Login Route */}
        <Route path="login" element={<Login />} />
        <Route path="choose-signup" element={<ChooseSignup />} />
        <Route path="register-company" element={<RegisterCompany />} />
        <Route path="register-company" element={<RegisterCompany />} />
        <Route path="register-user" element={<RegisterUser />} />

        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:jobId" element={<JobDetails />} />

        {/* Protected route untuk role 'company' */}
        <Route path="/company">
          <Route
            index
            element={
              <Protected>
                <RoleProtected allowedRole="company">
                  <CompanyDashboard />
                </RoleProtected>
              </Protected>
            }
          />
          <Route
            path="create-job"
            element={
              <Protected>
                <RoleProtected allowedRole="company">
                  <CreateJob />
                </RoleProtected>
              </Protected>
            }
          ></Route>
          <Route
            path="candidates/:jobId"
            element={
              <Protected>
                <RoleProtected allowedRole="company">
                  <Candidates />
                </RoleProtected>
              </Protected>
            }
          ></Route>
        </Route>

        {/* Protected route untuk role 'applicant' */}
        <Route path="/applicant">
          <Route
            index
            element={
              <Protected>
                <RoleProtected allowedRole="applicant">
                  <CustomerDashboard />
                </RoleProtected>
              </Protected>
            }
          ></Route>
          <Route
            path="settings"
            element={
              <Protected>
                <RoleProtected allowedRole="applicant">
                  <Settings />
                </RoleProtected>
              </Protected>
            }
          ></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
