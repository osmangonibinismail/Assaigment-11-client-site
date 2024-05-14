import {  useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../Provider/AuthProvider";


const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    const { user } = useContext(AuthContext);
// console.log(user)
    // console.log("this is ", user);
    const [addFormErrors, setAddFormErrors] = useState({});
    const Navigate = useNavigate();

    const handleAddForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImageURL = form.foodImageURL.value;
        const foodQuantity = form.foodQuantity.value;
        const foodStatus = form.foodStatus.value;
        const expiredDate = form.expiredDate.value;
        const pickupLocation = form.pickupLocation.value;
        const additionalNotes = form.additionalNotes.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL
        const addFood = { foodName, foodImageURL, foodQuantity, foodStatus, expiredDate, pickupLocation, additionalNotes, email, displayName, photoURL }


        fetch("https://assaigment-11-server-site-henna.vercel.app/addFood", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(addFood)
        })
            .then(res => res.json())


            // Navigate('/')
            .then(data => {
                // console.log(data)
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Add Food Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
            })

        e.target.reset()
        // console.log(addFood);

    };

    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/yFqnB0L/addbg.png')]">
            <div className="card-body w-10/12 bg-base-300 mb-20 mt-20">
                <h1 className="text-center font-extrabold text-4xl text-teal-800">Add a Food </h1>
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
                <form onSubmit={handleAddForm} className="p-10 mb-20 border-dotted border-t border-indigo-500">
                    {/* 1 */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Name
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-2/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Image URL
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodImageURL" placeholder="Food Image URL" className="input input-bordered w-full" id="" />
                            </label>
                        </div>

                    </div>
                    {/* 2 */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Quantity
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodQuantity" placeholder="Food Quantity" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Status
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodStatus" placeholder="Food Status" className="input input-bordered w-full" value="Available" readOnly id="" />
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
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="expiredDate" className="input input-bordered w-full" placeholder="Expired Date"/>
                            </label>
                        </div>
                        <div className="form-control md:w-2/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Pickup Location
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" id="" />
                            </label>
                        </div>

                    </div>
                    {/* 4 */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">
                                    User Name
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">
                                    User Email
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="userEmail" placeholder="Your Email" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">
                                    User Photo URL
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodImageURL" placeholder="User Photo URL" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                    </div> */}
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
                    <input type="submit" value="Add Button" className="mt-6 mb-6 w-full btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default AddFood
