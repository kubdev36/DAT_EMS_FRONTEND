import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProjectLayout from "./components/Layout/ProjectLayout/ProjectLayout";
import Login from "./components/Screen/Login/Login";
import Alarm from "./components/Screen/Alarm/Alarm";
import ProjectBlank from "./components/Screen/Project/ProjectBlank";
import ProjectManagement from "./components/Screen/ProjectManagement/ProjectManagement";
import SystemSetting from "./components/Screen/Project/SystemSetting/SystemSetting";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import Dashboard from "./components/Screen/Project/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/projectmanagement" element={<ProjectManagement />} />
        </Route>
        <Route element={<ProjectLayout />}>
          <Route path="/project/:id" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/electric" element={<ProjectBlank />} />
          <Route path="/water" element={<ProjectBlank />} />
          <Route path="/compressed-air" element={<ProjectBlank />} />
          <Route path="/alarm-management" element={<ProjectBlank />} />
          <Route path="/settings" element={<SystemSetting />} />
          <Route path="/project/:projectId" element={<ProjectBlank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
