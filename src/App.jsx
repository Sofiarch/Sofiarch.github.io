import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DarkVeil from './components/DarkVeil';

function App() {
  // Animation variants for the text stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each letter/word
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const headline = "Code. Create. Innovate.".split(" ");

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />

      <main className="flex-grow pt-16">
        <section className="h-[80vh] w-full relative">
          <DarkVeil
            hueShift={400} // Blue/Cyberpunk tint
            noiseIntensity={0.03}
            scanlineIntensity={0.05}
            speed={0.5}
            warpAmount={1.5}
            fullScreen={false} // Keeps it contained within this section
          >
            {/* Hero Content */}
            <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
              
              {/* Animated Company Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm md:text-base mb-2 block">
                  Welcome to LineX
                </span>
              </motion.div>

              {/* Staggered Headline Animation */}
              <motion.h1 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter"
              >
                {headline.map((word, index) => (
                  <motion.span 
                    key={index} 
                    variants={childVariants} 
                    className="inline-block mr-3 md:mr-5"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle Fade In */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                We build high-performance digital experiences for the modern web.
                From Iraq to the world.
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                >
                  Start a Project
                </a>
                <a
                  href="#services"
                  className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all backdrop-blur-sm"
                >
                  Our Services
                </a>
              </motion.div>
            </div>
          </DarkVeil>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;