import { useState, useEffect } from "react";

export default function StepBar({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 1) {
      const barWidth = (item.exp / 250) * 20;
      setBar(barWidth);
    } else if (item.lvl == 2) {
      const barWidth = (item.exp / 250) * 20;
      setBar(barWidth);
    } else if (item.lvl == 3) {
      const barWidth = (item.exp / 500) * 40;
      setBar(barWidth);
    } else if (item.lvl == 4) {
      const barWidth = (item.exp / 1000) * 60;
      setBar(barWidth);
    } else if (item.lvl == 5) {
      const barWidth = (item.exp / 2000) * 80;
      setBar(barWidth);
    }
  }, []);

  return (
    <div>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center text-white"
          style={{ width: `${bar}%`, fontSize: "10px" }}
        ></div>
      ) : null}
    </div>
  );
}
