import React, { useEffect, useState } from 'react';
import Bannar from '../../Bannar/Bannar';
import Chef from '../../../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import BestItem from '../BestItem/BestItem';
import './Home.css'
import PopularRecipe from '../PopularRecipe/PopularRecipe';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Bannar></Bannar>
            <div>
                <h3 className='text-center chef_section'>Here are all of our chefs who can take your taste bud to another level</h3>
                <div className='card_container'>
                    {
                        categories.map(Catagory => <Chef
                            key={Catagory.id}
                            Catagory={Catagory}
                        ></Chef>)
                    }
                </div>
            </div>
            <BestItem></BestItem>
            <PopularRecipe></PopularRecipe>
        </div>
    );
};

export default Home;