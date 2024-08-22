import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import DocumentsPage from "./Documents/DocumentsPage";
import NotFoundPage from "./NotFound/NotFoundPage";

function RoutesHub() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesHub;
