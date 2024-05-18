import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        salary: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username: name, password, salary } = formData;
        try {
            const { data } = await axios.post('/person/signup', { name, password, salary });
            if (data.error) {
                toast.error(data.error);
            } else {
                setFormData({});
                toast.success('Signup successful!');
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    };
    

    return (
        <div>
            <h1>Signup</h1>
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
                <input 
                    type="number" 
                    name="salary" 
                    placeholder="Salary" 
                    value={formData.salary} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
