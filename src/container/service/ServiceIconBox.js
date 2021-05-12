import PropTypes from "prop-types";
import React from 'react';
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import {Link} from "react-router-dom";

const ServiceIconBox = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="Our Services"
                    subTitle=""
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                    {IconBoxData && IconBoxData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <IconBox classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}

                </div>
                    <Link className="btn service btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4 mx-auto text-center" to={process.env.PUBLIC_URL + "/about"}>All Service</Link>
                

            </div>
        </div>
    )
}

ServiceIconBox.propTypes = {
    classOption: PropTypes.string
  };
  ServiceIconBox.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default ServiceIconBox;
