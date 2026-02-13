import React from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { TrendingUp, ShoppingBag, Package, AlertTriangle, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const SupplierDashboard: React.FC = () => {
    // Dummy Metrics
    const metrics = [
        { title: 'إجمالي المبيعات (أسبوع)', value: '42,500 ر.س', trend: '+12%', isPositive: true, icon: TrendingUp, color: 'text-green-600 bg-green-100' },
        { title: 'الطلبات الجديدة', value: '18', trend: '+5', isPositive: true, icon: ShoppingBag, color: 'text-blue-600 bg-blue-100' },
        { title: 'قيد التوصيل', value: '4', trend: '0', isPositive: true, icon: Clock, color: 'text-orange-600 bg-orange-100' },
        { title: 'تنبيهات المخزون', value: '2', trend: 'عاجل', isPositive: false, icon: AlertTriangle, color: 'text-red-600 bg-red-100' },
    ];

    return (
        <SupplierLayout>
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
                    <p className="text-gray-500">نظرة عامة على أداء متجرك اليوم</p>
                </div>
                <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm">
                    آخر تحديث: منذ 5 دقائق
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                        <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${metric.color} bg-opacity-20`}>
                                    <Icon className={`w-6 h-6 ${metric.color.split(' ')[0]}`} />
                                </div>
                                <div className={`flex items-center text-sm font-bold ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {metric.isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                                    {metric.trend}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                            <p className="text-gray-500 text-sm">{metric.title}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">أحدث الطلبات</h2>
                        <button className="text-primary text-sm font-bold hover:underline">عرض الكل</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-right text-sm">
                            <thead className="text-gray-500 border-b border-gray-100">
                                <tr>
                                    <th className="pb-3 font-normal">رقم الطلب</th>
                                    <th className="pb-3 font-normal">العميل</th>
                                    <th className="pb-3 font-normal">المنتجات</th>
                                    <th className="pb-3 font-normal">المبلغ</th>
                                    <th className="pb-3 font-normal">الحالة</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[1024, 1023, 1022, 1021].map(orderId => (
                                    <tr key={orderId} className="group hover:bg-gray-50 transition-colors">
                                        <td className="py-4 font-medium text-gray-900">#{orderId}</td>
                                        <td className="py-4 text-gray-600">شركة البناء الحديث</td>
                                        <td className="py-4 text-gray-600">140 كيس أسمنت...</td>
                                        <td className="py-4 font-bold text-gray-900">2,450 ر.س</td>
                                        <td className="py-4">
                                            <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-bold">يتم التجهيز</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Low Stock Alerts */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">تنبيهات المخزون</h2>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-start gap-4 p-3 border border-gray-100 rounded-lg hover:border-red-200 transition-colors">
                                <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Product" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm line-clamp-1">أسمنت بورتلاندي عادي</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">باقي 45 وحدة</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 py-2 text-sm text-gray-600 font-medium border border-gray-200 rounded-lg hover:bg-gray-50">
                        إدارة المخزون
                    </button>
                </div>
            </div>
        </SupplierLayout>
    );
};

export default SupplierDashboard;
