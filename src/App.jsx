import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProjectLayout from "./components/Layout/ProjectLayout";
import Login from "./components/Screen/Login/Login";
import Alarm from "./components/Screen/Alarm/Alarm";
import ProjectBlank from "./components/Screen/Project/ProjectBlank";
import ProjectManagement from "./components/Screen/ProjectManagement/ProjectManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/projectmanagement" element={<ProjectManagement />} />
        </Route>
        <Route element={<ProjectLayout />}>
          <Route path="/dashboard" element={<ProjectBlank />} />
          <Route path="/electric" element={<ProjectBlank />} />
          <Route path="/water" element={<ProjectBlank />} />
          <Route path="/compressed-air" element={<ProjectBlank />} />
          <Route path="/alarm-management" element={<ProjectBlank />} />
          <Route path="/settings" element={<ProjectBlank />} />
          <Route path="/project/:projectId" element={<ProjectBlank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
