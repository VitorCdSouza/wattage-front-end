import Room from "./components/Room";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen w-full">
      {/* sidebar at left */}
      <div className="hidden lg:block lg:basis-72">
        <SideBar />
      </div>

      {/* content at right */}
      <div className="flex bg-white lg:basis-full">
        <Room />
      </div>
    </div>
  );
}

export default App;
