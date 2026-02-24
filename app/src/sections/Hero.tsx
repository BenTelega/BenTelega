import { useState } from 'react';
import { ChevronDown, Code2, Bot, Smartphone } from 'lucide-react';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090615] via-[#383358] to-[#090615]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E6695C 1px, transparent 1px),
            linear-gradient(to bottom, #E6695C 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Character Image */}
          <div className="relative float-animation">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#E6695C] rounded-full blur-3xl opacity-20" />
              
              {/* Character */}
              <img
                src="/images/8CF53654-F98C-4A39-9974-665601588427.jpg"
                alt="Pixel Developer"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#383358] border-2 border-[#E6695C] flex items-center justify-center animate-bounce">
                <Code2 className="w-5 h-5 text-[#E6695C]" />
              </div>
              <div className="absolute top-1/4 -left-6 w-10 h-10 bg-[#383358] border-2 border-[#00D9FF] flex items-center justify-center animate-pulse">
                <Bot className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="absolute -bottom-2 right-1/4 w-10 h-10 bg-[#383358] border-2 border-[#4ADE80] flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Smartphone className="w-5 h-5 text-[#4ADE80]" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-[#383358] border-2 border-[#E6695C]">
              <span className="text-[10px] sm:text-xs text-[#E6695C] uppercase tracking-widest">
                Разработчик ботов и приложений
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 leading-relaxed">
              <Typewriter
                text="ПРИВЕТ, Я"
                speed={60}
                delay={300}
              />
              <br />
              <span className="text-[#E6695C] glitch">
                <Typewriter
                  text="PIXEL DEV"
                  speed={80}
                  delay={800}
                  onComplete={() => setShowSubtitle(true)}
                />
              </span>
            </h1>

            {/* Subtitle */}
            {showSubtitle && (
              <p className="text-sm sm:text-base text-[#C4BCBD] mb-8 leading-relaxed">
                <Typewriter
                  text="Создаю Telegram ботов, веб-приложения и мобильные решения с любовью к коду"
                  speed={30}
                  delay={200}
                />
              </p>
            )}

            {/* CTA Buttons */}
            {showSubtitle && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="pixel-btn"
                >
                  НАЧАТЬ ПРОЕКТ
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="pixel-btn"
                  style={{
                    background: 'transparent',
                    color: '#C4BCBD',
                    borderColor: '#C4BCBD',
                  }}
                >
                  ПОРТФОЛИО
                </a>
              </div>
            )}

            {/* Stats */}
            {showSubtitle && (
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
                {[
                  { value: '50+', label: 'Проектов' },
                  { value: '30+', label: 'Клиентов' },
                  { value: '5+', label: 'Лет опыта' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-[#383358]/50 border border-[#383358]"
                  >
                    <div className="text-lg sm:text-xl text-[#E6695C] mb-1" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#C4BCBD]">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C4BCBD] hover:text-[#E6695C] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
