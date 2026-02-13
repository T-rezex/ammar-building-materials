import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { CheckCircle, Package, ArrowRight, Printer } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
    const orderId = 'ORD-' + Math.floor(Math.random() * 10000);

    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
                <div className="max-w-lg w-full bg-white p-10 rounded-xl shadow-lg text-center">
                    <div className="mx-auto h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                        تم استلام طلبك بنجاح!
                    </h1>
                    <p className="text-gray-500 mb-8">
                        شكراً لثقتك بنا. سيتم تجهيز طلبك وتوصيله في أقرب وقت.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                            <span className="text-gray-600">رقم الطلب</span>
                            <span className="font-bold text-gray-900 font-mono text-lg">{orderId}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">طريقة الدفع</span>
                            <span className="font-bold text-gray-900">بطاقة مدى (**** 8829)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">الإجمالي</span>
                            <span className="font-bold text-primary text-xl">1,250 ر.س</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link
                            to="/tracking"
                            className="w-full flex items-center justify-center gap-2 bg-secondary-dark text-white font-bold py-3 rounded-lg hover:bg-black transition-colors"
                        >
                            <Package className="w-5 h-5" />
                            <span>تتبع حالة الطلب</span>
                        </Link>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <Printer className="w-5 h-5" />
                                <span>طباعة الفاتورة</span>
                            </button>
                            <Link
                                to="/"
                                className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <span>العودة للرئيسية</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaymentSuccess;
