import About from "../About/About"
import AllAvailableButton from "../AllAvailableFoodButton/AllAvailableButton"
import Banner from "../Banner/Banner"
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods"
import News from "../News/News"
import OurTeamMember from "../OurTeamMembar/OurTeamMember"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <div className="">
                <FeaturedFoods></FeaturedFoods>
                
            </div>
            <AllAvailableButton></AllAvailableButton>
            <OurTeamMember></OurTeamMember>
            <News></News>
        </div>
    )
}

export default Home
