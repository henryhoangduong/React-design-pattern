import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const withUser = (Component, userID) => {
    return props => {
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(`http://localhost:8080/users/${userID}`);
                const result = await response.data;
                setUser(result)
            })();
        })
        return <Component {...props} user={user} />;
    }
}