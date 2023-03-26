import React, {useState} from "react";

export const Register = (props)=>{
    const [email, setEmail] = useState('');
    const [pass, setPass] =useState('');
    const [name, setname] =useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="registerForm" onSubmit={handleSubmit}>
            {/* <h2>Register</h2> */}
                <label className="formLabel" htmlFor="name" >Full name</label>
                <input className="formInput" value={name} onChange={(e) => setname(e.target.value)} name="name" id="name" placeholder="full name "/>
                <label className="formLabel" for="email">Email</label>
                <input className="formInput" value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder="YourEmail@gmail.com" id="email" name="email"></input>
                <label className="formLabel" for="password">Password</label>
                <input className="formInput" value={pass} onChange={(e) => setPass(e.target.value)} type={"password"} placeholder="**********" id="password" name="password"></input>
                <button className="formButton" type="submit" >Log In</button>
                {/* <button className="formLinkButton" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
                <h5>If you already have an account, please go to the login page.</h5>
            </form>
        </div>
    )
}