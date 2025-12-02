"use client";

import React, { useState } from "react";
import { Star, Minus, Plus, Heart, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

interface ProductDetailProps {
  product: {
    id: number | string;
    name: string;
    price: number;
    oldPrice: number;
    front: string;
    back: string;
    description: string;
    sizes: string[];
  };
  onClose?: () => void;
}

export default function ProductDetailPage({ product, onClose }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'S');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const { addToCart } = useCart();

  const images = [product.front, product.back, product.front, product.back];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.front,
      },
      selectedSize,
      quantity
    );

    alert("Added to cart successfully!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout or cart page
    window.location.href = "/cart";
  };

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
            {onClose && (
              <button 
                onClick={onClose}
                className="flex items-center hover:text-gray-900 font-medium whitespace-nowrap"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <span className="hover:text-gray-900 cursor-pointer whitespace-nowrap">Home</span>
            <span>›</span>
            <span className="hover:text-gray-900 cursor-pointer whitespace-nowrap">Best Selling</span>
            <span>›</span>
            <span className="text-gray-900 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            {/* Thumbnails - Horizontal on mobile, vertical on desktop */}
            <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-lg overflow-hidden transition-all ${
                    selectedImage === idx ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className="flex-1 relative bg-white rounded-lg overflow-hidden shadow-sm group">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/60 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-4 sm:space-y-6">
            {/* Title and Wishlist */}
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition ${
                  isLiked ? 'text-red-500' : 'text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">6 Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">Rs. {product.price}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">Rs. {product.oldPrice}</span>
              <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                SAVE {discount}%
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Tax included.</p>

            {/* Description */}
            {product.description && (
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{product.description}</p>
            )}

            {/* Size Chart Link */}
            <button className="flex items-center gap-2 text-xs sm:text-sm font-medium hover:underline">
              <span>📏</span>
              <span>Size Chart</span>
            </button>

            {/* Bulk Pricing */}
            <div className="space-y-2 text-xs sm:text-sm bg-gray-50 p-3 sm:p-4 rounded-lg">
              <p className="font-semibold mb-2">Special Offers:</p>
              <p>Buy Any 5 Shirts @ Just Rs.1121/-</p>
              <p>Buy Any 4 Shirts @ Just Rs.897/-</p>
              <p>Buy Any 3 Shirts @ Just Rs.673/-</p>
              <p>Buy Any 2 Shirts @ Just Rs.449/-</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm sm:text-base font-medium">Size:</span>
                <span className="text-sm sm:text-base font-bold">{selectedSize}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 sm:px-5 py-2 border rounded-md text-sm sm:text-base font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm sm:text-base font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 sm:w-16 text-center border-x border-gray-300 text-sm sm:text-base"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full py-3 sm:py-4 border-2 border-black text-black text-sm sm:text-base font-semibold rounded-md hover:bg-gray-50 transition-colors"
              >
                Add to cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="w-full py-3 sm:py-4 bg-black text-white text-sm sm:text-base font-semibold rounded-md hover:bg-gray-800 transition-colors"
              >
                Buy it Now
              </button>
            </div>

            {/* Payment Methods */}
            <div className="pt-4 border-t">
              <p className="text-center text-xs sm:text-sm font-medium text-gray-700 mb-3">Secure Checkout With</p>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-xs font-bold text-white">MC</div>
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">VISA</div>
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">AMEX</div>
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">PAY</div>
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-white border-2 border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">GPay</div>
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">UPI</div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-3 pt-4 border-t">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 flex-shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold">Estimated Delivery:</span>
                <span className="ml-2">Dec 05 - Dec 09</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}