import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Resume, DadJokes, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/dadjokes" element={<DadJokes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
    </div>
  );
}

export default App;
