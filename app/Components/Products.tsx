"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Eye, X } from "lucide-react";
import { PRODUCTS } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";

// -------------------------------
// PRODUCT TYPE
// -------------------------------
interface ProductType {
  id: number | string;
  name: string;
  price: number;
  oldPrice: number;
  front: string;
  back: string;
  description: string;
  sizes: string[];
}

interface Props {
  title: string;
}

const TrendingProducts = ({ title }: Props) => {
  const router = useRouter();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [likedProducts, setLikedProducts] = useState<(number | string)[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart } = useCart();

  // -------------------------------
  // Like toggle
  // -------------------------------
  const toggleLike = (id: number | string) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // -------------------------------
  // Open Quick View Modal
  // -------------------------------
  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes?.[0] || "");
    setQuantity(1);
  };

  // -------------------------------
  // Close Modal
  // -------------------------------
  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedSize("");
    setQuantity(1);
  };

  // -------------------------------
  // Navigate to Product Detail Page
  // -------------------------------
  const goToProductPage = (productId: number | string) => {
    router.push(`/Pages/product/${productId}`);
  };

  // -------------------------------
  // Add To Cart
  // -------------------------------
  const handleAddToCart = () => {
    if (!selectedProduct) return;
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart(
      {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.front,
      },
      selectedSize,
      quantity
    );

    closeModal();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 text-black">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {PRODUCTS.map((product: ProductType, index: number) => (
          <div
            key={product.id}
            className="group cursor-pointer relative"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => goToProductPage(product.id)} // Navigate to product page
          >
            {/* IMAGE */}
            <div className="relative rounded-lg overflow-hidden aspect-square mb-4">
              <img
                src={hoveredProduct === index ? product.back : product.front}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div
                className={`absolute inset-0 bg-black/10 transition-all duration-300 ${
                  hoveredProduct === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* TOP RIGHT ICONS */}
                {hoveredProduct === index && (
                  <div className="absolute top-3 right-3 flex flex-col gap-2 animate-fade-in">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(product.id);
                      }}
                      className={`rounded-full p-2 shadow-lg transition transform hover:scale-110 ${
                        likedProducts.includes(product.id)
                          ? "bg-red-500"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedProducts.includes(product.id)
                            ? "text-white fill-white"
                            : "text-gray-700"
                        }`}
                      />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product);
                      }}
                      className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                    >
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                )}

                {/* SELECT OPTIONS BUTTON */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                    hoveredProduct === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  <button
                    className="w-full bg-white text-black font-medium py-2.5 rounded-lg shadow-lg hover:bg-gray-100 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                  >
                    Select options
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="text-center px-2">
              <h3 className="text-sm mb-2 text-gray-800">{product.name}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-semibold text-black">
                  Rs. {product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  Rs. {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SHOP MORE BUTTON */}
      <div className="text-center">
        <Link href="/Pages/ProductListing">
          <button className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-800 transition font-medium">
            Shop more
          </button>
        </Link>
      </div>

      {/* QUICK VIEW MODAL POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              onClick={closeModal}
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProduct.front}
                alt={selectedProduct.name}
                className="w-full md:w-1/2 rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  {selectedProduct.name}
                </h2>

                <p className="text-lg font-semibold text-black mb-2">
                  Rs. {selectedProduct.price}
                  <span className="text-gray-400 line-through ml-2">
                    Rs. {selectedProduct.oldPrice}
                  </span>
                </p>

                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                {/* SIZE */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-medium text-black">Size:</span>
                  {selectedProduct.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-3 py-1 rounded ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-medium text-black">Quantity:</span>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    className="border rounded px-2 py-1 w-16"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                  />
                </div>

                {/* BUTTONS */}
                <div className="space-y-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      closeModal();
                      goToProductPage(selectedProduct.id);
                    }}
                    className="w-full border-2 border-black text-black py-3 rounded hover:bg-gray-50 transition"
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TrendingProducts;