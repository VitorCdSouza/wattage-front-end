const RoomCard = (props) => (
    <div className={props.className + " 2xl:w-60 w-full sm:w-[calc(50%-0.5rem)] p-6 bg-neutral-900 border border-gray-200 rounded-lg shadow"}>
        <p>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.roomName}</h5>
        </p>
        <p class="mb-3 font-normal text-gray-300">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="hover:outline outline-1 outline-neutral-700 transition delay-[10ms] cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            See more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    </div>

)

export default RoomCard