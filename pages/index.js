import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";

import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ibrahim Firat | Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
