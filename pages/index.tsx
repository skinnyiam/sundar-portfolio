import Head from "next/head";
import Homepage from "@/components/HomePage/HomePage";
import { MaxWidthWrapper } from "@/components/Utils/Utils.style";

export default function Home() {
  return (
    <>
      {/* <MaxWidthWrapper> */}
      {/* <Layout> */}
      <Head>
        <title>SAURABH SHUKLA</title>
        {/* <link rel="icon" href="/portrait_favicon.JPG" /> */}
      </Head>
      {/* <Navbar /> */}
      <Homepage />
      {/* <Footer /> */}
      {/* </Layout> */}
      {/* </MaxWidthWrapper> */}
    </>
  );
}
