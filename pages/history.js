import Head from "next/head";
import { useState, useEffect } from "react";
import HistoryList from "../components/HistoryList";
import NavbarNew from "../components/NavbarNew";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export async function getStaticProps() {
  const idUser = 1

  const reqUserTransaction = await fetch(process.env.NEXT_PUBLIC_APIURL + `/api/ustrans/user_id/${idUser}?order_by=`)
  const user_transaction = await reqUserTransaction.json()

  return {
    props: user_transaction
  };
}

export default function History(props) {
  const userHistory = props.data

  return (
    <div>
      <Head>
        <title>Gamification - History</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0">
          <NavbarNew />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-10 mt-16 lg:mt-24 mb-8 py-4">
        <div className="bg-gray-200 rounded-lg w-full h-156 lg:h-128 p-2 lg:p-6 shadow-lg grid">
          <div className="rounded-lg bg-white flex items-center px-4 w-full lg:p-8">
            <a href="/">
              <button
                type="button"
                className="rounded-full p-1 text-gray-400 hover:text-slate-900 transition duration-300"
              >
                <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </a>
            <h1 className="text-xl lg:text-2xl font-medium ml-4 lg:ml-6">
              History
            </h1>
          </div>
          <div className="overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded grid gap-2 lg:gap-4 mt-4 lg:mt-8">
            {userHistory.map((data) => (
              <HistoryList
                item={{
                  point_change: data.point_change,
                  date: data.created_at,
                  status: data.status,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
