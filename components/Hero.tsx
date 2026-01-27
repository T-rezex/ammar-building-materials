
import React from 'react';
import { ShoppingCart, Star, Users, Package, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-light/50">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary opacity-[0.15] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[0%] w-[300px] h-[300px] bg-accent opacity-[0.1] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-primary rounded-full border border-cyan-100">
              <ShieldCheck size={18} />
              <span className="font-bold text-sm">منصة معتمدة وموثوقة بنسبة 100%</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-dark">
              عمّر مشروعك <span className="text-blue-gradient">بثقة</span> <br />
              من الأساس إلى التشطيب
            </h1>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-xl">
              منصة "عمار" الرقمية تربطك بأفضل موردي مواد البناء والمقاولين المعتمدين في المملكة لتجعل بناء أحلامك أسهل وأكثر كفاءة.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-blue-gradient hover:opacity-90 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-cyan-100 scale-100 hover:scale-105">
                <ShoppingCart size={22} />
                قريباً
              </button>
            </div>

            {/* Quick Stats Placeholder */}
            <div className="pt-10 flex flex-wrap gap-8 items-center border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-full shadow-md text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark">+500</h4>
                  <p className="text-sm text-secondary">مورد موثوق</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-full shadow-md text-primary">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark">+10,000</h4>
                  <p className="text-sm text-secondary">منتج متنوع</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-full shadow-md text-primary">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark">4.8 / 5</h4>
                  <p className="text-sm text-secondary">تقييم العملاء</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image / Illustration */}
          <div className="lg:w-1/2 relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                alt="بناء مشروع" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white text-right">
                <p className="font-bold text-xl">مشاريع تنبض بالحياة</p>
                <p className="opacity-80">مع عمار، جودة البناء هي أولويتنا</p>
              </div>
            </div>
            {/* Float Elements */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-secondary">ضمان الجودة</p>
                  <p className="font-bold text-sm text-primary">قريباً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
