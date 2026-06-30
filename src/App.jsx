import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import TestSeries from "./pages/TestSeries/TestSeries";
import MockPapers from "./pages/MockPapers/MockPapers";
import MyUploads from "./pages/MyUploads/MyUploads";
import Exams from "./pages/Exams/Exams";
import Community from "./pages/Community/Community";
import Notification from "./pages/Notification/Notification";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminUploads from "./pages/AdminUploads/AdminUploads";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManagePapers from "./pages/ManagePapers/ManagePapers";
import UploadPaper from "./pages/UploadPaper/UploadPaper";
import AdminNotifications from "./pages/AdminNotifications/AdminNotifications";
import AdminProfile from "./pages/AdminProfile/AdminProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="test-series" element={<TestSeries />} />
              <Route path="mock-papers" element={<MockPapers />} />
              <Route path="my-uploads" element={<MyUploads />} />
              <Route path="exams" element={<Exams />} />
              <Route path="community" element={<Community />} />
              <Route path="notifications" element={<Notification />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<Layout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="uploads" element={<AdminUploads />} />
              <Route path="papers" element={<ManagePapers />} />
              <Route path="upload" element={<UploadPaper />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="notifications" element={<AdminNotifications />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
