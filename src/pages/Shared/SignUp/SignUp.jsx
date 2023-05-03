import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name)
        setError('');

        if (password.length < 6) {
            setError('your password have to be 6 characters or longer')
            return
        }
        createUser(email, password, name)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate('/home')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className='form_container'>
                <h1 className='mb-5'>SignUp here</h1>
                <form onSubmit={handleSignUp} className='form'>
                    <div className='form_control'>
                        <label htmlFor="email">Name</label>
                        <input type="name" name="name" id="" required />

                    </div>
                    <div className='form_control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />

                    </div>
                    <div className='form_control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />

                    </div>

                    <input className='btn_submit' type="submit" value="Signup" />

                </form>
                <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                <p className='text-danger '>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;