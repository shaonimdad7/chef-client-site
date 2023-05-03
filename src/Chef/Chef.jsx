import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = ({ Catagory }) => {
    console.log(Catagory)
    const { name, id, img, years, recipes, like } = Catagory
    return (
        <div className='card_group_container pt-4 pb-3 px-2'>
            <div className='card_img'>
                <img src={img} alt="" />
            </div>
            <hr className='custom_hr w-75 mx-auto mb-2 mt-3' />
            <div className='mt-4 text-center'>
                <h4 className='name'>{name}</h4>
                <div>
                    <p className=''><span className=''>Experience:</span> {years}</p>
                    <p className=''>{recipes}</p>
                    <p className=' mb-4'>How many liked it: {like}</p>
                </div>
                <div className='mb-3'>
                    <Link to={`/details/${id}`} className='btn_recipe'>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;
