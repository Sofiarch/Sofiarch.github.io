import React from 'react';
import { motion } from 'framer-motion';
import Squares from './Squares';

// --- Reusable FadeIn ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      {/* Changed min-h-[60vh] to min-h-[90vh] to match Home/About */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-black">
        
        {/* Background Layer (Squares) */}
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.1} 
            squareSize={80} 
            direction="diagonal" 
            borderColor="#333" 
            hoverFillColor="#222" 
          />
        </div>

        {/* Content Layer */}
        <div className="max-w-4xl mx-auto text-center relative z-10 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Contact Us
          </motion.h1>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Let's build something extraordinary together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- FORM & CONTACT INFO SECTION --- */}
      <section className="py-20 px-6 bg-black relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Direct Contact Info & Explanation */}
          <div className="mb-16 grid md:grid-cols-2 gap-8">
            
            {/* Left: Text Explanation */}
            <FadeIn delay={0.1} className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white font-display mb-4">
                Get in touch directly
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Prefer to skip the form? No problem. You can reach out to us directly via email or phone. 
                Whether you have a quick question or a detailed project proposal, we are always ready to chat.
              </p>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </FadeIn>

            {/* Right: Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <FadeIn delay={0.2}>
                <a href="mailto:hello@linex.com" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-white/5 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">hello@linex.com</div>
                  </div>
                </a>
              </FadeIn>

              {/* Phone Card */}
              <FadeIn delay={0.3}>
                <a href="tel:+9640000000000" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-white/5 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                    <div className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">+964 000 000 0000</div>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>

          {/* 2. Contact Form */}
          <FadeIn delay={0.4} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Glow inside form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <form className="space-y-8 relative z-10">
              
              {/* Row 1: Name (Full Width) */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Phone Number <span className="text-gray-600 font-normal">(Optional)</span></label>
                  <input type="tel" placeholder="+964 770..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" />
                </div>
              </div>

              {/* Row 3: Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                <textarea rows="5" placeholder="Tell us about your project, goals, and timeline..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </FadeIn>

        </div>
      </section>
    </>
  );
}