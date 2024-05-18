import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const LoginForm = () => {
    const navigate = useNavigate();
    const { fetchUserProfile } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;
        try {
            const { data } = await axios.post('/person/login', { username, password });
            if (data.error) {
                toast.error(data.error);
            } else {
                setFormData({ username: '', password: '' }); // Reset form data
                toast.success('Login successful!');
                fetchUserProfile(); // Fetch user profile after successful login
                navigate('/dashboard');
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;
