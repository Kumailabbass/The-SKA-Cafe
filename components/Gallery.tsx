
import React from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
    return (
        <Section id="gallery" className="bg-brand-light">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-brand-primary">Gallery</h2>
                <p className="text-brand-dark/80 mt-2">A glimpse into the atmosphere of The Gemini Café.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GALLERY_IMAGES.map((image, index) => (
                    <div key={image.id} className={`overflow-hidden rounded-lg shadow-lg group ${index === 2 || index === 3 ? 'lg:col-span-1' : ''}`}>
                         <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                         />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
