import React from 'react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
    return (
        <Layout>
            <div className="bg-white min-h-screen py-10" dir="rtl">
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-6">الشروط والأحكام وسياسة الخصوصية</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. مقدمة</h2>
                            <p>أهلاً بكم في منصة عمار. باستعماكم لهذا الموقع، فإنكم توافقون على الالتزام بالشروط والأحكام التالية...</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. حقوق الملكية الفكرية</h2>
                            <p>جميع حقوق الملكية الفكرية للمحتوى الموجود على هذا الموقع هي ملك لشركة عمار أو المرخصين لها...</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. استخدام الموقع</h2>
                            <ul className="list-disc list-inside space-y-2 mr-4">
                                <li>يجب استخدام الموقع لأغراض مشروعة فقط.</li>
                                <li>يمنع استخدام الموقع بطريقة تضر أو تعطل الوصول إليه.</li>
                                <li>يمنع جمع البيانات بشكل آلي دون إذن مسبق.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. سياسة الخصوصية</h2>
                            <p className="mb-2">نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.</p>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">أ. جمع البيانات</h3>
                            <p className="mb-2">نقوم بجمع البيانات التي تقدمها لنا عند التسجيل أو الشراء...</p>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">ب. استخدام البيانات</h3>
                            <p>نستخدم بياناتك لتحسين خدماتنا وتجربة المستخدم الخاصة بك...</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. التعديلات</h2>
                            <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات هنا وتعتبر سارية فور نشرها.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. الاتصال بنا</h2>
                            <p>إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر صفحة "تواصل معنا".</p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Terms;
