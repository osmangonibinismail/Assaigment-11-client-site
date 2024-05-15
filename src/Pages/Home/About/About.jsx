
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <div className="mt-5">
       <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src='https://i.ibb.co/7JZj3Rs/8.jpg' className="w-4/5 rounded-lg shadow-2xl" />
                    <img src='https://i.ibb.co/2YJdK9m/6.jpg' className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-4 p-4'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & high quality <br /> food</h1>
                    <p className="py-4 text-slate-800">High-quality food is not just about taste; it's a commitment<br /> to excellence in sourcing, preparation, and presentation.</p>
                    <p className="py-4 text-slate-800">Whether enjoyed at a fine dining restaurant or<br /> in the comfort of your own home, high-quality food leaves<br /> a lasting impression, reminding us of the joys of <br />good food done right.</p>
                    <button className="btn btn-active btn-secondary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
        <div className="text-center mt-10">
        
                <h4 className="text-2xl  font-bold text-orange-600 mt-3">Featured</h4>
                <h2 className="text-4xl font-bold text-black mt-3" ><Typewriter
                    words={['Our High Quality Food']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={350}
                    deleteSpeed={50}
                    delaySpeed={2000}
                /></h2>
                <p className="mt-3">Our food is a mark of excellence in taste, sourcing, and preparation. It's about fresh ingredients, expert recipes, and superior flavors. From succulent steaks to delicate seafood, it's a culinary delight that nourishes and satisfies. </p>
            </div>
    </div>
  )
}

export default About
