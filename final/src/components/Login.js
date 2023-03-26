import React, {useState} from "react";
export const Login = (props)=>{
    const [email, setEmail] = useState('');
    const [pass, setPass] =useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="loginForm" onSubmit={handleSubmit}>
            {/* <h2>Login</h2> */}
                <label className="formLabel" for="email">Email</label>
                <input className="formInput" value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder="YourEmail@gmail.com" id="email" name="email"></input>
                <label className="formLabel" for="password">Password</label>
                <input className="formInput" value={pass} onChange={(e) => setPass(e.target.value)} type={"password"} placeholder="**********" id="password" name="password"></input>
                <button className="formButton" type="submit" >Log In</button>
                {/* <button className="formLinkButton" onClick={()=>props.onFormSwitch('register')} >Don't have an account? Register here.</button> */}
                <h5>If you don't have an account, please go to the register page.</h5>
            </form>
            
        </div>
    )
}