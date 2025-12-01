"use client";
import React, { useState } from "react";
import Link from "next/link";
import {  Plus, Minus,FileText,Truck,Tag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";



export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
   const [activeSection, setActiveSection] = useState<"note" | "shipping" | "coupon" | null>(null);

    
    // Shipping form state
    const [country, setCountry] = useState("India");
    const [state, setState] = useState("Kerala");
    const [pinCode, setPinCode] = useState("");
    const [shippingRate, setShippingRate] = useState<string | null>(null);

    
    // Coupon state
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

    
    // Note state
    const [note, setNote] = useState("");
    const [savedNote, setSavedNote] = useState("");
  
    const subtotal = getCartTotal();
    const discount = Math.round(subtotal * 0.25);
    const total = subtotal - discount;
  
    const handleCalculateShipping = () => {
      if (!pinCode) {
        alert("Please enter PIN code");
        return;
      }
      // Simulate shipping calculation
      setShippingRate("0.00");
    };
  
    const handleSaveCoupon = () => {
      if (!couponCode.trim()) {
        alert("Please enter a coupon code");
        return;
      }
      setAppliedCoupon(couponCode);
      setCouponCode("");
      setActiveSection(null);
    };
  
    const handleSaveNote = () => {
      setSavedNote(note);
      setActiveSection(null);
    };
  
    const handleCancelSection = () => {
      setActiveSection(null);
      // Reset forms
      setPinCode("");
      setShippingRate(null);
      setCouponCode("");
      setNote("");
    };
  

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some items to get started!</p>
          <Link href="/">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-black mb-8">Shopping Cart</h1>

        <div className="gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4 mb-8">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4"
              >
                {/* PRODUCT IMAGE */}
                <img
                  src={item.front}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />

                {/* PRODUCT DETAILS */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Size: {item.size}</p>
                  <p className="text-lg font-semibold text-black">
                    Rs. {item.price}
                  </p>
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-gray-500 text-base hover:text-red-700 transition"
                  >
                    <h4>Remove</h4>
                  </button>

                  <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      className="p-2 hover:bg-gray-100 transition"
                    >
                      <Minus className="w-4 h-4 text-black" />
                    </button>
                    <span className="px-3 text-black font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="p-2 hover:bg-gray-100 transition"
                    >
                      <Plus className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
        {cartItems.length > 0 && (
          <div className="w-6/12 bg-white px-6 py-4">
            {/* Icons Row */}
            <div className="flex items-center justify-center gap-8 mb-4 pb-4 border-b">
              <button
                onClick={() => setActiveSection("note")}
                className="flex flex-col items-center gap-1 hover:opacity-70  transition"
              >
                <FileText className="w-5 h-5 text-black" />
                <span className="text-xs text-black">Note</span>
              </button>
              <button
                onClick={() => setActiveSection("shipping")}
                className="flex flex-col items-center gap-1 hover:opacity-70 transition border-x px-8"
              >
                <Truck className="w-5 h-5 text-black" />
                <span className="text-xs text-black">Shipping</span>
              </button>
              <button
                onClick={() => setActiveSection("coupon")}
                className="flex flex-col items-center gap-1 hover:opacity-70 transition"
              >
                <Tag className="w-5 h-5 text-black" />
                <span className="text-xs text-black">Coupon</span>
              </button>
            </div>
            <div>
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>Rs. {getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Discount (25%)</span>
                  <span className="text-green-700">
                    -Rs. {Math.round(getCartTotal() * 0.25)}
                  </span>
                </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between text-black mb-2">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">Rs. {subtotal}.00</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium mb-2 flex items-center justify-between px-4">
              <span>Checkout</span>
              <span className="text-sm">25% off on Prepaid Orders</span>
            </button>
            <Link href="/">
                <button className="w-full border border-black text-black py-3 rounded-md hover:bg-gray-100 transition font-medium">
                  Continue Shopping
                </button>
              </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}