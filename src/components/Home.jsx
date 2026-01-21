import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import DarkVeil from './DarkVeil';
import { ThemeContext } from '../App';

// --- Reusable Animation Wrapper ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Sub-Components ---
const ServiceCard = ({ title, children, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300 h-full group shadow-sm dark:shadow-none">
      <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  </FadeIn>
);

const BenefitItem = ({ title, children, delay }) => (
  <FadeIn delay={delay} className="flex flex-col gap-3">
    <div className="w-12 h-1 bg-blue-600 rounded-full mb-2" />
    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {children}
    </p>
  </FadeIn>
);

export default function Home() {
  const { theme } = useContext(ThemeContext);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };

  const headline = "Code Create Innovate".split(" ");

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="h-[90vh] w-full relative overflow-hidden bg-white dark:bg-black transition-colors duration-700">
        
        {/* Background Layer (DarkVeil) */}
        {/* We use CSS filters to invert the dark canvas to white for light mode */}
        {/* Updated duration to 700 to match App.jsx global transition */}
        <div 
          className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${
            theme === 'light' 
              ? 'invert hue-rotate-180 opacity-60' 
              : 'opacity-100'
          }`}
        >
          <DarkVeil
            hueShift={400}
            noiseIntensity={0.03}
            scanlineIntensity={0.05}
            speed={0.5}
            warpAmount={1.5}
            fullScreen={false}
          >
            <div /> 
          </DarkVeil>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 pt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm md:text-base mb-2 block">
                Welcome to LineX
              </span>
            </motion.div>

            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter"
            >
              {headline.map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={childVariants} 
                  className="inline-block mr-3 md:mr-6"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-8"
            >
              We build high-performance digital experiences for the modern web.
              From Iraq to the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
                Start a Project
              </a>
              <a href="#services" className="bg-white dark:bg-transparent border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all">
                Our Services
              </a>
            </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-white dark:bg-black relative z-10 transition-colors duration-700">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-20 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto md:mx-0" />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Custom Development" delay={0.1}>
              Website development services that cover full-stack engineering tailored to your needs. 
              We build websites and web applications based on your vision, business needs, and the 
              problems you want to solve.
            </ServiceCard>

            <ServiceCard title="Complex Web Platforms" delay={0.2}>
              If you need a web application that is fast and interactive, you’ve come to the right place. 
              We provide web application development services to SaaS businesses, e-commerce platforms, 
              and companies requiring custom solutions.
            </ServiceCard>

            <ServiceCard title="Corporate Websites" delay={0.3}>
              If you want to boost your company’s image with an effective site, we can build one for you. 
              LineX offers web development services of any complexity, whether you require tweaking 
              features or creating a large-scale data-driven project.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="about" className="py-32 px-6 bg-gray-50 dark:bg-[#030303] border-t border-gray-200 dark:border-white/5 transition-colors duration-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Side: Sticky Title */}
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                  Benefits of working with <span className="text-blue-600 dark:text-blue-500">LineX</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                  Partnering with us means transparent communication, cutting-edge technology, 
                  and a team dedicated to your specific business goals. We don't just write code; 
                  we engineer solutions.
                </p>
              </FadeIn>
            </div>

            {/* Right Side: List */}
            <div className="space-y-16">
              <BenefitItem title="Any CMS Customization" delay={0.2}>
                We’ve built and improved many WordPress-powered websites, but we’re no strangers 
                to other CMSs. Regardless of what CMS environment you choose, we can leverage its 
                capabilities to its utmost potential.
              </BenefitItem>

              <BenefitItem title="Reliable Website Remodeling" delay={0.3}>
                If you want to transition from a legacy system or need to tweak your site’s features, 
                we’re up for the job. Our team has given a new life to many existing websites, 
                improving their UX, responsiveness, and functionality.
              </BenefitItem>

              <BenefitItem title="On-time Delivery" delay={0.4}>
                If you need a website or web app finished under a tight deadline, you can rely on us. 
                We’ll specify all your business requirements and complete your project on time, 
                allowing your business to benefit from automation as quickly as possible.
              </BenefitItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}