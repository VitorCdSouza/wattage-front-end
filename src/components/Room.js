import RoomCard from "./RoomCard"

const Room = (props) => (
    <div className="w-full">
        <h1 className="py-4 lg:ps-10 ps-6 text-3xl font-semibold">Rooms</h1>
        <hr />

        <div className="pt-8 lg:ps-12 ps-6 pr-6">
            <h2 className="text-2xl font-semibold pb-8">Your Rooms:</h2>

            <div className="flex flex-wrap gap-4 md:gap-4">
                <RoomCard
                    roomName="Bedroom"
                />
                <RoomCard
                    roomName="Living Room"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                <RoomCard
                    roomName="Kitchen"
                />
                
                
            </div>
        </div>

    </div>
)

export default Room