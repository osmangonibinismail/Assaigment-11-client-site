import { Link } from "react-router-dom"


const AllAvailableButton = () => {
  return (
    <div className="mb-10 px-40">
      <Link to={`/availableFood`}><button className="btn btn-accent w-full">All Available Food Card Click now!</button></Link>
    </div>
  )
}

export default AllAvailableButton
