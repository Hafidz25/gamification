import BadgeCard from "../components/BadgeCard";

export default function Badge() {
  return (
    <div className="container mx-auto px-10 mt-8 mb-8 py-4">
      <div className="bg-white rounded-lg w-full h-full px-8 py-8 shadow-lg grid">
        <div className="rounded-lg bg-gray-200 flex p-4 w-full h-20"></div>
        {/* Features Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 w-full mt-8">
          <div className="col-span-2 flex justify-center">
            <BadgeCard />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCard />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCard />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCard />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCard />
          </div>
        </div>
        {/* Regular Badges */}
        <div className="rounded-lg bg-gray-200 flex p-4 w-full h-screen mt-8"></div>
      </div>
    </div>
  );
}
