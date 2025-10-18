
import React, { useState } from 'react';
import Section from './Section';
import MenuItem from './MenuItem';
import ChefRecommender from './ChefRecommender';
import { MENU_ITEMS, MENU_CATEGORIES } from '../constants';
import { MenuItem as MenuItemType } from '../types';

const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <Section id="menu" className="bg-brand-primary">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-white">Our Menu</h2>
                <p className="text-brand-secondary/80 mt-2">A curated selection of our finest dishes and beverages.</p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {MENU_CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-brand-accent text-white' : 'bg-brand-dark text-brand-secondary hover:bg-brand-accent/50'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <MenuItem key={item.name} item={item} />
                ))}
            </div>
            
            <ChefRecommender />
        </Section>
    );
};

export default Menu;
