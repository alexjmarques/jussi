

import { Header, Footer, Newsletter } from "../components/global";
import { Banner, Companies, Solutions, About, Contact } from "../components/home";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Companies />
      <Solutions />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}
