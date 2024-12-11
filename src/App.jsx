import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
