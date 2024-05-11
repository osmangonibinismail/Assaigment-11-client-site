

const Update = () => {
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/S3d3PMT/bg1.png')]">
            <div className="card-body w-7/12 p-10 bg-base-300 mb-20 mt-20">
                <div className="card-body items-center text-center">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <h5 className="text-xl font-bold">User Name</h5>
                    <p>email:osman@gmail.com</p>
                    
                </div>
                <form className="p-10 mb-20 border-dotted border-t border-indigo-500">
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
                                    Food Quantity
                                </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodQuantity" placeholder="Food Quantity" className="input input-bordered w-full" id="" />
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
                                <input type="date" name="expiredDate" placeholder="Expired Date" className="input input-bordered w-full" id="" />
                            </label>
                        </div>
                        <div className="form-control md:w-2/3">
                            <label className="label">
                                <span className="label-text font-bold">
                                    Pickup Location
                                </span>
                            </label>
                            <label className="input-group">
                                <select type="text" name="Subcategory" placeholder="Pickup Location" className="select select-bordered w-full" id="">
                                    <option disabled selected>Chittagong</option>
                                    <option>Dhaka</option>
                                    <option>Rangpur</option>
                                    <option>Rajshahi</option>
                                    <option>Cumilla</option>
                                    <option>Barishal</option>
                                    <option>khulna</option>
                                    <option>Shylhet</option>
                                    <option>Banskhali</option>
                                    <option>Bailchari</option>

                                </select>
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
                            <input type="email" name="additionalNotes" placeholder="Additional Notes" className="input input-bordered input-lg w-full" id="" />
                        </label>
                    </div>
                    {/* add button */}
                    <input type="submit" value="Add Button" className="mt-6 mb-6 w-full btn btn-primary" />
                </form>
            </div>
        </div>
  )
}

export default Update
