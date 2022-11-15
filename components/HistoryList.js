export default function HistoryList({ item }) {
  return (
    <div className="rounded-lg bg-white border-2 border-slate-300 flex p-4 w-full h-20 px-4 lg:px-6 py-4 items-center">
      <div className="grid grid-cols-12 lg:gap-2 w-full items-center">
        <div className="col-span-2 lg:col-span-1">
          {/* <div className="bg-gray-400 rounded-full w-10 h-10 lg:w-16 lg:h-16"></div> */}
          <img src="/coin.png" className="w-10 h-10 lg:w-14 lg:h-14" />
        </div>
        <div className="col-span-6 lg:col-span-10">
          <div className="ml-2 lg:ml-0 rounded-md flex items-center w-36 h-6 lg:w-96 lg:h-8">
            {item.status == 1 ? (
              <h4 className="font-normal text-xs lg:text-lg">
                Selamat anda mendapatkan poin
              </h4>
            ) : (
              <h4 className="font-normal text-xs lg:text-lg">
                Anda menggunakan poin
              </h4>
            )}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 pl-6 lg:pl-0">
          <div className="grid">
            <div className="rounded-md w-20 h-4 lg:w-20 lg:h-6">
              {item.status == 1 ? (
                <div className="font-medium text-xs lg:text-lg text-green-600">
                  +{item.point_change}
                </div>
              ) : (
                <div className="font-medium text-xs lg:text-lg text-red-600">
                  -{item.point_change}
                </div>
              )}
            </div>
            <div className="rounded-md w-20 h-2 lg:w-24 lg:h-4 mt-0 lg:mt-1">
              <span className="text-xs font-thin lg:text-sm text-slate-600">
                {item.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
