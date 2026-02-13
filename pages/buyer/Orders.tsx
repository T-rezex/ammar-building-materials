import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Package, Truck, Calendar, ChevronLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Order {
    id: string;
    date: string;
    total: number;
    status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
    items: number;
}

const BuyerOrders: React.FC = () => {
    const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'completed'>('all');

    // Mock Orders
    const orders: Order[] = [
        { id: 'ORD-8829', date: '2025-02-12', total: 1250, status: 'processing', items: 3 },
        { id: 'ORD-7521', date: '2025-02-10', total: 4500, status: 'shipped', items: 12 },
        { id: 'ORD-6632', date: '2025-01-25', total: 820, status: 'delivered', items: 2 },
        { id: 'ORD-5501', date: '2024-12-11', total: 12000, status: 'cancelled', items: 50 },
    ];

    const getStatusBadge = (status: Order['status']) => {
        switch (status) {
            case 'processing': return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">قيد التنفيذ</span>;
            case 'shipped': return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">جاري التوصيل</span>;
            case 'delivered': return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">تم التسليم</span>;
            case 'cancelled': return <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">ملغي</span>;
            default: return null;
        }
    };

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">طلباتي</h1>
                        <Link to="/marketplace" className="text-primary font-bold hover:underline">تسوق المزيد</Link>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            <button
                                onClick={() => setFilterStatus('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filterStatus === 'all' ? 'bg-secondary-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                الكل
                            </button>
                            <button
                                onClick={() => setFilterStatus('active')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filterStatus === 'active' ? 'bg-secondary-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                طلبات حالية
                            </button>
                            <button
                                onClick={() => setFilterStatus('completed')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filterStatus === 'completed' ? 'bg-secondary-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                مكتملة
                            </button>
                        </div>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="بحث برقم الطلب..."
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                    <div className="flex items-start md:items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shrink-0">
                                            <Package className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-bold text-gray-900 text-lg">{order.id}</h3>
                                                {getStatusBadge(order.status)}
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{order.date}</span>
                                                </div>
                                                <span>•</span>
                                                <span>{order.items} منتجات</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 md:gap-0">
                                        <span className="text-xl font-bold text-gray-900">{order.total.toLocaleString()} ر.س</span>
                                        <Link
                                            to="/tracking" // In real app, /orders/:id
                                            className="flex items-center gap-1 text-primary hover:text-primary-hover font-medium text-sm mt-1"
                                        >
                                            <span>تفاصيل الطلب وتتبع الشحنة</span>
                                            <ChevronLeft className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BuyerOrders;
