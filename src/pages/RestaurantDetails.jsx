import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurants from '../restaurants.json';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Whatsapp from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import IconButton from '@mui/material/IconButton';

const RestaurantDetails = () => {
  const { name } = useParams();
  const restaurantName = name.replace(/-/g, ' ');
  const restaurant = restaurants.find(r => r.name.toLowerCase() === restaurantName);
  const navigate = useNavigate();

  if (!restaurant) {
    return <p>Restaurant not found!</p>;
  }

  // Dynamically create the images array based on available images
  const images = [];
  let i = 1;
  while (true) {
    try {
      const image = require(`../assets/jpg/${restaurant.image}Menu${i}.jpeg`);
      images.push({ original: image, thumbnail: image });
      i++;
      if (i > 4) break; // Adjust this if the number of images varies
    } catch (e) {
      break; // Stop the loop if there are no more images
    }
  }

  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=96170427505&text&type=phone_number&app_absent=0'; // Adjust number as needed
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+96170427505'; // Adjust number as needed
  };

  const renderFullscreenButton = (onClick, isFullscreen) => {
    return null; // Hide the fullscreen button
  };

  const renderPlayPauseButton = (onClick, isPlaying) => {
    return null; // Hide the slideshow button
  };

  return (
    <div className='mb-8'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <KeyboardBackspaceIcon className='mr-4 text-yellow' sx={{ width: '60px', height: '60px' }} onClick={() => navigate(-1)} />
          <p className='font-semibold text-2xl'>{restaurant.name}'s <span className='text-yellow'>Menu</span></p>
        </div>
      </div>
      
      <ImageGallery
        items={images} 
        renderFullscreenButton={renderFullscreenButton} 
        renderPlayPauseButton={renderPlayPauseButton} 
      />

      {/* Icons at the bottom right */}
      <div style={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', gap: '10px' }}>
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
