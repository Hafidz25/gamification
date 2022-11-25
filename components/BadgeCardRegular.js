export default function BadgeCardRegular({ item }) {
  return (
    <div className="bg-white rounded-lg w-56 p-4 grid">
      <div className="flex items-center gap-4">
        <img src={item.img} className="w-20" />
        <div className="flex-col">
          <div className="font-medium text-sm">{item.name}</div>
          <div className="font-medium w-20 mt-1 flex justify-center bg-green-200 p-1 rounded-full text-xs text-green-600">
            {item.bp} point
          </div>
        </div>
      </div>
      {item.status == true ? (
        <div className="flex justify-center items-center p-1 rounded-full bg-blue-200 text-xs font-medium text-blue-600 mt-1">Dimiliki</div>
      ) : (
        <div className="flex justify-center items-center p-1 rounded-full bg-gray-200 text-xs font-medium text-gray-600 mt-1">Terkunci</div>
      )}
    </div>
  );
}
