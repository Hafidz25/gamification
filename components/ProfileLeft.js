export default function ProfileLeft() {
    return (
        <div className="bg-cyan-900 rounded-lg shadow-lg p-8 h-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                <div className='items-center justify-center flex lg:col-span-4'>
                    <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div>
                </div>
                <div className='lg:col-span-6 py-2 grid justify-items-stretch'>
                    <div class="rounded-md bg-gray-200 font-mono mt-2 justify-self-center lg:justify-self-start w-40 h-7 lg:w-36 lg:h-7"></div>
                    <div class="rounded-md bg-gray-200 flex font-mono justify-self-center lg:justify-self-start mt-2 h-4 w-20 lg:h-4 lg:w-16"></div>
                </div>
                <div className='lg:col-span-1 py-2'>
                <div class="rounded-md bg-red-600 font-mono mt-2 lg:h-7 lg:w-7"></div>
                </div>
            </div>
            <div className="rounded-lg bg-gray-200 mx-1 lg:mx-1 px-4 py-6 mt-4 lg:mt-6 w-auto h-auto">
                <div class="rounded-md bg-gray-600 font-mono w-40 h-5"></div>
                <div class="rounded-md bg-red-300 mt-2 font-mono w-full h-3"></div>
                <div className="grid lg:justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6 lg:mt-10">
                        <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-16 bg-cyan-900 rounded-lg"></div>
                        <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-16 bg-cyan-900 rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                        <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-16 bg-cyan-900 rounded-lg"></div>
                        <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-16 bg-cyan-900 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}