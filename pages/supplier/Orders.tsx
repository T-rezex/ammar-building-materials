import React, { useState } from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { Search, Filter, Eye, Check, X, Truck } from 'lucide-react';

const SupplierOrders: React.FC = () => {
    // Dummy Orders Data
    const orders = [
        { id: 1024, customer: 'شركة البناء الحديث', total: 2450, date: '2023-10-14', status: 'pending', items: '140 كيس أسمنت' },
        { id: 1023, customer: 'محمد علي', total: 420, date: '2023-10-14', status: 'processing', items: '5 طن رمل' },
        { id: 1022, customer: 'مؤسسة الإعمار', total: 15600, date: '2023-10-13', status: 'shipped', items: 'حديد تسليح 12مم' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-700';
            case 'processing': return 'bg-blue-100 text-blue-700';
            case 'shipped': return 'bg-purple-100 text-purple-700';
            case 'delivered': return 'bg-green-100 text-green-700';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'pending': return 'بانتظار الموافقة';
            case 'processing': return 'جاري التجهيز';
            case 'shipped': return 'تم الشحن';
            case 'delivered': return 'تم التوصيل';
            default: return status;
        }
    };

    return (
        <SupplierLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">إدارة الطلبات</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200">الكل</button>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">الجديدة</button>
                        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">قيد التنفيذ</button>
                    </div>

                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="بحث برقم الطلب أو العميل"
                            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">رقم الطلب</th>
                                <th className="px-6 py-4 font-medium">العميل</th>
                                <th className="px-6 py-4 font-medium">التاريخ</th>
                                <th className="px-6 py-4 font-medium">تفاصيل</th>
                                <th className="px-6 py-4 font-medium">الإجمالي</th>
                                <th className="px-6 py-4 font-medium">الحالة</th>
                                <th className="px-6 py-4 font-medium">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map(order => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">#{order.id}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{order.date}</td>
                                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">{order.items}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.total} ر.س</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(order.status)}`}>
                                            {getStatusText(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 text-gray-500 hover:bg-gray-100 rounded" title="عرض التفاصيل">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            {order.status === 'pending' && (
                                                <>
                                                    <button className="p-1 text-green-600 hover:bg-green-50 rounded" title="قبول">
                                                        <Check className="w-5 h-5" />
                                                    </button>
                                                    <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="رفض">
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </>
                                            )}
                                            {order.status === 'processing' && (
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="إسناد لسائق">
                                                    <Truck className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SupplierLayout>
    );
};

export default SupplierOrders;
