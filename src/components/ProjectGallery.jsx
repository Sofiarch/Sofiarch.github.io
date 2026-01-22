import React, { useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../App';

// Define project data with translations internally
const projectsData = {
  en: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Web App",
      image: "/projects/ecommerce.webp",
    },
    {
      id: 2,
      title: "Finance Corp",
      category: "Corporate Site",
      image: "/projects/finance.webp",
    },
    {
      id: 3,
      title: "Urban Architecture",
      category: "Portfolio",
      image: "/projects/architecture.webp",
    },
    {
      id: 4,
      title: "Tech Startup",
      category: "Landing Page",
      image: "/projects/tech.webp",
    },
  ],
  ar: [
    {
      id: 1,
      title: "لوحة تحكم المتجر",
      category: "تطبيق ويب",
      image: "/projects/ecommerce.webp",
    },
    {
      id: 2,
      title: "فاينانس كورب",
      category: "موقع شركات",
      image: "/projects/finance.webp",
    },
    {
      id: 3,
      title: "العمارة الحديثة",
      category: "معرض أعمال",
      image: "/projects/architecture.webp",
    },
    {
      id: 4,
      title: "شركة تقنية ناشئة",
      category: "صفحة هبوط",
      image: "/projects/tech.webp",
    },
  ]
};

const ProjectCard = ({ project, language }) => (
  <motion.div 
    // --- FIX: Force card direction based on language so text aligns correctly ---
    dir={language === 'ar' ? 'rtl' : 'ltr'} 
    className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col shrink-0 group relative select-none pointer-events-none md:pointer-events-auto shadow-sm dark:shadow-none transition-colors duration-500"
  >
    {/* Browser Header (Toolbar) - Always LTR for the dots */}
    <div className="h-8 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center px-3 gap-1.5 transition-colors duration-500 z-10 relative" dir="ltr">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>

    {/* Project Image Area */}
    <div className="flex-1 relative overflow-hidden">
      {/* The Image */}
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy"   
        decoding="async" 
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1 drop-shadow-md">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white font-display drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </div>
  </motion.div>
);

export default function ProjectGallery() {
  const constraintsRef = useRef(null);
  const { language } = useContext(LanguageContext);

  // Select the correct array based on language
  const projects = projectsData[language] || projectsData.en;

  return (
    <div ref={constraintsRef} className="w-full overflow-hidden">
      <motion.div 
        // Force LTR dragging direction even in Arabic so the carousel physics work
        dir="ltr"
        drag="x" 
        dragConstraints={constraintsRef}
        className="flex gap-6 px-4 min-w-max touch-pan-y cursor-grab active:cursor-grabbing"
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </motion.div>
    </div>
  );
}