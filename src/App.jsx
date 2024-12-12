import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Work />} />
            <Route path="work" element={<Work />} />
            <Route path="school" element={<Education />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
