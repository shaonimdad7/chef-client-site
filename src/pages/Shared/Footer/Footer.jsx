import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <div className='footer_container'>
                    <div>
                        <h2 className='footer_header'>Chefs Cuisine</h2>
                        <div className='danger'></div>

                        <p className='mt-3'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form. <br />suffered alteration in some form.</p>
                    </div>
                    <div>
                        <h2 className='footer_header'>Courses </h2>
                        <div className='danger'></div>


                        <ul className='footer_ul mt-3'>
                            <li> Appetizers</li>
                            <li> Breads & Rolls</li>
                            <li> Condiments</li>
                            <li> Desserts</li>
                            <li> Dinners</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className='footer_header'>Purpose Of the Company</h2>
                        <div className='danger'></div>

                        <div className='footer_ul'>
                            <p className='mt-3'>Lead the Market <br />
                                Make sure client satisfaction <br />
                                Career fullfillment <br />
                                Do for the society</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='footer_header'>Contact</h2>
                        <div className='danger'></div>
                        <div className='footer_ul'>
                            <p>524 Broadway , NYC</p>
                            <p>+1 777 - 978 - 5570</p>
                            <p>ChefCuisin@gmail.com</p>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;