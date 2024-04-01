import React, { useState } from 'react';

const LoginForm = ({setFormType}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    async function handleSubmit (event) {
        event.preventDefault();
        if (!password || !username){
            setMessage('All fields are required');
            return;
        }
       setMessage('Login successful!')

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
