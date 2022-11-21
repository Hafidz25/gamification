import HistoryListProfile from "../components/HistoryListProfile";

export default function ProfileRight({ props }) {
  const userHistory = props.user_transactions.filter((obj) => {
    return obj.user_id === 2;
  });

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 lg:p-6 h-full">
      <div className="rounded-lg bg-white p-4 lg:p-6 w-full">
        <div className="flex justify-between">
          <h1 className="text-lg lg:text-xl font-medium">Koleksi Badges</h1>
          <a href="/badge">
            <div className="bg-cyan-700 flex items-center text-white p-2 rounded-lg text-xs cursor-pointer outline outline-1 hover:outline-cyan-700 hover:bg-white hover:text-cyan-700 transition duration-200">
              Lihat katalog
            </div>
          </a>
        </div>
        <div className="grid justify-items-center grid-cols-4 lg:grid-cols-6 mt-4 gap-2 lg:gap-4 border-2 border-slate-300 p-2 lg:p-4 rounded-lg h-44 overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded">
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
          <div className="bg-gray-400 w-12 h-12 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 lg:p-6 w-full mt-2 lg:mt-6">
        <div className="flex justify-between">
          <h1 className="text-lg lg:text-xl font-medium">History</h1>
          <a href="/history">
            <div className="bg-cyan-700 flex items-center text-white p-2 rounded-lg text-xs cursor-pointer outline outline-1 hover:outline-cyan-700 hover:bg-white hover:text-cyan-700 transition duration-200">
              Lihat semua
            </div>
          </a>
        </div>
        <div className="overflow-y-auto h-36 w-full lg:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded grid gap-2 lg:gap-4 mt-2 lg:mt-6">
          {userHistory.map((data) => (
            <HistoryListProfile
              item={{
                point_change: data.point_change,
                date: data.created_at,
                status: data.status,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
