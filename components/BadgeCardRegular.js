export default function BadgeCardRegular({ item }) {
  return (
    <div className="bg-white rounded-lg w-56 h-36 p-4 flex items-center gap-4">
      <img src={item.img} className="w-20" />
      <div className="flex-col">
        <div className="font-medium text-sm">{item.name}</div>
        <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
          {item.bp} point
        </div>
      </div>
    </div>
  );
}
