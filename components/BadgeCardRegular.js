export default function BadgeCardRegular() {
  return (
    <div className="bg-gray-200 rounded-lg w-56 h-36 p-4 flex items-center gap-4">
      <div className="bg-gray-400 rounded-full w-20 h-20"></div>
      <div className="flex-col">
        <div className="bg-gray-400 rounded-md w-20 h-6"></div>
        <div className="bg-gray-400 rounded-md w-12 h-4 mt-1"></div>
      </div>
    </div>
  );
}
