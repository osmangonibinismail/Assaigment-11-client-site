import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Register = () => {

    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL)

        createUser(email, password, name, photoURL)
        .then(result => {
            const user = result.user;
            event.target.reset();
            navigate('/');
            console.log(user);
        })
        .catch(error => console.log(error))

    }
    const handleRegisterWithGoogle = () => {
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
                <div className="w-1/2 mr-14">
                    <img src="https://i.ibb.co/jL97rrG/login1.png" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ml-8 bg-base-200">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold ">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="osman@gmail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center my-4">Already Have an Account? please <Link to='/login' className="text-orange-600 text-xl font-bold">Log in</Link></p>
                        <button onClick={handleRegisterWithGoogle} className="border border-indigo-600 mt-5 mb-2 ml-5 mr-5 font-bold text-xl btn btn-outline btn-accent">
                            <FaGoogle></FaGoogle>
                            <p className="ml-3">Register with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
