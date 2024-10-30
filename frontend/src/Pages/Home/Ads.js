import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';

const addElement = [
    {
        imageUrl:'https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg?semt=ais_hybrid'
    },
    {
        imageUrl:'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
    },
    {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s'
    },
    {
        imageUrl:'https://www.shutterstock.com/shutterstock/photos/2198245029/display_1500/stock-photo-autumn-nature-landscape-lake-bridge-in-fall-forest-path-way-in-gold-woods-romantic-view-image-2198245029.jpg'
    },
    {
        imageUrl:'https://wallpapers.com/images/hd/natural-lake-with-trees-during-winter-lo9cf1daepq9la5d.jpg'
    },
    {
        imageUrl:'https://media.istockphoto.com/id/475001282/photo/loch-leven-reflections.jpg?s=612x612&w=0&k=20&c=2vAy3sHW4pOLlzvJGNtrkf7fyK4641DBvxXq7emDUqE='
    },
    {
        imageUrl:'https://i.pinimg.com/736x/fa/15/ed/fa15ed3375d42f54fbb51b21a92a9a1a.jpg'
    },
]

const Ads = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay]}
    className="rounded-lg overflow-hidden"
    
  >
    {addElement.map(({imageUrl},index) =>(
        <SwiperSlide key={index}>
            <AdUnit imageUrl={imageUrl} id={index}  />
        </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default Ads

const AdUnit = ({imageUrl,id}) =>(
    
        <img src={imageUrl} alt={`ad${id}`} className='w-full object-contain rounded-lg' />
   
)