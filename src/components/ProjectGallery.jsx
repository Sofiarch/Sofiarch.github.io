import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../App';

// Define project data with simpler translations
const projectsData = {
  en: [
    {
      id: 1,
      title: "Store Dashboard",   // Simplified
      category: "Web App",
      image: "/projects/ecommerce.webp",
    },
    {
      id: 2,
      title: "Banking App",       // Simplified
      category: "Corporate Site",
      image: "/projects/finance.webp",
    },
    {
      id: 3,
      title: "Architecture",      // Simplified
      category: "Portfolio",
      image: "/projects/architecture.webp",
    },
    {
      id: 4,
      title: "AI Startup",        // Simplified
      category: "Landing Page",
      image: "/projects/tech.webp",
    },
  ],
  ar: [
    {
      id: 1,
      title: "لوحة المتجر",       // "Store Dashboard"
      category: "تطبيق ويب",
      image: "/projects/ecommerce.webp",
    },
    {
      id: 2,
      title: "تطبيق مصرفي",       // "Banking App"
      category: "موقع شركات",
      image: "/projects/finance.webp",
    },
    {
      id: 3,
      title: "تصميم معماري",      // "Architectural Design"
      category: "معرض أعمال",
      image: "/projects/architecture.webp",
    },
    {
      id: 4,
      title: "شركة ناشئة",        // "Startup"
      category: "صفحة هبوط",
      image: "/projects/tech.webp",
    },
  ]
};

const ProjectCard = ({ project, language }) => (
  <motion.div 
    dir={language === 'ar' ? 'rtl' : 'ltr'} 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col shrink-0 group relative shadow-sm dark:shadow-none transition-colors duration-500 snap-center select-none pointer-events-none md:pointer-events-auto"
  >
    {/* Browser Header (Toolbar) */}
    <div className="h-8 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center px-3 gap-1.5 transition-colors duration-500 z-10 relative" dir="ltr">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>

    {/* Project Image Area */}
    <div className="flex-1 relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy"   
        decoding="async" 
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        draggable="false" 
      />
      
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
  const { language } = useContext(LanguageContext);
  const scrollRef = useRef(null);
  
  // Drag State
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = projectsData[language] || projectsData.en;

  // --- MOUSE DRAG HANDLERS ---
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full">
      <div 
        ref={scrollRef}
        dir="ltr"
        
        // Bind Mouse Events
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}

        // CSS Classes
        className={`flex gap-6 px-4 pb-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing ${
          // Disable snapping while dragging so it feels fluid, re-enable when stopped
          isDown ? 'snap-none' : 'snap-x snap-mandatory scroll-smooth'
        }`}
        
        style={{ 
          scrollbarWidth: 'none',  /* Firefox */
          msOverflowStyle: 'none'  /* IE/Edge */
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
        
        <div className="w-4 shrink-0" />
      </div>
    </div>
  );
}