import React from 'react'
import { witEditableUser } from "./witEditableUser";


export const UserInfoForm = witEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
        <>
            <label>Name:
                <input value={name} onChange={e => onChangeUser({
                    name: e.target.value
                })}></input>
            </label>
            <label>Age:
                <input type='number' value={age}  onChange={e => onChangeUser({
                    age: Number(e.target.value)
                })}></input></label>
            <label>Hair Color:
                <input value={hairColor} onChange={e => onChangeUser({
                    hairColor: e.target.value
                })}></input></label>
            <button onClick={onResetUser}></button>
            <button onClick={onSaveUser}></button>
        </>
    ) : <p>...loading</p>;
},'/123')
