import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default Experience;
