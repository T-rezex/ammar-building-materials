
import React from 'react';

const stats = [
  { label: 'مورد موثوق', value: '+500' },
  { label: 'منتج متنوع', value: '+10,000' },
  { label: 'عميل سعيد', value: '+5,000' },
  { label: 'تقييم متوسط', value: '4.8/5' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white space-y-2">
              <h3 className="text-4xl md:text-5xl font-black font-poppins">{stat.value}</h3>
              <p className="text-lg opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
