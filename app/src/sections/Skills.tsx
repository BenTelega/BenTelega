import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Языки Программирования',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Go', level: 70 },
      ],
    },
    {
      title: 'Фреймворки & Библиотеки',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Telegraf.js', level: 95 },
        { name: 'React Native', level: 80 },
      ],
    },
    {
      title: 'Базы Данных',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 75 },
      ],
    },
    {
      title: 'Инструменты & DevOps',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Linux / Bash', level: 80 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Telegram API',
    'REST API', 'GraphQL', 'Git', 'Linux', 'AWS',
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 md:py-32 bg-[#090615]"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1C6890 1px, transparent 1px),
            linear-gradient(to bottom, #1C6890 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-[#383358] border-2 border-[#E6695C] mb-6">
            <span className="text-[10px] text-[#E6695C] uppercase tracking-widest">
              НАВЫКИ
            </span>
          </div>
          <h2 className="section-title text-center mb-4">
            МОЙ СТЕК
          </h2>
          <p className="text-[#C4BCBD] text-sm max-w-2xl mx-auto">
            Технологии и инструменты, которые я использую для создания качественных решений
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, cIndex) => (
            <div
              key={cIndex}
              className={`pixel-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + cIndex * 100}ms` }}
            >
              <h3 
                className="text-xs mb-6 text-[#E6695C]"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-[#C4BCBD]">{skill.name}</span>
                      <span className="text-xs text-[#E6695C]">{skill.level}%</span>
                    </div>
                    <div className="pixel-progress">
                      <div 
                        className="pixel-progress-bar"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${400 + cIndex * 100 + sIndex * 50}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 
            className="text-xs mb-6 text-white"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            ТЕХНОЛОГИИ
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="pixel-tag hover:bg-[#E6695C] hover:scale-110 transition-all cursor-default"
                style={{ transitionDelay: `${800 + index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'Строк кода', value: '100K+' },
            { label: 'Чашек кофе', value: '999+' },
            { label: 'Коммитов', value: '5K+' },
            { label: 'Багов исправлено', value: '∞' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-[#383358]/30 border border-[#383358]"
            >
              <div 
                className="text-lg text-[#E6695C] mb-1"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-[#C4BCBD]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
