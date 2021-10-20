
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth([])
    const location = useLocation ();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log();

    const handleGoogleLogIn = ()=>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }

    return (
        <div className="">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link> </p>
                <div>--------- or ---------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;