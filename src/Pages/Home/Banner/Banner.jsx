import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div>
            <div className="lg:mt-16 mt-20">
            <Swiper

                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
                pagination={{
                    clickable: true,
                }}


            >
                <SwiperSlide>
                    <div className="">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/yBxwYjJ/3.jpg" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Welcome to OAI Food Corner</h1>
                                    <h1 className="text-2xl font-semibold">Pesto Mozzarella Burger</h1>
                                    <p>"Pesto Mozzarella Burger: A savory blend of basil pesto, melted mozzarella, and juicy beef patty."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/ZNVQkNH/11.png" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Classic Beef Burger</h1>
                                    <p>"Classic Beef Burger: A timeless favorite with juicy beef, fresh lettuce, and tangy pickles."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/s1Y6hZg/12.png" className="rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Bacon Cheese burger</h1>
                                    <p>"Bacon Cheeseburger: Indulge in crispy bacon, melted cheese, and juicy beef in every bite."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/c2WmPGP/14.png" className="rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">BBQ Chicken Burger</h1>
                                    <p>"BBQ Chicken Burger: Tangy BBQ sauce, grilled chicken, and fresh toppings for a flavorful experience."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
            {/*  */}
            
        </div>
  )
}

export default Banner
