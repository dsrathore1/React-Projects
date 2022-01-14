import React, { useState } from 'react';
import '../Components/AppStyle.css'



const App = () => {
    const [myName, setMyName] = useState("King");
    const changeName = () => {
        let val = myName;
        (val === "King") ? setMyName("DS King") : setMyName("King"); //! Ternary Operation

        
    }
    return (
        <div className='container'>
            <h1 className='heading1'>{myName}</h1>
            <button className='btn' onClick={changeName}>Click Me</button>
        </div>
    );
}

export default App
