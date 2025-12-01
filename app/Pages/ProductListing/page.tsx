"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { PRODUCTS } from "@/app/data/products";

export default function ProductListingPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [gridCols, setGridCols] = useState(5);
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [priceRange, setPriceRange] = useState([0, 334]);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  // Get page title based on URL
  const getPageInfo = () => {
    const category = searchParams.get('category');
    
    if (category) {
      return {
        title: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        breadcrumb: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      };
    }
    
    // Default based on pathname
    if (pathname.includes('best-selling')) {
      return { title: 'Best Selling', breadcrumb: 'Best Selling' };
    } else if (pathname.includes('men-shirt') || pathname.includes('ProductListing')) {
      return { title: 'Men Shirt', breadcrumb: 'Men Shirt' };
    } else if (pathname.includes('new-arrival')) {
      return { title: 'New Arrival', breadcrumb: 'New Arrival' };
    } else if (pathname.includes('linen-shirts')) {
      return { title: 'Linen Shirts', breadcrumb: 'Linen Shirts' };
    } else if (pathname.includes('cargo-shirts')) {
      return { title: 'Cargo Shirts', breadcrumb: 'Cargo Shirts' };
    }
    
    return { title: 'All Products', breadcrumb: 'All Products' };
  };

  const pageInfo = getPageInfo();

  const sortProducts = (list, type) => {
    switch (type) {
      case "price-low":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...list].sort((a, b) => b.price - a.price);
      case "newest":
        return [...list].sort((a, b) => b.id - a.id);
      default:
        return list;
    }
  };

  useEffect(() => {
    let updated = [...PRODUCTS];
    
    // Filter by price
    updated = updated.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Sort
    updated = sortProducts(updated, sortBy);
    setFilteredProducts(updated);
  }, [sortBy, priceRange]);

  const clearPriceFilter = () => {
    setPriceRange([0, 334]);
  };

  const hasActiveFilters = priceRange[0] !== 0 || priceRange[1] !== 334;

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb & Title */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl text-black font-bold mb-3">{pageInfo.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-black">
            <span>Home</span>
            <span>›</span>
            <span>{pageInfo.breadcrumb}</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              <h2 className="text-2xl font-bold mb-6 text-black">FILTERS</h2>

              {/* Availability Filter */}
              <div className="mb-6 pb-6 border-b">
                <button
                  onClick={() => setAvailabilityOpen(!availabilityOpen)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold text-black">Availability</span>
                  {availabilityOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {availabilityOpen && (
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                        className="w-4 h-4 border-2 border-gray-300 rounded"
                      />
                      <span className="text-sm text-black">
                        In stock <span className="text-black">(23)</span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer text-gray-400">
                      <input
                        type="checkbox"
                        checked={outOfStock}
                        onChange={(e) => setOutOfStock(e.target.checked)}
                        className="w-4 h-4 border-2 border-gray-300 rounded"
                        disabled
                      />
                      <span className="text-sm text-black">
                        Out of stock <span className="text-black">(0)</span>
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setPriceOpen(!priceOpen)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <span className="font-semibold text-black">Price</span>
                  {priceOpen ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {priceOpen && (
                  <div className="space-y-4">
                    {/* Price Range Slider */}
                    <div className="relative pt-2 pb-6">
                      <input
                        type="range"
                        min="0"
                        max="334"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                        }
                        className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, black 0%, black ${
                            (priceRange[1] / 334) * 100
                          }%, #e5e7eb ${(priceRange[1] / 334) * 100}%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2 border rounded px-3 py-1">
                          <span className="text-sm text-black">₹</span>
                          <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) =>
                              setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                            }
                            className="w-12 text-sm outline-none text-black"
                          />
                        </div>
                        <span className="self-center text-black">To</span>
                        <div className="flex items-center gap-2 border rounded px-3 py-1">
                          <span className="text-sm text-black">₹</span>
                          <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([priceRange[0], parseInt(e.target.value) || 334])
                            }
                            className="w-16 text-sm outline-none text-black"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Right - Products */}
          <main className="flex-1">
            {/* Top Bar - Sort & Grid Options */}
            <div className="flex items-center justify-between mb-6">
              {/* Left - Active Filters & Sort */}
              <div className="flex items-center gap-4">
                {/* Active Price Filter Badge */}
                {hasActiveFilters && (
                  <div className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full">
                    <button
                      onClick={clearPriceFilter}
                      className="hover:bg-gray-200 rounded-full p-1"
                    >
                      <X size={14} />
                    </button>
                    <span className="text-sm">
                      Rs. {priceRange[0]}.00 - Rs. {priceRange[1]}.00
                    </span>
                    <button
                      onClick={clearPriceFilter}
                      className="text-sm text-gray-600 hover:text-black ml-2"
                    >
                      Clear All
                    </button>
                  </div>
                )}

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white text-black px-4 py-2 pr-8 text-sm cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Best selling</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Right - Grid View Options */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGridCols(1)}
                  className={`p-2.5 rounded transition-colors ${
                    gridCols === 1
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  title="1 column"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="16" height="3" fill="currentColor" />
                    <rect y="6" width="16" height="3" fill="currentColor" />
                    <rect y="12" width="16" height="3" fill="currentColor" />
                  </svg>
                </button>

                <button
                  onClick={() => setGridCols(2)}
                  className={`p-2.5 rounded transition-colors ${
                    gridCols === 2
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  title="2 columns"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="7" height="7" fill="currentColor" />
                    <rect x="9" width="7" height="7" fill="currentColor" />
                    <rect y="9" width="7" height="7" fill="currentColor" />
                    <rect x="9" y="9" width="7" height="7" fill="currentColor" />
                  </svg>
                </button>

                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2.5 rounded transition-colors ${
                    gridCols === 3
                      ? "bg-black text-white"
                      : "hover:bg-black"
                  }`}
                  title="3 columns"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="4" height="4" fill="currentColor" />
                    <rect x="6" width="4" height="4" fill="currentColor" />
                    <rect x="12" width="4" height="4" fill="currentColor" />
                    <rect y="6" width="4" height="4" fill="currentColor" />
                    <rect x="6" y="6" width="4" height="4" fill="currentColor" />
                    <rect x="12" y="6" width="4" height="4" fill="currentColor" />
                    <rect y="12" width="4" height="4" fill="currentColor" />
                    <rect x="6" y="12" width="4" height="4" fill="currentColor" />
                    <rect x="12" y="12" width="4" height="4" fill="currentColor" />
                  </svg>
                </button>

                <button
                  onClick={() => setGridCols(4)}
                  className={`p-2.5 rounded transition-colors ${
                    gridCols === 4
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  title="4 columns"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="3" height="3" fill="currentColor" />
                    <rect x="4.5" width="3" height="3" fill="currentColor" />
                    <rect x="9" width="3" height="3" fill="currentColor" />
                    <rect x="13.5" width="3" height="3" fill="currentColor" />
                    <rect y="4.5" width="3" height="3" fill="currentColor" />
                    <rect x="4.5" y="4.5" width="3" height="3" fill="currentColor" />
                    <rect x="9" y="4.5" width="3" height="3" fill="currentColor" />
                    <rect x="13.5" y="4.5" width="3" height="3" fill="currentColor" />
                  </svg>
                </button>

                <button
                  onClick={() => setGridCols(5)}
                  className={`p-2.5 rounded transition-colors ${
                    gridCols === 5
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  title="5 columns"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="2.5" height="2.5" fill="currentColor" />
                    <rect x="3.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="7" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="10.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="14" width="2.5" height="2.5" fill="currentColor" />
                    <rect y="3.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="3.5" y="3.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="7" y="3.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="10.5" y="3.5" width="2.5" height="2.5" fill="currentColor" />
                    <rect x="14" y="3.5" width="2.5" height="2.5" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                gridCols === 1
                  ? "grid-cols-1"
                  : gridCols === 2
                  ? "grid-cols-2"
                  : gridCols === 3
                  ? "grid-cols-3"
                  : gridCols === 4
                  ? "grid-cols-4"
                  : "grid-cols-5"
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                    {/* Front Image */}
                    <img
                      src={product.front}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    
                    {/* Back Image (shows on hover) */}
                    <img
                      src={product.back}
                      alt={`${product.name} back`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Action Buttons (show on hover) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      {/* Wishlist Button */}
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>

                      {/* Quick View Button */}
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Select Options Button (shows on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <button className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Select options
                      </button>
                    </div>
                  </div>

                  {/* Brand */}
                  <p className="text-xs text-black uppercase mb-1 text-center">
                    ZAYRAAPPAREL
                  </p>

                  {/* Product Name */}
                  <h3 className="text-sm text-black font-normal leading-tight mb-2 text-center px-2">
                    {product.name}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex items-center text-black justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-600 ml-1">
                      ({Math.floor(Math.random() * 50) + 1})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-black text-base">
                      Rs. {product.price}.00
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {product.oldPrice || (product.price + 700)}.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}