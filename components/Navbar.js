import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className={`mx-4 hover:bg-gray-300 px-3 py-2 rounded-lg transition duration-500 font-sans font-medium text-slate-700 hover:text-slate-900`}
    >
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-bold" href="/">
          <img src="/logo-new.png" style={{ width: "120px" }} />
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-normal my-2 mx-1 hover:bg-gray-300 px-2 py-2 rounded-lg transition duration-500"
          href="/a"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-2 mx-1 hover:bg-gray-300 px-2 py-2 rounded-lg transition duration-500"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-2 mx-1 hover:bg-gray-300 px-2 py-2 rounded-lg transition duration-500"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-6 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-4/12 flex items-center">
        <a className="text-2xl font-bold px-3" href="/">
          <img src="/logo-new.png" style={{ width: "180px" }} />
        </a>
      </div>
      <div className="w-8/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}
