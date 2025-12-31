"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQty, token } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const isLoggedIn = !!token;

  useEffect(() => {
    const handleLogout = () => onClose();
    window.addEventListener("userLoggedOut", handleLogout);
    return () =>
      window.removeEventListener("userLoggedOut", handleLogout);
  }, [onClose]);

  if (!isLoggedIn) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/10 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-black">
            Shopping Cart
          </h2>
          <button onClick={onClose}>
            <X className="text-black"/>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-900">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => {
              const minReached = item.quantity === 1;
              const maxReached =
                item.stock_qty !== undefined &&
                item.quantity >= item.stock_qty;

              return (
                <div
                  key={item.slug}
                  className="flex gap-4 text-black pb-4 mb-4 border-b"
                >
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600">
                      Stock: {item.stock_qty}
                    </p>

                    <p className="font-semibold">
                      ₹ {item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        disabled={minReached}
                        onClick={() =>
                          updateQty(item.slug, "decrease")
                        }
                        className={`w-6 h-6 border rounded ${
                          minReached
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Minus className="w-3 h-3 mx-auto" />
                      </button>

                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        disabled={maxReached}
                        onClick={() =>
                          updateQty(item.slug, "increase")
                        }
                        className={`w-6 h-6 border rounded ${
                          maxReached
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Plus className="w-3 h-3 mx-auto" />
                      </button>
                    </div>

                    {maxReached && (
                      <p className="text-xs text-red-500 mt-1">
                        Stock limit reached
                      </p>
                    )}
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromCart(item.slug)
                    }
                    className="text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t px-6 py-4">
            <div className="flex text-black justify-between mb-3">
              <span>Subtotal</span>
              <span className="font-semibold">
                ₹ {subtotal}
              </span>
            </div>

            <Link href="/cart">
              <button
                onClick={onClose}
                className="w-full bg-black text-white py-2 rounded"
              >
                View Cart
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}












// "use client";

// import React, { useEffect } from "react";
// import Link from "next/link";
// import { X, Minus, Plus } from "lucide-react";
// import { useCart } from "@/components/context/CartContext";

// interface CartSidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
//   const { cartItems, removeFromCart, updateQuantity, token } = useCart();

//   const subtotal = cartItems.reduce(
//     (total, item) => total + Number(item.price) * item.quantity,
//     0
//   );

//   const isLoggedIn = !!token;

//   useEffect(() => {
//     const handleLogout = () => onClose();
//     window.addEventListener("userLoggedOut", handleLogout);
//     return () =>
//       window.removeEventListener("userLoggedOut", handleLogout);
//   }, [onClose]);

//   if (!isLoggedIn) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={onClose}
//       />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold text-black">
//             Shopping Cart
//           </h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="flex-1 overflow-y-auto px-6 py-4">
//           {cartItems.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center py-20">
//               <p className="text-gray-500 mb-4">
//                 Your cart is empty
//               </p>
//               <button
//                 onClick={onClose}
//                 className="bg-black text-white px-6 py-2 rounded"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {cartItems.map((item) => {
//                 const isMinQty = item.quantity === 1;
//                 const isMaxQty =
//                   item.stock !== undefined
//                     ? item.quantity >= item.stock
//                     : false; // fallback if stock not present

//                 return (
//                   <div
//                     key={`${item.id}-${item.size}`}
//                     className="flex gap-4 pb-4 border-b"
//                   >
//                     {/* Image */}
//                     <Link
//                       href={`/products/${item.slug}`}
//                       onClick={onClose}
//                     >
//                       <img
//                         src={item.image1 || item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                     </Link>

//                     {/* Details */}
//                     <div className="flex-1">
//                       <h3 className="text-sm font-medium text-black line-clamp-2">
//                         {item.name}
//                       </h3>
//                       <p className="text-xs text-gray-600">
//                         Size: {item.size}
//                       </p>
//                       <p className="text-sm font-semibold text-black mt-1">
//                         ₹ {item.price}
//                       </p>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center gap-2 mt-2">
//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.id,
//                               item.size,
//                               item.quantity - 1
//                             )
//                           }
//                           disabled={isMinQty}
//                           className={`w-6 h-6 border rounded 
//                             ${
//                               isMinQty
//                                 ? "text-gray-400 cursor-not-allowed"
//                                 : "hover:bg-gray-100"
//                             }`}
//                         >
//                           <Minus className="w-3 h-3 mx-auto" />
//                         </button>

//                         <span className="w-8 text-center text-sm font-semibold">
//                           {item.quantity}
//                         </span>

//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.id,
//                               item.size,
//                               item.quantity + 1
//                             )
//                           }
//                           disabled={isMaxQty}
//                           className={`w-6 h-6 border rounded 
//                             ${
//                               isMaxQty
//                                 ? "text-gray-400 cursor-not-allowed"
//                                 : "hover:bg-gray-100"
//                             }`}
//                         >
//                           <Plus className="w-3 h-3 mx-auto" />
//                         </button>
//                       </div>

//                       {isMaxQty && (
//                         <p className="text-xs text-red-500 mt-1">
//                           Out of stock
//                         </p>
//                       )}
//                     </div>

//                     {/* Remove */}
//                     <button
//                       onClick={() =>
//                         removeFromCart(item.id, item.size)
//                       }
//                       className="text-sm text-gray-400 hover:text-red-500"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         {cartItems.length > 0 && (
//           <div className="border-t px-6 py-4">
//             <div className="flex justify-between mb-4">
//               <span className="font-medium text-black">
//                 Subtotal
//               </span>
//               <span className="font-semibold text-black">
//                 ₹ {subtotal}
//               </span>
//             </div>

//             <Link href="/Pages/Checkout">
//               <button
//                 onClick={onClose}
//                 className="w-full bg-black text-white py-3 rounded mb-2"
//               >
//                 Checkout
//               </button>
//             </Link>

//             <Link href="/cart" onClick={onClose}>
//               <button className="w-full text-sm underline text-black">
//                 View Cart
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
