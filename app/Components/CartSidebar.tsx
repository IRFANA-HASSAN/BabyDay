"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, Minus, Plus, FileText, Truck, Tag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const [activeSection, setActiveSection] = useState<
    "shipping" | "coupon" | "note" | null
  >(null);

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
  const [savedNote, setSavedNote] = useState<string | null>(null);

  const subtotal = getCartTotal();
  const discount = Math.round(subtotal * 0.25);
  const total = subtotal - discount;

  const handleCalculateShipping = () => {
    if (!pinCode) {
      alert("Please enter PIN code");
      return;
    }
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
    setPinCode("");
    setShippingRate(null);
    setCouponCode("");
    setNote("");
  };


  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
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
          <h2 className="text-xl font-semibold text-black">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {/* Cart Items */}
          {activeSection === null && (
            <div className="px-6 py-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4 pb-4 border-b"
                    >
                      {/* Product Image */}
                      <img
                        src={item.front}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-black mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">Size: {item.size}</p>
                        <p className="text-sm font-semibold text-black">
                          Rs. {item.price}.00
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
                          >
                            <Minus className="w-3 h-3 text-black" />
                          </button>
                          <span className="w-8 text-center text-sm text-black font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
                          >
                            <Plus className="w-3 h-3 text-black" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-400 hover:text-red-500 transition self-start"
                      >
                        <span className="text-sm underline">Remove</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Shipping Section */}
          {activeSection === "shipping" && (
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-black" />
                <h3 className="font-semibold text-black">Estimate shipping rates</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Country/region
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  >
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  >
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    PIN code
                  </label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="695009"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  />
                </div>

                <button
                  onClick={handleCalculateShipping}
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
                >
                  Calculate shipping rates
                </button>

                <button
                  onClick={handleCancelSection}
                  className="w-full text-center text-black py-2 text-sm hover:underline"
                >
                  Cancel
                </button>

                {shippingRate !== null && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-black mb-1">
                      We found 1 shipping rate(s) for your address:
                    </p>
                    <p className="text-sm text-black font-semibold">
                      Standard: Rs. {shippingRate}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Coupon Section */}
          {activeSection === "coupon" && (
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-black" />
                <h3 className="font-semibold text-black">Add a discount code</h3>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter discount code here"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                />

                <button
                  onClick={handleSaveCoupon}
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
                >
                  Save
                </button>

                <button
                  onClick={handleCancelSection}
                  className="w-full text-center text-black py-2 text-sm hover:underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Note Section */}
          {activeSection === "note" && (
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-black" />
                <h3 className="font-semibold text-black">Add note for seller</h3>
              </div>

              <div className="space-y-4">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Special instructions for seller"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black resize-none"
                />

                <button
                  onClick={handleSaveNote}
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
                >
                  Save
                </button>

                <button
                  onClick={handleCancelSection}
                  className="w-full text-center text-black py-2 text-sm hover:underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Summary & Actions */}
        {cartItems.length > 0 && (
          <div className="border-t bg-white px-6 py-4">
            {/* Icons Row */}
            <div className="flex items-center justify-center gap-8 mb-4 pb-4 border-b">
              <button
                onClick={() => setActiveSection("note")}
                className="flex flex-col items-center gap-1 hover:opacity-70 transition"
              >
                <FileText className="w-5 h-5 text-black" />
                <span className="text-xs text-black">Note</span>
              </button>
              <button
                onClick={() => setActiveSection("shipping")}
                className="flex flex-col items-center gap-1 hover:opacity-70 transition"
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

            {/* View Cart Link */}
            <Link href="/Pages/Cart" onClick={onClose}>
              <button className="w-full text-center text-black py-2 text-sm underline hover:no-underline transition">
                View Cart
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}