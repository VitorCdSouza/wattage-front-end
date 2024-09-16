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
        <div className="lg:w-full">
            <h1 className="py-4 lg:ps-10 ps-6 text-3xl font-semibold">Rooms</h1>
            <hr />

            <div className="pt-8 lg:ps-10 ps-6 pr-6 w-full">
                <h2 className="text-2xl font-semibold pb-8">Your Rooms:</h2>

                <div className="overflow-x-auto pr-4">
                    <table className="min-w-[640px] lg:text-sm text-lg overflow-x-auto w-full table-fixed border-collapse border border-gray-300">
                        <thead className="bg-neutral-900">
                            <tr>
                                <th className="text-white border border-gray-300 px-4 py-2 text-left w-40">Room Name</th>
                                <th className="text-white border border-gray-300 px-4 py-2 text-left w-24">Devices</th>
                                <th className="text-white border border-gray-300 px-4 py-2 text-left w-28">Total Wattage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room.id} className="bg-white">
                                    <td className="border border-gray-300 pl-4 py-2">{room.name}</td>
                                    <td className="border border-gray-300 pl-4 py-2">{room.devices}</td>
                                    <td className="border border-gray-300 pl-4 py-2">{room.wattage_sum}W</td>
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