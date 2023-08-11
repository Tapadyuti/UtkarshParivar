import React from 'react';
import './../styles/login.css';
import { checkLogin } from '../services/api-services';

const Login = () => {

    let pld = {'user_id':'utk_00001', 'password':'Password@123'};
    const login = ()=>{
        checkLogin(pld);
    }
  return (
    <section>
        <div className="form-box">
            <div className="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required />
                        <label htmlFor="">Enter User ID</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>
                    {/* <div className="forget">
                        <label htmlFor="" />
                        <input type="checkbox"/>Remember Me
                        <a href="#">Forget Password</a></label>

                    </div> */}
                    <button onClick={login()}>Log in</button>
                    {/* <div className="register">
                        <p>Don't have a account <a href="#/">Register</a></p>
                    </div> */}
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login;