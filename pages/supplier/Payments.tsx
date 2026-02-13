import React, { useState } from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { Download, CreditCard, DollarSign, Clock, CheckCircle } from 'lucide-react';

const SupplierPayments: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'paid' | 'pending'>('all');

    const transactions = [
        { id: 'TRX-9981', orderId: 1024, amount: 2450, date: '2023-10-14', status: 'pending', type: 'order_payment' },
        { id: 'TRX-9980', orderId: 1022, amount: 15600, date: '2023-10-13', status: 'paid', type: 'order_payment' },
        { id: 'PAY-5521', orderId: 0, amount: -5000, date: '2023-10-10', status: 'completed', type: 'payout' },
        { id: 'TRX-9975', orderId: 1018, amount: 4500, date: '2023-10-09', status: 'paid', type: 'installment_1_3' },
    ];

    const filteredTransactions = transactions.filter(trx => {
        if (activeTab === 'all') return true;
        if (activeTab === 'paid') return trx.status === 'paid' || trx.status === 'completed';
        if (activeTab === 'pending') return trx.status === 'pending';
        return true;
    });

    return (
        <SupplierLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">المدفوعات والمحفظة</h1>
                <button className="bg-secondary-dark text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-black transition-colors">
                    <Download className="w-5 h-5" />
                    <span>تصدير كشف حساب</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-green-500">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 font-medium">الرصيد المتاح للسحب</span>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">12,450 ر.س</h2>
                    <button className="text-primary text-sm font-bold mt-2 hover:underline">طلب سحب رصيد</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 font-medium">مستحقات قادمة</span>
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">8,200 ر.س</h2>
                    <p className="text-xs text-gray-400 mt-1">تستحق خلال 7 أيام</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-r-4 border-purple-500">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 font-medium">إجمالي المبيعات (أكتوبر)</span>
                        <div className="bg-purple-100 p-2 rounded-lg">
                            <CreditCard className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">45,650 ر.س</h2>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <span className="font-bold">+15%</span> عن الشهر الماضي
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-900">سجل المعاملات</h2>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            الكل
                        </button>
                        <button
                            onClick={() => setActiveTab('paid')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'paid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            مدفوع
                        </button>
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'pending' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            معلق
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-medium">رقم المعاملة</th>
                                <th className="px-6 py-4 font-medium">نوع المعاملة</th>
                                <th className="px-6 py-4 font-medium">المبلغ</th>
                                <th className="px-6 py-4 font-medium">التاريخ</th>
                                <th className="px-6 py-4 font-medium">الحالة</th>
                                <th className="px-6 py-4 font-medium">فاتورة</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTransactions.map(trx => (
                                <tr key={trx.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-mono text-gray-600 font-medium">{trx.id}</td>
                                    <td className="px-6 py-4">
                                        {trx.type === 'order_payment' && 'دفع طلب #' + trx.orderId}
                                        {trx.type === 'payout' && 'سحب رصيد'}
                                        {trx.type.startsWith('installment') && 'قسط تمويل #' + trx.orderId}
                                    </td>
                                    <td className={`px-6 py-4 font-bold ${trx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {trx.amount > 0 ? '+' : ''}{Math.abs(trx.amount)} ر.س
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{trx.date}</td>
                                    <td className="px-6 py-4">
                                        {trx.status === 'paid' || trx.status === 'completed' ? (
                                            <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded w-fit">
                                                <CheckCircle className="w-3 h-3" /> مكتمل
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1 text-yellow-600 text-xs font-bold bg-yellow-50 px-2 py-1 rounded w-fit">
                                                <Clock className="w-3 h-3" /> معلق
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-primary hover:text-primary-hover">
                                            <Download className="w-5 h-5" />
                                        </button>
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

export default SupplierPayments;
