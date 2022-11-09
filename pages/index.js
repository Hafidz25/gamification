import Head from "next/head";
import NavbarNew from "../components/NavbarNew";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Gamification - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0">
          <NavbarNew />
        </div>
      </div>
      <div className="container mx-auto px-10 mt-20 mb-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full py-8">
          <div className="lg:col-span-4 col-span-1">
            <ProfileLeft />
          </div>
          <div className="lg:col-span-8 col-span-1">
            <ProfileRight />
          </div>
        </div>
      </div>
    </div>
  );
}
