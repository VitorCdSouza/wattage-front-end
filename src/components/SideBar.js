import { Link } from "react-router-dom";
import Icon from "./Icon";

const SideBar = () => (
    <div className="h-full max-w-[32rem] p-4 space-y-6 bg-neutral-900 text-white shadow-neutral-900 shadow-md font-sans">

        <div className="justify-start flex p-3 lg:p-10">
            <img className="size-16" src="/images/wm-favicon-color.svg" alt="logo" />
            <h1 className="mt-3 text-4xl font-medium">WM</h1>
        </div>

        <SideBarItem to={"/rooms"} icon={<Icon icon="rooms" />} name="Rooms" />
        <SideBarItem to={"/devices"} icon={<Icon icon="devices" />} name="Devices" />
        <SideBarItem to={"/readings"} icon={<Icon icon="readings" />} name="Readings" />
    </div>
)

const SideBarItem = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link to={props.to} className="hover:outline outline-1 outline-gray-700 hover:bg-gray-700 transition delay-[10ms] cursor-pointer p-2 sidebar-item flex mt-5 ms-5 ml-3 mr-6 rounded-md">
        {props.icon} <p className="ms-2 mt-1 text-base">{props.name}</p>
    </Link>
)

export default SideBar