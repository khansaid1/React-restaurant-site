import React, {useState} from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url :'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            url : 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            url : 'https://images.pexels.com/photos/14710225/pexels-photo-14710225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = ()=>{
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? sliders.length-1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlider = ()=>{
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }


    return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((slidersTtems, slideIndex)=>(
                    <div
                    key={slideIndex}
                    onClick={()=>moveToNextSlide(slideIndex)}
                     className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                      </div>
                ))
            }
        </div>
    </div>
  )
}

export default Featured