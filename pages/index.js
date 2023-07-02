import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="bg-gray-100 h-full w-screen">
      <Head>
        <title>Age Calculator</title>
        <meta
          name="description"
          content="Age calculator challenge from FrontEnd Mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-full pb-12 flex lg:items-center justify-center">
        <Container />
      </main>
    </div>
  );
}
