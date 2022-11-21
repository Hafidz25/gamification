import { useState, useEffect } from "react";

export function StepBar1({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 1) {
      const barWidth = (item.exp / 250) * 20;
      setBar(barWidth);
    } else if (item.lvl > 1) {
      setBar(20);
    }
  }, []);

  return (
    <>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center"
          style={{ width: `${bar}%` }}
        ></div>
      ) : null}
    </>
  );
}

export function StepBar2({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 2) {
      const barWidth = ((item.exp - 250) / 250) * 20;
      setBar(barWidth);
    } else if (item.lvl < 2) {
      setBar(0);
    } else if (item.lvl > 2) {
      setBar(20);
    }
  }, []);

  return (
    <>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center"
          style={{ width: `${bar}%` }}
        ></div>
      ) : null}
    </>
  );
}
export function StepBar3({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 3) {
      const barWidth = ((item.exp - 500) / 500) * 20;
      setBar(barWidth);
    } else if (item.lvl < 3) {
      setBar(0);
    } else if (item.lvl > 3) {
      setBar(20);
    }
  }, []);

  return (
    <>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center"
          style={{ width: `${bar}%` }}
        ></div>
      ) : null}
    </>
  );
}

export function StepBar4({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 4) {
      const barWidth = ((item.exp - 1000) / 1000) * 20;
      setBar(barWidth);
    } else if (item.lvl < 4) {
      setBar(0);
    } else if (item.lvl > 4) {
      setBar(20);
    }
  }, []);

  return (
    <>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center"
          style={{ width: `${bar}%` }}
        ></div>
      ) : null}
    </>
  );
}

export function StepBar5({ item }) {
  const [bar, setBar] = useState(null);

  useEffect(() => {
    if (item.lvl == 5) {
      const barWidth = ((item.exp - 2000) / 2000) * 20;
      setBar(barWidth);
    } else if (item.lvl < 5) {
      setBar(0);
    } else if (item.lvl > 5) {
      setBar(20);
    }
  }, []);

  return (
    <>
      {bar ? (
        <div
          className="bg-blue-600 h-2 rounded-full flex items-center"
          style={{ width: `${bar}%` }}
        ></div>
      ) : null}
    </>
  );
}
