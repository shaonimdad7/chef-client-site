import React, { useEffect, useState } from 'react';
import Bannar from '../../Bannar/Bannar';

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <Bannar></Bannar>
            <div>
                <h3 className='text-center my-5'>Here are all of our chefs who can take your taste bud to another level</h3>
            </div>
        </div>
    );
};

export default Home;