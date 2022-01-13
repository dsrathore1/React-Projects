import React, { useState } from "react";
import '../Count/count.css'

const Count = () => {
    let [num, setCount] = useState(0);

    //! Increment Function
    const IncCount = () => {
        // console.log(num++) //* This is for debugging purpose
        setCount(num++);
    }

    //! Decrement Function
    const DecCount = () => {
        // console.log(num--); //? This is for debugging purpose
        setCount(num--);
    }

    //! Reset the value
    const ResetCount = () => {
        // console.log(num); //! This is for debugging purpose
        setCount(num = 0);
    }

    return (
        <>
            <div className="container">
            <h1 className="heading1">Counter APP</h1>
                <h1 className="heading">{num}</h1>
                <div className="btn_container">
                    <button className="btn-inc btn" type="Button" onClick={IncCount}>Increment</button>
                    <button className="btn-reset btn" type="Button" onClick={ResetCount}>Reset</button>
                    <button className="btn-dec btn" type="Button" onClick={DecCount}>Decrement</button>
                </div>
            </div>
        </>
    );
}

export default Count;