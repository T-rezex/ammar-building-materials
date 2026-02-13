import React from 'react';
import Layout from '../components/Layout';
import { Package, Truck, CheckCircle, MapPin, Phone, MessageCircle } from 'lucide-react';

const OrderTracking: React.FC = () => {
    // Dummy Tracking Data
    const orderStatus = 'on_way'; // on_way, delivered, processing

    const steps = [
        { id: 1, name: 'تم استلام الطلب', date: '10:30 AM', icon: Package, done: true },
        { id: 2, name: 'تم تجهيز الشحنة', date: '01:15 PM', icon: CheckCircle, done: true },
        { id: 3, name: 'خرجت للتوصيل', date: '02:00 PM', icon: Truck, done: true },
        { id: 4, name: 'تم التوصيل', date: '', icon: MapPin, done: false },
    ];

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-4xl px-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">تتبع الطلب #ON-7829</h1>
                            <p className="text-gray-500">تاريخ الطلب: 12 أكتوبر 2023</p>
                        </div>
                        <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                            جاري التوصيل
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Map & Driver */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Live Map Placeholder */}
                            <div className="bg-gray-200 rounded-xl h-64 md:h-96 w-full relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                    <span className="text-gray-500 font-bold">خريطة تتبع الشحنة (تفاعلية)</span>
                                </div>
                                {/* Driver Marker Simulation */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="bg-primary bg-opacity-20 rounded-full p-4 animate-pulse"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
                                </div>
                            </div>

                            {/* Driver Info */}
                            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Driver" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">محمد عبدالله</h3>
                                        <p className="text-sm text-gray-500">سائق شاحنة - فولفو FH16</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                        <MessageCircle className="w-4 h-4" />
                                        <span className="text-sm font-bold">مراسلة</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-sm font-bold">اتصال</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Status Timeline */}
                        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
                            <h2 className="font-bold text-lg mb-6">حالة الطلب</h2>
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-gray-100"></div>

                                <div className="space-y-8 relative">
                                    {steps.map((step, index) => {
                                        const Icon = step.icon;
                                        return (
                                            <div key={step.id} className="flex gap-4 items-start">
                                                <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${step.done ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-300'}`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.name}</h3>
                                                    {step.date && <p className="text-xs text-gray-500 mt-1">{step.date}</p>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">وقت الوصول المتوقع</span>
                                    <span className="font-bold text-primary">03:45 PM</span>
                                </div>
                                <p className="text-xs text-gray-400">قد يتأثر الوقت بحالة المرور الحالية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OrderTracking;
