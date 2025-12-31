"use client";

import { useState } from "react";
import { X, Truck, CreditCard, MapPin, Package } from "lucide-react";
import { useRouter } from "next/navigation";

interface BuyNowModalProps {
  open: boolean;
  onClose: () => void;
  product: any;
  size: string;
  onRequireAuth: () => void;
}

export default function BuyNowModal({
  open,
  onClose,
  product,
  size,
  onRequireAuth,
}: BuyNowModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    alt_phone: "",
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    location: "",
    landmark: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("prepaid");

  if (!open || !product) return null;

  const mrp = Number(product.mrp);
  const price = Number(product.price);
  const charge = Number(product.delivery_charge);
  const discount = mrp - price;
  const total = price + charge;
  const qty = 1;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is authenticated
    const token = localStorage.getItem("access");
    if (!token) {
      onRequireAuth();
      return;
    }

    // Store checkout data and redirect to checkout page
    const checkoutData = {
      slug: product.slug,
      title: product.title,
      image: product.image1,
      size,
      qty,
      price,
      mrp,
      discount,
      delivery_charge: charge,
      total,
      shippingInfo,
      paymentMethod,
    };

    sessionStorage.setItem("checkoutItem", JSON.stringify(checkoutData));
    onClose();
    router.push("/checkout");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            {step === 1 ? "Shipping Information" : "Payment"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-black text-white' : 'bg-gray-200'
                }`}>
                  1
                </div>
                <span className="font-medium hidden sm:inline">Shipping</span>
              </div>
              
              <div className="w-12 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-black text-white' : 'bg-gray-200'
                }`}>
                  2
                </div>
                <span className="font-medium hidden sm:inline">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2">
              {step === 1 ? (
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-black" />
                    <h3 className="text-lg font-semibold text-black">Delivery Address</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.name}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alternate Phone
                      </label>
                      <input
                        type="tel"
                        value={shippingInfo.alt_phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, alt_phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      required
                      value={shippingInfo.address_line}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address_line: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="House no, Building name, Street"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.location}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, location: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Area/Locality"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Landmark
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.landmark}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, landmark: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Near landmark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Mumbai"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Maharashtra"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.pincode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="400001"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mt-6"
                  >
                    Continue to Payment
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-black" />
                    <h3 className="text-lg font-semibold text-black">Payment Method</h3>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      <input
                        type="radio"
                        name="payment"
                        value="prepaid"
                        checked={paymentMethod === "prepaid"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-black">Online Payment</p>
                        <p className="text-sm text-gray-600">Credit/Debit Card, UPI, Net Banking</p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-black">Cash on Delivery</p>
                        <p className="text-sm text-gray-600">Pay when you receive the product</p>
                      </div>
                    </label>
                  </div>

                  {/* Shipping Info Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-black mb-2">Delivering to:</p>
                    <p className="text-sm text-gray-700">{shippingInfo.name}</p>
                    <p className="text-sm text-gray-700">{shippingInfo.address_line}</p>
                    <p className="text-sm text-gray-700">
                      {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{shippingInfo.phone}</p>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-blue-600 text-sm mt-2 hover:underline"
                    >
                      Change Address
                    </button>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-black" />
                  <h3 className="font-semibold text-black">Order Summary</h3>
                </div>
                
                {/* Product Preview */}
                <div className="flex gap-3 mb-4 pb-4 border-b">
                  <div className="w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0">
                    <img
                      src={product.image1}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black line-clamp-2">{product.title}</p>
                    <p className="text-xs text-gray-600 mt-1">Size: {size}</p>
                    <p className="text-xs text-gray-600">Qty: {qty}</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">MRP</span>
                    <span className="font-medium text-gray-700">₹{mrp.toFixed(0)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span className="font-medium">-₹{discount.toFixed(0)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-black">₹{price.toFixed(0)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Charge</span>
                    <span className={`font-medium ${charge === 0 ? 'text-green-600' : 'text-black'}`}>
                      {charge === 0 ? "Free" : `₹${charge}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span className="text-black">Total</span>
                    <span className="text-black">₹{total.toFixed(0)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded">
                  <Truck className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Estimated delivery in 3-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







// "use client";

// import { useState } from "react";
// import { X, Truck, CreditCard, MapPin, Package } from "lucide-react";

// interface BuyNowModalProps {
//   open: boolean;
//   onClose: () => void;
//   product: any;
//   size: string;
//   onRequireAuth: () => void;
// }

// export default function BuyNowModal({
//   open,
//   onClose,
//   product,
//   size,
//   onRequireAuth,
// }: BuyNowModalProps) {
//   const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
//   const [shippingInfo, setShippingInfo] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   if (!open || !product) return null;

//   const mrp = Number(product.mrp);
//   const price = Number(product.price);
//   const charge = Number(product.delivery_charge);
//   const discount = mrp - price;
//   const total = price + charge;
//   const qty = 1;

//   const handleShippingSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePaymentSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Save checkout intent with shipping and payment info
//     localStorage.setItem(
//       "checkoutItem",
//       JSON.stringify({
//         slug: product.slug,
//         title: product.title,
//         image: product.image1,
//         size,
//         qty,
//         price,
//         mrp,
//         discount,
//         delivery_charge: charge,
//         total,
//         shippingInfo,
//         paymentMethod,
//       })
//     );

//     // Handle order placement
//     alert("Order placed successfully!");
//     onClose();
//     // Optionally redirect to order confirmation page
//     // window.location.href = "/orders";
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-black">
//             {step === 1 ? "Shipping Information" : "Payment"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition"
//           >
//             <X className="w-6 h-6 text-gray-800" />
//           </button>
//         </div>

//         <div className="p-6">
//           {/* Progress Steps */}
//           <div className="flex items-center justify-center mb-8">
//             <div className="flex items-center gap-4">
//               <div className={`flex items-center gap-2 ${step >= 1 ? 'text-black' : 'text-gray-400'}`}>
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                   step >= 1 ? 'bg-black text-white' : 'bg-gray-200'
//                 }`}>
//                   1
//                 </div>
//                 <span className="font-medium hidden sm:inline">Shipping</span>
//               </div>
              
//               <div className="w-12 h-0.5 bg-gray-300"></div>
              
//               <div className={`flex items-center gap-2 ${step >= 2 ? 'text-black' : 'text-gray-400'}`}>
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                   step >= 2 ? 'bg-black text-white' : 'bg-gray-200'
//                 }`}>
//                   2
//                 </div>
//                 <span className="font-medium hidden sm:inline">Payment</span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column - Forms */}
//             <div className="lg:col-span-2">
//               {step === 1 ? (
//                 <form onSubmit={handleShippingSubmit} className="space-y-4">
//                   <div className="flex items-center gap-2 mb-4">
//                     <MapPin className="w-5 h-5 text-black" />
//                     <h3 className="text-lg font-semibold text-black">Delivery Address</h3>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={shippingInfo.fullName}
//                         onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={shippingInfo.phone}
//                         onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="+91 1234567890"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={shippingInfo.email}
//                       onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Address *
//                     </label>
//                     <textarea
//                       required
//                       value={shippingInfo.address}
//                       onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="House no, Building name, Street"
//                       rows={3}
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         City *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={shippingInfo.city}
//                         onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="Mumbai"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         State *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={shippingInfo.state}
//                         onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="Maharashtra"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Pincode *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={shippingInfo.pincode}
//                         onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="400001"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mt-6"
//                   >
//                     Continue to Payment
//                   </button>
//                 </form>
//               ) : (
//                 <form onSubmit={handlePaymentSubmit} className="space-y-4">
//                   <div className="flex items-center gap-2 mb-4">
//                     <CreditCard className="w-5 h-5 text-black" />
//                     <h3 className="text-lg font-semibold text-black">Payment Method</h3>
//                   </div>

//                   <div className="space-y-3">
//                     <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="cod"
//                         checked={paymentMethod === "cod"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <div className="flex-1">
//                         <p className="font-semibold text-black">Cash on Delivery</p>
//                         <p className="text-sm text-gray-600">Pay when you receive the product</p>
//                       </div>
//                     </label>

//                     <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="card"
//                         checked={paymentMethod === "card"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <div className="flex-1">
//                         <p className="font-semibold text-black">Credit/Debit Card</p>
//                         <p className="text-sm text-gray-600">Visa, Mastercard, Amex accepted</p>
//                       </div>
//                     </label>

//                     <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition">
//                       <input
//                         type="radio"
//                         name="payment"
//                         value="upi"
//                         checked={paymentMethod === "upi"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-4 h-4"
//                       />
//                       <div className="flex-1">
//                         <p className="font-semibold text-black">UPI Payment</p>
//                         <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
//                       </div>
//                     </label>
//                   </div>

//                   {/* Shipping Info Summary */}
//                   <div className="bg-gray-50 p-4 rounded-lg mt-6">
//                     <p className="font-semibold text-black mb-2">Delivering to:</p>
//                     <p className="text-sm text-gray-700">{shippingInfo.fullName}</p>
//                     <p className="text-sm text-gray-700">{shippingInfo.address}</p>
//                     <p className="text-sm text-gray-700">
//                       {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}
//                     </p>
//                     <p className="text-sm text-gray-700 mt-1">{shippingInfo.phone}</p>
//                     <button
//                       type="button"
//                       onClick={() => setStep(1)}
//                       className="text-blue-600 text-sm mt-2 hover:underline"
//                     >
//                       Change Address
//                     </button>
//                   </div>

//                   <div className="flex gap-3 mt-6">
//                     <button
//                       type="button"
//                       onClick={() => setStep(1)}
//                       className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
//                     >
//                       Back
//                     </button>
//                     <button
//                       type="submit"
//                       className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
//                     >
//                       Place Order
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>

//             {/* Right Column - Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Package className="w-5 h-5 text-black" />
//                   <h3 className="font-semibold text-black">Order Summary</h3>
//                 </div>
                
//                 {/* Product Preview */}
//                 <div className="flex gap-3 mb-4 pb-4 border-b">
//                   <div className="w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0">
//                     <img
//                       src={product.image1}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-black line-clamp-2">{product.title}</p>
//                     <p className="text-xs text-gray-600 mt-1">Size: {size}</p>
//                     <p className="text-xs text-gray-600">Qty: {qty}</p>
//                   </div>
//                 </div>

//                 {/* Price Breakdown */}
//                 <div className="space-y-2 mb-4">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">MRP</span>
//                     <span className="font-medium text-gray-700">₹{mrp.toFixed(0)}</span>
//                   </div>

//                   {discount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600">
//                       <span>Discount</span>
//                       <span className="font-medium">-₹{discount.toFixed(0)}</span>
//                     </div>
//                   )}

//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium text-black">₹{price.toFixed(0)}</span>
//                   </div>

//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Delivery Charge</span>
//                     <span className={`font-medium ${charge === 0 ? 'text-green-600' : 'text-black'}`}>
//                       {charge === 0 ? "Free" : `₹${charge}`}
//                     </span>
//                   </div>

//                   <div className="flex justify-between text-lg font-bold border-t pt-2">
//                     <span className="text-black">Total</span>
//                     <span className="text-black">₹{total.toFixed(0)}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded">
//                   <Truck className="w-4 h-4 text-green-600 flex-shrink-0" />
//                   <span>Estimated delivery in 3-5 days</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// export default function BuyNowModal({
//   open,
//   onClose,
//   product,
//   size,
//   onRequireAuth,
// }) {
//   if (!open || !product) return null;

//   const mrp = Number(product.mrp);
//   const price = Number(product.price);
//   const charge = Number(product.delivery_charge);
//   const discount = mrp - price;
//   const total = price + charge;
//   const qty = 1;

//   const handleCheckout = () => {
//     // always save checkout intent
//     localStorage.setItem(
//       "checkoutItem",
//       JSON.stringify({
//         slug: product.slug,
//         title: product.title,
//         image: product.image1,
//         size,
//         qty,
//         price,
//         mrp,
//         discount,
//         delivery_charge: charge,
//         total,
//       })
//     );


//     window.location.href = "/checkout";
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
//       <div className="bg-white rounded-xl w-full max-w-md p-6 text-black">
//         <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//         {/* Product Preview */}
//         <div className="flex gap-4 mb-4 items-center">
//           <img
//             src={product.image1}
//             alt={product.title}
//             className="w-20 h-20 object-cover rounded-lg border"
//           />
//           <div>
//             <p className="font-semibold">{product.title}</p>
//             <p className="text-sm text-gray-600">Size: {size}</p>
//             <p className="text-sm text-gray-600">Qty: {qty}</p>
//           </div>
//         </div>

//         {/* Bill */}
//         <div className="space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>MRP</span>
//             <span>₹{mrp}</span>
//           </div>

//           <div className="flex justify-between text-green-600">
//             <span>Discount</span>
//             <span>-₹{discount}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{price}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Delivery Charge</span>
//             <span>
//               {charge === 0 ? (
//                 <span className="text-green-600 font-medium">Free</span>
//               ) : (
//                 `₹${charge}`
//               )}
//             </span>
//           </div>

//           <hr />

//           <div className="flex justify-between font-bold text-lg">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="mt-6 flex gap-2">
//           <button
//             onClick={onClose}
//             className="flex-1 py-2 border rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleCheckout}
//             className="flex-1 py-2 bg-green-600 text-white rounded"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
