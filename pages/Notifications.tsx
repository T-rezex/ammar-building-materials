import React from 'react';
import Layout from '../components/Layout';
import { Bell, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const Notifications: React.FC = () => {
    const notifications = [
        { id: 1, title: 'تم تأكيد طلبك #1234', message: 'جاري تجهيز الطلب للشحن', time: 'منذ ساعتين', type: 'success' },
        { id: 2, title: 'عرض خاص على الأسمنت', message: 'خصم 10% على جميع منتجات الأسمنت لمدة 24 ساعة', time: 'منذ يوم', type: 'info' },
        { id: 3, title: 'تنبيه مخزون منخفض', message: 'بعض المواد في سلتك قاربت على النفاد', time: 'منذ يومين', type: 'warning' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'success': return <CheckCircle className="w-6 h-6 text-green-500" />;
            case 'info': return <Info className="w-6 h-6 text-blue-500" />;
            case 'warning': return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
            default: return <Bell className="w-6 h-6 text-gray-500" />;
        }
    };

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-8" dir="rtl">
                <div className="container mx-auto max-w-2xl px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">الإشعارات</h1>
                        <button className="text-sm text-primary hover:underline">تحديد الكل كمقروء</button>
                    </div>

                    <div className="space-y-4">
                        {notifications.map(notif => (
                            <div key={notif.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                                <div className="bg-gray-50 p-2 rounded-full flex-shrink-0">
                                    {getIcon(notif.type)}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-900 mb-1">{notif.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{notif.message}</p>
                                    <span className="text-xs text-gray-400">{notif.time}</span>
                                </div>
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Notifications;
