import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Education from "./components/Education";
import Work from "./components/Work";
import Current from "./pages/Current";
import Essays from "./pages/Essays";
import EssayView from "./pages/EssayView";

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
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<EssayView />} />
          <Route path="/current" element={<Current />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
