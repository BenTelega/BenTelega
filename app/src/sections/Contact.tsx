import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MessageCircle, MapPin, Copy, Check } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@pixel_dev',
      link: 'https://t.me/pixel_dev',
      color: '#00D9FF',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@pixeldev.ru',
      link: 'mailto:hello@pixeldev.ru',
      color: '#E6695C',
    },
    {
      icon: MapPin,
      label: 'Локация',
      value: 'Удалённо / Москва',
      link: null,
      color: '#4ADE80',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 md:py-32 bg-[#090615]"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #E6695C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-[#383358] border-2 border-[#E6695C] mb-6">
            <span className="text-[10px] text-[#E6695C] uppercase tracking-widest">
              КОНТАКТЫ
            </span>
          </div>
          <h2 className="section-title text-center mb-4">
            ДАВАЙТЕ РАБОТАТЬ!
          </h2>
          <p className="text-[#C4BCBD] text-sm max-w-2xl mx-auto">
            Готов обсудить ваш проект и предложить оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="pixel-card">
              <h3 
                className="text-xs mb-6 text-white"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                ОТПРАВИТЬ СООБЩЕНИЕ
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-[#4ADE80] text-sm mb-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                    ОТПРАВЛЕНО!
                  </h4>
                  <p className="text-[#C4BCBD] text-xs">
                    Спасибо! Я свяжусь с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-[#C4BCBD] mb-2 uppercase">
                      Ваше Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#090615] border-2 border-[#383358] text-white text-sm focus:border-[#E6695C] focus:outline-none transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#C4BCBD] mb-2 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#090615] border-2 border-[#383358] text-white text-sm focus:border-[#E6695C] focus:outline-none transition-colors"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#C4BCBD] mb-2 uppercase">
                      Сообщение
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#090615] border-2 border-[#383358] text-white text-sm focus:border-[#E6695C] focus:outline-none transition-colors resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pixel-btn w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">ОТПРАВКА</span>
                        <span className="animate-bounce">...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        ОТПРАВИТЬ
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="pixel-card group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center border-2 border-[#090615] flex-shrink-0"
                    style={{ background: info.color }}
                  >
                    <info.icon className="w-6 h-6 text-[#090615]" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 
                      className="text-[10px] text-[#C4BCBD] mb-1"
                      style={{ fontFamily: "'Press Start 2P', cursive" }}
                    >
                      {info.label}
                    </h4>
                    
                    <div className="flex items-center gap-2">
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-white hover:text-[#E6695C] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm text-white">{info.value}</span>
                      )}
                      
                      <button
                        onClick={() => copyToClipboard(info.value, info.label)}
                        className="p-1 text-[#C4BCBD] hover:text-[#E6695C] transition-colors"
                        title="Копировать"
                      >
                        {copied === info.label ? (
                          <Check className="w-4 h-4 text-[#4ADE80]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="pixel-card">
              <h4 
                className="text-[10px] text-[#C4BCBD] mb-4"
                style={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                РЕЖИМ РАБОТЫ
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#C4BCBD]">Пн - Пт</span>
                  <span className="text-white">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#C4BCBD]">Сб - Вс</span>
                  <span className="text-white">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#383358]">
                  <span className="text-[#C4BCBD]">Часовой пояс</span>
                  <span className="text-[#E6695C]">МСК (UTC+3)</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="pixel-card bg-[#E6695C]/10 border-[#E6695C]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#4ADE80] rounded-full animate-pulse" />
                <span className="text-sm text-white">
                  Обычно отвечаю в течение 1 часа
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
