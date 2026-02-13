import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, ShoppingCart, User, Grid } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const BottomNav: React.FC = () => {
    const { isAuthenticated, user } = useAuth();

    // Determine the profile link based on user type
    const profileLink = isAuthenticated ? (user?.type === 'supplier' ? '/supplier/dashboard' : '/buyer/account') : '/login';

    const navItems = [
        { name: 'الرئيسية', icon: Home, path: '/' },
        { name: 'السوق', icon: Grid, path: '/marketplace' },
        { name: 'بحث', icon: Search, path: '/search' },
        { name: 'السلة', icon: ShoppingCart, path: '/cart' },
        { name: 'حسابي', icon: User, path: profileLink },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 md:hidden z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`
                    }
                >
                    <item.icon className="w-6 h-6" />
                    <span className="text-[10px] font-bold">{item.name}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default BottomNav;
