import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link,  useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const SingleFoodDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    // console.log(id);
    const [singleFood, setSingleFood] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://assaigment-11-server-site-henna.vercel.app/singleFoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleFood(data);
                // console.log(data);
            })
    }, [id])

    const handleSingleFormData = (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImageURL = form.foodImageURL.value;
        const id = form.id.value;
        const expiredDate = form.expiredDate.value;
        const requestDate = form.requestDate.value;
        const pickupLocation = form.pickupLocation.value;
        const additionalNotes = form.additionalNotes.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL
        const myFoodRequest = { id, foodName, foodImageURL, expiredDate, pickupLocation, additionalNotes, email, displayName, photoURL, requestDate
        }

        
        // console.table(myFoodRequest);
        fetch(`https://assaigment-11-server-site-henna.vercel.app/requested`, {
            method: "POST",
            // credentials: "include",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(myFoodRequest)
        })
            .then(res => res.json())
            toast.success('food request successfully')
            navigate('/')

            .then(data => {
                // console.log(data)
                
            })
    }

    
    return (
        <div className="mt-10 mb-20 min-h-screen bg-[url('https://i.ibb.co/J5dBT0v/22.jpg')]">
            <div className="hero w-10/12 bg-base-300 mb-10 mt-10">
                <h1 className="text-center font-extrabold text-4xl text-teal-800">Single a Food </h1>
                <div className="text-center text-2xl mb-10 mt-5">
                    <h1>Donator name: {singleFood.displayName}</h1>
                    <h1>Pickup Location: {singleFood.pickupLocation}</h1>
                </div>
                <div className="mb-20 border-dotted border-t border-indigo-500">
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img width="500" height="500" src={singleFood.foodImageURL} className=" rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl font-bold">Food Name: {singleFood.foodName}</h1>
                                <p className="py-6">Additional Notes: {singleFood.additionalNotes}</p>
                                <div className="flex justify-between">
                                    <h3>Food Quantity: {singleFood.foodQuantity}</h3>
                                    <h3>Expired Date: {singleFood.expiredDate}</h3>
                                </div>
                                {/* <button className="btn btn-active btn-accent mt-5 w-8/12">Request</button> */}
                                {/* modal */}
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-active btn-accent mt-5 w-8/12" onClick={() => document.getElementById('my_modal_4').showModal()}>Request open model</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-2xl">
                                        <div className="card-body items-center text-center">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                                </div>
                                            </div>
                                            {
                                                user && <>
                                                    <div className="flex gap-2">
                                                        <p className="font-semibold">User Name:</p>
                                                        <a>{user.displayName}</a>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <p className="font-semibold">User Email:</p>
                                                        <span>{user.email}</span>
                                                    </div>
                                                </>
                                            }

                                        </div>
                                        <div className="border-dotted border-t border-indigo-500 ">
                                            <img width="500" height="500" src={singleFood.foodImageURL} alt="" className="mt-6 mb-5"/>
                                        </div>
                                        <form onSubmit={handleSingleFormData} className="mb-20 border-dotted border-t border-indigo-500">
                                            {/* 1 */}
                                            <div className="md:flex gap-4 mb-4">
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Food Name
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="foodName"
                                                            defaultValue={singleFood.foodName} readOnly
                                                            placeholder="Food Name" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Food Id
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text"
                                                            defaultValue={singleFood._id} readOnly name="id" placeholder="Food Id" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Food Image URL
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text"
                                                            defaultValue={singleFood.foodImageURL} readOnly name="foodImageURL" placeholder="Food Image URL" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>

                                            </div>

                                            {/* 3 */}
                                            <div className="md:flex gap-4 mb-4">
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Expired Date
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="date" defaultValue={singleFood.expiredDate} readOnly name="expiredDate" className="input input-bordered w-full" placeholder="Expired Date"  id="" />
                                                    </label>

                                                </div>
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Request Date
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)} name="requestDate" className="input input-bordered w-full" placeholder="Expired Date" />
                                                    </label>

                                                </div>
                                                <div className="form-control md:w-1/3">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            Pickup Location
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text"
                                                            defaultValue={singleFood.pickupLocation} readOnly name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>

                                            </div>
                                            {/* 4 */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            User Name
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text"
                                                            defaultValue={singleFood.displayName} readOnly name="userName" placeholder="User Name" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold">
                                                            User Email
                                                        </span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="email"
                                                            defaultValue={singleFood.email} readOnly name="userEmail" placeholder="Your Email" className="input input-bordered w-full" id="" />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* 5 */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text font-bold">
                                                        Additional Notes
                                                    </span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="additionalNotes" placeholder="Additional Notes" className="input input-bordered input-lg w-full" id="" />
                                                </label>
                                            </div>
                                            {/* add button */}
                                            <input type="submit" value="Request" className="mt-6 w-full btn btn-primary" />

                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleFoodDetails
