import BadgeCard from "../components/BadgeCard";

export default function Badge() {
  return (
    <div className="container mx-auto px-10 mt-8 mb-8 py-4">
      <div className="bg-white rounded-lg w-full h-full px-8 py-8 text-center shadow-lg">
        <div className="bg-cyan-900 rounded lg w-full h-full px-8 py-12 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
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
            <div className="col-span-2 flex justify-center">
              <BadgeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
