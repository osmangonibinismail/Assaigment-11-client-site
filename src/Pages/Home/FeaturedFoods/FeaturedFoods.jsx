import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const FeaturedFoods = () => {


    const allFood = useLoaderData() || [];
    console.log(allFood)
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://assaigment-11-server-site-henna.vercel.app/featuredFood')
          .then(res => res.json())
          .then(data => {
            setItem(data);
          })
      }, [])


    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {
                item.slice(0, 6).map((p) => (
                    <div className=" w-90 bg-base-100 shadow-xl mb-10">
                        <figure><img width="800" height="700" src={p.foodImageURL} alt="Shoes" /></figure>

                        <h2 className="text-center mt-6 text-xl font-semibold">{p.foodName}</h2>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={p.photoURL} alt="" />
                                    </div>
                                </div>
                                <div><a className="font-semibold">Donator Name: </a>{p.displayName}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className=""><a className="font-semibold">Quantity: </a>{p.foodQuantity}</div>
                                <div><a className="font-semibold">Expired: </a> {p.expiredDate}</div>
                            </div>
                            <div><a className="font-semibold">Pickup Location: </a>{p.pickupLocation}</div>
                            <p><a className="font-semibold">Additional Notes: </a>{p.additionalNotes}</p>
                            <Link to={`/singleFoodDetails/${p._id}`}><button className="btn btn-outline btn-info w-full">details</button></Link>

                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default FeaturedFoods
