import "./Stylesheets/Root.css";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer.js";
import Achievement from "./Pages/Achievement.js";
import Resources from "./Pages/Resources.js";
import Aboutss from "./Pages/Aboutpage.js";
import Events from "./Pages/Events.js";
import Registration from "./Pages/Registration.js";

// import Resources from './Pages/Resources';
// import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Resources />} path="/resources" />
          <Route element={<Achievement />} path="/achievements" />
          <Route element={<Aboutss />} path="/about" />
          <Route element={<Events />} path="/Events" />
          <Route element={<Registration />} path="/register" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
