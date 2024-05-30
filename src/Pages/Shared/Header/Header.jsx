import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex mt-2 border border-lime-600 bg-gray-200 ">
            <button type="button" className="px-12 py-3 flex font-semibold border rounded bg-cyan-500 dark:border-gray-800 dark:text-gray-800">Breaking</button>
            <Marquee pauseOnHover={true} speed={100}>
                <div className="gap-10 flex">
                <p className="text-orange-500 text-xl font-bold">Experience the sizzle of our hot and discount services at OAI Food Corner! </p>
                <p className="text-orange-500 text-xl font-bold">We provide unique offers and specials on our menu, ensuring you enjoy delicious meals at unbeatable prices.  </p>
                <p className="text-orange-500 text-xl font-bold"> With our exclusive deals and attentive service, dining at OAI Food Corner is an experience you won't forget.  </p>
                </div>

                {/* <Link className="mr-12" to='/'>I can be a React component, multiple...... </Link>
                <Link className="mr-12" to='/'>I can be a React component, multiple......</Link>
                <Link className="mr-12" to='/'>I can be a React component, multiple..... </Link> */}
            </Marquee>
            
        </div>
    )
}

export default Header
