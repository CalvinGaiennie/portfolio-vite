import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<p>School</p>} />
            <Route path="work" element={<p>Work</p>} />
            <Route path="school" element={<p>School</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
