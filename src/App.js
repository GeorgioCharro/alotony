import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import RestaurantDetails from './pages/RestaurantDetails';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/restaurant/:name' element={<RestaurantDetails/>} />

         </Routes>


      <Footer />
      </Router>
      
    </>
  );
}

export default App;
