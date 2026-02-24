import { useEffect, useRef, useState } from 'react';
import { Bot, Globe, Smartphone, MessageSquare, Database, Settings } from 'lucide-react';

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bot,
      title: 'Telegram Боты',
      description: 'Автоматизация бизнес-процессов, чат-боты для поддержки клиентов, интеграция с CRM и платёжными системами',
      features: ['AI-ассистенты', 'Магазины в ботах', 'Авторассылки', 'Аналитика'],
      color: '#E6695C',
      price: 'от 15 000 ₽',
    },
    {
      icon: Globe,
      title: 'Веб-Приложения',
      description: 'Современные веб-приложения на React, Next.js с интерактивным интерфейсом и высокой производительностью',
      features: ['SPA приложения', 'Dashboard панели', 'Landing pages', 'API интеграции'],
      color: '#00D9FF',
      price: 'от 30 000 ₽',
    },
    {
      icon: Smartphone,
      title: 'Мобильные Приложения',
      description: 'Кроссплатформенные мобильные приложения на React Native для iOS и Android',
      features: ['iOS & Android', 'Push-уведомления', 'Офлайн-режим', 'Синхронизация'],
      color: '#4ADE80',
      price: 'от 50 000 ₽',
    },
    {
      icon: MessageSquare,
      title: 'Интеграции API',
      description: 'Подключение сторонних сервисов и API для расширения функциональности ваших приложений',
      features: ['REST API', 'GraphQL', 'Webhooks', 'OAuth'],
      color: '#FCD34D',
      price: 'от 10 000 ₽',
    },
    {
      icon: Database,
      title: 'Базы Данных',
      description: 'Проектирование и оптимизация баз данных для хранения и обработки больших объёмов данных',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'Миграции'],
      color: '#A78BFA',
      price: 'от 8 000 ₽',
    },
    {
      icon: Settings,
      title: 'Поддержка & DevOps',
      description: 'Техническая поддержка, развёртывание на серверах, мониторинг и оптимизация',
      features: ['Docker', 'CI/CD', 'Мониторинг', 'Бэкапы'],
      color: '#FB7185',
      price: 'от 5 000 ₽/мес',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 md:py-32 bg-[#383358]/30"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090615] via-transparent to-[#090615]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-[#383358] border-2 border-[#E6695C] mb-6">
            <span className="text-[10px] text-[#E6695C] uppercase tracking-widest">
              УСЛУГИ
            </span>
          </div>
          <h2 className="section-title text-center mb-4">
            ЧТО Я ДЕЛАЮ?
          </h2>
          <p className="text-[#C4BCBD] text-sm max-w-2xl mx-auto">
            Полный спектр услуг по разработке цифровых решений для вашего бизнеса
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`pixel-card group transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 flex items-center justify-center mb-4 border-2 border-[#090615] transition-transform group-hover:scale-110"
                style={{ background: service.color }}
              >
                <service.icon className="w-6 h-6 text-[#090615]" />
              </div>

              {/* Title */}
              <h3 
                className="text-sm mb-3 text-white group-hover:text-[#E6695C] transition-colors"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#C4BCBD] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="text-[10px] px-2 py-1 bg-[#090615] text-[#C4BCBD] border border-[#383358]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div 
                className="text-xs pt-4 border-t border-[#383358]"
                style={{ fontFamily: "'Press Start 2P', cursive", color: service.color }}
              >
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#C4BCBD] text-sm mb-6">
            Не нашли нужную услугу? Напишите мне — обсудим ваш проект!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="pixel-btn inline-block"
          >
            ОБСУДИТЬ ПРОЕКТ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
