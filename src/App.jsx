import { Navbar, Hero, NewTab, LongText, Partners, Platforms, Subscription, NewsLetter, Footer } from './components';

const App = () =>  (
    <div className="bg-black w-full overflow-hidden"> 
      <div className="md:container md:mx-auto">
        <Navbar />
        <Hero />
      </div>

      <section className="bg-primary flex justify-center items-center">
        <NewTab />
      </section>

      <section className="bg-white">
        <LongText />
      </section>

      <section className="bg-white">
        <Partners />
      </section>

      <section className="bg-gray400">
        <Platforms />
      </section>

      <section className="bg-black text-white">
        <Subscription />
      </section>

      <section className="bg-primary flex justify-center items-center">
        <NewsLetter />
      </section>

      <footer className=" bg-white">
        <Footer />
      </footer>
    </div>
  )

export default App