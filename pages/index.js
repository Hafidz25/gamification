import Head from "next/head";
import NavbarNew from "../components/NavbarNew";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

export async function getStaticProps() {
  const idUser = 1

  const reqUser = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/user/${idUser}`)
  const user = await reqUser.json()

  const reqBadges = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/user_badges/user_id/${idUser}`)
  const badges = await reqBadges.json()

  const reqUserTransaction = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/ustrans/user_id/${idUser}?order_by=`)
  const user_transaction = await reqUserTransaction.json()

  return {
    props: { user: user, badges: badges, user_transaction: user_transaction }
  };
}

export default function Index(props) {
  const data = props;
  // console.log(data)
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
      <div className="container mx-auto p-4 lg:px-10 mt-10 lg:mt-20 ">
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
