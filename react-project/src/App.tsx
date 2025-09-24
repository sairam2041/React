import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleKanban from "./components/SimpleKanban";
import DrawingCanvas from "./components/DrawingCanvas";
import { ImageUploadPage } from "./components/ImageUploadPage";
import Home from "./pages/home";
import Sidebar from "./components/Siderbar";
import "./App.css";

const App = () => {
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

export default App;