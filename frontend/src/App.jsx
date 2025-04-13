import Contact from "./pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./component/Navbar";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      <LocationHere />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}
const LocationHere = () => {
  const location = useLocation();
  if (
    location.pathname == "projects" ||
    location.pathname == "/" ||
    location.pathname == "contactus"
  ) {
    return <Navbar />;
  } else {
    return null;
  }
};

export default App;
