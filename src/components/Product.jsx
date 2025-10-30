// import React, { useState, useEffect } from "react";
// import "./Product.css";

// const Product = () => {
//   // Instead of importing, directly use URLs
//   const images = [
//     "https://i.pinimg.com/736x/8e/4e/5f/8e4e5fe9cb7d112475a90087661535e8.jpg",
//     "https://i.pinimg.com/1200x/10/cb/79/10cb793cec554c254146bdebcde9306c.jpg",
//     "https://i.pinimg.com/736x/7f/44/67/7f4467077a7859515df355f459eb5295.jpg",
//     "https://i.pinimg.com/736x/44/e1/1c/44e11c0903e79423cdd84ad73ffbcf92.jpg"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="product-section" id="products">
//       <h1 className="section-heading">Our Products</h1>
//       <div className="product-container">
//         <div className="image-slider">
//           <button className="nav-btn left" onClick={prevImage}>
//             &#10094;
//           </button>
//           <img src={images[currentIndex]} alt="Product" className="slider-image" />
//           <button className="nav-btn right" onClick={nextImage}>
//             &#10095;
//           </button>
//         </div>
//         <div className="product-description">
//           <h2>Awesome Product</h2>
//           <p>
//             This is a high-quality product with amazing features. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. You will love this!
//           </p>
//           {/* <button className="add-to-cart">ADD TO CART</button> */}
//  <button className="add-to-cart" onClick={goToPage}>
//             SEE MORE
//           </button>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




// import React, { useState, useEffect } from "react";
// import "./Product.css";

// // Import images from assets
// import product1 from "../components/assets/img1.png";
// import product2 from "../components/assets/3.jpg";
// import product3 from "../components/assets/Japandi Accent Chair_ Adding Style Without….jpeg";
// import product4 from "../components/assets/Transform your living room with this stylish and….jpeg";

// const Product = () => {
//   const images = [product1, product2, product3, product4];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="product-section"id="products">
//       <h1 className="section-heading">Our Products</h1>
//       <div className="product-container">
//         <div className="image-slider">
//           <button className="nav-btn left" onClick={prevImage}>
//             &#10094;
//           </button>
//           <img src={images[currentIndex]} alt="Product" />
//           <button className="nav-btn right" onClick={nextImage}>
//             &#10095;
//           </button>
//         </div>
//         <div className="product-description">
//           <h2>Awesome Product</h2>
//           <p>
//             This is a high-quality product with amazing features. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. You will love this!
//           </p>
//           <button className="add-to-cart">SEE MORE</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




import React, { useState, useEffect } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

// Import images from assets
import product1 from "../components/assets/img1.png";
import product2 from "../components/assets/3.jpg";
import product3 from "../components/assets/Japandi Accent Chair_ Adding Style Without….jpeg";
import product4 from "../components/assets/Transform your living room with this stylish and….jpeg";

const Product = () => {
  const navigate = useNavigate(); // ✅ useNavigate must be inside the component

  const images = [product1, product2, product3, product4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigate functions
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // ✅ SEE MORE button navigation
  const goToPage = () => {
    navigate("/more-details");
  };

  return (
    <div className="product-section" id="products">
      <h1 className="section-heading">Our Products</h1>
      <div className="product-container">
        <div className="image-slider">
          <button className="nav-btn left" onClick={prevImage}>
            &#10094;
          </button>
          <img src={images[currentIndex]} alt="Product" />
          <button className="nav-btn right" onClick={nextImage}>
            &#10095;
          </button>
        </div>

        <div className="product-description">
          <h2>Awesome Product</h2>
          <p>
            This is a high-quality product with amazing features. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. You will love this!
          </p>
          <button className="add-to-cart" onClick={goToPage}>
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
