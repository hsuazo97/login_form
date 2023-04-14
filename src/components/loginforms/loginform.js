import React from "react";
import "./loginform.css";

const LoginForm = () =>{

    const login=()=>{
        console.log("Iniciando sesion");
    }
    
    return (
        <div className="cover">
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="contraseña"/>

            <div className="login-btn" onClick={login}>Login</div>

            <div className="text" >o inicie sesion con</div>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
                
            </div>

        </div>
        
    ) 
}

export default LoginForm