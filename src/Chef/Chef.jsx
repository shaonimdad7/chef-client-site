import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Chef.css'

const Chef = ({ Catagory }) => {
    console.log(Catagory)
    const { name, id, img, years, recipes, like } = Catagory
    return (
        <div className='card_group_container pt-4 pb-3 px-2'>
            <div className='card_img'>
                <img src={img} alt="" />
            </div>
            <div className='mt-4 text-center'>
                <h4>{name}</h4>
                <div>
                    <p><span className='text-danger'>Experience:</span> {years}</p>
                    <p className=''>{recipes}</p>
                    <p>How many liked it: {like}</p>
                </div>
                <button className='btn_recipe mt-1'>View Recipes</button>
            </div>
        </div>
    );
};

export default Chef;
