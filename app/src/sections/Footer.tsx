import { Github, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://t.me/pixel_dev', label: 'Telegram' },
    { icon: Mail, href: 'mailto:hello@pixeldev.ru', label: 'Email' },
  ];

  const footerLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Контакты', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#090615] border-t-2 border-[#383358]">
      {/* Top Decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E6695C] via-[#00D9FF] to-[#4ADE80]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 
              className="text-lg text-[#E6695C] mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              PIXEL DEV
            </h3>
            <p className="text-xs text-[#C4BCBD] leading-relaxed mb-4">
              Разработка Telegram ботов, веб-приложений и мобильных решений для вашего бизнеса
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#383358] border-2 border-[#383358] hover:border-[#E6695C] hover:bg-[#E6695C] transition-all group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-[#C4BCBD] group-hover:text-[#090615] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 
              className="text-xs text-white mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              НАВИГАЦИЯ
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm text-[#C4BCBD] hover:text-[#E6695C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mini */}
          <div className="text-center md:text-right">
            <h4 
              className="text-xs text-white mb-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              СВЯЗАТЬСЯ
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:hello@pixeldev.ru"
                className="block text-[#C4BCBD] hover:text-[#E6695C] transition-colors"
              >
                hello@pixeldev.ru
              </a>
              <a 
                href="https://t.me/pixel_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#C4BCBD] hover:text-[#00D9FF] transition-colors"
              >
                @pixel_dev
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#383358] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-[#C4BCBD] text-center md:text-left">
              © {currentYear} Pixel Dev. Все права защищены.
            </p>

            {/* Made With Love */}
            <p className="text-xs text-[#C4BCBD] flex items-center gap-2">
              Сделано с <Heart className="w-4 h-4 text-[#E6695C] fill-[#E6695C] animate-pulse" /> и кодом
            </p>

            {/* Pixel Art Decoration */}
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2"
                  style={{
                    background: i % 2 === 0 ? '#E6695C' : '#00D9FF',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pixel Decoration */}
      <div className="flex justify-center pb-4">
        <div className="flex gap-1">
          {['#E6695C', '#00D9FF', '#4ADE80', '#FCD34D', '#A78BFA', '#FB7185'].map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 animate-pulse"
              style={{ 
                background: color,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
