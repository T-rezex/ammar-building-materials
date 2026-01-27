
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../src/assets/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-white pt-20 pb-10 text-right">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo PNG & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-start">
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="عمار" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black text-dark">عمار</span>
            </div>
            <p className="text-secondary leading-relaxed font-bold">
              المنصة الأولى في المملكة لتسهيل عمليات شراء مواد البناء والوصول للخدمات الإنشائية المتكاملة بأفضل الأسعار والجودة العالية.
            </p>
            <div className="flex gap-4 justify-start">
              <a href="#" className="w-10 h-10 bg-light rounded-xl flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-light rounded-xl flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 bg-light rounded-xl flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-light rounded-xl flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-dark mb-6 border-b-4 border-primary/20 w-fit pb-1">عن عمار</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">من نحن</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">تواصل معنا</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">الوظائف</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-lg font-black text-dark mb-6 border-b-4 border-primary/20 w-fit pb-1">الأعمال</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">كيف تطلب؟</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors font-bold">انضم كمورد</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div id="contact">
            <h4 className="text-lg font-black text-dark mb-6 border-b-4 border-primary/20 w-fit pb-1">تواصل معنا</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-secondary font-bold">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-secondary font-poppins font-bold" dir="ltr">+966 500 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-secondary font-poppins font-bold">ammarbusinesscompany@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-cyan-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm font-bold">
            جميع الحقوق محفوظة لـ <span className="font-black text-primary">عمار</span> © {currentYear}
          </p>
          <div className="flex gap-6 items-center opacity-40 grayscale">
            <span className="text-xs font-bold text-dark">مدعوم من تقنيات عمار الرقمية</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
