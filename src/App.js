import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen w-full">
      {/* sidebar at left */}
      <div className="hidden lg:block lg:basis-80">
        <SideBar />
      </div>

      {/* content at right */}
      <div className="ms-4 flex bg-white lg:basis-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
