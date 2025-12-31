module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/products/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Heart, Eye, X } from "lucide-react";
// import { useWishlist } from "@/components/context/WishlistContext";
// import { useCart } from "@/components/context/CartContext";
// import { useFilter } from "@/components/context/FilterContext";
// import ProductFilters from "@/components/screens/home/ProductFilters";
// interface Product {
//   id: number;
//   slug: string;
//   title: string;
//   price: string;
//   mrp?: string;
//   image1?: string;
//   in_stock: boolean;
//   age_limits?: string;
//   material_type?: string;
//   age_category: string;
//   product_category: string;
// }
// const AGE_CATEGORY_LABELS: { [key: string]: string } = {
//   'kids_boy': 'Kids - Boy',
//   'kids_girl': 'Kids - Girl',
//   'kids_unisex': 'Kids - Unisex',
//   'adults_men': 'Adults - Men',
//   'adults_women': 'Adults - Women',
//   'adults_unisex': 'Adults - Unisex',
//   'all_age_men': 'All Age - Men',
//   'all_age_women': 'All Age - Women',
//   'all_age_unisex': 'All Age - Unisex',
// };
// const PRODUCT_CATEGORY_LABELS: { [key: string]: string } = {
//   'cloth': 'Clothing',
//   'jewellery': 'Jewellery',
// };
// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [gridCols, setGridCols] = useState(5);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showQuickView, setShowQuickView] = useState(false);
//   const [priceRange, setPriceRange] = useState([0, 5000]);
//   const [inStockOnly, setInStockOnly] = useState(false);
//   const [sortBy, setSortBy] = useState("best-selling");
//   const [wishlistLoading, setWishlistLoading] = useState<string | null>(null);
//   const [groupByCategory, setGroupByCategory] = useState(true);
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
//   const { token } = useCart();
//   const { isFilterOpen, closeFilters, setShowFilterButton } = useFilter();
//   // Get category filters from URL
//   const ageCategory = searchParams.get('age_category');
//   const productCategory = searchParams.get('product_category');
//   // Show filter button when component mounts, hide when unmounts
//   useEffect(() => {
//     setShowFilterButton(true);
//     return () => setShowFilterButton(false);
//   }, [setShowFilterButton]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/`);
//         if (!res.ok) throw new Error('Failed to fetch');
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         setError((err as Error).message || "Failed to fetch");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);
//   const handleQuickView = (product: Product) => {
//     setSelectedProduct(product);
//     setShowQuickView(true);
//   };
//   const handleWishlistToggle = async (e: React.MouseEvent, productSlug: string) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!token) {
//       alert("Please login to add items to wishlist");
//       return;
//     }
//     if (wishlistLoading === productSlug) return;
//     try {
//       setWishlistLoading(productSlug);
//       const isInWishlist = wishlistItems.some((item: any) => item.slug === productSlug);
//       if (isInWishlist) {
//         await removeFromWishlist(productSlug);
//       } else {
//         await addToWishlist(productSlug);
//       }
//     } catch (error) {
//       console.error("Wishlist error:", error);
//       alert((error as Error).message || "Failed to update wishlist");
//     } finally {
//       setWishlistLoading(null);
//     }
//   };
//   const isInWishlist = (productSlug: string) => {
//     return wishlistItems.some((item: any) => item.slug === productSlug);
//   };
//   const filteredProducts = products.filter((product) => {
//     const price = parseFloat(product.price) || 0;
//     const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
//     const matchesStock = !inStockOnly || (product.in_stock !== false);
//     const matchesAgeCategory = !ageCategory || product.age_category === ageCategory;
//     const matchesProductCategory = !productCategory || product.product_category === productCategory;
//     return matchesPrice && matchesStock && matchesAgeCategory && matchesProductCategory;
//   });
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     const priceA = parseFloat(a.price) || 0;
//     const priceB = parseFloat(b.price) || 0;
//     switch (sortBy) {
//       case "price-low-high":
//         return priceA - priceB;
//       case "price-high-low":
//         return priceB - priceA;
//       case "newest":
//         return b.id - a.id;
//       case "best-selling":
//       default:
//         return 0;
//     }
//   });
//   // Group products by category
//   const groupedProducts = sortedProducts.reduce((acc, product) => {
//     const key = `${product.age_category}_${product.product_category}`;
//     if (!acc[key]) {
//       acc[key] = {
//         ageCategory: product.age_category,
//         productCategory: product.product_category,
//         products: []
//       };
//     }
//     acc[key].products.push(product);
//     return acc;
//   }, {} as Record<string, { ageCategory: string; productCategory: string; products: Product[] }>);
//   const ProductCard = ({ product }: { product: Product }) => (
//     <div
//       key={product.id}
//       className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col"
//     >
//       {/* Product Image */}
//       <div className="relative overflow-hidden rounded-t-lg aspect-square">
//         {product.image1 ? (
//           <img
//             src={product.image1}
//             alt={product.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-400">No Image</span>
//           </div>
//         )}
//         {/* Hover Buttons */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
//           <button 
//             onClick={(e) => handleWishlistToggle(e, product.slug)}
//             disabled={wishlistLoading === product.slug}
//             className={`p-2 rounded-full shadow-lg transition-all ${
//               wishlistLoading === product.slug
//                 ? 'bg-gray-100 cursor-not-allowed'
//                 : isInWishlist(product.slug)
//                   ? 'bg-red-50 text-red-500 hover:bg-red-100'
//                   : 'bg-white hover:bg-red-50 hover:text-red-500'
//             }`}
//             title={isInWishlist(product.slug) ? "Remove from wishlist" : "Add to wishlist"}
//           >
//             <Heart 
//               className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
//                 isInWishlist(product.slug) ? 'fill-current' : ''
//               } ${wishlistLoading === product.slug ? 'animate-pulse' : ''}`}
//             />
//           </button>
//           <button
//             onClick={() => handleQuickView(product)}
//             className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
//           >
//             <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>
//         </div>
//       </div>
//       {/* Product Info */}
//       <div className="p-3 lg:p-4 flex flex-col flex-1">
//         <p className="text-xs text-gray-500 mb-1 uppercase">BabyDay</p>
//         <h3 className="text-sm font-medium mb-2 line-clamp-2 text-black flex-1">
//           {product.title}
//         </h3>
//         {/* Price */}
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-base lg:text-lg font-bold text-gray-900">
//             ₹ {parseFloat(product.price).toFixed(0)}
//           </span>
//           {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
//             <span className="text-xs lg:text-sm text-gray-400 line-through">
//               ₹ {parseFloat(product.mrp).toFixed(0)}
//             </span>
//           )}
//         </div>
//         {/* Detail View Button */}
//         <Link
//           href={`/products/${product.slug}`}
//           className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto"
//         >
//           Detail View
//         </Link>
//       </div>
//     </div>
//   );
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-lg">
//         Loading products...
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         {error}
//       </div>
//     );
//   }
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Filter Sidebar Component */}
//       <ProductFilters
//         products={products}
//         priceRange={priceRange}
//         setPriceRange={setPriceRange}
//         inStockOnly={inStockOnly}
//         setInStockOnly={setInStockOnly}
//         sortBy={sortBy}
//         setSortBy={setSortBy}
//         gridCols={gridCols}
//         setGridCols={setGridCols}
//         productCount={sortedProducts.length}
//         isOpen={isFilterOpen}
//         onClose={closeFilters}
//       />
//       {/* Main Content */}
//       <div className="p-4 lg:p-6 w-full">
//         {/* Top Bar with Toggle */}
//         <div className="mb-6 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             {/* Category Filter Badge */}
//             {(ageCategory || productCategory) && (
//               <div className="flex items-center gap-2 flex-wrap">
//                 <span className="text-sm text-gray-600">Filtered by:</span>
//                 {ageCategory && (
//                   <Link
//                     href="/products"
//                     className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
//                   >
//                     {AGE_CATEGORY_LABELS[ageCategory] || ageCategory}
//                     <X className="w-3 h-3" />
//                   </Link>
//                 )}
//                 {productCategory && (
//                   <Link
//                     href="/products"
//                     className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
//                   >
//                     {PRODUCT_CATEGORY_LABELS[productCategory] || productCategory}
//                     <X className="w-3 h-3" />
//                   </Link>
//                 )}
//               </div>
//             )}
//           </div>
//           {/* Group By Toggle */}
//           <button
//             onClick={() => setGroupByCategory(!groupByCategory)}
//             className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
//           >
//             {groupByCategory ? 'Show All' : 'Group by Category'}
//           </button>
//         </div>
//         {/* Products Display */}
//         {sortedProducts.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-gray-500 text-lg mb-4">No products found</p>
//             <button
//               onClick={() => {
//                 setPriceRange([0, 900]);
//                 setInStockOnly(false);
//               }}
//               className="text-blue-600 hover:underline"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : groupByCategory ? (
//           // Grouped by Category View
//           <div className="space-y-12">
//             {Object.entries(groupedProducts).map(([key, group]) => (
//               <div key={key}>
//                 {/* Category Header */}
//                 <div className="mb-6">
//                   <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
//                     {AGE_CATEGORY_LABELS[group.ageCategory] || group.ageCategory}
//                   </h2>
//                   <p className="text-sm lg:text-base text-gray-600">
//                     {PRODUCT_CATEGORY_LABELS[group.productCategory] || group.productCategory} • {group.products.length} {group.products.length === 1 ? 'item' : 'items'}
//                   </p>
//                   <div className="mt-3 h-1 w-20 bg-black rounded-full"></div>
//                 </div>
//                 {/* Products Grid */}
//                 <div 
//                   className="grid gap-4 lg:gap-6"
//                   style={{
//                     gridTemplateColumns: `repeat(${
//                       typeof window !== 'undefined' && window.innerWidth >= 1024 
//                         ? gridCols 
//                         : window.innerWidth >= 640 ? 2 : 1
//                     }, minmax(0, 1fr))`
//                   }}
//                 >
//                   {group.products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Simple Grid View
//           <div 
//             className="grid gap-4 lg:gap-6"
//             style={{
//               gridTemplateColumns: `repeat(${
//                 typeof window !== 'undefined' && window.innerWidth >= 1024 
//                   ? gridCols 
//                   : window.innerWidth >= 640 ? 2 : 1
//               }, minmax(0, 1fr))`
//             }}
//           >
//             {sortedProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Quick View Modal */}
//       {showQuickView && selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-4 lg:p-6">
//               <button
//                 onClick={() => setShowQuickView(false)}
//                 className="float-right p-2 hover:bg-gray-100 rounded-full transition"
//               >
//                 <X className="w-5 h-5 lg:w-6 lg:h-6" />
//               </button>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12">
//                 <div className="aspect-square">
//                   {selectedProduct.image1 ? (
//                     <img
//                       src={selectedProduct.image1}
//                       alt={selectedProduct.title}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-400">No Image</span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="text-xs lg:text-sm text-gray-500 mb-2">BABYDAY</p>
//                   <h2 className="text-xl lg:text-2xl font-bold mb-4 text-black">{selectedProduct.title}</h2>
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex text-yellow-400 text-sm lg:text-base">
//                       {[...Array(5)].map((_, i) => (
//                         <span key={i}>★</span>
//                       ))}
//                     </div>
//                     <span className="text-xs lg:text-sm text-gray-600">(12 reviews)</span>
//                   </div>
//                   <div className="flex items-center gap-3 mb-6">
//                     <span className="text-2xl lg:text-3xl font-bold text-green-600">
//                       ₹ {parseFloat(selectedProduct.price).toFixed(0)}
//                     </span>
//                     {selectedProduct.mrp && (
//                       <span className="text-lg lg:text-xl text-gray-400 line-through">
//                         ₹ {parseFloat(selectedProduct.mrp).toFixed(0)}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm lg:text-base text-gray-700 mb-6 flex-1">
//                     {selectedProduct.age_limits || selectedProduct.material_type || 
//                      "High-quality product with unique design. Perfect for everyday use."}
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-3 mt-auto">
//                     <Link
//                       href={`/products/${selectedProduct.slug}`}
//                       className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-center font-medium text-sm lg:text-base"
//                     >
//                       View Full Details
//                     </Link>
//                     <button 
//                       onClick={(e) => handleWishlistToggle(e, selectedProduct.slug)}
//                       disabled={wishlistLoading === selectedProduct.slug}
//                       className={`px-6 py-3 border rounded-lg transition ${
//                         wishlistLoading === selectedProduct.slug
//                           ? 'border-gray-200 cursor-not-allowed'
//                           : isInWishlist(selectedProduct.slug)
//                             ? 'border-red-300 bg-red-50 hover:bg-red-100'
//                             : 'border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       <Heart 
//                         className={`w-5 h-5 lg:w-6 lg:h-6 mx-auto transition-all ${
//                           isInWishlist(selectedProduct.slug) 
//                             ? 'fill-current text-red-500' 
//                             : 'text-gray-600'
//                         } ${wishlistLoading === selectedProduct.slug ? 'animate-pulse' : ''}`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
}),
"[project]/components/screens/home/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/screens/home/Hero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/screens/home/Hero.tsx <module evaluation>", "default");
}),
"[project]/components/screens/home/Hero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/screens/home/Hero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/screens/home/Hero.tsx", "default");
}),
"[project]/components/screens/home/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/screens/home/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/screens/home/Hero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/products/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/screens/home/Hero.tsx [app-rsc] (ecmascript)");
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$screens$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$products$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8a12164c._.js.map