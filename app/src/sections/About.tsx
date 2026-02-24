import { useEffect, useRef, useState } from 'react';
import { Terminal, Gamepad2, Coffee, Rocket } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Terminal,
      title: 'Чистый код',
      description: 'Пишу поддерживаемый и масштабируемый код с документацией',
      color: '#E6695C',
    },
    {
      icon: Gamepad2,
      title: 'Геймерский Подход',
      description: 'Подхожу к разработке как к игре — с увлечённостью и целеустремлённостью',
      color: '#00D9FF',
    },
    {
      icon: Coffee,
      title: '24/7 Поддержка',
      description: 'Всегда на связи с клиентами для оперативного решения вопросов',
      color: '#4ADE80',
    },
    {
      icon: Rocket,
      title: 'Быстрый Запуск',
      description: 'Оптимизированные процессы разработки для скорейшего результата',
      color: '#FCD34D',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 bg-[#090615]"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #E6695C 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-[#383358] border-2 border-[#E6695C] mb-6">
            <span className="text-[10px] text-[#E6695C] uppercase tracking-widest">
              ОБО МНЕ
            </span>
          </div>
          <h2 className="section-title text-center">
            КТО Я ТАКОЙ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character with Speech Bubble */}
          <div className={`relative flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Speech Bubble */}
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-white border-2 border-[#090615] p-4 max-w-[200px] sm:max-w-[250px]">
                <p className="text-[10px] sm:text-xs text-[#090615] leading-relaxed" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  ПРИВЕТ! Я СОЗДАЮ БОТОВ И ПРИЛОЖЕНИЯ КОТОРЫЕ РЕШАЮТ РЕАЛЬНЫЕ ЗАДАЧИ!
                </p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-3 left-4 w-4 h-4 bg-white border-r-2 border-b-2 border-[#090615] rotate-45" />
              </div>

              {/* Character */}
              <img
                src="/images/EF065D05-34CD-4DC4-915E-2B27BCD3FB92.jpg"
                alt="Pixel Developer"
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
              />

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#E6695C] animate-pulse" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#00D9FF] animate-bounce" />
            </div>
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="pixel-card mb-8">
              <p className="text-[#C4BCBD] leading-relaxed mb-4 text-sm">
                Я — разработчик с более чем 5-летним опытом создания цифровых решений. 
                Специализируюсь на разработке Telegram ботов, веб-приложений и мобильных приложений.
              </p>
              <p className="text-[#C4BCBD] leading-relaxed mb-4 text-sm">
                Моя философия проста: каждый проект — это возможность создать что-то 
                уникальное и полезное. Я не просто пишу код, я решаю задачи бизнеса 
                с помощью технологий.
              </p>
              <p className="text-[#E6695C] text-xs" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                LET&apos;S BUILD SOMETHING AWESOME!
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`pixel-card group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center mb-3 border-2 border-[#090615]"
                    style={{ background: feature.color }}
                  >
                    <feature.icon className="w-5 h-5 text-[#090615]" />
                  </div>
                  <h3 
                    className="text-xs mb-2 text-white"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-[#C4BCBD] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
