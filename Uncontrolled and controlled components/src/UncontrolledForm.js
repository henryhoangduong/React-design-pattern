import React from 'react'

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = e => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" ref={nameInput}></input>
        <input name="age" type="number" placeholder="Age" ref={ageInput}></input>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput}></input>
            <input type='submit' value='submit'></input>
      </form>
    );
}
