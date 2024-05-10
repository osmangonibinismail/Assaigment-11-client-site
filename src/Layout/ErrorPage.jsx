import { Link } from "react-router-dom"


const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <figure className="px-28">
                <img width="600" height="600" src="https://i.ibb.co/LgwVK97/errorpage.jpg" alt="" />
            </figure>
            <div className=" items-center text-center">
                <Link to="/"><button className="text-center text-xl font-bold mb-20 btn btn-warning">Go back to home</button></Link>
            </div>
        </div>
    )
}

export default ErrorPage
