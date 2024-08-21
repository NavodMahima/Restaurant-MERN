import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
    
    <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        
        {/*images*/}
        <div className='md:w1/2'>
        <img src="/images/home/banner.png" alt="" />

        <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-yellow-500"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    </div>
                    <p className='text-red'>$18.00</p>
                </div>
                <div> 
                </div>
            </div>

            <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-yellow-500"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                    </div>
                    <p className='text-red'>$18.00</p>
                </div>
                <div> 
                </div>
            </div>
        </div>
        </div>
        
        {/*texts*/}
        <div className='md:w1/2 space-y-7 px-4'>
        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug '>Dive into Delight of Delectable <span className='text-green'>Food</span></h2>
        <p className='text-xl text-[#4A4A4A]'>Where each plate weaves a story of culinary mastery and Passionate Craftsmanship</p>
        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full border-none'>Order Now</button>
        </div>
        
    </div>
    
    </div>
  )
}

export default Banner
