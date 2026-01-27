
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden text-right">
      <div className="absolute inset-0 bg-dark -z-10">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2000" 
          alt="خلفية بناء" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-primary/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 text-center lg:text-right space-y-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          مشروعك يبدأ قريباً مع <br /> <span className="text-blue-gradient uppercase tracking-widest">عمار</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl lg:mr-0 mx-auto">
          انضم لآلاف العملاء الذين ينتظرون عمار لبناء مستقبلهم. الجودة، التوفير، والسرعة قريباً في مكان واحد وبكبسة زر.
        </p>
        <div className="pt-6">
          <button className="bg-blue-gradient hover:opacity-90 text-white px-14 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-cyan-900/40 scale-100 hover:scale-105 flex items-center gap-4 mx-auto lg:mx-0 group">
            قريباً
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
