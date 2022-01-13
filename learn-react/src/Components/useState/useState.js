import React, { useState } from 'react';

function State() {
    //! Destructure the element
    const [name, setName] = useState("Jalaj");

    //! Call another useState Hook
    const [roll, setRoll] = useState(101)

    // const name = nameVariable[0];
    // const setName = nameVariable[1];

    const handleClick = () => {
        setName("Faruq");
        setRoll(109);
    }
    return (
        <>
            <h1>Name: {name}</h1>
            <h3>Roll: {roll}</h3>
            <button type="button" onClick={handleClick}>ClickMe</button>
        </>
    );
}

export default State;