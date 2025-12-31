"use client";

import { useState } from "react";
import { useCart } from "../../components/context/CartContext";
import CartCheckoutModal from "../../components/includes/CartCheckoutModal";
import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, loading, updateQty } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-lg text-black mb-1 truncate">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">Size: {item.size}</p>
                  
                  <div className="flex items-center gap-4 flex-wrap">
                    <p className="text-lg font-bold text-black">
                      ₹ {parseFloat(item.price).toFixed(0)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQty(item.slug, "decrease")}
                        disabled={item.quantity === 1}
                        className={`px-3 py-1 text-lg rounded-l-lg transition ${
                          item.quantity === 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        −
                      </button>

                      <span className="px-4 py-1 font-semibold text-black border-x border-gray-300">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQty(item.slug, "increase")}
                        disabled={item.quantity === 10}
                        className={`px-3 py-1 text-lg rounded-r-lg transition ${
                          item.quantity === 10
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    Subtotal: ₹ {(parseFloat(item.price) * item.quantity).toFixed(0)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Remove from cart"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹ {total.toFixed(0)}</span>
                </div>
                
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charge</span>
                  <span className="font-semibold text-green-600">₹ 50</span>
                </div>
                
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span className="text-black">Total</span>
                  <span className="text-black">₹ {(total + 50).toFixed(0)}</span>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-3"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>We Accept:</strong>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <div className="w-10 h-7 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white">VISA</div>
                  <div className="w-10 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-[10px] font-bold text-white">MC</div>
                  <div className="w-10 h-7 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold text-white">UPI</div>
                  <div className="w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white">COD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CartCheckoutModal
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        cartItems={cartItems}
        total={total}
      />
    </div>
  );
}









// "use client";

// import { useState } from "react";
// import { useCart } from "../..//components/context/CartContext";
// import CheckoutModal from "../../components/includes/BuyNowModal";
// import Link from "next/link";
// import { ShoppingBag, Trash2 } from "lucide-react";

// export default function CartPage() {
//   const { cartItems, removeFromCart, loading, updateQty } = useCart();
//   const [showCheckout, setShowCheckout] = useState(false);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading cart...</p>
//         </div>
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
//           <p className="text-gray-600 mb-6">Add some products to get started!</p>
//           <Link
//             href="/products"
//             className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const total = cartItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-black mb-2">Shopping Cart</h1>
//           <p className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-4 items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition"
//               >
//                 {/* Image */}
//                 <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
//                   <img
//                     src={item.image1}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 min-w-0">
//                   <h2 className="font-semibold text-lg text-black mb-1 truncate">
//                     {item.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm mb-2">Size: {item.size}</p>
                  
//                   <div className="flex items-center gap-4 flex-wrap">
//                     <p className="text-lg font-bold text-black">
//                       ₹ {parseFloat(item.price).toFixed(0)}
//                     </p>
                    
//                     {/* Quantity Controls */}
//                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
//                       <button
//                         onClick={() => updateQty(item.slug, "decrease")}
//                         disabled={item.quantity === 1}
//                         className={`px-3 py-1 text-lg rounded-l-lg transition ${
//                           item.quantity === 1
//                             ? "text-gray-300 cursor-not-allowed"
//                             : "text-black hover:bg-gray-100"
//                         }`}
//                       >
//                         −
//                       </button>

//                       <span className="px-4 py-1 font-semibold text-black border-x border-gray-300">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() => updateQty(item.slug, "increase")}
//                         disabled={item.quantity === 10}
//                         className={`px-3 py-1 text-lg rounded-r-lg transition ${
//                           item.quantity === 10
//                             ? "text-gray-300 cursor-not-allowed"
//                             : "text-black hover:bg-gray-100"
//                         }`}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   <p className="text-sm text-gray-600 mt-2">
//                     Subtotal: ₹ {(parseFloat(item.price) * item.quantity).toFixed(0)}
//                   </p>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   onClick={() => removeFromCart(item.slug)}
//                   className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
//                   title="Remove from cart"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow p-6 sticky top-4">
//               <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
              
//               <div className="space-y-3 mb-4">
//                 <div className="flex justify-between text-gray-700">
//                   <span>Subtotal</span>
//                   <span className="font-semibold">₹ {total.toFixed(0)}</span>
//                 </div>
                
//                 <div className="flex justify-between text-gray-700">
//                   <span>Delivery Charge</span>
//                   <span className="font-semibold text-green-600">₹ 50</span>
//                 </div>
                
//                 <div className="border-t pt-3 flex justify-between text-lg font-bold">
//                   <span className="text-black">Total</span>
//                   <span className="text-black">₹ {(total + 50).toFixed(0)}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-3"
//               >
//                 Proceed to Checkout
//               </button>

//               <Link
//                 href="/products"
//                 className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
//               >
//                 Continue Shopping
//               </Link>

//               <div className="mt-6 pt-6 border-t">
//                 <p className="text-sm text-gray-600 mb-2">
//                   <strong>We Accept:</strong>
//                 </p>
//                 <div className="flex gap-2 flex-wrap">
//                   <div className="w-10 h-7 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white">VISA</div>
//                   <div className="w-10 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-[10px] font-bold text-white">MC</div>
//                   <div className="w-10 h-7 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold text-white">UPI</div>
//                   <div className="w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white">COD</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Modal */}
//       <CheckoutModal
//         open={showCheckout}
//         onClose={() => setShowCheckout(false)}
//         cartItems={cartItems}
//         total={total}
//       />
//     </div>
//   );
// }


