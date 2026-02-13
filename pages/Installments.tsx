import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calculator, UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';

const Installments: React.FC = () => {
    const [totalAmount, setTotalAmount] = useState(50000);
    const [downPayment, setDownPayment] = useState(5000);
    const [months, setMonths] = useState(12);

    // Calculations
    const principal = totalAmount - downPayment;
    const interestRate = 0.05; // 5% flat rate for simplicity
    const totalInterest = principal * interestRate;
    const totalFinanced = principal + totalInterest;
    const monthlyPayment = totalFinanced / months;

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className="text-3xl font-bold mb-2 text-gray-900">حلول التمويل والتقسيط</h1>
                    <p className="text-gray-500 mb-8">خطط دفع مرنة تناسب احتياجات عملك</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-6 text-primary">
                                <Calculator className="w-6 h-6" />
                                <h2 className="text-xl font-bold text-gray-900">حاسبة التمويل</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">قيمة الطلب الإجمالية</label>
                                    <input
                                        type="number"
                                        value={totalAmount}
                                        onChange={(e) => setTotalAmount(Number(e.target.value))}
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">الدفعة المقدمة (10% كحد أدنى)</label>
                                    <input
                                        type="number"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">مدة التمويل</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[3, 6, 12].map(m => (
                                            <button
                                                key={m}
                                                onClick={() => setMonths(m)}
                                                className={`py-2 rounded-lg font-bold border-2 transition-all ${months === m ? 'border-primary bg-primary text-white' : 'border-gray-200 text-gray-600 hover:border-primary'}`}
                                            >
                                                {m} أشهر
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-2">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>مبلغ التمويل</span>
                                        <span>{principal.toLocaleString()} ريال</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>كلفة التمويل (5%)</span>
                                        <span>{totalInterest.toLocaleString()} ريال</span>
                                    </div>
                                    <div className="h-px bg-gray-200 my-2"></div>
                                    <div className="flex justify-between items-center text-secondary-dark">
                                        <span className="font-bold">القسط الشهري</span>
                                        <span className="text-2xl font-bold text-primary">{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-sm font-normal text-gray-500">ريال</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-6 text-gray-900">تقديم طلب التمويل</h2>

                            <div className="space-y-4">
                                <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded mb-4">
                                    <div className="flex gap-2">
                                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                                        <p className="text-sm text-yellow-800">يتطلب التمويل سجل تجاري ساري وكشف حساب بنكي لآخر 6 أشهر.</p>
                                    </div>
                                </div>

                                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                                    <p className="font-medium text-gray-900">رفع السجل التجاري</p>
                                    <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                                </div>

                                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                                    <p className="font-medium text-gray-900">رفع كشف الحساب البنكي</p>
                                    <p className="text-xs text-gray-500">PDF (Max 10MB)</p>
                                </div>

                                <div className="pt-4">
                                    <button className="w-full bg-secondary-dark text-white font-bold py-4 rounded-lg hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>إرسال طلب التمويل</span>
                                    </button>
                                    <p className="text-center text-xs text-gray-400 mt-3">سيتم دراسة الطلب والرد خلال 24 ساعة عمل</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Installments;
