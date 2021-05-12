import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";

const AccordionWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one">We put the People First.</AccordionTitle>
                    <AccordionContent id="one">We care for you and your company. We are determined to help you reach your goals. The path to success is full of challenges, and we want to help you overcome them. We believe in making this possible by building meaningful relationships with our clients. It transforms the traditional corporate space and enables us to achieve these dreams together. </AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">Accountability in Leadership.</AccordionTitle>
                    <AccordionContent id="two">We assure you of complete accountability and consistency in our service. We want to grow together with you as we walk on the path to success. When we form a partnership with you, we guarantee that we will provide you with the best resources available. We dedicate ourselves to ensuring that our guidance is crisp and precise while prioritising our client welfare. 
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">Pursuit of Infinite Innovation</AccordionTitle>
                    <AccordionContent id="three">We believe that innovation knows no bounds. We grasp every opportunity that knocks on the door. We are continuously revising and transforming ourselves to ensure that you receive only the best. </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionWrap;
