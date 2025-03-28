import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


const LoginForm = ({setFormType}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [sendToProducts, setSendToProducts] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();
        if (!password || !username){
            setMessage('All fields are required');
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
                    'form-type': 'login'
                }),
                
                
            });
            const data = await response.json();
            if (response.ok){
                console.log(data);
                console.log("Form submitted successfully!");
                setSendToProducts(true);
                localStorage.setItem('Approve', true);
                window.location.href = '/products';
            }
            else{
                console.log("Incorrect Username or Password")
                localStorage.setItem('Approve', false)
                
            }
            setMessage(data.message);
            
        } catch(error){
            console.error('Error during form submission: ', error);
        } 
    }
    if (sendToProducts){
        navigate("/products");
    }
    function switchToSignup(){
        setFormType(false);
    }
    return (
        <div>
            <h2> Login</h2>
            <p style = {{color:'red'}}>{message}</p>
                <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
                    
                    <label htmlFor="username" >Username:</label>
                    <input type="text" id="username" name="username" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} />
                    <br></br>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <button type="submit">Login</button>
                    <br></br>
                </form>
                <button onClick = {switchToSignup}>Switch to Signup</button>
                </div>
            

    );
}

export default LoginForm;
