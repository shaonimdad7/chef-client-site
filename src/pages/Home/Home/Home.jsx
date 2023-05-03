import React, { useEffect, useState } from 'react';
import Bannar from '../../Bannar/Bannar';
import Chef from '../../../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('catagory.json')
    //         .then(res => res.json())
    //         .then(data => setJobcatafories(data))
    // }, [])

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
        </div>
    );
};

export default Home;