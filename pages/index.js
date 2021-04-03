import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

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
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
