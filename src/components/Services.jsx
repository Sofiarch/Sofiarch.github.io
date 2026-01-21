import React from 'react';
import { motion } from 'framer-motion';
import ColorBends from './ColorBends';
import ProjectGallery from './ProjectGallery';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProcessStep = ({ number, title, desc, delay }) => (
  <FadeIn delay={delay} className="relative pl-8 md:pl-0">
    <div className="absolute left-0 top-2 bottom-[-2rem] w-px bg-gray-300 dark:bg-white/10 md:hidden" />
    <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 md:hidden shadow-[0_0_10px_rgba(59,130,246,1)]" />

    <div className="md:flex gap-6 items-start">
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-xl font-bold font-display text-blue-600 dark:text-blue-400 shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  </FadeIn>
);

export default function Services() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] overflow-hidden flex flex-col justify-center bg-white dark:bg-black">
        
        {/* --- Background Layer --- */}
        <div className="absolute inset-0 z-0">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <ColorBends 
              colors={["#00c3ff", "#3a8dff", "#5227ff"]}
              speed={0.2}
              rotation={45}
              warpStrength={1}
              scale={1}
              transparent
              noise={0.1}
              mouseInfluence={0}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white dark:from-black/30 dark:to-black pointer-events-none" />
        </div>

        {/* --- Content Layer --- */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-2xl"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-200 text-xl max-w-2xl mx-auto drop-shadow-lg"
          >
            Comprehensive digital solutions engineered for growth, performance, and scalability.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          
          <FadeIn delay={0.1} className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group shadow-sm dark:shadow-none">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">Custom Development</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Full-stack engineering tailored to your needs. We build websites and web applications based on your vision, business needs, and the problems you want to solve.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
              <li>• React / Next.js Architecture</li>
              <li>• High-performance Animation</li>
              <li>• SEO Optimization</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group shadow-sm dark:shadow-none">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">Complex Web Platforms</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
               Robust solutions for SaaS businesses and e-commerce. We focus on scalability, security, and creating intuitive dashboards for complex data.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
              <li>• SaaS Architecture</li>
              <li>• Real-time Data processing</li>
              <li>• Secure API Integration</li>
            </ul>
          </FadeIn>

        </div>
      </section>

      {/* PROJECT GALLERY SECTION */}
      <section className="py-24 bg-gray-100 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Drag to explore our latest work.</p>
          </FadeIn>
          
          <div className="hidden md:flex gap-2 text-gray-500 dark:text-white/50 text-sm">
            <span>&larr; Drag &rarr;</span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <ProjectGallery />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-400">Our proven process for delivering excellence.</p>
          </FadeIn>

          <div className="space-y-12">
            <ProcessStep 
              number="01" 
              title="Discovery & Strategy" 
              desc="We start by understanding your business goals, target audience, and technical requirements to build a roadmap for success." 
              delay={0.1}
            />
            <ProcessStep 
              number="02" 
              title="Design & Prototyping" 
              desc="We create high-fidelity designs and interactive prototypes, ensuring the user experience is intuitive before writing a single line of code." 
              delay={0.2}
            />
             <ProcessStep 
              number="03" 
              title="Development & Testing" 
              desc="Our engineering team builds your solution using modern frameworks, followed by rigorous testing for performance and security." 
              delay={0.3}
            />
             <ProcessStep 
              number="04" 
              title="Launch & Support" 
              desc="We handle the deployment process and provide ongoing support to ensure your platform runs smoothly as you scale." 
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </>
  );
}