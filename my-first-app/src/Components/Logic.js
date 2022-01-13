import React from 'react';

function Logic() {

    let curDate = new Date();
    curDate = curDate.getHours();

    let greeting = ' ';
    const styling = {};

    if (curDate > 1 && curDate < 12) {
        greeting = "Good Morning";
        styling.color = 'green'
    }

    else if (curDate > 12 && curDate < 15) {
        greeting = 'Good Afternoon';
        styling.color = 'gold';
    }

    else if (curDate > 15 && curDate < 20) {
        greeting = "Good Evening";
        styling.color = 'Orange';
    }

    else {
        greeting = 'Good Night'
        styling.color = 'black'
    };

    return (
        <>
            <div className='container'>
                <h1>
                    Hello Sir, <span style={styling}>{greeting}</span> !!
                </h1>
            </div>
        </>
    );
}

export default Logic;