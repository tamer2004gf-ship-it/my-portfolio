import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Globe, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#d9534f]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9534f] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              <span className="text-white font-semibold text-xl block mb-2">DevOps Engineer</span>
              focused on architecting scalable cloud infrastructure and automating complex deployment pipelines.
            </p>
            <p>
              Driven by a problem-solving mindset and continuous learning to transform operational challenges into streamlined workflows. 
              Specializing in designing resilient cloud environments that guarantee high availability and optimal system performance.
            </p>
            <p>
              Leveraging modern Infrastructure-as-Code (IaC) and container orchestration to seamlessly align development with operations. 
              Passionate about establishing robust continuous delivery practices through advanced GitOps methodologies.
            </p>
            <p>
              Dedicated to integrating comprehensive observability and full-stack monitoring to ensure real-time system visibility. 
              Committed to implementing secure, scalable solutions that accelerate software release cycles without compromising quality.
            </p>
            <p className="text-[#d9534f] font-medium">
              Continuously exploring emerging cloud-native technologies to engineer innovative, future-proof digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Server size={32} />, title: 'Scalable Infra', desc: 'Cloud Architecting' },
              { icon: <Code2 size={32} />, title: 'GitOps / IaC', desc: 'Modern Workflows' },
              { icon: <Shield size={32} />, title: 'High Availability', desc: 'System Resilience' },
              { icon: <Globe size={32} />, title: 'Monitoring', desc: 'Full Stack Visibility' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#d9534f]/50 transition-colors group"
              >
                <div className="text-[#d9534f] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-white font-bold mb-1">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;