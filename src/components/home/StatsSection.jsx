import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building, Users, Globe } from 'lucide-react';

const CountUpNumber = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Building,
    value: 150,
    suffix: '+',
    label: "Projects Listed",
    description: "Premium developments"
  },
  {
    icon: Users,
    value: 2500,
    suffix: '+',
    label: "Active Investors",
    description: "Trusted community"
  },
  {
    icon: Globe,
    value: 12,
    suffix: '',
    label: "Countries",
    description: "International reach"
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: '%',
    label: "Avg. ROI",
    description: "Annual returns"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-premium-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-premium-purple rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our platform has facilitated millions in property investments across Bali, connecting serious investors with premium opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                <stat.icon className="w-8 h-8 text-premium-blue group-hover:text-premium-purple transition-colors duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold text-premium-blue mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;