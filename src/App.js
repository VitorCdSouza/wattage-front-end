import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="flex h-screen">
      {/* sidebar at left */}
      <div className="sm:basis-0 lg:basis-[30%]">
        <SideBar />
      </div>

      {/* login at right */}
      <div className="w-full sm:basis-full lg:basis-[70%] flex items-center justify-center bg-white">

      </div>
    </div>
  );
}

export default App;
