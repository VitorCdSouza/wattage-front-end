import { MdOutlineBedroomChild } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-80 m-0
                        flex flex-col bg-gray-900  text-white shadow-lg">

            <SideBarItem icon={<MdOutlineBedroomChild size={40} />} />            
        </div>
    )
}

const SideBarItem = ({ icon }) => (
    <div className="sidebar-item flex mt-10 ml-6">
        {icon} <p className='ml-2'>asdas</p>
    </div>
)

export default SideBar