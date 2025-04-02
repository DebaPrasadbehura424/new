import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./component/Navbar";
import AutoDownloadPage from "./pages/Downlaod";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/download" element={<AutoDownloadPage />} />
      </Routes>
    </>
  );
}

export default App;
