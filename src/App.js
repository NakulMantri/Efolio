import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ExperienceForm from "./components/form";
import Register from "./components/register";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/experiences" element={<ExperienceForm />} />
          <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
