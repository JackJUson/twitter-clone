import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import axios from "axios";
import Modal from "../components/Modal";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto text-white">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        <Modal />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const providers = await getProviders();

  // Prevents login page to show up by react flickering
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
