import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                event.target.reset();
                navigate('/');
                console.log(user);
            })
            .then(error => console.log(error));
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src="https://i.ibb.co/R08ZHs8/login4.png" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ml-8 bg-base-200">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center my-4">New to our website? please <Link to='/register' className="text-orange-600 text-xl font-bold">Register</Link></p>
                        <button onClick={handleSignInWithGoogle} className="border border-indigo-600 mt-5 mb-2 ml-5 mr-5 font-bold text-xl btn btn-outline btn-accent">
                            <FaGoogle></FaGoogle>
                            <p className="ml-3">Login with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
