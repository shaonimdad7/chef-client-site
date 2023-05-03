import React from 'react';
import { Container } from 'react-bootstrap';
import './PopularRecipe.css'
import imga from '../../../assets/img15.jpg'
import imgb from '../../../assets/img13.jpg'
import imgc from '../../../assets/img11.jpg'
import imgd from '../../../assets/img8.jpg'
import imge from '../../../assets/img4.jpg'
import imgf from '../../../assets/img1.jpg'

const PopularRecipe = () => {
    return (
        <Container className='mt-5'>
            <div className='top_container text-center'>
                <h2>Check Our Delicious Menu</h2>
                <p>Here are our some best foods you can enjoy to take your takste bud to another level.</p>
            </div>
            <div className='main_container'>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imga} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Grilled American Fillet <span className='text-danger'>$15</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imgb} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Carpacio Speacial<span className='text-danger'>$20</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imgc} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Insalata Rucola <span className='text-danger'>$18</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imgd} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Oatmeal Cookie <span className='text-danger'>$12</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imge} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Insalata Rucola <span className='text-danger'>$22</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='single_item_container'>
                    <div className='single_item_container_img mt-3'>
                        <img src={imgf} alt="" />
                    </div>
                    <div className='custom_div mt-3'></div>
                    <div className='text-center'>
                        <h5 className='mt-3'>Vitello Tomato <span className='text-danger'>$17</span></h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PopularRecipe;