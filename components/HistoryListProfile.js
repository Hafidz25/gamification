export default function HistoryListProfile({ item }) {
  const date = item.date.slice(0, 10)
  return (
    <div className="rounded-lg bg-white border-2 border-slate-300 flex p-4 w-full h-16 lg:h-16 px-2 lg:px-4 py-2 items-center">
      <div className="grid grid-cols-12 lg:gap-2 w-full items-center">
        <div className="col-span-2 lg:col-span-1">
          {/* <div className="bg-gray-400 rounded-full w-10 h-10 lg:w-16 lg:h-16"></div> */}
          <img src="/coin.png" className="w-10 h-10 lg:w-12 lg:h-12" />
        </div>
        <div className="col-span-6 lg:col-span-9">
          <div className="ml-2 lg:ml-0 rounded-md flex items-center w-36 h-6 lg:w-96 lg:h-8">
            {item.status == 1 ? (
              <h4 className="font-normal text-xs lg:text-base">
                Selamat anda mendapatkan poin
              </h4>
            ) : (
              <h4 className="font-normal text-xs lg:text-base">
                Anda menggunakan poin
              </h4>
            )}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 pl-6 lg:pl-0">
          <div className="grid">
            <div className="rounded-md w-20 h-4 lg:w-20 lg:h-6">
              {item.status == 1 ? (
                <div className="font-medium text-xs lg:text-base text-green-600">
                  +{item.point_change}
                </div>
              ) : (
                <div className="font-medium text-xs lg:text-base text-red-600">
                  -{item.point_change}
                </div>
              )}
            </div>
            <div className="rounded-md w-20 lg:w-24 lg:h-4 mt-0">
              <span className="text-xs font-thin lg:text-sm text-slate-600" style={{ maxLength: '12' }}>
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
