
import React from 'react';
import { MenuItem as MenuItemType } from '../types';

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
    return (
        <div className="flex bg-white/5 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img className="w-1/3 object-cover" src={item.image} alt={item.name} />
            <div className="p-4 w-2/3 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-serif text-brand-secondary">{item.name}</h3>
                    <p className="text-brand-secondary/80 text-sm mt-1">{item.description}</p>
                </div>
                <p className="text-lg font-bold text-brand-accent mt-2">{item.price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
