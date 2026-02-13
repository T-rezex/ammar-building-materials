import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Categories from '../components/Categories';
import Suppliers from '../components/Suppliers';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    useEffect(() => {
        // Basic implementation of scroll reveal using classes
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(section => {
            // Avoid immediate animation for hero content which is handled differently
            if (!section.closest('#home')) {
                section.classList.add('opacity-0');
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Categories />
                <Suppliers />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
