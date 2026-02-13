import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Check, Package } from 'lucide-react';

const Checkout: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Initial values for the form (dummy data as requested usually)
    const [formData, setFormData] = useState({
        address: 'الرياض, حي الملقا',
        date: '',
        paymentMethod: 'card'
    });

    const subtotal = cartTotal;
    const vat = subtotal * 0.15;
    const delivery = 350;
    const total = subtotal + vat + delivery;

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(3); // Move to success step
            clearCart();
        }, 2000);
    };

    if (step === 3) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
                    <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">تم طلبك بنجاح!</h2>
                        <p className="text-gray-600 mb-8">رقم الطلب #ORDER-8821<br />سيتم التواصل معك لتأكيد التوصيل.</p>

                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover transition-colors"
                        >
                            العودة للرئيسية
                        </button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className="text-3xl font-bold mb-8 text-gray-900">إتمام الطلب</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="md:col-span-2 space-y-6">

                            {/* Delivery Section */}
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center gap-3 mb-4 border-b pb-2">
                                    <div className="bg-blue-100 p-2 rounded-full"><Truck className="w-5 h-5 text-blue-600" /></div>
                                    <h3 className="text-lg font-bold">معلومات التوصيل</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">عنوان التوصيل</label>
                                        <input
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ التوصيل المفضل</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center gap-3 mb-4 border-b pb-2">
                                    <div className="bg-purple-100 p-2 rounded-full"><CreditCard className="w-5 h-5 text-purple-600" /></div>
                                    <h3 className="text-lg font-bold">طريقة الدفع</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                                        className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-all ${formData.paymentMethod === 'card' ? 'border-primary bg-orange-50 text-primary' : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <CreditCard className="w-6 h-6" />
                                        <span className="font-bold">بطاقة ائتمان / مدى</span>
                                    </button>
                                    <button
                                        onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                                        className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-all ${formData.paymentMethod === 'cod' ? 'border-primary bg-orange-50 text-primary' : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <Package className="w-6 h-6" />
                                        <span className="font-bold">الدفع عند الاستلام</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="md:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                                <h3 className="text-lg font-bold mb-4">ملخص الطلب</h3>
                                <div className="space-y-4 mb-6">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 truncate w-2/3">{item.name} (x{item.quantity})</span>
                                            <span className="font-bold">{(item.price * item.quantity).toFixed(0)} ريال</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">المجموع الفرعي</span>
                                        <span className="font-bold">{subtotal.toFixed(2)} ريال</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">الضريبة (15%)</span>
                                        <span className="font-bold">{vat.toFixed(2)} ريال</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">التوصيل</span>
                                        <span className="font-bold">{delivery.toFixed(2)} ريال</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                                        <span>الإجمالي</span>
                                        <span className="text-primary">{total.toFixed(2)} ريال</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    disabled={loading || cartItems.length === 0}
                                    className={`w-full mt-6 py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover shadow-lg shadow-orange-200'}`}
                                >
                                    {loading ? 'جاري المعالجة...' : 'تأكيد الطلب'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
