import React from 'react';
import PhotoGallery from './PhotoGallery';
import Navbar from './Navbar';
import Footer from './Footer';
const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <PhotoGallery/>
            <Footer/>

        </div>
    );
};

export default HomePage;