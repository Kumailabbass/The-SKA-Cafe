
import React, { useState } from 'react';
import { getMenuRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';

const ChefRecommender: React.FC = () => {
    const [preference, setPreference] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRecommendation = async () => {
        if (!preference.trim()) {
            setError('Please tell us what you\'re in the mood for!');
            return;
        }
        setIsLoading(true);
        setError('');
        setRecommendation('');
        try {
            const result = await getMenuRecommendation(preference, MENU_ITEMS);
            setRecommendation(result);
        } catch (err: any) {
            setError(err.message || 'An error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-brand-dark/50 p-6 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-serif text-white mb-2">Can't Decide?</h3>
            <p className="text-brand-secondary mb-4">Let our AI Chef recommend a dish for you!</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                    type="text"
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    placeholder="e.g., 'something light' or 'spicy'"
                    className="flex-grow p-3 rounded-md bg-brand-light text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    disabled={isLoading}
                />
                <button
                    onClick={handleRecommendation}
                    disabled={isLoading}
                    className="bg-brand-accent text-white font-bold py-3 px-6 rounded-md transition-colors hover:bg-opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Thinking...' : 'Get Suggestion'}
                </button>
            </div>
            {error && <p className="text-red-400 mt-4">{error}</p>}
            {recommendation && (
                <div className="mt-6 p-4 bg-brand-primary rounded-md text-left animate-fade-in">
                    <p className="text-brand-secondary">{recommendation}</p>
                </div>
            )}
        </div>
    );
};

export default ChefRecommender;
