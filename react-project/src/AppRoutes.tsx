import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleKanban from "./features/components/SimpleKanban";
import DrawingCanvas from "./features/components/DrawingCanvas";
import { ImageUploadPage } from "./features/components/ImageUploadPage";
import Home from "./home";
import Sidebar from "./Siderbar";
import "./app-routes.css";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imageUpload" element={<ImageUploadPage />} />
            <Route path="/canvas" element={<DrawingCanvas />} />
            <Route path="/kanban" element={<SimpleKanban />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes;