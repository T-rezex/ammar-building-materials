
import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'سجّل حسابك',
    description: 'قم بإنشاء حسابك مجاناً خلال دقائق كفرد أو كمؤسسة لتبدأ رحلة البناء.'
  },
  {
    id: 2,
    title: 'تصفح واختر',
    description: 'استكشف آلاف المنتجات والخدمات وقارن بين العروض المتوفرة.'
  },
  {
    id: 3,
    title: 'اطلب وادفع',
    description: 'أضف ما تحتاجه للسلة وأكمل عملية الشراء بخيارات دفع آمنة وسهلة.'
  },
  {
    id: 4,
    title: 'استلم واستمتع',
    description: 'سنقوم بتوصيل طلباتك لموقعك بأسرع وقت، ابدأ العمل الآن!'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-light/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-dark">كيف تعمل منصة عمار؟</h3>
          <p className="text-secondary">بخطوات بسيطة وسهلة، يمكنك الحصول على كل ما تحتاجه لمشروعك الإنشائي.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) - Changed to Blue */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-cyan-100 -translate-y-1/2 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="text-center group">
                <div className="relative mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-3xl font-black text-primary shadow-xl group-hover:bg-blue-gradient group-hover:text-white transition-all duration-300 ring-8 ring-cyan-50">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark mb-4">{step.title}</h4>
                <p className="text-secondary max-w-[250px] mx-auto leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
