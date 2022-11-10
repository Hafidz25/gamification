import Head from "next/head";
import { useState, useEffect } from "react";
import HistoryList from "../components/HistoryList";
import NavbarNew from "../components/NavbarNew";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
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

export default function History(props) {
  const userTrans = props.user_transactions;

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
      <div className="container mx-auto px-10 mt-24 mb-8 py-4">
        <div className="bg-gray-200 rounded-lg w-full h-5/6 lg:h-128 px-4 py-4 lg:px-8 lg:py-8 shadow-lg grid">
          <div className="rounded-lg bg-white flex p-4 w-full p-4 lg:p-8 flex">
            <a href="/">
              <button
                type="button"
                className="rounded-full p-1 text-gray-400 hover:text-slate-700 transition duration-300"
              >
                <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </a>
            <h1 className="text-xl lg:text-2xl font-medium ml-4 lg:ml-6">
              History
            </h1>
          </div>
          <div className="overflow-y-auto lg:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded grid gap-4 lg:gap-8 mt-8">
            {userTrans.map((data) => (
              <HistoryList
                item={{
                  point_change: data.point_change,
                  date: data.created_at,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
