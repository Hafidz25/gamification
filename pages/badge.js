import BadgeCard from "../components/BadgeCard";
import BadgeCardRegular from "../components/BadgeCardRegular";

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
        {/* LIne */}
        <div class="inline-flex justify-center items-center w-full mt-8">
          <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700"></hr>
          <div class="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {/* Regular Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 w-full mt-8">
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 w-full mt-2">
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
          <div className="col-span-2 flex justify-center">
            <BadgeCardRegular />
          </div>
        </div>
      </div>
    </div>
  );
}
