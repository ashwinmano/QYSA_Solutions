import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import BrandContainer from '../container/Brand/BrandContainer';
import Newsletter from '../container/Newsletter/Newsletter';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import KnowUs from '../container/CallToAction/KnowUs';



const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="QYSA SOLUTIONS" />
            <Header />
            <IntroSlider />
            <HomeAbout />
            <ServiceIconBox 
                classOption="bg-color-1" 
            />
            <KnowUs/>
            <BrandContainer 
                classOption="section-padding-top section-padding-bottom" 
            />
            <Newsletter />
            <ContactInformation />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



