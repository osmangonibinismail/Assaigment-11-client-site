import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { data } from "autoprefixer";


const AvailableFood = () => {

  // const axiosSecure = useAxiosSecure()
  const allFood = useLoaderData() || [];
  const [search, setSearch] = useState('');


  const [asc, setAsc] = useState(true);
  const [food, setFood] = useState(allFood);
  console.log(food)

  useEffect(() => {
    if (search && asc) {
      fetch(`https://assaigment-11-server-site-henna.vercel.app/allAvailableFood?sort=${asc?'asc':'des'}&search=${search}`)
        .then(res => res.json())
        .then(data => setFood(data));
    }
  }, [asc, search])

  // useEffect(() => {
  //   const getCount = async () => {
  //     const { data } = await axiosSecure(`/allAvailableFood?filter=$(filter)&sort=${sort}$search=${search}`)
  //   }
  //   getCount()
  // }, [filter, sort, search])
  // useEffect(() => {
  //   const getCount = async () => {
  //     const { data } = await axiosSecure(`/allAvailableFood?filter=$(filter)`)
  //   }
  //   getCount(data.count)
  // }, [filter, sort, search])

  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
  }

  return (
    <div>
      {/* <form onSubmit={handleSearch}>
        <input type="text" name="search" id="" />
        <input type="submit" value="search" className="btn" />
      </form> */}
      <div className="text-start ml-2">
        {/* <h1 className="text-3xl text-red-500">Total Card:{allFood?.length} </h1> */}

        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden  rounded-lg ">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline focus:placeholder-transparent"
              // onChange={e => setSearchText(e.target.value)}
              // value={searchText}
              type="text"
              name="search"
              placeholder="Enter Food Name" aria-label='Enter Food Name'
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="text-end mr-4">
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-outline ">
          {asc ? 'Date High to low' : 'Date Low to High'}
        </button>
      </div>
      <div className="mt-5 mb-5 text-center">
        <Link to={'/changeLayout'}><button className="btn btn-outline  justify-end">Change Layout</button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-10 mb-10">
        {
          food?.map((p) => (

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
                  <div><a className="font-semibold">Doner Name: </a>{p.displayName}</div>
                </div>
                <div className="flex justify-between">
                  <div className=""><a className="font-semibold">Quantity: </a>{p.foodQuantity}</div>
                  <div><a className="font-semibold">Expired Date: </a>{p.expiredDate}</div>
                </div>
                <div><a className="font-semibold">Pickup Location: </a>{p.pickupLocation}</div>
                <p><a className="font-semibold">Additional Notes: </a>{p.additionalNotes}</p>
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
