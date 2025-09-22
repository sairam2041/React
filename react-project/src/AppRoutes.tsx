import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleKanban from "./features/components/SimpleKanban";
import DrawingCanvas from "./features/components/DrawingCanvas";
import { ImageUploadPage } from "./features/components/ImageUploadPage";
import Home from "./home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageUpload" element={<ImageUploadPage />} />
        <Route path="/canvas" element={<DrawingCanvas />} />
        <Route path="/kanban" element={<SimpleKanban />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;