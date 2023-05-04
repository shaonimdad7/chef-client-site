import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';




const Login = () => {
    const [show, setShow] = useState(false);

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/home';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='form_container'>
            <h1 className='text-center'>Login here</h1>
            <form onSubmit={handleLogIn} className='form'>
                <div className='form_control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />

                </div>
                <div className='form_control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required />
                    <p onClick={() => setShow(!show)} className='btn_hide'><small>
                        {
                            show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                        }
                    </small></p>

                </div>

                <input className='btn_submit' type="submit" value="Login" />


            </form>
            <p><small>New here? <Link to="/signup">Create New Account</Link></small></p>
            <div className='btn_container'>
                <button onClick={handleGoogleSignIn} className='btn_google'> <FaGoogle /> Login With Google </button>
                <button onClick={handleGithubSignIn} className='btn_google'> <FaGithub /> Login With Github </button>
            </div>
        </div>
    );
};

export default Login;