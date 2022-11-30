import HistoryListProfile from "../components/HistoryListProfile";

export default function ProfileRight({ props }) {
  const userHistory = props.user_transactions.filter((obj) => {
    return obj.user_id === 2;
  });
  const userData = props.user.filter((obj) => {
    return obj.id === 2;
  });
  const user = userData[0];
  const badges = props.badges;
  const userBadges = props.user_badges;

  const filterUser = userBadges.filter((obj) => {
    return obj.user_id == user.id;
  });

  const filterBadges = filterUser.map((data) => {
    const badge = badges.filter((obj) => obj.id == data.badges_id);
    return badge[0];
  });

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 lg:p-6 h-full">
      <div className="rounded-lg bg-white p-4 lg:p-6 w-full">
        <div className="flex justify-between">
          <h1 className="text-lg lg:text-xl font-medium">Koleksi Badge</h1>
          <a href="/badge">
            <div className="bg-cyan-700 flex items-center text-white p-2 rounded-lg text-xs cursor-pointer outline outline-1 hover:outline-cyan-700 hover:bg-white hover:text-cyan-700 transition duration-200">
              Lihat katalog
            </div>
          </a>
        </div>
        <div className="grid justify-items-center grid-cols-5 gap-2 lg:gap-4 border-2 border-slate-300 p-2 lg:p-4 rounded-lg h-44 overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded mt-4">
          {filterBadges.map((data) => {
            return (
              <img src={data.img} alt={data.name} className="lg:w-14" />
            );
          })}
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
