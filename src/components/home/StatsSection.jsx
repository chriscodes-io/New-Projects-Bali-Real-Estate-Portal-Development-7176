import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiBuilding, FiUsers, FiGlobe } = FiIcons;

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: FiBuilding,
      number: 150,
      suffix: '+',
      label: 'Premium Developments',
      description: 'Carefully curated projects'
    },
    {
      icon: FiUsers,
      number: 50,
      suffix: '+',
      label: 'Trusted Developers',
      description: 'Verified and vetted partners'
    },
    {
      icon: FiGlobe,
      number: 2500,
      suffix: '+',
      label: 'International Investors',
      description: 'From 40+ countries'
    },
    {
      icon: FiTrendingUp,
      number: 15,
      suffix: '%',
      label: 'Average ROI',
      description: 'Annual rental yields'
    }
  ];

  const CountUpNumber = ({ number, suffix, inView }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (inView) {
        const timer = setInterval(() => {
          setCount(prev => {
            if (prev < number) {
              return Math.min(prev + Math.ceil(number / 50), number);
            }
            clearInterval(timer);
            return number;
          });
        }, 30);
        return () => clearInterval(timer);
      }
    }, [inView, number]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our platform has facilitated millions in property investments across Bali, 
            connecting serious investors with premium opportunities
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={stat.icon} className="text-white text-2xl" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <CountUpNumber 
                  number={stat.number} 
                  suffix={stat.suffix} 
                  inView={inView} 
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                {stat.label}
              </h3>
              
              <p className="text-slate-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="text-2xl font-bold text-amber-400 mb-2">$50M+</div>
            <div className="text-slate-300">Total Investment Facilitated</div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="text-2xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-slate-300">Client Satisfaction Rate</div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="text-2xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-slate-300">Expert Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;