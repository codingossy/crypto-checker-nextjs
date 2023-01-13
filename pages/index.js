import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import HeroHome from "../components/homescreen/HeroHome";
import Stories from "../components/stories/Stories";
import Crypto from "../components/crypto/Crypto";

const inter = Inter({ subsets: ["latin"] });

// pass the coins prop to home
export default function Home( { coins }) {

  // console.log(coins)

  return (
    <>
      <Head>
        <title>Crypto checker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Layout>
          <HeroHome />
          <Crypto coins={coins.coins} />
          <Stories />
        </Layout>
      </>
    </>
  );
}


// get static prop cant be used in a componet
// must be used in a page

export const getStaticProps = async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=50')

  const data = await response.json()

  // return a prop thats accessible to the home component
  // coins can be any name

  return {
    props: {
      coins: data
    }
  }
}