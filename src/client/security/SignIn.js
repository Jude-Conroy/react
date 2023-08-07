import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "./AuthContext";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let { setIsAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        setIsAuthenticated(false);
    }, [setIsAuthenticated]);

    const onSubmit = async event => {
        event.preventDefault();
        try {
            // Make a POST request to your server-side /login endpoint
            const response = await axios.post('http://localhost:5000/login', {
                username: username,
                password
            });

            // The response will include the JWT token if authentication was successful
            const { token } = response.data;

            if (response.status) {
                setIsAuthenticated(true);
                localStorage.setItem('token', token);
                console.log('authentication:', response.data);
                toast.success("This is response data: ", response.data);

            }
            // After successful login, navigate to the dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during server-side authentication:', error);
            toast.error('Sign in failed. Please try again.');
        }
    };

    return (
        <div className="signin-form">
            <div className="container" >
                <h1 className="title is-3 has-text-centered">Sign In</h1>
                <form onSubmit={onSubmit} className="signin-form ">
                    <div className="field">
                        <label className="label">username</label>
                        <div className="signin-form" >
                            <input className="input input-limited" value={username} onChange={event => setUsername(event.target.value)}
                                width={20} required />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="signin-form">
                            <input
                                className="input input-limited"
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                width={20}
                                required />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-link">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
