
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'المهندس خالد العتيبي',
    role: 'مقاول إنشائي',
    content: 'منصة عمار غيرت طريقتنا في إدارة المشاريع. توفير الوقت والجهد في البحث عن الموردين أصبح أمراً سهلاً وممتعاً. الجودة والسعر في عمار لا يعلى عليهما.',
    avatar: 'https://i.pravatar.cc/150?u=khaled',
    rating: 5
  },
  {
    id: 2,
    name: 'سارة المنصور',
    role: 'صاحبة منزل',
    content: 'كنت خائفة من عملية التشطيب وصعوبتها، لكن "عمار" وفرت لي كل الأدوات والمهندسين الموثوقين. تجربتي كانت رائعة جداً وأوصي الجميع باستخدامها.',
    avatar: 'https://i.pravatar.cc/150?u=sara',
    rating: 5
  },
  {
    id: 3,
    name: 'شركة تطوير العقارية',
    role: 'مدير المشتريات',
    content: 'نعتمد كلياً على عمار لتأمين مواد البناء لمشاريعنا الكبرى. المصداقية في المواعيد وجودة المواد هي ما يميزهم دائماً عن المنافسين.',
    avatar: 'https://i.pravatar.cc/150?u=corp',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-dark">ماذا يقول عملاؤنا؟</h3>
          <p className="text-secondary">فخورون بثقة آلاف العملاء والمطورين العقاريين في خدماتنا.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-8 left-8 text-primary/10 group-hover:text-primary transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < t.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-200'} 
                  />
                ))}
              </div>

              <p className="text-dark leading-relaxed mb-8 relative z-10 italic">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-4 border-light" />
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
