import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cloud, GitBranch, Terminal } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Expert in Terraform and CloudFormation',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS, Azure, and GCP certified',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Jenkins, GitLab CI, GitHub Actions',
    },
    {
      icon: Terminal,
      title: 'Automation',
      description: 'Python, Bash, and Ansible scripting',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE1MTUxNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Junior DevOps Engineer dedicated to building scalable, resilient infrastructure and automating complex deployment pipelines. With a strong foundation in cloud technologies and modern DevOps practices, I bridge the gap between development and operations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on continuous self-learning and tackling tough challenges in cloud environments. My focus is on leveraging modern infrastructure-as-code and containerization tools to bridge the gap between development and operations, ensuring seamless and secure digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#d9534f]/50 group"
              >
                <item.icon className="w-8 h-8 text-[#d9534f] mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
