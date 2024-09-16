import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen w-full font-sans">
      {/* sidebar at left */}
      <div className="h-full hidden lg:block lg:basis-80">
        <SideBar />
      </div>

      {/* content at right */}
      <div className="flex bg-white lg:basis-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
