import Icon from "./Icon";

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-72 m-0 flex flex-col bg-gray-900 text-white shadow-lg font-sans">

            <div className="flex p-10">
                <img className="size-16" src="/images/wm-favicon-color.svg" alt="logo" />
                <h1 className="mt-3 text-4xl font-medium">WM</h1>
            </div>

            <SideBarItem icon={<Icon icon="rooms" size="8" />} name="Rooms" />
            <SideBarItem icon={<Icon icon="devices" size="8" />} name="Devices" />
            <SideBarItem icon={<Icon icon="readings" size="8" />} name="Readings" />
        </div>
    )
}

const SideBarItem = (props) => (
    <div className="hover:outline outline-1 outline-gray-700 hover:bg-gray-700 transition delay-[10ms] cursor-pointer w-60 p-2 sidebar-item flex mt-5 ms-5  rounded-md">
        {props.icon} <p className="ms-2 mt-1.5 text-base">{props.name}</p>
    </div>
)

export default SideBar