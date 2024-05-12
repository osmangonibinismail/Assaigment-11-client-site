import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    console.log(id);
    const [food, setFood] = useState({});

    const foodUpdate = useLoaderData();
    console.log(foodUpdate);

    useEffect(() => {
        fetch(`http://localhost:5000/singleFood/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data);
                console.log(data);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImageURL = form.foodImageURL.value;
        const foodQuantity = form.foodQuantity.value;
        const foodStatus = form.foodStatus.value;
        const expiredDate = form.expiredDate.value;
        const pickupLocation = form.pickupLocation.value;
        const additionalNotes = form.additionalNotes.value;
        const foodUpdate = { foodName, foodImageURL, foodQuantity, foodStatus, expiredDate, pickupLocation, additionalNotes}


        fetch(`http://localhost:5000/updateFood/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(foodUpdate)
        })
            .then(res => res.json())

            .then(data => {
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Update Food Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
                console.log(data)
            })

        e.target.reset()
        console.log(foodUpdate);
    }

    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/S3d3PMT/bg1.png')]">
            <div className="card-body w-7/12 p-10 bg-base-300 mb-20 mt-20">
                <h1 className="text-center font-extrabold text-4xl text-fuchsia-900">Update a Food</h1>
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
                <form onSubmit={handleUpdate} className="p-10 mb-20 border-dotted border-t border-indigo-500">
                    {/* 1 */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Name
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" id="" defaultValue={food.foodName} />
                            </label>
                        </div>
                        <div className="form-control md:w-2/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Image URL
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodImageURL" placeholder="Food Image URL" className="input input-bordered w-full" id="" defaultValue={food.foodImageURL}/>
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
                                <input type="text" name="foodQuantity" placeholder="Food Quantity" className="input input-bordered w-full" id="" defaultValue={food.foodQuantity}/>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Food Status
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodStatus" placeholder="Food Status" className="input input-bordered w-full" value="Available" readOnly id="" defaultValue={food.foodStatus}/>
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
                                <input type="date" name="expiredDate" placeholder="Expired Date" className="input input-bordered w-full" id="" defaultValue={food.expiredDate}/>
                            </label>
                        </div>
                        <div className="form-control md:w-2/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Pickup Location
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" id="" defaultValue={food.pickupLocation}/>
                            </label>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">
                                Additional Notes
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="additionalNotes" placeholder="Additional Notes" className="input input-bordered input-lg w-full" id="" defaultValue={food.additionalNotes}/>
                        </label>
                    </div>
                    {/* add button */}
                    <input type="submit" value="Update Button" className="mt-6 mb-6 w-full btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default Update
