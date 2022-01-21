import React, { useState } from 'react';
import '../Components/UseStateArray.css';

const UseStateArray = () => {
    const bioData = [
        {
            id: 1, Name: "King", Age: 19
        },
        {
            id: 2, Name: "DS", Age: 22
        },
        {
            id: 3, Name: "Gaurang", Age: 36
        },
        {
            id: 4, Name: "Ravi", Age: 14
        }
    ];
    const [mydata, setmydata] = useState(bioData);
    const clearData = () => {
        setmydata([]);
    }
    return (
        <>
            <div className="container">
                {mydata.map((curElem) => {
                    return (<h1 className='one heading' id={curElem.id}>Name: {curElem.Name} & Age: {curElem.Age}</h1>);
                })
                }
                <button className='btn' onClick={clearData}>Clear</button>
            </div>
        </>
    );
}

export default UseStateArray;