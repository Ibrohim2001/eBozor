import React, { useState, useRef } from 'react';
import './slider.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const SliderContainer = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageContainer = useRef();
  const [imgScrolled, setImgScrolled] = useState(0);

  const widthOfScreen = window.innerWidth;
  // console.log(widthOfScreen)

  const images = [
     {
      img: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      title: "Big Sale is Open",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit id animi suscipit voluptatum eum quae impedit molestiae, natus odio temporibus!'
    },
     {
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      title: 'Black Friday is here again',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit id animi suscipit voluptatum eum quae impedit'
    },
     {
      img: 'https://images.unsplash.com/photo-1514772145214-48bce0dff081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Halloween Sales are Open',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit id animi suscipit'
    }
  ];
  const smallImages = [
    {
      img: 'https://images.unsplash.com/photo-1587466317255-083616f2fcd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80'
    },
    {
      img: 'https://images.unsplash.com/photo-1605619227865-f8af18dfeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80'
    },
    {
      img: 'https://images.unsplash.com/photo-1632140548303-146425c0564a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=557&q=80'
    }
  ]

  const prevSlide = () => {
    if(widthOfScreen > 768) {
      imageContainer.current.scrollBy({
        left: 1440,
        behavior: 'smooth'
      });
      if(imgScrolled === images.length * 1440) {
        setImgScrolled(4220)
      } else {
        setImgScrolled(prev => prev + 1440)
      }
    } else {
      imageContainer.current.scrollBy({
        left: 768,
        behavior: 'smooth'
      });

      if(imgScrolled === smallImages.length * 768) {
        setImgScrolled(2304)
      } else {
        setImgScrolled(prev => prev + 768)
      }
    }
  }
  const nextSlide = () => {
    if(widthOfScreen > 768) {
      imageContainer.current.scrollBy({
        left: -1440,
        behavior: 'smooth'
      });
      if(imgScrolled === 0) {
        setImgScrolled(0)
      } else {
        setImgScrolled(prev => prev - 1440)
      }
    } else {
      imageContainer.current.scrollBy({
        left: -768,
        behavior: 'smooth'
      });
      if(imgScrolled === 0) {
        setImgScrolled(0)
      } else {
        setImgScrolled(prev => prev - 768)
      }
    }
  }
  return (
    <div className='slider_container'>
      <div className="slider_item">

        <button 
          className='carousel_btn prev' 
          onClick={prevSlide}
        >
          <BsChevronLeft/>
        </button>
        <div ref={imageContainer} className="slider">
          {
            widthOfScreen > 768 ? 
            images.map((img, index) => (
              <img src={img.img} alt='' key={index}/>
            )) : smallImages.map((img, index) => (
              <img src={img.img} alt='' key={index}/>
            ))
          } 
        </div>
        <button 
          className='carousel_btn next' 
          onClick={nextSlide}
        >
          <BsChevronRight/>
        </button>
      </div>
    </div>
  )
}

export default SliderContainer