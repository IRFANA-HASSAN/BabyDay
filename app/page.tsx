"use client"
import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart, Facebook, Instagram, ArrowRight, Eye, ArrowUp } from 'lucide-react';
import Trend from './Components/Products';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';


interface ProductCardProps {
  product: {
    name: string;
    price: string;
    oldPrice: string;
    front: string;
    back: string;
  };
  index: number;
}

const HomePage = () => {
  const [activeShirt, setActiveShirt] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);


  const shirts = [
    { id: 1, front: '/images/image1.png', back: '/images/image1-back.png' },
    { id: 2, front: '/images/image2.png', back: '/images/image2-back.png' },
    { id: 3, front: '/images/image3.png', back: '/images/image3-back.png' },
    { id: 4, front: '/images/image4.png', back: '/images/image4-back.png' },
    { id: 5, front: '/images/image5.png', back: '/images/image5-back.png' },
    { id: 6, front: '/images/image6.png', back: '/images/image6-back.png' },
    { id: 7, front: '/images/image7.png', back: '/images/image7-back.png' }
  ];

  const products = [
    {
      name: 'Waves Clouds Abstract Art Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image1.png',
      back: '/images/image1-back.png'
    },
    {
      name: 'Cute Cat Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image2.png',
      back: '/images/image2-back.png'
    },
    {
      name: 'Abstract Digital Art Painting Vintage Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image3.png',
      back: '/images/image3-back.png'
    },
    {
      name: 'Retro Minimalist Color-block Symmetrical Geometry Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image4.png',
      back: '/images/image4-back.png'
    }
  ];

  const additionalProducts = [
    {
      name: 'Line Combination Fan-shaped Decorative Pattern Casual Cotton And Linen Polo',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image5.png',
      back: '/images/image5-back.png'
    },
    {
      name: 'Color match Wave point Vintage Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image6.png',
      back: '/images/image6-back.png'
    },
    {
      name: "Men's Ethnic Totem Tree Of Life Art Linen Blend Comfy Shirt",
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image7.png',
      back: '/images/image7-back.png'
    },
    {
      name: 'Cloud layer sector Vintage Print Casual 100% Cotton Shirt',
      price: '299.00',
      oldPrice: '999.00',
      front: '/images/image8.png',
      back: '/images/image8-back.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShirt((prev) => (prev + 1) % shirts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveGlow = () => {
      setGlowPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    };
    const interval = setInterval(moveGlow, 4000);
    return () => clearInterval(interval);
  }, []);

 const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (
      <div 
        className="group cursor-pointer"
        onMouseEnter={() => {
          setHoveredProduct(index);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setHoveredProduct(null);
          setIsHovered(false);
        }}
      >
        <div className="relative  mb-4 overflow-hidden aspect-square flex items-center justify-center transition-all duration-300">
          {/* Product Image */}
          <div className="w-full h-full bg-[#9c9386] shadow-lg overflow-hidden">
            <img 
              src={hoveredProduct === index ? product.back : product.front}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              onError={(e) => {
              const img = e.target as HTMLImageElement;
              const parent = img.parentElement as HTMLElement;

              img.style.display = "none";
              parent.style.background =
                "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)";
            }}
            />
          </div>

          {/* Hover Overlay with Icons */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/10 transition-all duration-300">
              {/* Action Icons - Top Right */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 animate-fade-in">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                  className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                  aria-label="Like product"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                  />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add quick view functionality
                  }}
                  className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                  aria-label="Quick view"
                >
                  <Eye className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Select Options Button - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 animate-slide-up">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart or select options functionality
                  }}
                  className="w-full bg-white text-black font-medium py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
                >
                  Select options
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <h3 className="text-sm text-center text-black mb-2 line-clamp-2 min-h-[2.5rem] px-2">{product.name}</h3>
        <div className="text-center">
          <span className="text-lg font-semibold text-black">Rs. {product.price}</span>
          <span className="text-sm text-gray-400 line-through ml-2">Rs. {product.oldPrice}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">

      
      {/* Trending Products Section */}
      <Trend title={"The boutique style guide"}/>

      <Trend title={"Trending Product"}/>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl"><img src="/icons/shipping.png" alt="shipping" /></div>
            </div>
            <h3 className="font-semibold mb-2 text-black">Shipping All Over India</h3>
            <p className="text-sm text-gray-600">Express Shipping</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl"><img src="/icons/money.png" alt="money" /></div>
            </div>
            <h3 className="font-semibold mb-2 text-black">Money Guarantee</h3>
            <p className="text-sm text-gray-600">Within 7 days of exchange</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl"><img src="/icons/support.png" alt="support" /></div>
            </div>
            <h3 className="font-semibold mb-2 text-black">Online Support</h3>
            <p className="text-sm text-gray-600">24 hours a day, 7 days a week</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl"><img src="/icons/payment.png" alt="payment" /></div>
            </div>
            <h3 className="font-semibold mb-2 text-black">Flexible Payment</h3>
            <p className="text-sm text-gray-600">Secured Payment</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer/>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;