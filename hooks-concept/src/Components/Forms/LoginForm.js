import React, { useState } from 'react';

import "../../Assets/CSS/LoginForm.css"

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitData = (e) => {

        e.preventDefault();

        const newEntry = { email: email, pwd: pwd };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);

    }

    return (
        <>
            {/* Form */}
            <form className='formContainer' onSubmit={submitData}>
                <div className="container">

                    {/* Email */}
                    <label htmlFor="email" className='email forMargin '>Email</label>
                    <input className='emailI' type="email" placeholder="Email" name='email' value={email} autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />

                    {/* Password  */}
                    <label htmlFor="password" className='pwd forMargin'>Password</label>
                    <input className='pwdI' type="password" placeholder="******" name='pwd' value={pwd} onChange={(e) => { setPwd(e.target.value) }} autoComplete='off' />

                    {/* Login Button */}
                    <button className="loginBtn" type='submit'>Login</button>

                </div>

                <div className='showDetails'>
                    {
                        allEntry.map((curElem) => {
                            return (
                                <>
                                    <div className="Details">
                                        <h2 className="emailD"> {curElem.email} </h2>
                                        <h3 className="pwdD"> {curElem.pwd}</h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </form>


        </>
    );
};

export default LoginForm;
