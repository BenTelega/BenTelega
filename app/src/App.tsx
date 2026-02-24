import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import PixelParticles from './components/PixelParticles';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090615] overflow-x-hidden">
      {/* Pixel Particles Background */}
      <PixelParticles />
      
      {/* Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-30" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
