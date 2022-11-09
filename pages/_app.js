import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import NavbarNew from "../components/NavbarNew";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Poppins">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
