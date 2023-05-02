import React from 'react';
import './Bannar.css'
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Bannar = () => {
    return (
        <div className='slider'>
            <div className='text-center banner_p'>
                <h1>Be our guests to have the best food</h1>
                <div className='marquee_div'>
                    <Marquee className=' marque_style'>
                        There are our best chefs in the Restrarent, We can ensure you that you will have the best food you have ever had
                    </Marquee>
                </div>
                <p>Staying motivated to eat healthy does not have to be impossible. What needs to change more than any specific eating habits is your mindset around diet motivation and your values, which work together to keep you mentally and emotionally committed. </p>
            </div>
        </div>
    );
};

export default Bannar;