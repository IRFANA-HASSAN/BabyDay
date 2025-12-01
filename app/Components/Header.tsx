"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Prepaid Order 25% Discount
      </div>

      {/* NAVIGATION */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LEFT — MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-8 h-8 flex items-center justify-center"
          >
            <img src="/icons/hamburger.png" alt="menu" className="w-6" />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-black hover:text-gray-600">HOME</Link>
            <Link href="/Pages/ProductListing?category=best-selling" className="text-sm font-medium text-black hover:text-gray-600">BEST SELLING</Link>
            <Link href="/Pages/ProductListing?category=men-shirt" className="text-sm font-medium text-black hover:text-gray-600">MEN SHIRT</Link>
            <Link href="/Pages/ProductListing?category=new-arrival" className="text-sm font-medium text-black hover:text-gray-600">NEW ARRIVAL</Link>
            <Link href="/Pages/ProductListing?category=linen-shirts" className="text-sm font-medium text-black hover:text-gray-600">LINEN SHIRTS</Link>
            <Link href="/Pages/ProductListing?category=cargo-shirts" className="text-sm font-medium text-black hover:text-gray-600">CARGO SHIRTS</Link>
          </div>

          {/* CENTER — LOGO */}
          <img src="/icons/logo.png" alt="logo" className="w-14 h-16" />

          {/* RIGHT — MOBILE SEARCH + CART */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Search className="w-5 h-5 text-black" />
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingCart className="w-5 h-5 text-black cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* RIGHT — DESKTOP ICONS */}
          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-black" />
            <Heart className="w-5 h-5 text-black" />
            <button onClick={() => setCartOpen(true)} className="relative">
              <ShoppingCart className="w-5 h-5 text-black cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)}>
            <img src="/icons/close.png" alt="close" className="w-6" />
          </button>
        </div>

        {/* Drawer Menu Links */}
        <div className="flex flex-col px-6 py-6 space-y-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-black">HOME</Link>
          <Link href="/Pages/ProductListing?category=best-selling" onClick={() => setMenuOpen(false)} className="text-black">BEST SELLING</Link>
          <Link href="/Pages/ProductListing?category=men-shirt" onClick={() => setMenuOpen(false)} className="text-black">MEN SHIRT</Link>
          <Link href="/Pages/ProductListing?category=new-arrival" onClick={() => setMenuOpen(false)} className="text-black">NEW ARRIVAL</Link>
          <Link href="/Pages/ProductListing?category=linen-shirts" onClick={() => setMenuOpen(false)} className="text-black">LINEN SHIRTS</Link>
          <Link href="/Pages/ProductListing?category=cargo-shirts" onClick={() => setMenuOpen(false)} className="text-black">CARGO SHIRTS</Link>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;