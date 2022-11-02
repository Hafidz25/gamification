import BadgeCardProfile from "./BadgeCardProfile";

export default function ProfileRight() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full">
      <div className="rounded-lg bg-gray-200 flex p-4 w-full h-28"></div>
      <div className="rounded-lg bg-gray-200 flex p-4 w-full h-auto mt-4 items-center">
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
