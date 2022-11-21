import { useState, useEffect } from "react";

export default function MinLevel({ item }) {
  const [min, setMin] = useState(null);
  useEffect(() => {
    if (item.lvl == 1) {
      const minLevel = 250 - item.exp;
      setMin(minLevel);
    } else if (item.lvl == 2) {
      const minLevel = 500 - item.exp;
      setMin(minLevel);
    } else if (item.lvl == 3) {
      const minLevel = 1000 - item.exp;
      setMin(minLevel);
    } else if (item.lvl == 4) {
      const minLevel = 2000 - item.exp;
      setMin(minLevel);
    } else if (item.lvl == 5) {
      const minLevel = 4000 - item.exp;
      setMin(minLevel);
    }
  }, []);

  return (
    <div className="flex justify-center mt-1">
      {min ? (
        <div style={{ fontSize: item.fontSize }} className="mt-1">
          Kurang <span className="font-semibold text-blue-600">{min}XP</span>{" "}
          lagi untuk ke level berikutnya
        </div>
      ) : null}
    </div>
  );
}
