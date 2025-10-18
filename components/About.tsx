
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about" className="bg-brand-light">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-serif text-brand-primary">Our Story</h2>
                    <p className="text-brand-dark/80 leading-relaxed">
                        The SKA Cafe was born from a passion for authentic flavors and a love for community. We believe in the power of a good meal to bring people together. Our philosophy is simple: use the freshest, locally-sourced ingredients to create dishes that are both innovative and comforting.
                    </p>
                    <p className="text-brand-dark/80 leading-relaxed">
                        Our chefs are artists, our staff are family, and our guests are our inspiration. We invite you to step into our world and taste the difference that dedication and love can make.
                    </p>
                </div>
                <div>
                    <img src="https://picsum.photos/id/1025/800/600" alt="The Gemini Café Interior" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                </div>
            </div>
        </Section>
    );
};

export default About;
