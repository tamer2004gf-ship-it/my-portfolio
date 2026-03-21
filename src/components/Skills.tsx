import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Core Infrastructure',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Terraform', level: 88 },
        { name: 'Docker', level: 92 },
        { name: 'Kubernetes', level: 85 },
      ],
    },
    {
      category: 'System & Automation',
      skills: [
        { name: 'Linux', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Ansible', level: 82 },
        { name: 'CI/CD Pipelines', level: 90 },
      ],
    },
    {
      category: 'Observability Stack',
      skills: [
        { name: 'Grafana', level: 88 },
        { name: 'Loki', level: 85 },
        { name: 'Tempo', level: 82 },
        { name: 'Mimir', level: 80 },
      ],
    },
    {
      category: 'DevOps & Automation',
      skills: [
        { name: 'GitHub Actions', level: 92 },
        { name: 'OpenTelemetry', level: 80 },
        { name: 'Container Security', level: 85 },
        { name: 'Infrastructure Design', level: 88 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#121212] to-[#0a0a0a] relative overflow-hidden"
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
            Technical <span className="text-[#d9534f]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9534f] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-[#d9534f]/50"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-[#d9534f] text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-[#d9534f] to-[#c0392b] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
