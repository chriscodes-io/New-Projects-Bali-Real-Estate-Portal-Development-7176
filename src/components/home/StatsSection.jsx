import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Building, Users, Globe, Target, Award, MapPin, Home } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { icon: Building, number: 150, suffix: '+', label: 'Premium Developments', description: 'Carefully curated projects' },
    { icon: Users, number: 50, suffix: '+', label: 'Trusted Developers', description: 'Verified and vetted partners' },
    { icon: Globe, number: 2500, suffix: '+', label: 'International Investors', description: 'From 40+ countries' },
    { icon: TrendingUp, number: 15, suffix: '%', label: 'Average ROI', description: 'Annual rental yields' }
  ];

  const CountUpNumber = ({ number, suffix, inView }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(number / (duration / 30));
        const timer = setInterval(() => {
          start += step;
          if (start >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 30);
        return () => clearInterval(timer);
      }
    }, [inView, number]);
    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="py-24 bg-premium-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-periwinkle/20 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform has facilitated millions in property investments across Bali, 
            connecting serious investors with premium opportunities.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-premium-blue/20 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUpNumber number={stat.number} suffix={stat.suffix} inView={inView} />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white/90">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;