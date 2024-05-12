

const AvailableFood = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mt-10 mb-10">
      <div className=" w-96 bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

        <h2 className="text-center mt-6 text-xl font-semibold">Shoes!</h2>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>name</div>
          </div>
          <div className="flex justify-between">
            <div className="">Quantity:</div>
            <div>Expired:</div>
          </div>
          <div>Location:</div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className="btn btn-outline btn-info">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default AvailableFood
