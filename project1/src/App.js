import React from 'react'
import { add, sub, mul, div } from './Calc'
function App() {
    return (
        <div className='container'>

            <ol>
                <h1>-: Calculation :-</h1>

                <li>
                    Sum of two numbers are {add(4, 7)}
                </li>
                <li>
                    Substraction of two numbers are {sub(8, 7)}
                </li>
                <li>
                    Multipliction of two numbers are {mul(4, 7)}
                </li>
                <li>
                    Divison of two numbers are {div(16, 8)}
                </li>
            </ol>
        </div>

    );
}
export default App;