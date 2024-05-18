import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUserProfile = async () => {
        try {
            const { data } = await axios.get('/person/profile');
            setUser(data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    useEffect(() => {
        fetchUserProfile(); // Fetch user profile on initial render
    }, []);

    return (
        <UserContext.Provider value={{ user, fetchUserProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
