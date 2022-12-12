import Head from "next/head";
import BadgeCard from "../components/BadgeCard";
import BadgeCardRegular from "../components/BadgeCardRegular";
import NavbarNew from "../components/NavbarNew";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export async function getStaticProps() {
  const idUser = 1

  const reqBadges = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/badges`)
  const badges = await reqBadges.json()

  const reqUserBadges = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/user_badges/user_id/${idUser}`)
  const userBadges = await reqUserBadges.json()

  return {
    props: { badges: badges.data, userBadges: userBadges.data }
  };
}

export default function Badge(props) {
  const badges = props.badges;
  const userBadges = props.userBadges;


  const filterBadges = badges.map((data) => {
    const ownedBadges = userBadges.length > 0 ? userBadges.filter((obj) => obj.badge_id == data.id) : 0
    const claimedBadges = ownedBadges.map((data) => data.is_claimed)
    const cekStatus = ownedBadges.length > 0 ? true : false
    const cekClaim = claimedBadges == 1 ? true : false

    return {
      id: data.id,
      name: data.name,
      img: data.img,
      bp: data.bp,
      desc: data.desc,
      status: {
        is_owned: cekStatus,
        is_claimed: cekClaim
      }
    }
  })

  // console.log(filterBadges)

  return (
    <div>
      <Head>
        <title>Gamification - Badge</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0">
          <NavbarNew />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-10 mt-16 lg:mt-24 mb-4 py-4">
        <div className="bg-gray-200 rounded-lg w-full h-full p-2 lg:p-6 shadow-lg grid">
          <div className="rounded-lg bg-white flex w-full p-4 lg:p-8">
            <a href="/">
              <button
                type="button"
                className="rounded-full p-1 text-gray-400 hover:text-slate-900 transition duration-300"
              >
                <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </a>
            <h1 className="text-xl lg:text-2xl font-medium ml-4 lg:ml-6">
              Badges
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 w-full mt-8">
            {filterBadges.map((data) => (
              <div className="flex justify-center">
                <BadgeCardRegular
                  item={{
                    id: data.id,
                    name: data.name,
                    img: data.img,
                    desc: data.desc,
                    bp: data.bp,
                    status: data.status,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
