import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Register = () => {
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const handleRegister = async event => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, password, photoURL)
        try {
            const result = await createUser(email, password, name, photoURL)
            // console.log(result.user)
            const { data } = await axiosSecure.post('/jwt',
                {
                    email: result?.user?.email,
                },
            )

            // console.log(data)
            toast.success('Successfully Log in!')
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            // console.log(error)
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                toast.error('Email already exists. Please use a different email.');
            } else {
                toast.error('Error registering user: ' + error.message);
            }
        }


    }
    const handleRegisterWithGoogle = async () => {
        try {
            const result = await signInWithGoogle()
            // console.log(result.user)
            const { data } = await axiosSecure.post('/jwt',
                {
                    email: result?.user?.email,
                },
            )

            // console.log(data)
            toast.success('Successfully Log in!')
            navigate('/');
        } catch (error) {
            // console.log(error)
            toast.error(error?.message)
        }
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
                                <input className="btn btn-primary" type="submit" value="Register" />
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
