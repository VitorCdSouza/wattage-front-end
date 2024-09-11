import { MdOutlineBedroomChild } from "react-icons/md";
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-72 m-0
                        flex flex-col bg-gray-900 text-white shadow-lg font-serif">
            
            <div className="flex mt-5 ms-3 mb-6">
                <img className="size-20" src="/images/wm-favicon-color.svg" alt="logo" />
                <h1 className="mt-4 text-5xl">WM</h1>
            </div>

            <SideBarItem icon={<MdOutlineBedroomChild size={40} />} name="Rooms"/>
            <SideBarItem icon={<MdOutlineBedroomChild size={40} />} name="Devices"/>
            <SideBarItem icon={<MdOutlineBedroomChild size={40} />} />
            <SideBarItem icon={<MdOutlineBedroomChild size={40} />} />            
        </div>
    )
}

const SideBarItem = (props) => (
    <div className="sidebar-item flex mt-7 ms-6">
        {props.icon} <p className='ms-2 mt-1.5 text-xl'>{props.name}</p>
    </div>
)

export default SideBar