import React from 'react';
import { motion } from 'framer-motion';
import Aurora from './Aurora';

export default function About() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Background Layer (Aurora) --- */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Aurora
          colorStops={["#00c3ff", "#3a8dff", "#5227FF"]} // LineX Brand Colors
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            About LineX
          </h1>
          <p className="text-gray-200 text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            We are a team of visionaries, creators, and engineers dedicated to redefining the digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}