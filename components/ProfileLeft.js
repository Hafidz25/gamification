import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function ProfileLeft({ props }) {
  const [level, setLevel] = useState(null);
  const [progress, setProgress] = useState(null);

  const userData = props.user.filter((obj) => {
    return obj.id === 2;
  });
  const data = userData[0];

  useEffect(() => {
    if (data.exp_point <= 250) {
      setLevel(1);
    } else if (data.exp_point > 250 && data.exp_point <= 500) {
      setLevel(2);
    } else if (data.exp_point > 500 && data.exp_point <= 1000) {
      setLevel(3);
    }
  }, []);

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 lg:p-6 h-auto">
      <div className="bg-white rounded-lg py-2 px-2 grid grid-cols-1 lg:grid-cols-12 gap-1">
        <div className="items-center justify-center flex lg:col-span-4">
          {/* Profile Picture */}
          {/* <div class="rounded-full bg-gray-200 flex items-center justify-center font-mono w-32 h-32 lg:w-20 lg:h-20"></div> */}
          <img src={data.image} className="w-32 h-32 lg:w-20 lg:h-20" />
        </div>
        <div className="lg:col-span-6 py-2 grid justify-items-stretch">
          {/* Username */}
          <div class="rounded-md font-medium font-Poppins mt-2 justify-self-center lg:justify-self-start">
            {data.username}
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
        <div class="rounded-md font-medium">Level {level}</div>
        <div class="rounded-md bg-gray-300 mt-2 w-full h-3">
          {level ? (
            <ProgressBar
              item={{
                exp: data.exp_point,
                lvl: level,
              }}
            />
          ) : null}
        </div>
        <span className="text-xs ml-2">{data.exp_point} XP</span>
        <div className="grid lg:justify-center">
          {/* BadgeProfile */}
          <div className="grid grid-cols-1 w-auto lg:grid-cols-12 gap-4 mt-6 lg:mt-10">
            {/* 1 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/catatan-dibagikan.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">
                  {data.act_bc}
                </div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Catatan dibagikan
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/pertanyaan-dijawab.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">
                  {data.act_jp}
                </div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Pertanyaan dijawab
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/buat-rumus.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">
                  {data.act_br}
                </div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Buat rumus
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/materi-dibaca.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">
                  {data.act_bm}
                </div>
                <div className="text-sm lg:text-xs w-full font-medium lg:font-light tracking-tighter leading-none">
                  Materi dibaca
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="lg:col-span-6 w-full h-12 lg:w-32 lg:h-20 border-2 border-slate-300 cursor-default hover:bg-slate-200 transition duration-200 rounded-xl p-2 flex gap-2 items-center">
              <img src="/soal-dikerjakan.png" className="w-10 h-10" />
              <div className="flex items-center lg:items-start lg:flex-col gap-2 lg:gap-0 w-full">
                <div className="text-sm lg:text-lg font-medium">
                  {data.act_ks}
                </div>
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
