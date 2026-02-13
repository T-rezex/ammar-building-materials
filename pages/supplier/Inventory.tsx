import React, { useState } from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { Package, AlertTriangle, RefreshCw, Search, ArrowDown, ArrowUp } from 'lucide-react';

const SupplierInventory: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const inventoryItems = [
        { id: 1, name: 'أسمنت بورتلاندي عادي', sku: 'CM-001', stock: 1250, minStock: 500, status: 'good', lastRestock: '2023-10-01' },
        { id: 2, name: 'حديد تسليح 12 مم', sku: 'ST-012', stock: 45, minStock: 100, status: 'low', lastRestock: '2023-09-15' },
        { id: 3, name: 'رمل أحمر ناعم', sku: 'SD-100', stock: 0, minStock: 200, status: 'out', lastRestock: '2023-08-20' },
        { id: 4, name: 'طوب أحمر مفرغ', sku: 'BK-020', stock: 5000, minStock: 1000, status: 'good', lastRestock: '2023-10-10' },
        { id: 5, name: 'جبس بورد مقاوم للرطوبة', sku: 'GB-050', stock: 120, minStock: 150, status: 'low', lastRestock: '2023-09-30' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'good': return 'bg-green-100 text-green-700';
            case 'low': return 'bg-yellow-100 text-yellow-700';
            case 'out': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'good': return 'متوفر';
            case 'low': return 'مخزون منخفض';
            case 'out': return 'نفذت الكمية';
            default: return status;
        }
    };

    return (
        <SupplierLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">إدارة المخزون</h1>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50">
                        <ArrowDown className="w-5 h-5" />
                        <span>تصدير تقرير</span>
                    </button>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-hover shadow-md">
                        <RefreshCw className="w-5 h-5" />
                        <span>تحديث الجرد</span>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-green-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">إجمالي المواد</p>
                            <h3 className="text-3xl font-bold text-gray-900">145</h3>
                        </div>
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <Package className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-yellow-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">تنبيهات انخفاض المخزون</p>
                            <h3 className="text-3xl font-bold text-gray-900">12</h3>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-red-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">نفذت الكمية</p>
                            <h3 className="text-3xl font-bold text-gray-900">3</h3>
                        </div>
                        <div className="bg-red-100 p-3 rounded-full text-red-600">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="بحث باسم المنتج أو SKU..."
                            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
                    </div>
                    <div className="flex gap-2">
                        <select className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none text-gray-600">
                            <option value="all">كل الحالات</option>
                            <option value="low">مخزون منخفض</option>
                            <option value="out">نفذت الكمية</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">اسم المنتج</th>
                                <th className="px-6 py-4 font-medium">SKU</th>
                                <th className="px-6 py-4 font-medium">المتوفر</th>
                                <th className="px-6 py-4 font-medium">الحد الأدنى</th>
                                <th className="px-6 py-4 font-medium">آخر تحديث</th>
                                <th className="px-6 py-4 font-medium">الحالة</th>
                                <th className="px-6 py-4 font-medium">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inventoryItems.map(item => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4 font-mono text-gray-500 text-sm">{item.sku}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold">{item.stock}</span>
                                            {item.status === 'low' && <ArrowDown className="w-4 h-4 text-red-500" />}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{item.minStock}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{item.lastRestock}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                                            {getStatusLabel(item.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.status !== 'good' && (
                                            <button className="text-xs bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-hover transition-colors">
                                                إعادة طلب
                                            </button>
                                        )}
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

export default SupplierInventory;
