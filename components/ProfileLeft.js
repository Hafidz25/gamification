export default function ProfileLeft() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 lg:p-6 h-auto">
      <div className="bg-white rounded-lg py-2 px-2 grid grid-cols-1 lg:grid-cols-12 gap-1">
        <div className="items-center justify-center flex lg:col-span-4">
          {/* Profile Picture */}
          {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
          <img src="/pp.png" className="w-32 h-32 lg:w-20 lg:h-20" />
        </div>
        <div className="lg:col-span-6 py-2 grid justify-items-stretch">
          {/* Username */}
          <div class="rounded-md font-medium font-Poppins mt-2 justify-self-center lg:justify-self-start">
            Hafidz Alif R.
          </div>
          <span class="rounded-md text-xs flex justify-self-center lg:justify-self-start font-Poppins">
            Diligent Student
          </span>
        </div>
        <div className="lg:col-span-2 py-2">
          <div class="rounded-md bg-red-500 flex justify-center text-white text-xs mt-2 p-2 cursor-pointer outline outline-1 transition duration-200 hover:outline-red-500 hover:bg-white hover:text-red-500 mr-2">
            Edit
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white mx-1 lg:mx-1 px-4 py-6 mt-4 lg:mt-6 w-auto h-auto">
        <div class="rounded-md font-medium">Level 1</div>
        <div class="rounded-md bg-gray-300 mt-2 w-full h-3">
          <div
            className="bg-blue-600 h-3 leading-none rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
        <span className="text-xs ml-2">250 XP</span>
        <div className="grid lg:justify-center">
          {/* BadgeProfile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6 lg:mt-10">
            {/* 1 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/catatan-dibagikan.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">2</div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Catatan dibagikan
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/pertanyaan-dijawab.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">0</div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Pertanyaan dijawab
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/buat-rumus.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">0</div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Buat rumus
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/materi-dibaca.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">0</div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Materi dibaca
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/soal-dikerjakan.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">0</div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Soal dikerjakan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
