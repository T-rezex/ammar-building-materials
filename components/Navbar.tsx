import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo_new.png';
import { useAuth } from '../context/AuthContext';

import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuth();
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '/' },
        { name: 'السوق', href: '/marketplace' },
        { name: 'كيف نعمل', href: '#how-it-works' },
        { name: 'التصنيفات', href: '#categories' },
        { name: 'الموردين', href: '#suppliers' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden p-2">
                            <img src={logo} alt="عمار" className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            عمار
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">{cartCount}</span>
                            )}
                        </Link>

                        {isAuthenticated && user ? (
                            <div className="flex items-center gap-4">
                                <Link to="/buyer/account" className="text-sm font-bold text-gray-700 hover:text-primary flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    <span>مرحباً، {user.name}</span>
                                </Link>
                                {user.type === 'supplier' && (
                                    <Link to="/supplier/dashboard" className="px-4 py-2 bg-secondary-dark text-white rounded-lg text-sm font-bold hover:bg-black">
                                        لوحة التحكم
                                    </Link>
                                )}
                                <button onClick={logout} className="text-sm text-red-600 font-medium hover:text-red-700">
                                    تسجيل الخروج
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                                    تسجيل الدخول
                                </Link>
                                <Link to="/supplier/register" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20">
                                    <LogIn size={18} />
                                    <span>انضم كتاجر</span>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-gray-100 my-2" />
                    <button className="text-gray-600 hover:text-blue-600 font-medium py-2 w-full text-right">
                        تسجيل الدخول
                    </button>
                    <Link to="/supplier/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 w-full">
                        <LogIn size={18} />
                        <span>انضم كتاجر</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;