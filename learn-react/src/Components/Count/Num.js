import React, { useState } from "react";
import '../Count/count.css'

const Count = () => {
    let [num, setCount] = useState(0)
    const IncCount = () => {
        console.log(num++)
        setCount(num++);
    }
    return (
        <>
            <div className="container">
                <h1 className="heading">{num}</h1>
                <button className="btn" type="Button" onClick={IncCount}>Click</button>
            </div>
        </>
    );
}

export default Count;