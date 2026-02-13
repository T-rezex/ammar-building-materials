import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Dummy Data
const PRODUCTS = [
    {
        id: '1',
        name: 'أسمنت بورتلاندي عادي - 50 كجم',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 18.50,
        unit: 'كيس',
        supplier: 'شركة أسمنت اليمامة',
        rating: 4.8,
        reviews: 124,
        deliveryTime: '24 ساعة',
        isBulkDiscount: true,
        category: 'cement'
    },
    {
        id: '2',
        name: 'حديد تسليح 12 مم - سابك',
        image: 'https://images.unsplash.com/photo-1535063404120-40ceb47bc0fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 2850,
        unit: 'طن',
        supplier: 'حديد سابك',
        rating: 4.9,
        reviews: 856,
        deliveryTime: 'يومين',
        isBulkDiscount: true,
        category: 'steel'
    },
    {
        id: '3',
        name: 'بلوك بركاني معزول 20x20x40',
        image: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 3.25,
        unit: 'حبة',
        supplier: 'مصنع البناء الحديث',
        rating: 4.5,
        reviews: 42,
        deliveryTime: '3 أيام',
        isBulkDiscount: false,
        category: 'blocks'
    },
    {
        id: '4',
        name: 'رمل أحمر ناعم - تريلا 24 متر',
        image: 'https://images.unsplash.com/photo-1621262332675-9e32715d978a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 650,
        unit: 'شحنة',
        supplier: 'نقليات الصحراء',
        rating: 4.2,
        reviews: 18,
        deliveryTime: 'فوري',
        isBulkDiscount: true,
        category: 'sand'
    },
    {
        id: '5',
        name: 'دهان جوتن فينوماستيك - أبيض مطفي',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 210,
        unit: 'جالون',
        supplier: 'دهانات جوتن',
        rating: 4.9,
        reviews: 312,
        deliveryTime: '24 ساعة',
        isBulkDiscount: true,
        category: 'finishing'
    }
];

const CATEGORIES = [
    { id: 'all', name: 'الكل' },
    { id: 'cement', name: 'أسمنت وخرسانة' },
    { id: 'steel', name: 'حديد وتسليح' },
    { id: 'blocks', name: 'بلوك وطوب' },
    { id: 'sand', name: 'رمل وبحص' },
    { id: 'finishing', name: 'تشطيبات وديكور' },
];

const Marketplace: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = PRODUCTS.filter(product => {
        const matchCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchSearch = product.name.includes(searchQuery) || product.supplier.includes(searchQuery);
        return matchCategory && matchSearch;
    });

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen pb-12" dir="rtl">
                {/* Header & Search */}
                <div className="bg-secondary-dark text-white py-12 px-4 shadow-md">
                    <div className="container mx-auto max-w-6xl">
                        <h1 className="text-3xl font-bold mb-6">سوق مواد البناء</h1>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="ابحث عن مواد، موردين، أو علامات تجارية..."
                                    className="w-full h-12 pr-12 pl-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search className="absolute right-4 top-3 text-gray-400" />
                            </div>

                            <button className="h-12 px-6 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                                <SlidersHorizontal className="w-5 h-5" />
                                <span>تصفية متقدمة</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                    <div className="container mx-auto max-w-6xl px-4 overflow-x-auto">
                        <div className="flex space-x-reverse space-x-6 py-4 min-w-max">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeCategory === cat.id
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-gray-500 hover:text-gray-800'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto max-w-6xl px-4 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                            {activeCategory === 'all' ? 'جميع المنتجات' : CATEGORIES.find(c => c.id === activeCategory)?.name}
                            <span className="text-gray-400 text-sm font-normal mr-2">({filteredProducts.length} منتج)</span>
                        </h2>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">ترتيب حسب:</span>
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded border border-gray-200 hover:border-gray-300">
                                الأكثر مبيعاً
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">لا توجد نتائج</h3>
                            <p className="text-gray-500 mt-1">جرب البحث بكلمات مختلفة أو تغيير التصنيف</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Marketplace;
