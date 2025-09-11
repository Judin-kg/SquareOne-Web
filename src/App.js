
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Carousel/>
      <Product/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
