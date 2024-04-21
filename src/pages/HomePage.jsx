import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/jpg/hero.png';
import Icon1 from '../assets/jpg/1.png';
import Icon2 from '../assets/jpg/2.png';
import Icon3 from '../assets/jpg/3.png';
import { Grid, Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import Whatsapp from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import restaurants from '../restaurants.json';

function HomePage() {

  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=96170427505&text&type=phone_number&app_absent=0'; // Adjust number as needed
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+96170427505'; // Adjust number as needed
  };

  return (
    <div className='m-4 mb-10'>
      {/* Hero Section */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between bg-white rounded-lg shadow-xl p-8'>
        <div className='space-y-4 lg:space-y-0 lg:max-w-lg'>
          <h1 className='text-3xl lg:text-5xl font-bold'>The Best Restaurants In Your Home</h1>
          <p className='hidden lg:block'>Virtually visit all your favorite restaurants!</p>
          <Link to='/order' className='inline-block bg-yellow-500 text-white font-bold py-2 px-8 rounded hover:bg-yellow-600'>ORDER NOW</Link>
        </div>
        <img src={HeroImage} alt="Delivery person" className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:w-auto' />
      </div>

      {/* How It Works Section */}
      <div className='text-center mb-12 bg-white py-16'>
        <h2 className='text-3xl font-bold'>How It Works</h2>
        <p className='text-gray-600 mt-4'>
          Begin your gastronomic journey by choosing a restaurant that tantalizes your taste buds from the list below.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 px-8'>
          <div className='flex-1 text-center'>
            <img src={Icon1} alt="Select Restaurant" className='mx-auto mb-4' />
            <h3 className='text-xl font-semibold'>01 Select Restaurant</h3>
            <p className='text-gray-600 mt-2'>
              Simply click on your desired destination to savor the flavors that await you.
            </p>
          </div>
          <div className='flex-1 text-center'>
            <img src={Icon2} alt="Select Menu" className='mx-auto mb-4' />
            <h3 className='text-xl font-semibold'>02 Select Menu</h3>
            <p className='text-gray-600 mt-2'>
              Explore the menu and select an item that delights your senses.
            </p>
          </div>
          <div className='flex-1 text-center'>
            <img src={Icon3} alt="Wait for Delivery" className='mx-auto mb-4' />
            <h3 className='text-xl font-semibold'>03 Wait for Delivery</h3>
            <p className='text-gray-600 mt-2'>
              Contact us to finalize your order, and enjoy the comfort of your home while waiting.
            </p>
          </div>
        </div>
      </div>

      {/* Restaurants Listing Section */}
      <Grid container spacing={4}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Link to={`/restaurant/${restaurant.name.replace(/\s+/g, '-').toLowerCase()}`}>
              <Card className='flex items-center border-2 border-yellow'>
                <CardMedia
                  sx={{ width: 150, height: 150, p: 2 }}
                  component="img"
                  image={require(`../assets/jpg/${restaurant.image}.jpeg`)}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                    {restaurant.cuisine.join(' · ')}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {restaurant.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* Communication Icons */}
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
}

export default HomePage;

