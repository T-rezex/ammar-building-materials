
import React from 'react';
import { Award, DollarSign, Truck, CreditCard, HardHat, Headphones } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'مواد عالية الجودة',
    description: 'نوفر منتجات معتمدة ومطابقة للمواصفات العالمية والمحلية من أفضل المصانع.',
    icon: <Award className="text-primary" size={32} />
  },
  {
    title: 'أسعار تنافسية',
    description: 'قارن بين مئات العروض والأسعار من مختلف الموردين واختر الأنسب لميزانيتك.',
    icon: <DollarSign className="text-accent" size={32} />
  },
  {
    title: 'توصيل سريع',
    description: 'نظام لوجستي متطور يضمن وصول طلبك إلى موقع المشروع في أسرع وقت ممكن.',
    icon: <Truck className="text-primary" size={32} />
  },
  {
    title: 'دفع آمن',
    description: 'خيارات دفع متعددة وآمنة تماماً تشمل مدى، فيزا، وخدمات الدفع بالتقسيط.',
    icon: <CreditCard className="text-accent" size={32} />
  },
  {
    title: 'خدمات متكاملة',
    description: 'شبكة واسعة من المقاولين والمهندسين المعتمدين لتنفيذ مشروعك باحترافية.',
    icon: <HardHat className="text-primary" size={32} />
  },
  {
    title: 'دعم فني',
    description: 'فريق من الخبراء متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك.',
    icon: <Headphones className="text-accent" size={32} />
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">لماذا تختارنا؟</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-dark">نحو بناء أفضل وأسرع وأكثر ذكاءً</h3>
          <p className="text-secondary">نحن ندرك التحديات التي تواجهكم في رحلة البناء، لذا صممنا عمار لتكون الحل الشامل لكل احتياجاتكم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-light/30 border border-cyan-50 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">قريباً</span>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="mb-6 p-4 bg-white rounded-2xl shadow-md inline-block relative z-10 group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
