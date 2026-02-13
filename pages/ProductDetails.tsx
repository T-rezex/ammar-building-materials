import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Star, Truck, ShieldCheck, CheckCircle, Info, Minus, Plus, ShoppingCart, FileText } from 'lucide-react';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // In a real app, we would fetch product by ID. For now using static data.
    const product = {
        id: id || '1',
        name: 'أسمنت بورتلاندي عادي - 50 كجم',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 18.50,
        unit: 'كيس',
        supplier: 'شركة أسمنت اليمامة',
        rating: 4.8,
        reviews: 124,
        deliveryTime: '24 ساعة',
        availability: 'متوفر',
        origin: 'المملكة العربية السعودية',
        weight: '50 كجم',
        quality: 'مطابق للمواصفات السعودية (SASO)',
        usage: 'أعمال الخرسانة المسلحة، الأساسات، الجسور',
        minOrder: 50,
        bulkDiscountThreshold: 100,
    };

    const [quantity, setQuantity] = useState(product.minOrder);
    const [unitType, setUnitType] = useState<'unit' | 'pallet'>('unit'); // unit = bag, pallet = 40 bags

    // Calculations
    const effectiveQuantity = unitType === 'pallet' ? quantity * 40 : quantity;
    const isBulkParams = effectiveQuantity >= product.bulkDiscountThreshold;
    const unitPrice = isBulkParams ? product.price * 0.95 : product.price; // 5% discount
    const totalPrice = unitPrice * effectiveQuantity;

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen pb-24" dir="rtl">
                {/* Breadcrumb */}
                <div className="container mx-auto max-w-6xl px-4 py-4 text-sm text-gray-500">
                    <Link to="/" className="hover:text-primary">الرئيسية</Link>
                    <span className="mx-2">/</span>
                    <Link to="/marketplace" className="hover:text-primary">سوق المواد</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">{product.name}</span>
                </div>

                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image Gallery */}
                        <div className="bg-white rounded-lg p-4 shadow-sm h-fit">
                            <div className="aspect-w-4 aspect-h-3 mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary">
                                        <img src={product.image} alt="thumbnail" className="object-cover w-full h-full opacity-70 hover:opacity-100" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{product.availability}</span>
                                    {isBulkParams && <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">خصم كميات مطبق 5%</span>}
                                </div>

                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center gap-1">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span className="font-medium underline decoration-dotted">{product.supplier}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="font-bold text-gray-900">{product.rating}</span>
                                        <span className="text-gray-400">({product.reviews} تقييم)</span>
                                    </div>
                                </div>

                                <div className="flex items-end gap-2 mb-6">
                                    <span className="text-4xl font-bold text-secondary-dark">{unitPrice.toFixed(2)}</span>
                                    <span className="text-gray-500 mb-2">ريال / {product.unit}</span>
                                </div>

                                <div className="space-y-4 border-t border-gray-100 pt-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">وقت التوصيل المتوقع</span>
                                        <div className="flex items-center text-green-600 font-medium">
                                            <Truck className="w-4 h-4 ml-1" />
                                            {product.deliveryTime}
                                        </div>
                                    </div>

                                    {/* Unit Switch */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">نوع الطلب</span>
                                        <div className="flex bg-gray-100 rounded p-1">
                                            <button
                                                className={`px-3 py-1 rounded text-sm transition-colors ${unitType === 'unit' ? 'bg-white shadow text-primary font-bold' : 'text-gray-500'}`}
                                                onClick={() => setUnitType('unit')}
                                            >
                                                بالكيس
                                            </button>
                                            <button
                                                className={`px-3 py-1 rounded text-sm transition-colors ${unitType === 'pallet' ? 'bg-white shadow text-primary font-bold' : 'text-gray-500'}`}
                                                onClick={() => setUnitType('pallet')}
                                            >
                                                بالطبلية (40 كيس)
                                            </button>
                                        </div>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">الكمية ({unitType === 'unit' ? 'كيس' : 'طبلية'})</span>
                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                            <button
                                                className="p-2 hover:bg-gray-100 text-gray-600"
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value))}
                                                className="w-16 text-center font-bold text-gray-900 border-none focus:ring-0"
                                            />
                                            <button
                                                className="p-2 hover:bg-gray-100 text-gray-600"
                                                onClick={() => setQuantity(quantity + 1)}
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">المواصفات الفنية</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                                        <span className="text-gray-500">الوزن</span>
                                        <span className="font-medium text-gray-900">{product.weight}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                                        <span className="text-gray-500">بلد المنشأ</span>
                                        <span className="font-medium text-gray-900">{product.origin}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                                        <span className="text-gray-500">الجودة</span>
                                        <span className="font-medium text-gray-900 text-left">{product.quality}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                                        <span className="text-gray-500">الاستخدامات</span>
                                        <span className="font-medium text-gray-900 text-left w-2/3">{product.usage}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Price Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
                    <div className="container mx-auto max-w-6xl flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">الإجمالي (شامل الضريبة)</span>
                            <span className="text-2xl font-bold text-secondary-dark">{totalPrice.toLocaleString()} <span className="text-sm font-normal">ريال</span></span>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-orange-50 transition-colors">
                                <FileText className="w-5 h-5" />
                                <span className="hidden sm:inline">طلب عرض سعر</span>
                            </button>
                            <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1">
                                <ShoppingCart className="w-5 h-5" />
                                <span>إضافة للسلة</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
