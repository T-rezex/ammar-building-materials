
import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
  { id: 1, name: 'مواد خرسانية', count: 'قريباً', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'مواد عزل', count: 'قريباً', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'مواد تشطيب', count: 'قريباً', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'كهرباء وسباكة', count: 'قريباً', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'نجارة وأبواب', count: 'قريباً', image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'خدمات المقاولين', count: 'قريباً', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400' },
  { id: 7, name: 'التصميم المعماري', count: 'قريباً', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=400' },
  { id: 8, name: 'التصميم الداخلي', count: 'قريباً', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400' }
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-extrabold text-dark">استكشف الفئات</h3>
            <p className="text-secondary">نوفر لك كل مستلزمات البناء والخدمات في مكان واحد.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            قريباً
            <span className="text-xl leading-none">←</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent group-hover:via-dark/40 transition-all"></div>
              <div className="absolute bottom-6 right-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform text-right">
                <p className="text-xs text-accent font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase">{cat.count}</p>
                <h4 className="text-xl font-bold">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
