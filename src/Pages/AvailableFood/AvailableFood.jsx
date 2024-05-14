import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { data } from "autoprefixer";


const AvailableFood = () => {

  // const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  const allFood = useLoaderData() || [];
  const [item, setItem] = useState([]);
  const [filter, setfilter] = useState('')
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('')


  const [asc, setAsc] = useState(true);
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch(`https://assaigment-11-server-site-henna.vercel.app/allAvailableFood?sort=${asc? 'asc' : 'des'}&search=${search}`)
    .then(res => res.json())
    .then(data => setSort(data));
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

  const handleSearch = e =>{
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
  }

  return (
    <div>
      <div className="flex justify-between">
        {/* <h1 className="text-3xl text-red-500">Total Card:{allFood?.length} </h1> */}
        
        {/*search form   onSubmit={handleSearch} */}
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
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
        {/*  */}
        <button 
        onClick={() => setAsc(!asc)}
        className="btn btn-outline  justify-end">
          {asc ? 'Date High to low' : 'Date Low to High'}
        </button>
        {/* <div>
          <select
            onChange={e => {
              setSort(e.target.value)
            }}
            name="sort" id="sort" value={sort} className="border p-4 rounded-md">
            <option value="">Expired Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div> */}

      </div>
      <div className="mt-5 mb-5 text-center">
      <Link to={'/changeLayout'}><button className="btn btn-outline  justify-end">Change Layout</button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-10 mb-10">
        {
          allFood?.map((p) => (

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

export default AvailableFood
