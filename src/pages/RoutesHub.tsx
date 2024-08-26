import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import DocumentsPage from "./Documents/DocumentsPage";
import NotFoundPage from "./NotFound/NotFoundPage";
import LoginPage from "./Login/LoginPage";
import PrivateRoute from "../components/auth/PrivateRoute.component";

function RoutesHub() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}  />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>} />
        <Route path="/documents" element={<PrivateRoute><DocumentsPage /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesHub;
