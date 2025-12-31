"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShoppingCart, Heart, Trash2 } from "lucide-react";
import { useWishlist } from "@/components/context/WishlistContext";
import { useCart } from "@/components/context/CartContext";

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistSidebar({ isOpen, onClose }: WishlistSidebarProps) {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, token } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [movingToCart, setMovingToCart] = useState<string | null>(null);

  // Check if user is logged in
  const isLoggedIn = !!token;

  // Close sidebar when user logs out
  useEffect(() => {
    const handleLogout = () => {
      onClose();
    };

    window.addEventListener("userLoggedOut", handleLogout);
    return () => {
      window.removeEventListener("userLoggedOut", handleLogout);
    };
  }, [onClose]);

  // Initialize selected sizes when wishlist items change
  useEffect(() => {
    const sizes: { [key: string]: string } = {};
    wishlistItems.forEach((item) => {
      if (item.available_sizes && item.available_sizes.length > 0) {
        sizes[item.slug] = item.available_sizes[0];
      } else {
        sizes[item.slug] = "ONE SIZE";
      }
    });
    setSelectedSizes(sizes);
  }, [wishlistItems]);

  const handleSizeChange = (slug: string, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [slug]: size,
    }));
  };

  const handleMoveToCart = async (item: any) => {
    try {
      setMovingToCart(item.slug);
      const size = selectedSizes[item.slug] || "ONE SIZE";
      
      await addToCart(item.slug, size);
      await removeFromWishlist(item.slug);
      
      // Show success message
      alert("Item moved to cart successfully!");
    } catch (error) {
      console.error("Error moving to cart:", error);
      alert("Failed to move item to cart");
    } finally {
      setMovingToCart(null);
    }
  };

  const handleRemove = async (slug: string) => {
    try {
      await removeFromWishlist(slug);
      alert("Item removed from wishlist");
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      alert("Failed to remove item");
    }
  };

  // Don't render if user is not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-white-100 bg-opacity-30 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-black">My Wishlist</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-4">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-red-300" />
                </div>
                <p className="text-gray-500 mb-2 font-medium">Your wishlist is empty</p>
                <p className="text-sm text-gray-400 mb-4">
                  Save items you love for later
                </p>
                <button
                  onClick={onClose}
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div
                    key={item.slug}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link 
                        href={`/products/${item.slug}`}
                        onClick={onClose}
                        className="flex-shrink-0"
                      >
                        <img
                          src={item.image1 || item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md hover:opacity-90 transition cursor-pointer"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/products/${item.slug}`}
                          onClick={onClose}
                        >
                          <h3 className="text-sm font-medium text-black mb-1 line-clamp-2 hover:text-gray-700 cursor-pointer">
                            {item.title}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-lg font-bold text-black">
                            Rs. {parseFloat(item.price).toFixed(0)}
                          </p>
                          {item.mrp && parseFloat(item.mrp) > parseFloat(item.price) && (
                            <p className="text-sm text-gray-400 line-through">
                              Rs. {parseFloat(item.mrp).toFixed(0)}
                            </p>
                          )}
                        </div>

                        {/* Stock Status */}
                        {/* {item.stock_qty > 0 ? (
                          <p className="text-xs text-red-600 mb-2">✗ Out of Stock</p>
                        ) : (
                          <p className="text-xs text-green-800 mb-2"> ✓ In Stock</p>
                        )} */}

                        {/* Size Selection */}
                        {item.available_sizes && item.available_sizes.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs text-gray-600 mb-1">Size:</p>
                            <select
                              value={selectedSizes[item.slug] || item.available_sizes[0]}
                              onChange={(e) => handleSizeChange(item.slug, e.target.value)}
                              className="w-full text-xs border border-gray-300 rounded px-2 py-1 text-black"
                            >
                              {item.available_sizes.map((size) => (
                                <option key={size} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleMoveToCart(item)}
                            disabled={item.stock_qty === 0 || movingToCart === item.slug}
                            className={`flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded transition ${
                              item.stock_qty === 0
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : movingToCart === item.slug
                                ? "bg-gray-800 text-white"
                                : "bg-black text-white hover:bg-gray-800"
                            }`}
                          >
                            <ShoppingCart className="w-3 h-3" />
                            {movingToCart === item.slug ? "Moving..." : "Move to Cart"}
                          </button>
                          
                          <button
                            onClick={() => handleRemove(item.slug)}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="border-t bg-white px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in wishlist
              </span>
              <button
                onClick={() => {
                  if (confirm(`Remove all ${wishlistItems.length} items from wishlist?`)) {
                    wishlistItems.forEach((item) => removeFromWishlist(item.slug));
                  }
                }}
                className="text-xs text-red-600 hover:text-red-700 underline"
              >
                Clear All
              </button>
            </div>

            <Link href="/wishlist" onClick={onClose}>
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium">
                View Full Wishlist
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}