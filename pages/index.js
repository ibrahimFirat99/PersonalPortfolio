import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ibrahim Firat | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <p>MAIN</p>
      </main>
      <Footer />
    </div>
  );
}
