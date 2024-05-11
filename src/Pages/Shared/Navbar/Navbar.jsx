import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user log out successfully'))
            .catch(error => console.error(error))
    }


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='availableFood'>Available Food</Link></li>
        
        {
            user ? null : (
                <>
                    <li><Link to='register'>Register</Link></li>
                </>
            )
        }
        {
            user && <>
                <li><Link to='addFood'>Add Food</Link></li>
                <li><Link to='manageMyFood'>Manage My Foods</Link></li>
                <li><Link to='update'>Update</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img width="100" height="80" src="https://i.ibb.co/dPrJ3yp/logo1.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-outline btn-accent">Sign Out</a>
                    </>
                        : <Link to="/login">
                            <button className="btn btn-outline btn-accent">Log in</button>
                        </Link>
                }

            </div>
        </div>
    )
}

export default Navbar
