"use client";

import { X } from "lucide-react";

interface Product {
  id: number;
  price: string;
  in_stock: boolean;
}

interface ProductFiltersProps {
  products: Product[];
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  gridCols: number;
  setGridCols: (value: number) => void;
  productCount: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductFilters({
  products,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  sortBy,
  setSortBy,
  gridCols,
  setGridCols,
  productCount,
  isOpen,
  onClose
}: ProductFiltersProps) {
  const handleClearFilters = () => {
    setPriceRange([0, 5000]);
    setInStockOnly(false);
    setSortBy("best-selling");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/10 bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar Filters - Slides from Right */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl overflow-y-auto z-50 animate-slide-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-black font-bold">FILTERS</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Product Count */}
        <div className="mb-6 pb-4 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-black">{productCount}</span> products
          </p>
        </div>

        {/* Sort By */}
        <div className="mb-6">
          <label className="block text-black font-semibold mb-3">Sort By</label>
          <select 
            className="w-full text-black px-4 py-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="best-selling">Best selling</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Grid Columns */}
        <div className="mb-6 hidden lg:block">
          <label className="block text-black font-semibold mb-3">Grid Layout</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((cols) => (
              <button
                key={cols}
                onClick={() => setGridCols(cols)}
                className={`p-2 border rounded transition flex-1 ${
                  gridCols === cols ? 'bg-black text-white border-black' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'
                }`}
                title={`${cols} column${cols > 1 ? 's' : ''}`}
              >
                <span className="text-xs">{cols}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Availability Filter */}
        <div className="mb-6">
          <label className="block text-black font-semibold mb-3">Availability</label>
          <label className="flex text-black items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            In stock only ({products.filter(p => p.in_stock).length})
          </label>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <label className="block text-black font-semibold mb-3">Price Range</label>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full cursor-pointer accent-gray-800"
            />
            <div className="flex items-center gap-2 text-sm">
              <div className="flex flex-col flex-1">
                <label className="text-xs text-gray-600 mb-1">Min Price</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="₹ 0"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-xs text-gray-600 mb-1">Max Price</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="₹ 5000"
                />
              </div>
            </div>
            <div className="text-xs text-gray-600 text-center">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={handleClearFilters}
          className="w-full py-3 text-sm font-medium text-gray-700 hover:text-black border border-gray-300 rounded hover:bg-gray-50 transition"
        >
          Clear All Filters
        </button>
      </div>
    </>
  );
}





// "use client";

// import { X } from "lucide-react";

// interface Product {
//   id: number;
//   price: string;
//   in_stock: boolean;
// }

// interface ProductFiltersProps {
//   products: Product[];
//   priceRange: number[];
//   setPriceRange: (range: number[]) => void;
//   inStockOnly: boolean;
//   setInStockOnly: (value: boolean) => void;
//   sortBy: string;
//   setSortBy: (value: string) => void;
//   gridCols: number;
//   setGridCols: (value: number) => void;
//   productCount: number;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function ProductFilters({
//   products,
//   priceRange,
//   setPriceRange,
//   inStockOnly,
//   setInStockOnly,
//   sortBy,
//   setSortBy,
//   gridCols,
//   setGridCols,
//   productCount,
//   isOpen,
//   onClose
// }: ProductFiltersProps) {
//   const handleClearFilters = () => {
//     setPriceRange([0, 900]);
//     setInStockOnly(false);
//     setSortBy("best-selling");
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black/10 bg-opacity-50 z-40"
//         onClick={onClose}
//       ></div>

//       {/* Sidebar Filters - Slides from Right */}
//       <div className="fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl overflow-y-auto z-50 animate-slide-in">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl text-black font-bold">FILTERS</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition"
//           >
//             <X className="w-6 h-6 text-gray-800" />
//           </button>
//         </div>

//         {/* Product Count */}
//         <div className="mb-6 pb-4 border-b border-gray-200">
//           <p className="text-sm text-gray-600">
//             Showing <span className="font-semibold text-black">{productCount}</span> products
//           </p>
//         </div>

//         {/* Sort By */}
//         <div className="mb-6">
//           <label className="block text-black font-semibold mb-3">Sort By</label>
//           <select 
//             className="w-full text-black px-4 py-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="best-selling">Best selling</option>
//             <option value="price-low-high">Price: Low to High</option>
//             <option value="price-high-low">Price: High to Low</option>
//             <option value="newest">Newest</option>
//           </select>
//         </div>

//         {/* Grid Columns */}
//         <div className="mb-6 hidden lg:block">
//           <label className="block text-black font-semibold mb-3">Grid Layout</label>
//           <div className="flex items-center gap-2">
//             {[1, 2, 3, 4, 5].map((cols) => (
//               <button
//                 key={cols}
//                 onClick={() => setGridCols(cols)}
//                 className={`p-2 border rounded transition flex-1 ${
//                   gridCols === cols ? 'bg-black text-white border-black' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'
//                 }`}
//                 title={`${cols} column${cols > 1 ? 's' : ''}`}
//               >
//                 <span className="text-xs">{cols}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Availability Filter */}
//         <div className="mb-6">
//           <label className="block text-black font-semibold mb-3">Availability</label>
//           <label className="flex text-black items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
//             <input
//               type="checkbox"
//               checked={inStockOnly}
//               onChange={(e) => setInStockOnly(e.target.checked)}
//               className="w-4 h-4 cursor-pointer"
//             />
//             In stock only ({products.filter(p => p.in_stock).length})
//           </label>
//         </div>

//         {/* Price Filter */}
//         <div className="mb-6">
//           <label className="block text-black font-semibold mb-3">Price Range</label>
//           <div className="space-y-3">
//             <input
//               type="range"
//               min="0"
//               max="900"
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//               className="w-full cursor-pointer accent-gray-800"
//             />
//             <div className="flex items-center gap-2 text-sm">
//               <div className="flex flex-col flex-1">
//                 <label className="text-xs text-gray-600 mb-1">Min Price</label>
//                 <input
//                   type="number"
//                   value={priceRange[0]}
//                   onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
//                   className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="₹ 0"
//                 />
//               </div>
//               <div className="flex flex-col flex-1">
//                 <label className="text-xs text-gray-600 mb-1">Max Price</label>
//                 <input
//                   type="number"
//                   value={priceRange[1]}
//                   onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 900])}
//                   className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="₹ 900"
//                 />
//               </div>
//             </div>
//             <div className="text-xs text-gray-600 text-center">
//               ₹{priceRange[0]} - ₹{priceRange[1]}
//             </div>
//           </div>
//         </div>

//         {/* Clear Filters */}
//         <button
//           onClick={handleClearFilters}
//           className="w-full py-3 text-sm font-medium text-gray-700 hover:text-black border border-gray-300 rounded hover:bg-gray-50 transition"
//         >
//           Clear All Filters
//         </button>
//       </div>
//     </>
//   );
// }