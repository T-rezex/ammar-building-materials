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

                            <Link to="/reset-password" className="font-medium text-primary hover:text-primary-hover">
                                نسيت كلمة المرور؟
                            </Link>
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

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">أو سجل الدخول عبر</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                <span className="sr-only">Google</span>
                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v2.16h3.48c-.14.92-.88 2.7-3.48 2.7-2.09 0-3.8-1.73-3.8-3.84s1.71-3.84 3.8-3.84c1.19 0 2.26.49 3.03 1.28l1.63-1.63C16.09 6.8 14.42 6 12.48 6 9.07 6 6.31 9.31 6.31 13.5s2.76 7.5 6.17 7.5c3.56 0 5.92-2.5 5.92-6.02 0-.41-.05-.82-.13-1.22h-5.79z" />
                                </svg>
                                <span className="mr-2">Google</span>
                            </button>
                            <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                <span className="sr-only">Apple</span>
                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                                </svg>
                                <span className="mr-2">Apple</span>
                            </button>
                        </div>
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
