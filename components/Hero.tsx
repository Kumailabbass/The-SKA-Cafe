
import React, { forwardRef } from 'react';

interface HeroProps {
    onReserveClick: () => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ onReserveClick }, ref) => {
    return (
        <section ref={ref} id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight">
                    Experience Culinary Excellence
                </h1>
                <p className="text-lg md:text-xl font-sans text-brand-secondary max-w-2xl mx-auto">
                    Where every dish tells a story, and every ingredient is a star. Join us for an unforgettable dining experience.
                </p>
                <button onClick={onReserveClick} className="bg-brand-accent hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300">
                    Book a Table
                </button>
            </div>
        </section>
    );
});


export default Hero;
