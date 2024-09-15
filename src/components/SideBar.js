import Icon from "./Icon";

const SideBar = () => (
    <div className="h-full w-full max-w-[32rem] p-4 space-y-6 bg-neutral-900 text-white shadow-lg font-sans">

        <div className="justify-start flex p-3 lg:p-10">
            <img className="size-16" src="/images/wm-favicon-color.svg" alt="logo" />
            <h1 className="mt-3 text-4xl font-medium">WM</h1>
        </div>

        <SideBarItem icon={<Icon icon="rooms" size="8" />} name="Rooms" />
        <SideBarItem icon={<Icon icon="devices" size="8" />} name="Devices" />
        <SideBarItem icon={<Icon icon="readings" size="8" />} name="Readings" />
    </div>
)

const SideBarItem = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="" className="hover:outline outline-1 outline-gray-700 hover:bg-gray-700 transition delay-[10ms] cursor-pointer p-2 sidebar-item flex mt-5 ms-5 ml-3 mr-6 rounded-md">
        {props.icon} <p className="ms-2 mt-1.5 text-base">{props.name}</p>
    </a>
)

export default SideBar