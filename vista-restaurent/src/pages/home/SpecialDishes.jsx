import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import {} from 'react-icons/fa6';

  const simpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} style={{...style, display:"block",background: "red"}}
        onClick={onClick}
        ><FaAngleRight className="w-8 h-8 p-1"/></div>
    );
  };

  const simplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} 
        style={{...style, display:"block",background: "green"}}
        onClick={onClick}
        ><FaAngleLeft className="w-8 h-8 p-1"/></div>
    );
  }
  const SpecialDishes = () => {

  const [recipes,setRecipes] = useState([]);
  const slider = React.useRef(null)
  
  useEffect(()=>{
      fetch("/menu.json")
      .then(res =>res.json()). then(data => {
        const specials = data.filter((item) => item.category === "popular")
        console.log(specials)
        setRecipes(specials)
      } );
  },[]);

  //Settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePreArrow />
  };

  return (
    <div>
      <div className='section-container my-20'>
        <div>
            <div className='text-left'>
              <p className='subtitle'>Special Dishes</p>
              <h2 className='title md:w-[520px]'>Standout Dishes from our menu</h2>
            </div>

            <div>
              <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'>Prev</button>
              <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5'>Next</button>
            </div>

            <Slider ref={slider} {...settings}>
              {
                recipes.map((item,i) => (
                  <Cards key={i} item={item}/>
                ))
              }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default SpecialDishes

 