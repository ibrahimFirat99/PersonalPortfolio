import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

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
      </main>
      <Footer />
    </div>
  );
}
