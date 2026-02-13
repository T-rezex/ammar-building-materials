import React, { useState } from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { Plus, Search, Edit, Trash2, Image, Package } from 'lucide-react';

const SupplierProducts: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false);

    // Dummy Products Data
    const products = [
        { id: 1, name: 'أسمنت بورتلاندي عادي', price: 18.5, stock: 1250, category: 'أسمنت', status: 'active' },
        { id: 2, name: 'حديد تسليح 12 مم', price: 2850, stock: 45, category: 'حديد', status: 'active' },
        { id: 3, name: 'رمل أحمر ناعم', price: 650, stock: 0, category: 'رمل', status: 'out_of_stock' },
    ];

    return (
        <SupplierLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">إدارة المنتجات</h1>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-hover shadow-md"
                >
                    <Plus className="w-5 h-5" />
                    <span>إضافة منتج جديد</span>
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex gap-4">
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="بحث عن منتج..."
                            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
                    </div>
                    <select className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none text-gray-600">
                        <option>جميع التصنيفات</option>
                        <option>أسمنت</option>
                        <option>حديد</option>
                    </select>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">المنتج</th>
                                <th className="px-6 py-4 font-medium">التصنيف</th>
                                <th className="px-6 py-4 font-medium">السعر</th>
                                <th className="px-6 py-4 font-medium">المخزون</th>
                                <th className="px-6 py-4 font-medium">الحالة</th>
                                <th className="px-6 py-4 font-medium">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map(product => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                                                <Image className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-gray-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{product.price} ر.س</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-gray-400" />
                                            <span className={product.stock === 0 ? 'text-red-500 font-bold' : 'text-gray-600'}>{product.stock}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {product.status === 'active' ? 'نشط' : 'نفذت الكمية'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
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

export default SupplierProducts;
