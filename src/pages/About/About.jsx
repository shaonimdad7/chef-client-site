import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../assets/ab-one.jpg'
import img2 from '../../assets/ab-two.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <div className='about_container'>
                    <div className='img_container'>
                        <div className='img_one'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='img_two'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='about_header'>Chefs cuisine is One Of The Best <br /> & Trusted Food Service.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;