import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Your Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Aleardy have an account? <Link to="/login">Log In</Link> </p>
                <div>--------- or ---------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;