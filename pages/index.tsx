// ホームページ
import { NextPage } from 'next';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const HomePage = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1>Welcome to my site</h1>
            <p>This website is showing you my portfolio.</p>
        </motion.div>
    );
};

export default HomePage;
