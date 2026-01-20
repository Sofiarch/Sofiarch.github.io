import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Finance Corp",
    category: "Corporate Site",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "Urban Architecture",
    category: "Portfolio",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 4,
    title: "Tech Startup",
    category: "Landing Page",
    gradient: "from-orange-600 to-red-500",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div 
    className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-xl bg-[#111] border border-white/10 overflow-hidden flex flex-col shrink-0 group relative select-none pointer-events-none md:pointer-events-auto"
  >
    {/* Browser Header */}
    <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-3 gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>

    {/* Project Image Area */}
    <div className={`flex-1 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500 relative`}>
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white font-display">
          {project.title}
        </h3>
      </div>
    </div>
  </motion.div>
);

export default function ProjectGallery() {
  // We use this ref for the outer boundary
  const constraintsRef = useRef(null);

  return (
    // 1. Attach ref to the outer wrapper
    <div ref={constraintsRef} className="w-full overflow-hidden">
      <motion.div 
        // 2. Set drag to 'x' (horizontal)
        drag="x" 
        
        // 3. Point constraints to the outer ref. 
        // Framer Motion automatically calculates the scroll limits.
        dragConstraints={constraintsRef}
        
        // 4. touch-pan-y: Crucial for mobile. 
        // It tells the browser "Let user scroll UP/DOWN page, but I handle LEFT/RIGHT"
        className="flex gap-6 px-4 min-w-max touch-pan-y cursor-grab active:cursor-grabbing"
        
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}