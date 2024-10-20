import Hero from "./Sections/Hero";
import PopularProduct from "./Sections/PopularProduct";
import SuperQuality  from "./Sections/SuperQuality";
import Services from "./Sections/Services";
import SpecialOffer  from "./Sections/SpecialOffer";
import CustomerReview from "./Sections/CustomerReview";
import Subscribe  from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
import Nav from "./components/Nav";



const App = () => (
  <main className="relative">
      <Nav />
    <section className="xl:padding-l 
    wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding">
      <Footer />
    </section>
  </main>
);

export default App;