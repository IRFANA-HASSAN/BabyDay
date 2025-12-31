"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, Minus, Plus, Heart, Truck, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useCart } from "@/components/context/CartContext";
import { useWishlist } from "@/components/context/WishlistContext";
import AuthModal from "../../../components/includes/AuthModal";
import BuyNowModal from "../../../components/includes/BuyNowModal";
import Link from "next/link";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const { addToCart, token, cartItems } = useCart();
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [relatedWishlistLoading, setRelatedWishlistLoading] = useState(null);

  const inWishlist = wishlistItems.some((item) => item.slug === slug);
  const inCart = cartItems.some((item) => item.slug === slug);

  const AGE_CATEGORY_LABELS = {
    kids_boy: "Kids (Boy)",
    kids_girl: "Kids (Girl)",
    kids_unisex: "Kids (Unisex)",
    adults_men: "Adults (Men)",
    adults_women: "Adults (Women)",
    adults_unisex: "Adults (Unisex)",
    all_age_men: "All Age (Men)",
    all_age_women: "All Age (Women)",
    all_age_unisex: "All Age (Unisex)",
  };

  const getEstimatedDelivery = () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 2);
    const end = new Date(today);
    end.setDate(today.getDate() + 5);

    const format = (date) =>
      date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

    return `${format(start)} - ${format(end)}`;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/public/products/${slug}/`
        );
        
        if (!res.ok) {
          throw new Error('Product not found');
        }
        
        const data = await res.json();
        setProduct(data);
        
        if (data.available_sizes && data.available_sizes.length > 0) {
          setSelectedSize(data.available_sizes[0]);
        }

        // Fetch all products for related products
        const allProductsRes = await fetch(
          `http://localhost:8000/api/v1/public/products/`
        );
        if (allProductsRes.ok) {
          const allProducts = await allProductsRes.json();
          
          // Filter and sort related products
          const related = allProducts
            .filter(p => p.slug !== data.slug)
            .map(p => {
              // Calculate relevance score
              let score = 0;
              if (p.product_category === data.product_category) score += 10;
              if (p.age_category === data.age_category) score += 5;
              return { ...p, relevanceScore: score };
            })
            .filter(p => p.relevanceScore > 0) // Only products with some relevance
            .sort((a, b) => {
              // Sort by relevance first, then by ID (newest)
              if (b.relevanceScore !== a.relevanceScore) {
                return b.relevanceScore - a.relevanceScore;
              }
              return b.id - a.id;
            })
            .slice(0, 8); // Limit to 8 related products
          
          setRelatedProducts(related);
        }
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Product not found"}</p>
          <button
            onClick={() => router.push("/")}
            className="text-blue-600 hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const productImages = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const incrementQuantity = () => {
    if (quantity < (product.stock_qty || 10)) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.available_sizes?.length > 0) {
      alert("Please select a size");
      return;
    }

    if (!token) {
      localStorage.setItem(
        "pendingCart",
        JSON.stringify({ slug, size: selectedSize })
      );
      setShowAuth(true);
      return;
    }

    addToCart(slug, selectedSize);
  };

  const handleWishlist = async () => {
    if (!token) {
      alert("Please login to add items to wishlist");
      setShowAuth(true);
      return;
    }

    if (wishlistLoading) return;

    try {
      setWishlistLoading(true);
      
      if (inWishlist) {
        await removeFromWishlist(slug);
      } else {
        await addToWishlist(slug);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Failed to update wishlist");
    } finally {
      setWishlistLoading(false);
    }
  };

  const handleRelatedWishlistToggle = async (e, productSlug) => {
    e.preventDefault();
    e.stopPropagation();

    if (!token) {
      alert("Please login to add items to wishlist");
      setShowAuth(true);
      return;
    }

    if (relatedWishlistLoading === productSlug) return;

    try {
      setRelatedWishlistLoading(productSlug);
      
      const isInWishlist = wishlistItems.some((item) => item.slug === productSlug);
      
      if (isInWishlist) {
        await removeFromWishlist(productSlug);
      } else {
        await addToWishlist(productSlug);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Failed to update wishlist");
    } finally {
      setRelatedWishlistLoading(null);
    }
  };

  const isInWishlist = (productSlug) => {
    return wishlistItems.some((item) => item.slug === productSlug);
  };

  const discountPercent = product.mrp && parseFloat(product.mrp) > parseFloat(product.price)
    ? Math.round(((parseFloat(product.mrp) - parseFloat(product.price)) / parseFloat(product.mrp)) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
            <button onClick={() => router.push("/")} className="hover:text-gray-900">
              Home
            </button>
            <span>›</span>
            <span className="capitalize">{product.product_category || 'Products'}</span>
            <span>›</span>
            <span className="text-gray-900 truncate">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {productImages.length > 1 && (
              <div className="flex sm:flex-col gap-3 overflow-x-auto">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition ${
                      currentImage === idx ? 'border-gray-800' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`View ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex-1 bg-white rounded-lg overflow-hidden relative aspect-square">
              <img 
                src={productImages[currentImage]} 
                alt={product.title}
                className="w-full h-full object-contain"
              />
              
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              {discountPercent > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {discountPercent}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-sm text-gray-600 capitalize">
                  {AGE_CATEGORY_LABELS[product.age_category] || product.age_category}
                </p>
              </div>
              
              <button 
                onClick={handleWishlist}
                disabled={wishlistLoading}
                className={`flex-shrink-0 p-3 rounded-full transition-all duration-200 ${
                  wishlistLoading 
                    ? 'bg-gray-100 cursor-not-allowed opacity-50' 
                    : inWishlist && token
                      ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={
                  !token 
                    ? "Login to add to wishlist" 
                    : inWishlist 
                      ? "In wishlist" 
                      : "Add to wishlist"
                }
              >
                <Heart 
                  className={`w-6 h-6 transition-all ${
                    inWishlist && token ? 'fill-current scale-110' : ''
                  } ${wishlistLoading ? 'animate-pulse' : ''}`} 
                />
              </button>
            </div>

            
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-gray-900">
                Rs. {parseFloat(product.price).toFixed(0)}
              </span>
              {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
                <span className="text-xl text-gray-400 line-through">
                  Rs. {parseFloat(product.mrp).toFixed(0)}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-green-600 font-semibold">
                  Save {discountPercent}%
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">
              {Number(product.delivery_charge) === 0
                ? "Free Delivery • Tax included"
                : `Delivery Fee Rs. ${product.delivery_charge} • Tax included`}
            </p>

            <div className="py-2">
              {(product.stock_qty > 0 || product.is_available) ? (
                <p className="text-green-600 font-medium">
                  ✓ In Stock {product.stock_qty && `(${product.stock_qty} available)`}
                </p>
              ) : (
                <p className="text-red-600 font-medium">✗ Out of Stock</p>
              )}
            </div>

            {(product.material_type || product.fit_type || product.pattern_design) && (
              <div className="space-y-2 py-4 border-t">
                {product.material_type && (
                  <p className="text-sm text-gray-800"><span className="font-semibold">Material:</span> {product.material_type}</p>
                )}
                {product.fit_type && (
                  <p className="text-sm text-gray-800"><span className="font-semibold">Fit:</span> {product.fit_type}</p>
                )}
                {product.pattern_design && (
                  <p className="text-sm text-gray-800"><span className="font-semibold">Pattern:</span> {product.pattern_design}</p>
                )}
                {product.age_limits && (
                  <p className="text-sm text-gray-800"><span className="font-semibold">Age:</span> {product.age_limits}</p>
                )}
              </div>
            )}

            {product.available_sizes && product.available_sizes.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-black">Size:</span>
                  <span className="font-bold text-black">{selectedSize || 'Select'}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.available_sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2 border rounded-md transition ${
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
            )}

            <div>
              <p className="font-medium mb-3 text-black">Quantity</p>
              <div className="flex items-center border border-black rounded-md w-fit">
                <button 
                  onClick={decrementQuantity} 
                  className="p-3 hover:bg-gray-100 transition"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4 text-black" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-x border-black text-black"
                />
                <button 
                  onClick={incrementQuantity} 
                  className="p-3 hover:bg-gray-100 transition"
                  disabled={quantity >= (product.stock_qty || 10)}
                >
                  <Plus className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {!token && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Please{" "}
                  <button onClick={() => setShowAuth(true)} className="underline font-semibold">
                    login
                  </button>{" "}
                  to add items to cart, wishlist, or make a purchase.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <button 
                onClick={handleAddToCart}
                disabled={!product.is_available}
                className={`w-full py-4 border-2 font-semibold rounded-md transition ${
                  product.is_available
                    ? 'border-black text-black hover:bg-gray-50'
                    : 'border-gray-300 text-gray-400 cursor-not-allowed'
                }`}
              >
                {product.is_available 
                  ? (token ? (inCart ? "Added to Cart" : "Add to Cart") : "Login to Add to Cart")
                  : "Out of Stock"
                }
              </button>
              
              <button 
                onClick={() => {
                  if (!selectedSize && product.available_sizes?.length > 0) {
                    alert("Please select a size");
                    return;
                  }
                  setShowBuyNow(true);
                }}
                disabled={!product.is_available}
                className={`w-full py-4 font-semibold rounded-md transition ${
                  product.is_available
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.is_available
                  ? (token ? "Buy it Now" : "Login to Buy Now")
                  : "Out of Stock"
                }
              </button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-center text-sm font-medium text-gray-700 mb-3">Secure Checkout With</p>
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-xs font-bold text-white">MC</div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">VISA</div>
                <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">AMEX</div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">PAY</div>
                <div className="w-12 h-8 bg-white border-2 border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">GPay</div>
                <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">UPI</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t">
              <Truck className="w-5 h-5 text-gray-700" />
              <div className="text-sm text-gray-800">
                <span className="font-semibold">Estimated Delivery:</span>
                <span className="ml-2">{getEstimatedDelivery()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="h-8 w-2 bg-black rounded-sm mr-3"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black">
                  Related Products
                </h2>
              </div>
              <p className="text-gray-600 ml-5">You might also like these products</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-t-lg aspect-square">
                    {relatedProduct.image1 ? (
                      <img
                        src={relatedProduct.image1}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => handleRelatedWishlistToggle(e, relatedProduct.slug)}
                        disabled={relatedWishlistLoading === relatedProduct.slug}
                        className={`p-2 rounded-full shadow-lg transition-all ${
                          relatedWishlistLoading === relatedProduct.slug
                            ? 'bg-gray-100 cursor-not-allowed'
                            : isInWishlist(relatedProduct.slug)
                              ? 'bg-red-50 text-red-500 hover:bg-red-100'
                              : 'bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500'
                        }`}
                      >
                        <Heart 
                          className={`w-4 h-4 transition-all ${
                            isInWishlist(relatedProduct.slug) ? 'fill-current' : ''
                          } ${relatedWishlistLoading === relatedProduct.slug ? 'animate-pulse' : ''}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 lg:p-4 flex flex-col flex-1">
                    <p className="text-xs text-gray-500 mb-1 uppercase">BabyDay</p>
                    <h3 className="text-sm font-medium mb-2 line-clamp-2 text-black flex-1">
                      {relatedProduct.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base lg:text-lg font-bold text-gray-900">
                        ₹ {parseFloat(relatedProduct.price).toFixed(0)}
                      </span>
                      {relatedProduct.mrp && parseFloat(relatedProduct.mrp) > parseFloat(relatedProduct.price) && (
                        <span className="text-xs lg:text-sm text-gray-400 line-through">
                          ₹ {parseFloat(relatedProduct.mrp).toFixed(0)}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BuyNowModal
        open={showBuyNow}
        onClose={() => setShowBuyNow(false)}
        product={product}
        size={selectedSize}
        onRequireAuth={() => {
          setShowBuyNow(false);
          setShowAuth(true);
        }}
      />

      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onSuccess={(accessToken) => {
          const pending = localStorage.getItem("pendingCart");
          if (pending) {
            const { slug, size } = JSON.parse(pending);
            addToCart(slug, size, accessToken);
            localStorage.removeItem("pendingCart");
          }
        }}
      />
    </div>
  );
}













// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Star, Minus, Plus, Heart, Truck, ChevronLeft, ChevronRight, Eye } from "lucide-react";
// import { useCart } from "@/components/context/CartContext";
// import { useWishlist } from "@/components/context/WishlistContext";
// import AuthModal from "../../../components/includes/AuthModal";
// import BuyNowModal from "../../../components/includes/BuyNowModal";
// import Link from "next/link";

// export default function ProductDetailPage() {
//   const { slug } = useParams();
//   const router = useRouter();
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [currentImage, setCurrentImage] = useState(0);
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
//   const [selectedSize, setSelectedSize] = useState("");
//   const [showAuth, setShowAuth] = useState(false);
//   const { addToCart, token, cartItems } = useCart();
//   const [showBuyNow, setShowBuyNow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [wishlistLoading, setWishlistLoading] = useState(false);
//   const [relatedWishlistLoading, setRelatedWishlistLoading] = useState(null);

//   const inWishlist = wishlistItems.some((item) => item.slug === slug);
//   const inCart = cartItems.some((item) => item.slug === slug);

//   const AGE_CATEGORY_LABELS = {
//     kids_boy: "Kids (Boy)",
//     kids_girl: "Kids (Girl)",
//     kids_unisex: "Kids (Unisex)",
//     adults_men: "Adults (Men)",
//     adults_women: "Adults (Women)",
//     adults_unisex: "Adults (Unisex)",
//     all_age_men: "All Age (Men)",
//     all_age_women: "All Age (Women)",
//     all_age_unisex: "All Age (Unisex)",
//   };

//   const getEstimatedDelivery = () => {
//     const today = new Date();
//     const start = new Date(today);
//     start.setDate(today.getDate() + 2);
//     const end = new Date(today);
//     end.setDate(today.getDate() + 5);

//     const format = (date) =>
//       date.toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//       });

//     return `${format(start)} - ${format(end)}`;
//   };

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:8000/api/v1/public/products/${slug}/`
//         );
        
//         if (!res.ok) {
//           throw new Error('Product not found');
//         }
        
//         const data = await res.json();
//         setProduct(data);
        
//         if (data.available_sizes && data.available_sizes.length > 0) {
//           setSelectedSize(data.available_sizes[0]);
//         }

//         // Fetch all products for related products
//         const allProductsRes = await fetch(
//           `http://localhost:8000/api/v1/public/products/`
//         );
//         if (allProductsRes.ok) {
//           const allProducts = await allProductsRes.json();
          
//           // Filter related products: same category, different slug
//           const related = allProducts
//             .filter(p => 
//               p.slug !== data.slug && 
//               (p.product_category === data.product_category || 
//                p.age_category === data.age_category)
//             )
//             .slice(0, 8); // Limit to 8 related products
          
//           setRelatedProducts(related);
//         }
//       } catch (err) {
//         setError("Product not found");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading product details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600 mb-4">{error || "Product not found"}</p>
//           <button
//             onClick={() => router.push("/")}
//             className="text-blue-600 hover:underline"
//           >
//             Return to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const productImages = [
//     product.image1,
//     product.image2,
//     product.image3,
//     product.image4,
//   ].filter(Boolean);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % productImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImage(
//       (prev) => (prev - 1 + productImages.length) % productImages.length
//     );
//   };

//   const incrementQuantity = () => {
//     if (quantity < (product.stock_qty || 10)) {
//       setQuantity(prev => prev + 1);
//     }
//   };

//   const decrementQuantity = () => {
//     setQuantity(prev => prev > 1 ? prev - 1 : 1);
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize && product.available_sizes?.length > 0) {
//       alert("Please select a size");
//       return;
//     }

//     if (!token) {
//       localStorage.setItem(
//         "pendingCart",
//         JSON.stringify({ slug, size: selectedSize })
//       );
//       setShowAuth(true);
//       return;
//     }

//     addToCart(slug, selectedSize);
//   };

//   const handleWishlist = async () => {
//     if (!token) {
//       alert("Please login to add items to wishlist");
//       setShowAuth(true);
//       return;
//     }

//     if (wishlistLoading) return;

//     try {
//       setWishlistLoading(true);
      
//       if (inWishlist) {
//         await removeFromWishlist(slug);
//       } else {
//         await addToWishlist(slug);
//       }
//     } catch (error) {
//       console.error("Wishlist error:", error);
//       alert("Failed to update wishlist");
//     } finally {
//       setWishlistLoading(false);
//     }
//   };

//   const handleRelatedWishlistToggle = async (e, productSlug) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!token) {
//       alert("Please login to add items to wishlist");
//       setShowAuth(true);
//       return;
//     }

//     if (relatedWishlistLoading === productSlug) return;

//     try {
//       setRelatedWishlistLoading(productSlug);
      
//       const isInWishlist = wishlistItems.some((item) => item.slug === productSlug);
      
//       if (isInWishlist) {
//         await removeFromWishlist(productSlug);
//       } else {
//         await addToWishlist(productSlug);
//       }
//     } catch (error) {
//       console.error("Wishlist error:", error);
//       alert("Failed to update wishlist");
//     } finally {
//       setRelatedWishlistLoading(null);
//     }
//   };

//   const isInWishlist = (productSlug) => {
//     return wishlistItems.some((item) => item.slug === productSlug);
//   };

//   const discountPercent = product.mrp && parseFloat(product.mrp) > parseFloat(product.price)
//     ? Math.round(((parseFloat(product.mrp) - parseFloat(product.price)) / parseFloat(product.mrp)) * 100)
//     : 0;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Breadcrumb */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//           <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
//             <button onClick={() => router.push("/")} className="hover:text-gray-900">
//               Home
//             </button>
//             <span>›</span>
//             <span className="capitalize">{product.product_category || 'Products'}</span>
//             <span>›</span>
//             <span className="text-gray-900 truncate">{product.title}</span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Image Gallery */}
//           <div className="flex flex-col-reverse sm:flex-row gap-4">
//             {productImages.length > 1 && (
//               <div className="flex sm:flex-col gap-3 overflow-x-auto">
//                 {productImages.map((img, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImage(idx)}
//                     className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition ${
//                       currentImage === idx ? 'border-gray-800' : 'border-gray-200'
//                     }`}
//                   >
//                     <img 
//                       src={img} 
//                       alt={`View ${idx + 1}`} 
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}

//             <div className="flex-1 bg-white rounded-lg overflow-hidden relative aspect-square">
//               <img 
//                 src={productImages[currentImage]} 
//                 alt={product.title}
//                 className="w-full h-full object-contain"
//               />
              
//               {productImages.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </>
//               )}
              
//               {discountPercent > 0 && (
//                 <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                   {discountPercent}% OFF
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.title}</h1>
//                 <p className="text-sm text-gray-600 capitalize">
//                   {AGE_CATEGORY_LABELS[product.age_category] || product.age_category}
//                 </p>
//               </div>
              
//               <button 
//                 onClick={handleWishlist}
//                 disabled={wishlistLoading}
//                 className={`flex-shrink-0 p-3 rounded-full transition-all duration-200 ${
//                   wishlistLoading 
//                     ? 'bg-gray-100 cursor-not-allowed opacity-50' 
//                     : inWishlist && token
//                       ? 'bg-red-50 text-red-500 hover:bg-red-100' 
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//                 title={
//                   !token 
//                     ? "Login to add to wishlist" 
//                     : inWishlist 
//                       ? "In wishlist" 
//                       : "Add to wishlist"
//                 }
//               >
//                 <Heart 
//                   className={`w-6 h-6 transition-all ${
//                     inWishlist && token ? 'fill-current scale-110' : ''
//                   } ${wishlistLoading ? 'animate-pulse' : ''}`} 
//                 />
//               </button>
//             </div>

            
//             <div className="flex items-center gap-3 flex-wrap">
//               <span className="text-3xl font-bold text-gray-900">
//                 Rs. {parseFloat(product.price).toFixed(0)}
//               </span>
//               {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
//                 <span className="text-xl text-gray-400 line-through">
//                   Rs. {parseFloat(product.mrp).toFixed(0)}
//                 </span>
//               )}
//               {discountPercent > 0 && (
//                 <span className="text-green-600 font-semibold">
//                   Save {discountPercent}%
//                 </span>
//               )}
//             </div>
//             <p className="text-sm text-gray-600">
//               {Number(product.delivery_charge) === 0
//                 ? "Free Delivery • Tax included"
//                 : `Delivery Fee Rs. ${product.delivery_charge} • Tax included`}
//             </p>

//             <div className="py-2">
//               {(product.stock_qty > 0 || product.is_available) ? (
//                 <p className="text-green-600 font-medium">
//                   ✓ In Stock {product.stock_qty && `(${product.stock_qty} available)`}
//                 </p>
//               ) : (
//                 <p className="text-red-600 font-medium">✗ Out of Stock</p>
//               )}
//             </div>

//             {(product.material_type || product.fit_type || product.pattern_design) && (
//               <div className="space-y-2 py-4 border-t">
//                 {product.material_type && (
//                   <p className="text-sm text-gray-800"><span className="font-semibold">Material:</span> {product.material_type}</p>
//                 )}
//                 {product.fit_type && (
//                   <p className="text-sm text-gray-800"><span className="font-semibold">Fit:</span> {product.fit_type}</p>
//                 )}
//                 {product.pattern_design && (
//                   <p className="text-sm text-gray-800"><span className="font-semibold">Pattern:</span> {product.pattern_design}</p>
//                 )}
//                 {product.age_limits && (
//                   <p className="text-sm text-gray-800"><span className="font-semibold">Age:</span> {product.age_limits}</p>
//                 )}
//               </div>
//             )}

//             {product.available_sizes && product.available_sizes.length > 0 && (
//               <div>
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="font-medium text-black">Size:</span>
//                   <span className="font-bold text-black">{selectedSize || 'Select'}</span>
//                 </div>
//                 <div className="flex gap-2 flex-wrap">
//                   {product.available_sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-5 py-2 border rounded-md transition ${
//                         selectedSize === size
//                           ? 'bg-black text-white border-black'
//                           : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div>
//               <p className="font-medium mb-3 text-black">Quantity</p>
//               <div className="flex items-center border border-black rounded-md w-fit">
//                 <button 
//                   onClick={decrementQuantity} 
//                   className="p-3 hover:bg-gray-100 transition"
//                   disabled={quantity <= 1}
//                 >
//                   <Minus className="w-4 h-4 text-black" />
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="w-16 text-center border-x border-black text-black"
//                 />
//                 <button 
//                   onClick={incrementQuantity} 
//                   className="p-3 hover:bg-gray-100 transition"
//                   disabled={quantity >= (product.stock_qty || 10)}
//                 >
//                   <Plus className="w-4 h-4 text-black" />
//                 </button>
//               </div>
//             </div>

//             {!token && (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Please{" "}
//                   <button onClick={() => setShowAuth(true)} className="underline font-semibold">
//                     login
//                   </button>{" "}
//                   to add items to cart, wishlist, or make a purchase.
//                 </p>
//               </div>
//             )}

//             <div className="space-y-3">
//               <button 
//                 onClick={handleAddToCart}
//                 disabled={!product.is_available}
//                 className={`w-full py-4 border-2 font-semibold rounded-md transition ${
//                   product.is_available
//                     ? 'border-black text-black hover:bg-gray-50'
//                     : 'border-gray-300 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 {product.is_available 
//                   ? (token ? (inCart ? "Added to Cart" : "Add to Cart") : "Login to Add to Cart")
//                   : "Out of Stock"
//                 }
//               </button>
              
//               <button 
//                 onClick={() => {
//                   if (!selectedSize && product.available_sizes?.length > 0) {
//                     alert("Please select a size");
//                     return;
//                   }
//                   setShowBuyNow(true);
//                 }}
//                 disabled={!product.is_available}
//                 className={`w-full py-4 font-semibold rounded-md transition ${
//                   product.is_available
//                     ? 'bg-black text-white hover:bg-gray-800'
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//               >
//                 {product.is_available
//                   ? (token ? "Buy it Now" : "Login to Buy Now")
//                   : "Out of Stock"
//                 }
//               </button>
//             </div>

//             <div className="pt-4 border-t">
//               <p className="text-center text-sm font-medium text-gray-700 mb-3">Secure Checkout With</p>
//               <div className="flex justify-center gap-2 flex-wrap">
//                 <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-xs font-bold text-white">MC</div>
//                 <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">VISA</div>
//                 <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">AMEX</div>
//                 <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white">PAY</div>
//                 <div className="w-12 h-8 bg-white border-2 border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700">GPay</div>
//                 <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">UPI</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 pt-4 border-t">
//               <Truck className="w-5 h-5 text-gray-700" />
//               <div className="text-sm text-gray-800">
//                 <span className="font-semibold">Estimated Delivery:</span>
//                 <span className="ml-2">{getEstimatedDelivery()}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Products Section */}
//         {relatedProducts.length > 0 && (
//           <div className="mt-16">
//             <div className="mb-8">
//               <div className="flex items-center mb-2">
//                 <div className="h-8 w-2 bg-black rounded-sm mr-3"></div>
//                 <h2 className="text-2xl lg:text-3xl font-bold text-black">
//                   Related Products
//                 </h2>
//               </div>
//               <p className="text-gray-600 ml-5">You might also like these products</p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
//               {relatedProducts.map((relatedProduct) => (
//                 <div
//                   key={relatedProduct.id}
//                   className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col"
//                 >
//                   <div className="relative overflow-hidden rounded-t-lg aspect-square">
//                     {relatedProduct.image1 ? (
//                       <img
//                         src={relatedProduct.image1}
//                         alt={relatedProduct.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                         <span className="text-gray-400">No Image</span>
//                       </div>
//                     )}

//                     <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
//                       <button 
//                         onClick={(e) => handleRelatedWishlistToggle(e, relatedProduct.slug)}
//                         disabled={relatedWishlistLoading === relatedProduct.slug}
//                         className={`p-2 rounded-full shadow-lg transition-all ${
//                           relatedWishlistLoading === relatedProduct.slug
//                             ? 'bg-gray-100 cursor-not-allowed'
//                             : isInWishlist(relatedProduct.slug)
//                               ? 'bg-red-50 text-red-500 hover:bg-red-100'
//                               : 'bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500'
//                         }`}
//                       >
//                         <Heart 
//                           className={`w-4 h-4 transition-all ${
//                             isInWishlist(relatedProduct.slug) ? 'fill-current' : ''
//                           } ${relatedWishlistLoading === relatedProduct.slug ? 'animate-pulse' : ''}`}
//                         />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="p-3 lg:p-4 flex flex-col flex-1">
//                     <p className="text-xs text-gray-500 mb-1 uppercase">BabyDay</p>
//                     <h3 className="text-sm font-medium mb-2 line-clamp-2 text-black flex-1">
//                       {relatedProduct.title}
//                     </h3>

//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="text-base lg:text-lg font-bold text-gray-900">
//                         ₹ {parseFloat(relatedProduct.price).toFixed(0)}
//                       </span>
//                       {relatedProduct.mrp && parseFloat(relatedProduct.mrp) > parseFloat(relatedProduct.price) && (
//                         <span className="text-xs lg:text-sm text-gray-400 line-through">
//                           ₹ {parseFloat(relatedProduct.mrp).toFixed(0)}
//                         </span>
//                       )}
//                     </div>

//                     <Link
//                       href={`/products/${relatedProduct.slug}`}
//                       className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <BuyNowModal
//         open={showBuyNow}
//         onClose={() => setShowBuyNow(false)}
//         product={product}
//         size={selectedSize}
//         onRequireAuth={() => {
//           setShowBuyNow(false);
//           setShowAuth(true);
//         }}
//       />

//       <AuthModal
//         open={showAuth}
//         onClose={() => setShowAuth(false)}
//         onSuccess={(accessToken) => {
//           const pending = localStorage.getItem("pendingCart");
//           if (pending) {
//             const { slug, size } = JSON.parse(pending);
//             addToCart(slug, size, accessToken);
//             localStorage.removeItem("pendingCart");
//           }
//         }}
//       />
//     </div>
//   );
// }


