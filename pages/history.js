export default function History() {
  return (
    <div className="container mx-auto px-10 mt-8 mb-8 py-4">
      <div className="bg-white rounded-lg w-full h-full px-4 py-4 lg:px-8 lg:py-8 shadow-lg grid">
        <div className="rounded-lg bg-gray-200 flex p-4 w-full h-20"></div>
        <div className="rounded-lg bg-gray-200 flex p-4 w-full h-20 px-4 lg:px-8 py-4 items-center mt-8">
          <div className="grid grid-cols-12 lg:gap-2 w-full items-center">
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-gray-400 rounded-full w-10 h-10 lg:w-16 lg:h-16"></div>
            </div>
            <div className="col-span-8 lg:col-span-10">
              <div className="ml-2 lg:ml-0 bg-gray-400 rounded-md w-28 h-6 lg:w-96 lg:h-8"></div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="grid">
                <div className="bg-gray-400 rounded-md w-12 h-4 lg:w-20 lg:h-6"></div>
                <div className="bg-gray-400 rounded-md w-8 h-2 lg:w-12 lg:h-4 mt-1 lg:mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
