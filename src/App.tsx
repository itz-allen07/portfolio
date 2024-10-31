import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = () => {
    const sections = ['about', 'gallery', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-darkGreen min-h-screen text-gold/90">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16" id="about">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-serif text-gold mb-4">Allen Mano</h1>
          <p className="text-xl text-gold/80 mb-8">
            Aspiring Developer, Lifelong Learner, and Photography Enthusiast
          </p>
        </div>
        <div className="w-full bg-[#061512] py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-gold/70 leading-relaxed">
                Driven by curiosity and an entrepreneurial spirit, I'm a student dedicated to learning, creating, and exploring new horizons. I thrive on staying updated with the world, whether it's through the latest news or capturing beautiful moments through photography. Beyond academics, my interests span coding, fitness, and physics—I'm constantly building skills that align with my long-term goal of becoming an entrepreneur and tech innovator.
              </p>
              <p className="text-gold/70 leading-relaxed mt-4">
                With a strong belief in hard work and resilience, I pursue what I love with unwavering dedication. From live streaming and managing audio in my church every Sunday to building websites and experimenting with tech, I embrace every chance to learn hands-on. As I look forward to my next steps—like pursuing a degree in computer science and joining the gym—I'm ready to face the challenges that come with creating a meaningful life and career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Contact />
    </div>
  );
}

export default App;