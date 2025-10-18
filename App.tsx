
import React, { useRef, LegacyRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App: React.FC = () => {
    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        menu: useRef<HTMLDivElement>(null),
        gallery: useRef<HTMLDivElement>(null),
        reservation: useRef<HTMLDivElement>(null),
    };

    const scrollToSection = (id: string) => {
        const ref = sectionRefs[id as keyof typeof sectionRefs];
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-brand-light font-sans">
            <Header onNavLinkClick={scrollToSection} />
            <main>
                <Hero ref={sectionRefs.home as LegacyRef<HTMLDivElement>} onReserveClick={() => scrollToSection('reservation')} />
                <div ref={sectionRefs.about as LegacyRef<HTMLDivElement>}>
                    <About />
                </div>
                <div ref={sectionRefs.menu as LegacyRef<HTMLDivElement>}>
                    <Menu />
                </div>
                <div ref={sectionRefs.gallery as LegacyRef<HTMLDivElement>}>
                    <Gallery />
                </div>
                <div ref={sectionRefs.reservation as LegacyRef<HTMLDivElement>}>
                    <Reservation />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
