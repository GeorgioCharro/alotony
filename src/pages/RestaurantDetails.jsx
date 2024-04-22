import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurants from '../restaurants.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Whatsapp from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import IconButton from '@mui/material/IconButton';

// Install Swiper modules


const RestaurantDetails = () => {
  const { name } = useParams();
  const restaurantName = name.replace(/-/g, ' ');
  const restaurant = restaurants.find(r => r.name.toLowerCase() === restaurantName);
  const navigate = useNavigate();

  if (!restaurant) {
    return <p>Restaurant not found!</p>;
  }

  const images = [];
  let i = 1;
  while (true) {
    try {
      const image = require(`../assets/jpg/${restaurant.image}Menu${i}.jpeg`);
      images.push({ original: image, thumbnail: image });
      i++;
      if (i > 8) break;
    } catch (e) {
      break;
    }
  }

  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=96170427505&text&type=phone_number&app_absent=0';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+96170427505';
  };

  return (
    <div className='mb-20'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <KeyboardBackspaceIcon className='mr-4 text-yellow' sx={{ width: '60px', height: '60px' }} onClick={() => navigate(-1)} />
          <p className='font-semibold text-2xl'>{restaurant.name}'s <span className='text-yellow'>Menu</span></p>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination,Scrollbar, A11y]}
        spaceBetween={10} // Reduced space between slides
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="max-h-[70vh] mx-auto" // Adjusted max height and centered
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.original} alt={`Slide ${index}`} className="max-h-[70vh] mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="fixed bottom-5 right-5 flex gap-2.5 z-50">
        <IconButton onClick={handleWhatsAppClick} sx={{ color: '#fff', backgroundColor: '#F29F05', '&:hover': { backgroundColor: '#db8500' } }}>
          <Whatsapp />
        </IconButton>
        <IconButton onClick={handleCallClick} sx={{ color: '#fff', backgroundColor: '#F29F05', '&:hover': { backgroundColor: '#db8500' } }}>
          <PhoneInTalkIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default RestaurantDetails;
