import './Stylesheets/Root.css'; 
import Navbar from './Components/Navbar.js'; 
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer.js';
import Achievement from './Pages/Achievement.js';
import Resources from './Pages/Resources.js';
import Aboutss from "./Pages/Aboutpage.js"

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
