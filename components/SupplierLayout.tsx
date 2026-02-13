import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, CreditCard, Truck, LogOut, Settings } from 'lucide-react';
import Navbar from './Navbar'; // Reuse Navbar for top bar or create a new one

interface SupplierLayoutProps {
    children: React.ReactNode;
}

const SupplierLayout: React.FC<SupplierLayoutProps> = ({ children }) => {
    const location = useLocation();

    const menuItems = [
        { name: 'لوحة التحكم', path: '/supplier/dashboard', icon: LayoutDashboard },
        { name: 'المنتجات', path: '/supplier/products', icon: Package },
        { name: 'الطلبات', path: '/supplier/orders', icon: ShoppingBag },
        { name: 'المدفوعات', path: '/supplier/payments', icon: CreditCard },
        { name: 'الشحن والتوصيل', path: '/supplier/logistics', icon: Truck },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col" dir="rtl">
            {/* Top Bar - Simplified */}
            <div className="bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-secondary-dark text-white p-2 rounded-lg font-bold">ع</div>
                    <span className="font-bold text-xl text-secondary-dark">بوابة الموردين</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">شركة أسمنت اليمامة</span>
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile" />
                    </div>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-l border-gray-200 hidden md:flex flex-col">
                    <div className="p-4 space-y-2 flex-grow">
                        {menuItems.map(item => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="p-4 border-t border-gray-100 space-y-2">
                        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 w-full">
                            <Settings className="w-5 h-5" />
                            <span>الإعدادات</span>
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 w-full">
                            <LogOut className="w-5 h-5" />
                            <span>تسجيل الخروج</span>
                        </button>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-grow p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SupplierLayout;
