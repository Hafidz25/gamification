import Head from "next/head";
import HistoryList from "../components/HistoryList";

export default function History() {
  return (
    <div className="container mx-auto px-10 mt-8 mb-8 py-4">
      <Head>
        <title>Gamification - History</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-white rounded-lg w-full h-156 lg:h-128 px-4 py-4 lg:px-8 lg:py-8 shadow-lg grid overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded">
        <div className="rounded-lg bg-gray-200 flex p-4 w-full h-20"></div>
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
      </div>
    </div>
  );
}
