import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AvailableFood = () => {

  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const allFood = useLoaderData() || [];
  const [item, setItem] = useState([]);
  const [filter, setfilter] = useState('')
  const [sort, setSort] = useState('');

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(`/allAvailableFood?filter=$(filter)&sort=${sort}`)
    }
    getCount()
  }, [filter])

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-red-500">Total Card:{allFood?.length} </h1>
        <Link to={'/changeLayout'}><button className="mt-10 btn btn-outline  justify-end">Change Layout</button></Link>
        {/*  */}
        
        {/*  */}
        <div>
          <select
            onChange={e => {
              setSort(e.target.value)
            }}
            name="sort" id="sort" value={sort} className="border p-4 rounded-md">
            <option value="">Expired Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mt-10 mb-10">
        {
          allFood?.map((p) => (

            <div className=" w-96 bg-base-100 shadow-xl mb-10">
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

export default AvailableFood
