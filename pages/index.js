import Head from "next/head";
import NavbarNew from "../components/NavbarNew";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";
import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default function Index(props) {
  const data = props;
  return (
    <div>
      <Head>
        <title>Gamification - Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0">
          <NavbarNew />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-10 mt-10 lg:mt-20 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full py-8">
          <div className="lg:col-span-4 col-span-1">
            <ProfileLeft props={data} />
          </div>
          <div className="lg:col-span-8 col-span-1">
            <ProfileRight props={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
