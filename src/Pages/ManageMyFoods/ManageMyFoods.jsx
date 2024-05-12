import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageMyFoods = (food) => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [deleteFood, setDeleteFood] = useState(false);
  // console.log(user)
  useEffect(() => {
    fetch(`http://localhost:5000/myFood/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
      })
  }, [user, deleteFood])
  const handleDelete = (id) => {
    

    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        }
        
      });
      setDeleteFood(!deleteFood)

  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-20 gap-4 ml-5">
      {
        item?.map(p => (

          <div className=" w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

            <h2 className="text-center mt-6 text-xl font-semibold">{p.foodName}</h2>
            <div className="card-body">
              <div className="flex justify-between">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                  </div>
                </div>
                <div>name: {user.displayName}</div>
              </div>
              <div className="flex justify-between">
                <div className="">Quantity:{p.foodQuantity}</div>
                <div>Expired: {p.expiredDate}</div>
              </div>
              <div>Location:{p.pickupLocation}</div>
              <Link to={`/update/${p._id}`}><button className="btn btn-outline btn-info w-full">Update</button></Link>
              {/* <Link to={`/singleFoodDetails/${p._id}`}><button className="btn btn-outline btn-info w-full">details</button></Link> */}
              <button onClick={() => handleDelete(p._id)} className="btn btn-outline btn-warning">Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ManageMyFoods
