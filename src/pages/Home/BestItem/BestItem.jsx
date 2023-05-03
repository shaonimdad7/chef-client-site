import React from 'react';
import { Container } from 'react-bootstrap';
import './BestItem.css'
import img1 from '../../../assets/imga.jpg'
import img2 from '../../../assets/imgb.jpg'
import img3 from '../../../assets/imgc.jpg'

const BestItem = () => {
    return (
        <Container>
            <h2 className='best'>We Know How to Make the <br /> Hygienic And Trusted Food in the <br /> city....</h2>
            <div className='bestitem_container'>
                <div className='best_itemn_img'>
                    <img src={img1} alt="" />
                    <h4 className='text-center mt-2'>20 Years of Experience</h4>
                </div>
                <div className='best_itemn_img'>
                    <img src={img2} alt="" />
                    <h4 className='text-center mt-2'>20 Years of Experience</h4>
                </div>
                <div className='best_itemn_img'>
                    <img src={img3} alt="" />
                    <h4 className='text-center mt-2'>20 Years of Experience</h4>
                </div>
            </div>
        </Container>
    );
};

export default BestItem;