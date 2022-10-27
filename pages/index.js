import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Gamification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-10 mt-2 mb-8 py-4">
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
