import BadgeCardProfile from "./BadgeCardProfile";

export default function ProfileRight() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg h-full">
      <div className="rounded-lg bg-white flex items-center p-8 w-full ">
        <h1 className="text-xl lg:text-2xl font-medium">Koleksi Lencana</h1>
        <div className="bg-cyan-700 flex items-center w-auto ml-6 text-white p-2 rounded-lg text-xs lg:text-sm cursor-pointer outline outline-1 hover:outline-cyan-700 hover:bg-white hover:text-cyan-700 transition duration-200">
          Tampilkan semua
        </div>
      </div>
      <div className="rounded-lg bg-gray-200 flex w-full h-auto mt-2 lg:mt-4 p-4 lg:p-6 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full">
          <div className="col-span-2 flex justify-center">
            <BadgeCardProfile />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardProfile />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardProfile />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardProfile />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
