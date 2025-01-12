import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ChangeLayout = () => {
    const allFood = useLoaderData() || [];
    
  const [item, setItem] = useState([]);
  return (
    <div>
      {/* <div className="text-center">
        <h1 className="text-3xl text-red-500">Total Card:{allFood?.length} </h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 mb-10">
      {
        allFood?.map( (p) => (

          <div className=" w-90 bg-base-100 shadow-xl mb-10">
            <figure><img width="800" height="700" src={p.foodImageURL} alt="Shoes" /></figure>

            <h2 className="text-center mt-6 text-xl font-semibold">{p.foodName}</h2>
            <div className="card-body">
              <div className="flex justify-between">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={p.photoURL} alt="" />
                    {/* <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} /> */}
                  </div>
                </div>
                <div>name: {p.displayName}</div>
              </div>
              <div className="flex justify-between">
                <div className="">Quantity:{p.foodQuantity}</div>
                <div>Expired: {p.expiredDate}</div>
              </div>
              <div>Location:{p.pickupLocation}</div>
            <p>Additional Notes: {p.additionalNotes}</p>
              <Link to={`/singleFoodDetails/${p._id}`}><button className="btn btn-outline btn-info w-full">details</button></Link>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default ChangeLayout
