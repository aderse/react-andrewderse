import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Resume, Links, Connect } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/resume" element={<Resume />} />
        <Route path="/links" element={<Links />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>      
    </div>
  );
}

export default App;
