import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Trash2, Calendar, MapPin, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, CartItem } from '../context/CartContext';

const Cart: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    // Group by Supplier
    const groupedItems: { [key: string]: CartItem[] } = {};
    cartItems.forEach(item => {
        if (!groupedItems[item.supplier]) {
            groupedItems[item.supplier] = [];
        }
        groupedItems[item.supplier].push(item);
    });

    // Calculations
    const subtotal = cartTotal;
    const vat = subtotal * 0.15;
    const delivery = 350; // Flat rate for now
    const total = subtotal + vat + delivery;

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-6xl px-4">
                    <h1 className="text-3xl font-bold mb-8 text-gray-900">سلة المشتريات</h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="flex-grow space-y-6">
                            {Object.keys(groupedItems).map(supplier => (
                                <div key={supplier} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-gray-500" />
                                        <span className="font-bold text-gray-700">المورد: {supplier}</span>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        {groupedItems[supplier].map(item => (
                                            <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center">
                                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md bg-gray-100" />

                                                <div className="flex-grow text-center sm:text-right">
                                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.price} ريال / {item.unit}</p>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-100">-</button>
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                                            className="w-16 text-center border-none p-1 focus:ring-0 font-bold"
                                                        />
                                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-100">+</button>
                                                    </div>

                                                    <div className="w-24 text-left font-bold text-secondary-dark">
                                                        {(item.price * item.quantity).toFixed(2)} ريال
                                                    </div>

                                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {cartItems.length === 0 && (
                                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                                    <p className="text-gray-500 text-lg mb-4">سلة المشتريات فارغة</p>
                                    <Link to="/marketplace" className="text-primary font-bold hover:underline">تصفح السوق</Link>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        {cartItems.length > 0 && (
                            <div className="w-full lg:w-96 space-y-6">
                                {/* Delivery Info */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="font-bold text-lg mb-4">تفاصيل التوصيل</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">موقع التوصيل</label>
                                            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-primary">
                                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    <span>الرياض، حي الملقا</span>
                                                </div>
                                                <span className="text-primary text-xs font-bold">تغيير</span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">تاريخ التوصيل المفضل</label>
                                            <div className="flex items-center border border-gray-300 rounded-lg p-3">
                                                <Calendar className="w-4 h-4 text-gray-400 ml-2" />
                                                <input type="date" className="w-full text-sm outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h3 className="font-bold text-lg mb-4">ملخص الطلب</h3>

                                    <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                                        <div className="flex justify-between text-gray-600">
                                            <span>المجموع الفرعي</span>
                                            <span>{subtotal.toFixed(2)} ريال</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>الضريبة (15%)</span>
                                            <span>{vat.toFixed(2)} ريال</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>رسوم التوصيل (تقديري)</span>
                                            <span>{delivery.toFixed(2)} ريال</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end mb-6">
                                        <span className="font-bold text-xl">الإجمالي</span>
                                        <span className="font-bold text-2xl text-primary">{total.toFixed(2)} <span className="text-sm font-normal text-gray-500">ريال</span></span>
                                    </div>

                                    <Link to="/checkout" className="w-full bg-primary text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-hover shadow-lg shadow-orange-200 transition-all">
                                        <span>الذهاب للدفع</span>
                                        <ChevronRight className="w-5 h-5 rotate-180" />
                                    </Link>

                                    <p className="text-xs text-center text-gray-400 mt-4">
                                        بإتمام الطلب، أنت توافق على شروط وأحكام منصة عمار
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
