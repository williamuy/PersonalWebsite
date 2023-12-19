import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
    const [theme, setTheme] = useState('spring');

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position < 300) {
            setTheme('spring');
        } else if (position >= 300 && position < 600) {
            setTheme('summer');
        } else if (position >= 600 && position < 900) {
            setTheme('autumn');
        } else {
            setTheme('winter');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div 
            className={`homepage ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="intro-text">
                <h1>Hi, I'm William</h1>
                <p>I'm currently a Student at the University of Washington</p>
            </div>
        </motion.div>
    );
};

export default HomePage;