import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const witEditableUser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(`http://localhost:8080/users/123`);
                const result = await response.data;
                setOriginalUser(result);
                setUser(result);
                console.log(result)
            })();
        }, []);
        const onChangeUser = changes => {
            setUser({...user,...changes})
        }
        const onSaveUser = async () => {
            const response = await axios.post(`http://localhost:8080/users/123`, { user })
            const result = await response.data;
            setOriginalUser(result);
            setUser(result);
        }
        const onResetUser = () => {
            setUser(originalUser);
        }
        return <Component {...props} users={user} 
            onChangeUer={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />
    }
}