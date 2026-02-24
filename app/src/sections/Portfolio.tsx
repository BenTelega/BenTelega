import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Bot, Globe, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'ShopBot Pro',
      category: 'bot',
      description: 'Telegram бот для интернет-магазина с каталогом, корзиной и оплатой',
      image: '🛒',
      tags: ['Node.js', 'Telegraf', 'PostgreSQL'],
      stats: { users: '2.5K', orders: '10K+' },
      color: '#E6695C',
    },
    {
      title: 'TaskManager API',
      category: 'web',
      description: 'REST API для управления задачами с авторизацией и real-time обновлениями',
      image: '📋',
      tags: ['Python', 'FastAPI', 'Redis', 'WebSockets'],
      stats: { requests: '1M+', uptime: '99.9%' },
      color: '#00D9FF',
    },
    {
      title: 'CryptoTracker',
      category: 'app',
      description: 'Мобильное приложение для отслеживания криптовалютных портфелей',
      image: '📱',
      tags: ['React Native', 'Redux', 'CoinGecko API'],
      stats: { downloads: '5K+', rating: '4.8★' },
      color: '#4ADE80',
    },
    {
      title: 'SupportBot AI',
      category: 'bot',
      description: 'AI-бот для автоматической поддержки клиентов с интеграцией GPT',
      image: '🤖',
      tags: ['Python', 'OpenAI', 'MongoDB'],
      stats: { dialogs: '50K+', satisfaction: '92%' },
      color: '#FCD34D',
    },
    {
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Интерактивная панель аналитики с визуализацией данных',
      image: '📊',
      tags: ['React', 'D3.js', 'Node.js'],
      stats: { charts: '50+', dataPoints: '1M+' },
      color: '#A78BFA',
    },
    {
      title: 'Delivery App',
      category: 'app',
      description: 'Приложение для службы доставки с отслеживанием заказов',
      image: '🚚',
      tags: ['React Native', 'Firebase', 'Maps API'],
      stats: { deliveries: '20K+', drivers: '150+' },
      color: '#FB7185',
    },
  ];

  const filters = [
    { key: 'all', label: 'ВСЕ', icon: null },
    { key: 'bot', label: 'БОТЫ', icon: Bot },
    { key: 'web', label: 'WEB', icon: Globe },
    { key: 'app', label: 'APPS', icon: Smartphone },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-20 md:py-32 bg-[#383358]/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-[#383358] border-2 border-[#E6695C] mb-6">
            <span className="text-[10px] text-[#E6695C] uppercase tracking-widest">
              ПОРТФОЛИО
            </span>
          </div>
          <h2 className="section-title text-center mb-4">
            МОИ РАБОТЫ
          </h2>
          <p className="text-[#C4BCBD] text-sm max-w-2xl mx-auto">
            Некоторые из проектов, которые я разработал для своих клиентов
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-[10px] border-2 transition-all ${
                filter === f.key
                  ? 'bg-[#E6695C] border-[#E6695C] text-[#090615]'
                  : 'bg-transparent border-[#383358] text-[#C4BCBD] hover:border-[#E6695C]'
              }`}
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              <span className="flex items-center gap-2">
                {f.icon && <f.icon className="w-3 h-3" />}
                {f.label}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`pixel-card group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Project Icon/Emoji */}
              <div 
                className="w-full h-32 flex items-center justify-center text-6xl mb-4 border-2 border-[#090615] relative overflow-hidden"
                style={{ background: `${project.color}20` }}
              >
                <span className="relative z-10">{project.image}</span>
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ background: project.color }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#090615]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 flex items-center justify-center bg-[#E6695C] hover:bg-[#00D9FF] transition-colors">
                    <ExternalLink className="w-5 h-5 text-[#090615]" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#C4BCBD] hover:bg-[#4ADE80] transition-colors">
                    <Github className="w-5 h-5 text-[#090615]" />
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-xs mb-2 text-white group-hover:text-[#E6695C] transition-colors"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] text-[#C4BCBD] leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[9px] px-2 py-1 bg-[#090615] text-[#C4BCBD]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-4 pt-3 border-t border-[#383358]">
                {Object.entries(project.stats).map(([key, value], sIndex) => (
                  <div key={sIndex} className="text-center">
                    <div 
                      className="text-[10px]"
                      style={{ color: project.color, fontFamily: "'Press Start 2P', cursive" }}
                    >
                      {value}
                    </div>
                    <div className="text-[8px] text-[#C4BCBD] uppercase">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            БОЛЬШЕ НА GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
