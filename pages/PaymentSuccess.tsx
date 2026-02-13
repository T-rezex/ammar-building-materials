import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess: React.FC = () => {
    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
                <div className="max-w-md w-full text-center space-y-8 bg-white p-10 rounded-xl shadow-lg">
                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-gray-900">
                        تمت العملية بنجاح!
                    </h2>

                    <p className="text-lg text-gray-600">
                        شكراً لطلبك. لقد تم استلام طلبك وسيتم معالجته قريباً.
                    </p>

                    <div className="mt-8 space-y-4">
                        <Link
                            to="/buyer/orders"
                            className="block w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            تتبع طلبك
                        </Link>

                        <Link
                            to="/"
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            العودة للصفحة الرئيسية
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaymentSuccess;
