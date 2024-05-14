import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyRequest = () => {
    
    const { user } = useContext(AuthContext);
    // const axiosSecure = useAxiosSecure()
    
    
  const axiosSecure = useAxiosSecure()
    // const allFood = useLoaderData() || [];
    // const [requestFood, setRequestFood] = useState(allFood);
    // console.log(requestFood)
    const { data: requestFood = [], isLoading, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['request'],
    })
    // console.log(requestFood)
    // console.log(isLoading)

    const getData = async () => {
        const {data} = await axiosSecure(`/requested/${user?.email}`)
        return data
    }

    if (isLoading) return <p className="text-green-500 text-center text-2xl font-bold">Data is Loading............</p>
    if (isError || error) {
        // console.log(isError, error)
    }

    // useEffect(() => {
    //     fetch(`https://assaigment-11-server-site-henna.vercel.app/requested/${user?.email}`, {
    //         credentials: "include",
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setRequestFood(data);
    //         })
    // }, [user?.email])
    
    return (

        <div>
            <div className="text-center px-7 py-3 text-2xl mt-20 text-blue-600 bg-blue-100 rounded-xl w-6/12 ml-40">
                Total Request: <a className="text-green-500 text-xl">{requestFood.length}</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-11 p-20">
                {
                    requestFood?.map((requestFood) => (
                        <div>

                            <div className="card w-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl">
                                <div className="card-body">
                                    <h2 className="card-title">{requestFood.displayName}</h2>
                                    <p>{requestFood.expiredDate}</p>
                                    <h2>Food id: {requestFood._id}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn">{requestFood.pickupLocation}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyRequest
