import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { User, MapPin, CreditCard, LogOut, Settings, Bell, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const BuyerAccount: React.FC = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-6xl px-4">
                    <h1 className="text-3xl font-bold mb-8 text-gray-900">حسابي</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary overflow-hidden">
                                        {user?.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="w-8 h-8" />
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-gray-900">{user?.name || 'مستخدم عمار'}</h2>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${activeTab === 'profile' ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <User className="w-5 h-5" />
                                        <span>الملف الشخصي</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('addresses')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${activeTab === 'addresses' ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <MapPin className="w-5 h-5" />
                                        <span>العناوين المحفوظة</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('payments')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${activeTab === 'payments' ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        <span>طرق الدفع</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('security')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${activeTab === 'security' ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <Shield className="w-5 h-5" />
                                        <span>الأمان وكلمة المرور</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('notifications')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${activeTab === 'notifications' ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        <Bell className="w-5 h-5" />
                                        <span>الإشعارات</span>
                                    </button>
                                    <div className="pt-4 mt-4 border-t border-gray-100">
                                        <button
                                            onClick={logout}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut className="w-5 h-5" />
                                            <span>تسجيل الخروج</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-8 min-h-[500px]">
                                {activeTab === 'profile' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold text-gray-900 border-b pb-4">المعلومات الشخصية</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                                                <input type="text" defaultValue={user?.name} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                                                <input type="email" defaultValue={user?.email} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" disabled />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الجوال</label>
                                                <input type="tel" defaultValue="+966 5x xxx xxxx" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">الجنس</label>
                                                <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                                                    <option>ذكر</option>
                                                    <option>أنثى</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex justify-end pt-4">
                                            <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-hover shadow-md">
                                                حفظ التغييرات
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'addresses' && (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b pb-4">
                                            <h2 className="text-xl font-bold text-gray-900">دفتر العناوين</h2>
                                            <button className="flex items-center gap-2 text-primary font-bold hover:text-primary-hover">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">+</div>
                                                <span>إضافة عنوان جديد</span>
                                            </button>
                                        </div>
                                        <div className="grid gap-4">
                                            <div className="border border-gray-200 rounded-lg p-4 relative hover:border-primary transition-colors cursor-pointer">
                                                <div className="absolute top-4 left-4 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">الافتراضي</div>
                                                <h3 className="font-bold text-gray-900 mb-1">المنزل</h3>
                                                <p className="text-gray-600 text-sm mb-2">حي النرجس، شارع الأمير فيصل بن بندر<br />الرياض، المملكة العربية السعودية</p>
                                                <p className="text-gray-500 text-sm">050xxxxxxx</p>
                                                <div className="flex gap-3 mt-3 text-sm font-medium">
                                                    <button className="text-blue-600 hover:underline">تعديل</button>
                                                    <button className="text-red-600 hover:underline">حذف</button>
                                                </div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 relative hover:border-primary transition-colors cursor-pointer">
                                                <h3 className="font-bold text-gray-900 mb-1">موقع العمل المشروع 1</h3>
                                                <p className="text-gray-600 text-sm mb-2">حي الياسمين، شمال الرياض<br />الرياض، المملكة العربية السعودية</p>
                                                <p className="text-gray-500 text-sm">055xxxxxxx</p>
                                                <div className="flex gap-3 mt-3 text-sm font-medium">
                                                    <button className="text-blue-600 hover:underline">تعديل</button>
                                                    <button className="text-red-600 hover:underline">حذف</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Add more tab content as placeholders later */}
                                {(activeTab === 'payments' || activeTab === 'security' || activeTab === 'notifications') && (
                                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                                        <Settings className="w-12 h-12 mb-4 opacity-50" />
                                        <p>قريباً .. هذه الصفحة قيد التطوير</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BuyerAccount;
