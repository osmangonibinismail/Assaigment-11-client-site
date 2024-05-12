import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";


const SingleFoodDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id);
    const [singleFood, setSingleFood] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleFoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleFood(data);
                console.log(data);
            })
    }, [id])
    return (
        <div className="p-20 mt-10 mb-20 hero min-h-screen bg-[url('https://i.ibb.co/J5dBT0v/22.jpg')]">
            <div className="card-body w-10/12 p-5 bg-base-300 mb-10 mt-10">
                <h1 className="text-center font-extrabold text-4xl text-teal-800">Single a Food </h1>
                <div className="text-center text-2xl mb-10 mt-5">
                    <h1>Donator name: {singleFood.displayName}</h1>
                    <h1>Pickup Location: {singleFood.pickupLocation}</h1>
                </div>
                <div className="p-10 mb-20 border-dotted border-t border-indigo-500">
                    <div className="hero min-h-screen bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse p-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Food Name: </h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <div className="flex justify-between">
                                    <h3>Food Quantity: </h3>
                                    <h3>Expired Date: </h3>
                                </div>
                                <button className="btn btn-active btn-accent mt-5 w-8/12">Request</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleFoodDetails
