import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Building2, Mail, Lock, Phone, MapPin, ArrowRight, FileText } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SupplierRegister: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        crNumber: '',
        email: '',
        phone: '',
        city: '',
        password: ''
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate registration API call
        login('supplier', formData.email);
        navigate('/supplier/dashboard');
    };

    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                    <div>
                        <div className="mx-auto h-16 w-16 bg-secondary-dark/10 rounded-full flex items-center justify-center text-secondary-dark mb-4">
                            <Building2 className="h-8 w-8" />
                        </div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            انضم كتاجر / مورد
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            وسع نطاق أعمالك ووصل لآلاف العملاء
                        </p>
                    </div>

                    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="companyName"
                                type="text"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="اسم الشركة / المؤسسة"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <FileText className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="crNumber"
                                type="text"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="رقم السجل التجاري"
                                value={formData.crNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="البريد الإلكتروني للعمل"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="phone"
                                type="tel"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="رقم الجوال"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <MapPin className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="city"
                                type="text"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="المدينة / المقر الرئيسي"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-secondary focus:border-secondary"
                                placeholder="كلمة المرور"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-secondary-dark hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors shadow-md"
                        >
                            تسجيل حساب مورد
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                            </span>
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            لديك حساب بالفعل؟{' '}
                            <Link to="/login" className="font-medium text-secondary-dark hover:text-black">
                                تسجيل الدخول
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SupplierRegister;
