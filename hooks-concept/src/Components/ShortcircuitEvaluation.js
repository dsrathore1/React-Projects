import React, { useState } from 'react';

const ShortCircuitEvaluation = () => {
    const [demo, setDemo] = useState("");

    const clear = () => {
        setDemo([]);
    }
    return (
        <>

            <h1>{demo || " Hello1 "}</h1>  {/* If initial value is empty then Hello will print, otherwise Demo value will print */}
            <h1>{demo && " Raj "}</h1> {/* If initial value is empty then demo will print, otherwise Raj will print */}
            <button className='clearBtn' onClick={clear}>Clear Button</button>

        </>

    );
}

export default ShortCircuitEvaluation;