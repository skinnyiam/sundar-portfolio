import Head from "next/head";
import Homepage from "@/components/HomePage/HomePage";
import { MaxWidthWrapper } from "@/components/Utils/Utils.style";

export default function Home() {
  return (
    <>
      <Head>
        <title>SAURABH SHUKLA</title>

        <link rel="icon" type="image/png" sizes="32x32" href="/portrait.JPG" />
      </Head>
      <Homepage />
    </>
  );
}
