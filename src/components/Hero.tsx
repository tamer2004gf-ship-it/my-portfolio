import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const fullText = "Hi, I'm Tamer Sawalha";
  const fullSubtitle = "| Junior DevOps Engineer & Cloud Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullSubtitle.length) {
          setSubtitle(fullSubtitle.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }, fullText.length * 100 + 300);
    return () => clearTimeout(delay);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* صندوق النص والأزرار */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            {text.split('Tamer Sawalha').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && text.includes('Tamer Sawalha') && (
                  <span className="text-[#d9534f]">Tamer Sawalha</span>
                )}
              </span>
            ))}
            <span className="animate-pulse">|</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-8"
          >
            {subtitle}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            I architect scalable, resilient infrastructure and automate deployment pipelines with precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-[#d9534f] text-white rounded-lg font-semibold hover:bg-[#c0392b] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#d9534f]/50"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-[#d9534f] text-[#d9534f] rounded-lg font-semibold hover:bg-[#d9534f] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div> {/* <-- هنا تم إغلاق صندوق النص لتجنب المشكلة */}

      {/* سهم النزول - تم إخراجه ليصبح مستقلاً في أسفل الشاشة */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button onClick={() => scrollToSection('#projects')} aria-label="Scroll down">
           <ChevronDown size={32} className="text-[#d9534f] cursor-pointer" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;