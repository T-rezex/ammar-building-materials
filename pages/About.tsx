import React from 'react';
import Layout from '../components/Layout';
import { Building2, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
    return (
        <Layout>
            <div className="bg-white min-h-screen" dir="rtl">
                {/* Hero Section */}
                <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Construction" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">نبني المستقبل معاً</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            منصة عمار هي الوجهة الأولى لمواد البناء في المملكة، نربط بين الموردين والمقاولين لبناء غدٍ أفضل.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="py-20 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">رؤيتنا ورسالتنا</span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">تحويل صناعة البناء رقمياً</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                نسعى لأن نكون المنصة الرائدة في الشرق الأوسط التي تمكن قطاع المقاولات من الحصول على مواد البناء بأسهل الطرق وأسرعها، مع ضمان الجودة والشفافية في الأسعار.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit text-primary"><ShieldCheck className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">الثقة والجودة</h4>
                                        <p className="text-gray-500 text-sm">نتعامل فقط مع الموردين المعتمدين لضمان جودة المواد.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full h-fit text-primary"><TrendingUp className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">الكفاءة والسرعة</h4>
                                        <p className="text-gray-500 text-sm">توصيل سريع وإدارة لوجستية متكاملة لمشروعك.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-2xl shadow-xl" />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-2 border-primary/10 max-w-xs hidden md:block">
                                <p className="font-bold text-gray-900 text-lg mb-2">"عمار وفرت علينا 40% من وقت شراء المواد!"</p>
                                <p className="text-sm text-gray-500">- شركة الأفق للمقاولات</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">+500</h3>
                                <p className="text-gray-600">مورد معتمد</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">+10K</h3>
                                <p className="text-gray-600">طلب مكتمل</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">+20K</h3>
                                <p className="text-gray-600">منتج متنوع</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                                <p className="text-gray-600">رضا العملاء</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Placeholder */}
                <div className="py-20 container mx-auto px-4 text-center">
                    <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">فريق العمل</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">نخبة من الخبراء</h2>
                    <div className="flex justify-center flex-wrap gap-8">
                        {/* Mock Team Members */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-72 hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                    <Users className="w-full h-full p-4 text-gray-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-1">عضو فريق {i}</h4>
                                <p className="text-gray-500 text-sm">المسمى الوظيفي</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
