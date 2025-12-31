"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, ShoppingCart, Filter, ChevronDown, Menu, X } from "lucide-react";
import { useAuth } from "../../../components/context/AuthContext";
import { useCart } from "../../../components/context/CartContext";
import { useWishlist } from "../../../components/context/WishlistContext";
import { useFilter } from "../../../components/context/FilterContext";
import AuthModal from "../../../components/includes/AuthModal";
import CartSidebar from "../../../components/includes/CartSidebar";
import WishlistSidebar from "../../../components/includes/WishlistSidebar";

interface Category {
  value: string;
  label: string;
  count: number;
}

interface CategoriesData {
  age_categories: Category[];
  product_categories: Category[];
}

export default function Header() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { openFilters, showFilterButton } = useFilter();
  const [openAuth, setOpenAuth] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [categories, setCategories] = useState<CategoriesData | null>(null);
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAgeOpen, setMobileAgeOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  // Calculate total items
  const cartItemCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/categories/`);
        if (res.ok) {
          const data = await res.json();
          setCategories(data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/icons/logo/android-launchericon-96-96.png" alt="logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-black hover:text-gray-600 font-medium transition">Home</Link>
            <Link
              href="/products"
              className="text-black hover:text-gray-600 font-medium transition"
            >
              All Products
            </Link>

            {/* Age Categories Dropdown */}
            {categories && categories.age_categories.length > 0 && (
              <div className="relative">
                <button 
                  onClick={() => setShowAgeDropdown(!showAgeDropdown)}
                  className="text-black hover:text-gray-600 font-medium flex items-center gap-1 transition"
                >
                  Age Categories
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAgeDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showAgeDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowAgeDropdown(false)}
                    ></div>
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[220px] z-20 border border-gray-100">
                      {categories.age_categories.map((category) => (
                        <Link
                          key={category.value}
                          href={`/products?age_category=${category.value}`}
                          onClick={() => setShowAgeDropdown(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{category.label}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                              {category.count}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Product Categories Dropdown */}
            {categories && categories.product_categories.length > 0 && (
              <div className="relative">
                <button 
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                  className="text-black hover:text-gray-600 font-medium flex items-center gap-1 transition"
                >
                  Categories
                  <ChevronDown className={`w-4 h-4 transition-transform ${showProductDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showProductDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowProductDropdown(false)}
                    ></div>
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 min-w-[220px] z-20 border border-gray-100">
                      {categories.product_categories.map((category) => (
                        <Link
                          key={category.value}
                          href={`/products?product_category=${category.value}`}
                          onClick={() => setShowProductDropdown(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{category.label}</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                              {category.count}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <Link
              href="/admin"
              className="text-black hover:text-gray-600 font-medium transition"
            >
              Admin
            </Link>
            <Link
              href="/orders"
              className="text-black hover:text-gray-600 font-medium transition"
            >
              Orders
            </Link>
          </nav>

          {/* Icons and Mobile Menu - Right Side */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Icon with Badge */}
            <button 
              onClick={() => setIsWishlistOpen(true)} 
              className="relative"
              title="Wishlist"
            >
              <Heart className="w-6 h-6 text-black hover:text-gray-600 transition" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </button>

            {/* Cart Icon with Badge */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative"
              title="Cart"
            >
              <ShoppingCart className="w-6 h-6 text-black hover:text-gray-600 transition" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Filter Button - Only show on products page */}
            {showFilterButton && (
              <button
                onClick={openFilters}
                className="relative"
                title="Open filters"
              >
                <Filter className="w-6 h-6 text-black hover:text-gray-600 transition" />
              </button>
            )}

            {/* Mobile Menu Button - Now at the end */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          {/* User Section - Desktop Only */}
          {!user ? (
            <button
              onClick={() => setOpenAuth(true)}
              className="hidden md:block px-4 py-2 shadow rounded hover:bg-gray-100 text-black transition"
            >
              Login
            </button>
          ) : (
            <div className="hidden md:block relative">
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center hover:bg-green-700 transition"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>

              {openProfile && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setOpenProfile(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-20 border border-gray-100">
                    <button
                      onClick={logout}
                      className="block w-full text-black text-center px-4 py-2 hover:bg-gray-100 transition rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-6 py-4 space-y-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-black hover:text-gray-600 font-medium transition"
              >
                All Products
              </Link>

              {/* Mobile Age Categories */}
              {categories && categories.age_categories.length > 0 && (
                <div>
                  <button
                    onClick={() => setMobileAgeOpen(!mobileAgeOpen)}
                    className="w-full flex items-center justify-between py-2 text-black hover:text-gray-600 font-medium transition"
                  >
                    Age Categories
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAgeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAgeOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {categories.age_categories.map((category) => (
                        <Link
                          key={category.value}
                          href={`/products?age_category=${category.value}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileAgeOpen(false);
                          }}
                          className="block py-2 text-sm text-gray-700 hover:text-black transition"
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.label}</span>
                            <span className="text-xs text-gray-500">({category.count})</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Product Categories */}
              {categories && categories.product_categories.length > 0 && (
                <div>
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className="w-full flex items-center justify-between py-2 text-black hover:text-gray-600 font-medium transition"
                  >
                    Categories
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProductOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {categories.product_categories.map((category) => (
                        <Link
                          key={category.value}
                          href={`/products?product_category=${category.value}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileProductOpen(false);
                          }}
                          className="block py-2 text-sm text-gray-700 hover:text-black transition"
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.label}</span>
                            <span className="text-xs text-gray-500">({category.count})</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-black hover:text-gray-600 font-medium transition"
              >
                Admin
              </Link>
              <Link
                href="/orders"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-black hover:text-gray-600 font-medium transition"
              >
                Orders
              </Link>

              {/* Mobile Login/Logout */}
              {!user ? (
                <button
                  onClick={() => {
                    setOpenAuth(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-black hover:text-gray-600 font-medium transition"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-black hover:text-gray-600 font-medium transition"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <AuthModal
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        onSuccess={() => {}}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

      <WishlistSidebar 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)} 
      />
    </>
  );
}
