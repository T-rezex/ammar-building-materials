import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the password reset logic (e.g., API call)
        console.log('Reset password for:', email);
        setSubmitted(true);
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" dir="rtl">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        استعادة كلمة المرور
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        أدخل بريدك الإلكتروني وسنرسل لك رابطاً لاستعادة كلمة المرور.
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {!submitted ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        البريد الإلكتروني
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full pr-10 border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm p-3 border"
                                            placeholder="example@domain.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        إرسال رابط الاستعادة
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center py-4">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                    <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">تم الإرسال بنجاح!</h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    تحقق من بريدك الإلكتروني {email} لاتباع تعليمات استعادة كلمة المرور.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-primary hover:underline font-medium text-sm"
                                >
                                    إعادة المحاولة
                                </button>
                            </div>
                        )}

                        <div className="mt-6 border-t border-gray-100 pt-6">
                            <div className="flex items-center justify-center">
                                <Link to="/login" className="flex items-center text-sm font-medium text-primary hover:text-primary-hover">
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                    العودة لتسجيل الدخول
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResetPassword;
