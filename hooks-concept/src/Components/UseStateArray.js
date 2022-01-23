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

    const removeElem = (id) => {
        const myNewData = mydata.filter((curElem) => {
            return curElem.id !== id;
        }); //! Filter function filter the element and eliminate from the data

        setmydata(myNewData);
    }

    return (
        <>
            <div className="container">
                {mydata.map((curElem) => {
                    return (
                        <div className="inputContainer" key={curElem.id}>
                            <div className="inlineContainer">
                                <h1 className='one heading'>Name: {curElem.Name} & Age: {curElem.Age}</h1>
                                <button className="removeBtn" onClick={() => removeElem(curElem.id)}>Remove</button>
                            </div>
                        </div>
                    );
                })
                }
                <button className='btn' onClick={clearData}>Clear</button>
            </div>
        </>
    );
}

export default UseStateArray;