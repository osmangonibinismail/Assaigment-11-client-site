import AllAvailableButton from "../AllAvailableFoodButton/AllAvailableButton"
import Banner from "../Banner/Banner"
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods"
import News from "../News/News"
import OurTeamMember from "../OurTeamMembar/OurTeamMember"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-10 p-6">
                <FeaturedFoods></FeaturedFoods>
            </div>
            <AllAvailableButton></AllAvailableButton>
            <OurTeamMember></OurTeamMember>
            <News></News>
        </div>
    )
}

export default Home
