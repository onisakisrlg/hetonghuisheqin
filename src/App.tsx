import { Navbar, Hero, Services, About, Locations, Contact, Footer } from './components/LandingPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
