import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// استيراد الصور بمسارات نسبية من مجلد assets
import project1Image from '../assets/Gemini_Generated_Image_f3tf12f3tf12f3tf.png'; // K8s Hard Way
import project2Image from '../assets/Gemini_Generated_Image_r7gtqur7gtqur7gt.png'; // CI/CD End-to-End
import project3Image from '../assets/Gemini_Generated_Image_2zdh6l2zdh6l2zdh.png'; // Google Boutique EKS
import project4Image from '../assets/Gemini_Generated_Image_rk9pabrk9pabrk9p.png'; // LGTM Stack

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Google Boutique Microservices (EKS)',
      description:
        'Advanced deployment of Google Boutique microservices on AWS EKS using Terraform, Helm, and ArgoCD for GitOps.',
      tags: ['EKS', 'Terraform', 'ArgoCD', 'AWS'],
      github: 'https://github.com/tamer2004gf-ship-it/Ops-Mastery-EKS',
      live: '#',
      image: project3Image,
    },
    {
      title: 'Kubernetes The Hard Way (AWS)',
      description:
        'Bootstrapping a high-availability Kubernetes cluster from scratch on AWS to master networking, security, and control plane components.',
      tags: ['K8s', 'AWS', 'Security', 'Linux'],
      github: 'https://github.com/tamer2004gf-ship-it/Kubernetes_The_Hard_Way',
      live: '#',
      image: project1Image,
    },
    {
      title: 'Enterprise Monitoring (LGTM Stack)',
      description:
        'Full observability implementation using Loki, Grafana, Tempo, and Mimir (LGTM) for centralized logging and metrics.',
      tags: ['Grafana', 'Prometheus', 'Loki', 'Mimir'],
      github: 'https://github.com/tamer2004gf-ship-it/mimir-LGTM-stack/tree/main/NewTech_DevOps_Nov25-main',
      live: '#',
      image: project4Image,
    },
    {
      title: 'AWS DevOps End-to-End Pipeline',
      description:
        'A complete CI/CD lifecycle automating infrastructure as code and application delivery using modern DevOps toolchains.',
      tags: ['CI/CD', 'GitHub Actions', 'Terraform', 'AWS'],
      github: 'https://github.com/tamer2004gf-ship-it/aws-devops-end-to-end',
      live: '#',
      image: project2Image,
    },
  ];

  return (
    <section
      id="projects"
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
            Featured <span className="text-[#d9534f]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#d9534f] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-[#d9534f]/50 hover:shadow-xl hover:shadow-[#d9534f]/20"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d9534f] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#d9534f]/10 text-[#d9534f] text-xs rounded-full border border-[#d9534f]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#d9534f] transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#d9534f] transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;