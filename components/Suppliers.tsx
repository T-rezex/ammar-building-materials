
import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const Suppliers: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="bg-light/80 rounded-[3.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative border border-cyan-50 shadow-sm">
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              <TrendingUp size={18} />
              <span className="font-bold text-sm">فرصة نمو لعملك</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
              هل أنت مورد؟ <br />
              انضم لعمار وزد مبيعاتك قريباً
            </h3>
            
            <p className="text-lg text-secondary leading-relaxed font-medium">
              افتح آفاقاً جديدة لعملك ووصولاً غير محدود لآلاف المطورين والعملاء النشطين في منصتنا. نحن نساعدك في التوسع التقني وزيادة المبيعات بكل سهولة.
            </p>

            <ul className="space-y-4">
              {['لوحة تحكم شاملة لإدارة الطلبات', 'وصول لآلاف العملاء الجدد شهرياً', 'دعم تقني ولوجستي متكامل', 'تقارير مبيعات وتحليلات متقدمة'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="font-bold text-dark/80">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary hover:bg-accent text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-cyan-100 scale-100 hover:scale-105">
              قريباً
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="مخازن وموردين" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background elements - Blue instead of orange */}
            <div className="absolute -top-10 -left-10 w-full h-full border-4 border-primary/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute -bottom-6 right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center border border-cyan-50">
              <p className="text-primary font-bold text-2xl font-poppins">+40%</p>
              <p className="text-xs text-secondary font-bold">نمو المبيعات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
