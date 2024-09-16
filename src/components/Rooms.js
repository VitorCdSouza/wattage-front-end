import { useEffect, useState } from "react"
import RoomCard from "./RoomCard"

const Rooms = (props) => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        setRooms([
            { id: 1, name: "Bedroom 1", devices: 3, wattage_sum: 300 },   // 1 lamp (50W), 1 fan (100W), 1 TV (150W)
            { id: 2, name: "Bedroom 2", devices: 3, wattage_sum: 350 },   // 1 lamp (50W), 1 fan (100W), 1 PC (200W)
            { id: 3, name: "Bedroom 3", devices: 4, wattage_sum: 500 },   // 2 lamps (100W), 1 fan (100W), 1 TV (300W)
            { id: 4, name: "Bedroom Master", devices: 6, wattage_sum: 700 }, // 2 lamps (100W), 2 fans (200W), 1 TV (150W), 1 AC unit (250W)
            { id: 5, name: "Kitchen", devices: 5, wattage_sum: 2000 },    // 1 fridge (800W), 1 microwave (1000W), 1 oven (200W)
            { id: 6, name: "Bathroom 1", devices: 5, wattage_sum: 1200 }, // 1 hair dryer (600W), 1 shower (1000W), 3 lights (150W)
            { id: 7, name: "Bathroom 2", devices: 5, wattage_sum: 1200 }, // same devices as Bathroom 1
            { id: 8, name: "Bathroom 3", devices: 5, wattage_sum: 1200 }  // same devices as Bathroom 1
        ])
    }, [])

    return (
        <div className="w-full">
            <h1 className="py-4 lg:ps-10 ps-6 text-3xl font-semibold">Rooms</h1>
            <hr className="w-full border-t border-gray-300 mx-0" />


            <div className="pt-8 lg:px-10 px-3 w-screen lg:w-full">
                <h2 className="text-2xl font-semibold pb-8">Your Rooms:</h2>

                <div className="rounded-2xl overflow-x-auto bg-gray-100 shadow-gray-600 shadow-sm p-3">
                    <table className="min-w-[600px] lg:text-sm text-base lg:text-lg overflow-x-auto w-full table">
                        <thead className="bg-neutral-900">
                            <tr>
                                <th className="text-white px-4 py-2 text-left w-30 rounded-tl-xl">Room Name</th>
                                <th className="text-white px-4 py-2 text-left w-30">Devices</th>
                                <th className="text-white px-4 py-2 text-left w-30 rounded-tr-xl">Total Wattage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room, index) => (
                                <tr key={room.id} className="bg-white">
                                    <td className={`pl-4 py-2 w-30 ${index === rooms.length - 1 ? 'rounded-bl-xl' : ''}`}>{room.name}</td>
                                    <td className="pl-4 py-2 w-30">{room.devices}</td>
                                    <td className={`pl-4 py-2 w-30 ${index === rooms.length - 1 ? 'rounded-br-xl' : ''}`}>{room.wattage_sum}W</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Rooms