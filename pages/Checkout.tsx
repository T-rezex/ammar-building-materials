import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { CheckCircle, CreditCard, Landmark, ChevronLeft, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState<'full' | 'installments'>('full');
    const [selectedGateway, setSelectedGateway] = useState<'card' | 'mada' | 'apple' | 'bank'>('card');

    // Dummy Summary Data
    const summary = {
        subtotal: 4250.00,
        vat: 637.50,
        delivery: 350.00,
        total: 5237.50,
    };

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-4xl px-4">

                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-10">
                        <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
                            <span className="text-sm font-medium">طريقة الدفع</span>
                        </div>
                        <div className={`w-24 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                        <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
                            <span className="text-sm font-medium">التأكيد</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-grow">

                            {step === 1 && (
                                <div className="space-y-6">
                                    {/* Payment Type Selection */}
                                    <div className="bg-white rounded-lg shadow-sm p-6">
                                        <h2 className="text-xl font-bold mb-6">اختر خطة الدفع</h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div
                                                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'full' ? 'border-primary bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}
                                                onClick={() => setPaymentMethod('full')}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-lg">دفع كامل</span>
                                                    {paymentMethod === 'full' && <CheckCircle className="w-5 h-5 text-primary" />}
                                                </div>
                                                <p className="text-sm text-gray-500">ادفع المبلغ بالكامل الآن واحصل على أولوية في التوصيل</p>
                                            </div>

                                            <div
                                                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${paymentMethod === 'installments' ? 'border-primary bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}
                                                onClick={() => setPaymentMethod('installments')}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-lg">تقسيط (آجل)</span>
                                                    {paymentMethod === 'installments' && <CheckCircle className="w-5 h-5 text-primary" />}
                                                </div>
                                                <p className="text-sm text-gray-500">قسم فاتورتك على دفعات ميسرة (تطبق الشروط والأحكام)</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Gateway for Full Payment */}
                                    {paymentMethod === 'full' && (
                                        <div className="bg-white rounded-lg shadow-sm p-6">
                                            <h2 className="text-xl font-bold mb-6">بيانات الدفع</h2>

                                            <div className="space-y-4">
                                                <div className="flex gap-4 mb-4">
                                                    <button
                                                        onClick={() => setSelectedGateway('card')}
                                                        className={`flex flex-col items-center justify-center w-24 h-20 border rounded-lg ${selectedGateway === 'card' ? 'border-primary bg-orange-50 text-primary' : 'border-gray-200'}`}
                                                    >
                                                        <CreditCard className="w-6 h-6 mb-2" />
                                                        <span className="text-xs font-bold">بطاقة ائتمان</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedGateway('mada')}
                                                        className={`flex flex-col items-center justify-center w-24 h-20 border rounded-lg ${selectedGateway === 'mada' ? 'border-primary bg-orange-50 text-primary' : 'border-gray-200'}`}
                                                    >
                                                        <div className="font-black text-lg mb-1">mada</div>
                                                        <span className="text-xs font-bold">مدى</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedGateway('bank')}
                                                        className={`flex flex-col items-center justify-center w-24 h-20 border rounded-lg ${selectedGateway === 'bank' ? 'border-primary bg-orange-50 text-primary' : 'border-gray-200'}`}
                                                    >
                                                        <Landmark className="w-6 h-6 mb-2" />
                                                        <span className="text-xs font-bold">تحويل بنكي</span>
                                                    </button>
                                                </div>

                                                {selectedGateway !== 'bank' ? (
                                                    <div className="space-y-4 max-w-md">
                                                        <div>
                                                            <label className="block text-sm text-gray-600 mb-1">رقم البطاقة</label>
                                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-primary" />
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <div className="flex-1">
                                                                <label className="block text-sm text-gray-600 mb-1">تاريخ الانتهاء</label>
                                                                <input type="text" placeholder="MM/YY" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-primary" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <label className="block text-sm text-gray-600 mb-1">CVC</label>
                                                                <input type="text" placeholder="123" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-primary" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm text-gray-600 mb-1">اسم حامل البطاقة</label>
                                                            <input type="text" placeholder="الاسم كما يظهر على البطاقة" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-primary" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                        <p className="text-sm text-gray-600 mb-2">يرجى تحويل المبلغ إلى الحساب التالي وإرفاق الإيصال:</p>
                                                        <p className="font-bold text-gray-800">مصرف الراجحي</p>
                                                        <p className="font-mono text-lg text-gray-800 mb-4">SA00 0000 0000 0000 0000 0000</p>
                                                        <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50">
                                                            <FileText className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                                            <span className="text-sm text-gray-500">اضغط لرفع صورة التحويل</span>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded mt-4">
                                                    <ShieldCheck className="w-4 h-4" />
                                                    <span>مدفوعات آمنة ومشفرة 100%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod === 'installments' && (
                                        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                                            <h3 className="text-lg font-bold mb-2">التقدم بطلب تمويل</h3>
                                            <p className="text-gray-500 mb-6">سيتم تحويلك لصفحة تقديم طلبات التمويل لإكمال الإجراءات.</p>
                                            <Link to="/installments" className="bg-secondary-dark text-white px-6 py-3 rounded-lg font-bold inline-block hover:bg-black transition-colors">
                                                الانتقال لصفحة التمويل
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Summary Sidebar */}
                        <div className="w-full md:w-80 h-fit">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">ملخص الفاتورة</h3>
                                <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>المجموع الفرعي</span>
                                        <span>{summary.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>الضريبة (15%)</span>
                                        <span>{summary.vat.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>التوصيل</span>
                                        <span>{summary.delivery.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-6">
                                    <span className="font-bold text-lg">الإجمالي</span>
                                    <span className="font-bold text-xl text-secondary-dark">{summary.total.toFixed(2)} <span className="text-sm font-normal text-gray-500">ريال</span></span>
                                </div>

                                {paymentMethod === 'full' && (
                                    <button
                                        onClick={() => navigate('/payment-success')}
                                        className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-hover shadow-lg transition-all"
                                    >
                                        تأكيد الطلب
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
