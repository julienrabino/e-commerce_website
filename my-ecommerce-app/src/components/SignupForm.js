import React, { useState } from 'react';

const SignupForm = ({setFormType})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function switchToLogin(){
        setFormType(true);
    }

    const handleSubmit = (event) => {
        console.log("password",password, "username",username, "email", email, "pw",confirmPassword);
        event.preventDefault();
        if (!password || !username || !email || !confirmPassword){
            console.log("All fields are required");
            setMessage('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            setMessage('Passwords do not match');
            return;
        }


        
    
        setMessage('Signed up successfully!');
        console.log("Form submitted successfully!");

    };
    return(
        <div>
        <h2> Signup</h2>
            <p style = {{color:'red'}}>{message}</p>
                <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                    <label htmlFor="username" >Username:</label>
                    <input type="text" id="username" name="username" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)}  style = {{width:'200px'}}/>
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} style = {{width:'200px'}}/>
                    <br></br>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
                    
                    <br></br>
                    <button type="submit">Signup</button>
                    <br></br>
                </form>
            <button onClick = {switchToLogin}>Switch to Login</button>
        </div>
    )
}
export default SignupForm;