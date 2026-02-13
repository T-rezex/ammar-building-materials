import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Search as SearchIcon, Filter, ArrowLeft, Star } from 'lucide-react';

const Search: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [activeFilter, setActiveFilter] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Mock search results
    const results = [
        { id: 1, name: 'أسمنت بورتلاندي عادي', price: 18.5, rating: 4.8, image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200', category: 'أسمنت' },
        { id: 2, name: 'رمل أحمر ناعم', price: 650, rating: 4.5, image: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=200', category: 'رمل' },
        { id: 3, name: 'طوب أحمر مفرغ', price: 2.2, rating: 4.9, image: 'https://images.unsplash.com/photo-1590082725206-r678909890?auto=format&fit=crop&q=80&w=200', category: 'طوب' },
    ];

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-8" dir="rtl">
                <div className="container mx-auto px-4">
                    {/* Search Header */}
                    <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                        <div className="relative max-w-2xl mx-auto flex gap-4">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    defaultValue={query}
                                    placeholder="ابحث عن مواد بناء، موردين..."
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                />
                                <button className="absolute left-2 top-2 bg-primary text-white p-1.5 rounded-md hover:bg-primary-hover">
                                    <SearchIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <button
                                className="lg:hidden bg-white border border-gray-200 p-3 rounded-lg text-gray-600 hover:bg-gray-50"
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                            >
                                <Filter className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Filters Sidebar - Mobile Drawer & Desktop Sidebar */}
                        <div className={`${isFilterOpen ? 'fixed inset-0 z-50 bg-black/50 flex justify-end' : 'hidden'} lg:block lg:static lg:bg-transparent lg:z-auto lg:col-span-1`}>
                            <div className={`bg-white p-6 w-80 lg:w-full h-full lg:h-auto lg:rounded-xl shadow-sm overflow-y-auto lg:overflow-visible transition-transform ${isFilterOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
                                <div className="flex justify-between items-center mb-6 border-b pb-4 lg:hidden">
                                    <h3 className="font-bold text-gray-900">تصفية النتائج</h3>
                                    <button onClick={() => setIsFilterOpen(false)}><ArrowLeft className="w-6 h-6" /></button>
                                </div>
                                <div className="hidden lg:flex items-center gap-2 mb-6 border-b pb-4">
                                    <Filter className="w-5 h-5 text-gray-400" />
                                    <h3 className="font-bold text-gray-900">تصفية النتائج</h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-sm mb-3">التصنيف</h4>
                                        <div className="space-y-2">
                                            {['الكل', 'أسمنت', 'حديد', 'رمل', 'طوب', 'عوازل'].map(cat => (
                                                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="category" defaultChecked={cat === 'الكل'} className="text-primary focus:ring-primary" />
                                                    <span className="text-sm text-gray-600">{cat}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-sm mb-3">السعر</h4>
                                        <div className="flex items-center gap-2">
                                            <input type="number" placeholder="من" className="w-full border border-gray-200 rounded p-2 text-sm" />
                                            <span>-</span>
                                            <input type="number" placeholder="إلى" className="w-full border border-gray-200 rounded p-2 text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-sm mb-3">التقييم</h4>
                                        <div className="space-y-2">
                                            {[5, 4, 3].map(stars => (
                                                <label key={stars} className="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-3 h-3 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                                        ))}
                                                        <span className="text-xs text-gray-500 mr-2">أو أكثر</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        className="w-full bg-primary text-white font-bold py-2 rounded-lg lg:hidden"
                                        onClick={() => setIsFilterOpen(false)}
                                    >
                                        تطبيق
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Results Grid */}
                        <div className="lg:col-span-3">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold text-gray-900">نتائج البحث: "{query}" <span className="text-gray-500 text-sm font-normal">(3 نتائج)</span></h2>
                                <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none">
                                    <option>الأكثر تطابقاً</option>
                                    <option>الأقل سعراً</option>
                                    <option>الأعلى سعراً</option>
                                    <option>الأعلى تقييماً</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {results.map(product => (
                                    <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                        <div className="h-48 bg-gray-200 overflow-hidden relative">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-700">
                                                {product.category}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                            <div className="flex items-center gap-1 mb-2">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                                                <span className="text-xs text-gray-400">(24 تقييم)</span>
                                            </div>
                                            <div className="flex justify-between items-center mt-3">
                                                <span className="font-bold text-lg text-primary">{product.price} <span className="text-xs font-normal text-gray-500">ر.س</span></span>
                                                <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">
                                                    إضافة
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
