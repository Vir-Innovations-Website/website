import React from 'react'
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout
