import React from 'react'
import { useEffect,useState } from 'react'

const ControlledForm = () => {
    const [name, setname] = useState(null)
    const [age, setage] = useState(null)
    const [hairColor, sethairColor] = useState(null)
    useEffect(() => {
        if (name.length < 2) {
            console.log('name is too short')
        }
    },[name])

  return (
    <form>
      <input
        name="name"
        type="text"
              placeholder="Name"
              value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      ></input>
      <input
        name="age"
        type="number"
              placeholder="Age"
              value={age}
        onChange={(e) => {
          setage(Number(e.target.value));
        }}
      ></input>
      <input
        name="hairColor"
        type="text"
              placeholder="Hair Color"
              value={hairColor}
        onChange={(e) => {
          sethairColor(e.target.value);
        }}
      ></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default ControlledForm
