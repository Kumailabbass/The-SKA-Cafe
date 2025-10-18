
import React, { useState } from 'react';
import Section from './Section';

const Reservation: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            // Basic validation
            if (Object.values(formData).some(val => val === '')) {
                setStatus('error');
            } else {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
            }
        }, 1500);
    };

    return (
        <Section id="reservation" className="bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/1039/1920/1080')"}}>
             <div className="absolute inset-0 bg-black opacity-60"></div>
             <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-white">Book Your Table</h2>
                    <p className="text-brand-secondary/80 mt-2">We look forward to hosting you.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-brand-dark/80 p-8 rounded-lg shadow-2xl">
                    {status !== 'success' && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required />
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required />
                            </div>
                            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required />
                            <div className="grid md:grid-cols-3 gap-6">
                                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required />
                                <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required />
                                <select name="guests" value={formData.guests} onChange={handleChange} className="w-full p-3 rounded bg-brand-light/90 text-brand-dark focus:ring-2 focus:ring-brand-accent focus:outline-none" required>
                                    {[...Array(8)].map((_, i) => <option key={i+1} value={i+1}>{i+1} Guest{i > 0 ? 's' : ''}</option>)}
                                </select>
                            </div>
                            <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-accent hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                                {status === 'submitting' ? 'Booking...' : 'Reserve Table'}
                            </button>
                        </form>
                    )}
                    {status === 'error' && <p className="text-red-400 mt-4 text-center">Please fill out all fields correctly.</p>}
                    {status === 'success' && (
                        <div className="text-center text-white p-8">
                            <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
                            <p className="text-brand-secondary">Your reservation has been confirmed. We've sent a confirmation to your email.</p>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Reservation;
