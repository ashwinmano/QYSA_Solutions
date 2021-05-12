import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const CallToActionTwo = () => {
    return (
        <div className="cta-section section section-padding-t90-b100">
            <div className="container text-center icon-up-down-animation">
                <SectionTitle
                    headingOption="fz-34"
                    title="Why Choose Us"
                    subTitle="QYSA follows a lean and agile development process which ensures that we deliver fast while eliminating waste. We adapt ourselves to our client's ever-changing requirements and provide unique solutions reflective of our global perspective. We uphold our core values of transparency and honesty while we provide exceptional service."
                />

                <div className="shape shape-1">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/icon-animation/icon-1.png"} alt="" />
                    </span>
                </div>

                <div className="shape shape-3">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/icon-animation/icon-3.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-4">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/icon-animation/icon-4.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-5">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/icon-animation/icon-5.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-8">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/icon-animation/icon-8.png"} alt="" />
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default CallToActionTwo;
