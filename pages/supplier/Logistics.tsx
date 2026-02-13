import React from 'react';
import SupplierLayout from '../../components/SupplierLayout';
import { Truck, MapPin, Calendar, User, Navigation } from 'lucide-react';

const SupplierLogistics: React.FC = () => {
    const deliveries = [
        { id: 'DLV-1022', orderId: 1022, driver: 'سعيد القحطاني', vehicle: 'شاحنة مرسيدس 6طن', status: 'on_way', dest: 'الرياض، حي النرجس' },
        { id: 'DLV-1025', orderId: 1025, driver: 'لم يتم التعيين', vehicle: '-', status: 'pending', dest: 'جدة، حي المحمدية' },
        { id: 'DLV-1020', orderId: 1020, driver: 'عمر ياسر', vehicle: 'فان بضائع', status: 'delivered', dest: 'الدمام، الصناعية' },
    ];

    return (
        <SupplierLayout>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">إدارة الشحن واللوجستيات</h1>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-hover shadow-md">
                    <Truck className="w-5 h-5" />
                    <span>تعيين سائق جديد</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Stats */}
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Truck className="w-6 h-6" /></div>
                    <div>
                        <p className="text-gray-500 text-sm">جاري التوصيل</p>
                        <h3 className="text-2xl font-bold text-gray-900">4 شحنات</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600"><Calendar className="w-6 h-6" /></div>
                    <div>
                        <p className="text-gray-500 text-sm">مجدولة لليوم</p>
                        <h3 className="text-2xl font-bold text-gray-900">8 شحنات</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-gray-600"><User className="w-6 h-6" /></div>
                    <div>
                        <p className="text-gray-500 text-sm">السائقين المتاحين</p>
                        <h3 className="text-2xl font-bold text-gray-900">5 / 12</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Live Map Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden h-96 relative group">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                            <span className="font-bold text-gray-500">خريطة الأسطول الحية</span>
                        </div>
                    </div>
                    {/* Markers */}
                    <div className="absolute top-1/4 left-1/4 bg-primary text-white p-2 text-xs rounded-lg shadow-lg">شاحنة 1</div>
                    <div className="absolute bottom-1/3 right-1/3 bg-gray-800 text-white p-2 text-xs rounded-lg shadow-lg">شاحنة 4 (متوقفة)</div>
                </div>

                {/* Deliveries List */}
                <div className="bg-white rounded-lg shadow-sm p-4 h-96 overflow-y-auto">
                    <h2 className="font-bold text-gray-900 mb-4">قائمة التوصيل</h2>
                    <div className="space-y-4">
                        {deliveries.map(dlv => (
                            <div key={dlv.id} className="border border-gray-100 rounded-lg p-3 hover:border-gray-300 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-gray-500">{dlv.id}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${dlv.status === 'on_way' ? 'bg-blue-100 text-blue-700' :
                                            dlv.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                                'bg-gray-100 text-gray-600'
                                        }`}>
                                        {dlv.status === 'on_way' ? 'في الطريق' : dlv.status === 'delivered' ? 'وصل' : 'معلق'}
                                    </span>
                                </div>
                                <h4 className="font-bold text-sm text-gray-900 mb-1">طلب #{dlv.orderId}</h4>
                                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                                    <MapPin className="w-3 h-3 text-red-500" />
                                    <span className="truncate">{dlv.dest}</span>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <User className="w-3 h-3" /> {dlv.driver}
                                    </div>
                                    {dlv.status === 'pending' && (
                                        <button className="text-xs text-primary font-bold hover:underline">تعيين</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SupplierLayout>
    );
};

export default SupplierLogistics;
