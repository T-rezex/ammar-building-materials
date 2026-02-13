import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Building2, User, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'buyer' | 'supplier'>('buyer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(activeTab, email);

        if (activeTab === 'supplier') {
            navigate('/supplier/dashboard');
        } else {
            navigate('/');
        }
    };

    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                    <div>
                        <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                            {activeTab === 'buyer' ? <User className="h-8 w-8" /> : <Building2 className="h-8 w-8" />}
                        </div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            تسجيل الدخول
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {activeTab === 'buyer' ? 'أهلاً بك مجدداً في عمار' : 'بوابة الموردين والشركاء'}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('buyer')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'buyer' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            مشتري / أفراد
                        </button>
                        <button
                            onClick={() => setActiveTab('supplier')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'supplier' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            مورد / شركات
                        </button>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="البريد الإلكتروني"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    placeholder="كلمة المرور"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="mr-2 block text-gray-900">
                                    تذكرني
                                </label>
                            </div>

                            <a href="#" className="font-medium text-primary hover:text-primary-hover">
                                نسيت كلمة المرور؟
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors shadow-md"
                        >
                            تسجيل الدخول
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <ArrowRight className="h-5 w-5 text-primary-light group-hover:text-white" aria-hidden="true" />
                            </span>
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ليس لديك حساب؟{' '}
                            <Link to={activeTab === 'buyer' ? "/register" : "/supplier/register"} className="font-medium text-primary hover:text-primary-hover">
                                إنشاء حساب جديد
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
