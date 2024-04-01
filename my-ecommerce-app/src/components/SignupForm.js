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

    async function handleSubmit(event)  {
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


        
    
        console.log("Form submitted successfully!");
        
        const backendEndpoint = 'http://127.0.0.1:5000/login';
        try{
            const response = await fetch(backendEndpoint, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'username':username,
                    'password': password,
                    'email': email,
                    'form-type': 'signup',
                
                }),
            
                
            });
            const data = await response.json();
            if (response.ok){
                console.log(data);
                console.log("Form submitted successfully!");

            }
            else{
                console.log("Username already exists")
            }
            setMessage(data.message);

        } catch(error){
            console.error('Error during form submission: ', error);
        }

    }
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