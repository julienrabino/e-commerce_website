import React , { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Loginpage = () =>{
    const [showLogin, setShowLogin] = useState(true);

    const setFormType = (status)=>{
        setShowLogin(status);
    }
    return(
        <div>
            <Header />
            {showLogin &&<LoginForm  setFormType = {setFormType}/>}
            {!showLogin &&<SignupForm setFormType = {setFormType}/> }
       
            <Footer />
            
        </div>
    )
}

export default Loginpage;