import React from 'react'
import Banner from '../../components/Banner'

const CategoryItems =[
  {id:1, title:"Main Dish",des: "(86 Dishes)",Image: "/images/home/category/img1.png"},
  {id:2, title:"Breakfast",des: "(118 Dishes)",Image: "/images/home/category/img2.png"},
  {id:3, title:"Dessert",des: "(91 Dishes)",Image: "/images/home/category/img3.png"},
  {id:4, title:"Browse All",des: "(258 Dishes)",Image: "/images/home/category/img4.png"}

]
const Categories = () => {
  return (
    <div className='section-conatiner py-16 bg-white'>
      <div className='text-center'>
      <p className='subtitle'>Customer Favorites</p>
      <h2 className='title'>Popular Categories</h2>
      </div>

      {/*category cards*/}
      <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
          {
            CategoryItems.map(
              (item,i) =>(
                <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                    <div className='flex w-full mx-auto item-center '>
                      <img src={item.Image} alt={item.title} className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
                    </div>
                    <div className='mt-5 space-y-1'>
                      <div>{item.title}</div>
                      <div>{item.des}</div>
                    </div>
                </div>
              )
            )
          }
      </div>

    </div>
  )
}

export default Categories
