import { useState, useEffect } from "react";

export default function ProgressBar({ item }) {
  const [progress, setProgress] = useState(null);
  useEffect(() => {
    if (item.lvl == 1) {
      const pgrs = (item.exp / 250) * 100;
      setProgress(pgrs);
    } else if (item.lvl == 2) {
      const pgrs = ((item.exp - 250) / 250) * 100;
      setProgress(pgrs);
    } else if (item.lvl == 3) {
      const pgrs = ((item.exp - 500) / 500) * 100;
      setProgress(pgrs);
    }
  }, []);

  return (
    <div>
      {progress ? (
        <div
          className="bg-blue-600 h-3 rounded-full flex justify-center items-center text-white"
          style={{ width: `${progress}%`, fontSize: "10px" }}
        >
          {progress}%
        </div>
      ) : null}
    </div>
  );
}
