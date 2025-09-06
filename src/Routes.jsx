import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import EmployeeLogin from './pages/employee-login';
import DashboardLandingPage from './pages/dashboard-landing-page';
import BrowseIssues from './pages/browse-issues';
import Analytics from './pages/analytics/Analytics';
import Profile from './pages/employee-login/components/Profile';
import DepartmentTab from './pages/departments/DepartmentTab';
import NotFound from './pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<EmployeeLogin />} />
      <Route path="/employee-login" element={<EmployeeLogin />} />
      <Route path="/dashboard" element={<DashboardLandingPage />} />
      <Route path="/browse-issues" element={<BrowseIssues />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/departments" element={<DepartmentTab />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
