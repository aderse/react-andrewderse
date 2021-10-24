import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Resume, ReadingList, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/reading-list" element={<ReadingList />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>      
    </div>
  );
}

export default App;
