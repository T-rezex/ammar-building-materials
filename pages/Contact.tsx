import React from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
                        <p className="text-gray-600">نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">اتصل بنا</h3>
                                    <p className="text-gray-600 ltr">+966 50 000 0000</p>
                                    <p className="text-gray-600 ltr">+966 11 000 0000</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                                    <p className="text-gray-600">support@ammar.sa</p>
                                    <p className="text-gray-600">sales@ammar.sa</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">موقعنا</h3>
                                    <p className="text-gray-600">شارع التخصصي، الرياض</p>
                                    <p className="text-gray-600">المملكة العربية السعودية</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">ساعات العمل</h3>
                                    <p className="text-gray-600">الأحد - الخميس</p>
                                    <p className="text-gray-600">9:00 ص - 6:00 م</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                                        <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="اسمك الكامل" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                                        <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="example@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الموضوع</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="عنوان الرسالة" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                                    <textarea rows={5} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="اكتب رسالتك هنا..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-md">
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
