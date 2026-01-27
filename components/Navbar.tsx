import logo from '../src/assets/logo.png';

const Navbar: React.FC = () => {
    // ... state ...

    // ... useEffect ...

    // ... links ...

    return (
        <nav
        // ... className ...
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl">
                            <img src={logo} alt="شعار عمار" className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            عمار
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            تسجيل الدخول
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20">
                            <LogIn size={18} />
                            <span>انضم كتاجر</span>
                        </button>
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
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <hr className="border-gray-100 my-2" />
                    <button className="text-gray-600 hover:text-blue-600 font-medium py-2 w-full text-right">
                        تسجيل الدخول
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 w-full">
                        <LogIn size={18} />
                        <span>انضم كتاجر</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;