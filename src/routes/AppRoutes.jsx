import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
// import Practice from "../pages/Practice";
// import MockInterview from "../pages/MockInterview";
// import Progress from "../pages/Progress";
// import SavedQuestions from "../pages/SavedQuestions";
// import Resources from "../pages/Resources";
// import Profile from "../pages/Profile";

import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>

      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication pages - without dashboard layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main application pages - with shared layout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/practice" element={<Practice />} /> */}
        {/* <Route path="/mock-interview" element={<MockInterview />} /> */}
        {/* <Route path="/progress" element={<Progress />} /> */}
        {/* <Route path="/saved-questions" element={<SavedQuestions />} /> */}
        {/* <Route path="/resources" element={<Resources />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>

      {/* Unknown routes */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
}

export default AppRoutes;