"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi",
];

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    alt_phone: "",
    pincode: "",
    state: "",
    city: "",
    location: "",
    address_line: "",
    landmark: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("prepaid");
  const [showCodModal, setShowCodModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      router.push("/");
      return;
    }

    // Try to get checkout data from sessionStorage first
    const sessionData = sessionStorage.getItem("checkoutItem") || sessionStorage.getItem("cartCheckout");
    
    if (!sessionData) {
      alert("No checkout data found");
      router.push("/");
      return;
    }

    const data = JSON.parse(sessionData);
    setCheckoutData(data);

    // If shipping info is available from modal, prefill it
    if (data.shippingInfo) {
      setAddress(data.shippingInfo);
      setPaymentMethod(data.paymentMethod || "prepaid");
    } else {
      // Otherwise fetch user's saved address
      fetchAddress(token);
    }

    setLoading(false);
  }, [router]);

  const fetchAddress = async (token: string) => {
    try {
      const res = await axios.get(`${BASE_URL}/user/address/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.data?.name) {
        setAddress(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch address:", err);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") return resolve(false);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCodOrder = async () => {
    setProcessing(true);
    const token = localStorage.getItem("access");

    try {
      // Save address first
      await axios.post(`${BASE_URL}/user/address/`, address, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Place COD order
      const orderData = {
        title: checkoutData.title,
        slug: checkoutData.slug,
        qty: checkoutData.qty || 1,
        price: checkoutData.price,
        total: checkoutData.total,
        size: checkoutData.size || "",
        mrp: checkoutData.mrp,
        delivery_charge: checkoutData.delivery_charge || 0,
        discount: checkoutData.discount || 0,
        payment_method: "cod",
        address: address,
      };

      await axios.post(`${BASE_URL}/user/create-order/`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Order placed successfully!");
      sessionStorage.removeItem("checkoutItem");
      sessionStorage.removeItem("cartCheckout");
      router.push("/orders");
    } catch (err: any) {
      console.error("COD order error:", err);
      alert(err.response?.data?.message || "Failed to place order");
    } finally {
      setProcessing(false);
      setShowCodModal(false);
    }
  };

  const handlePrepaidOrder = async () => {
    setProcessing(true);
    const token = localStorage.getItem("access");

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load");
      setProcessing(false);
      return;
    }

    try {
      // Save address first
      await axios.post(`${BASE_URL}/user/address/`, address, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Create order
      const orderData = {
        title: checkoutData.title,
        slug: checkoutData.slug,
        qty: checkoutData.qty || 1,
        price: checkoutData.price,
        total: checkoutData.total,
        size: checkoutData.size || "",
        mrp: checkoutData.mrp,
        delivery_charge: checkoutData.delivery_charge || 0,
        discount: checkoutData.discount || 0,
        payment_method: "prepaid",
        address: address,
      };

      const orderRes = await axios.post(`${BASE_URL}/user/create-order/`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { order_id, amount, razorpay_key, title } = orderRes.data;

      // Open Razorpay checkout
      const options = {
        key: razorpay_key,
        amount,
        currency: "INR",
        name: title,
        order_id,
        handler: async (response: any) => {
          try {
            await axios.post(
              `${BASE_URL}/user/verify-payment/`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            alert("Payment Successful!");
            sessionStorage.removeItem("checkoutItem");
            sessionStorage.removeItem("cartCheckout");
            router.push("/orders");
          } catch (err) {
            alert("Payment verification failed");
          }
        },
        modal: {
          ondismiss: () => {
            setProcessing(false);
          },
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (err: any) {
      console.error("Prepaid order error:", err);
      alert(err.response?.data?.message || "Failed to create order");
      setProcessing(false);
    }
  };

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.address_line || !address.city || !address.state || !address.pincode) {
      alert("Please fill in all required address fields");
      return;
    }

    if (paymentMethod === "cod") {
      setShowCodModal(true);
    } else {
      handlePrepaidOrder();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (!checkoutData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Address Form */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow">
            <h2 className="text-xl font-bold text-black mb-4">Delivery Address</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.name}
                    onChange={(e) => setAddress({ ...address, name: e.target.value })}
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
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Phone
                </label>
                <input
                  type="tel"
                  value={address.alt_phone}
                  onChange={(e) => setAddress({ ...address, alt_phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <textarea
                  required
                  value={address.address_line}
                  onChange={(e) => setAddress({ ...address, address_line: e.target.value })}
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
                    value={address.location}
                    onChange={(e) => setAddress({ ...address, location: e.target.value })}
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
                    value={address.landmark}
                    onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
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
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Mumbai"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <select
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="400001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-black mb-4">Payment Method</h2>
              
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
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow sticky top-4">
              <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>

              <div className="space-y-4">
                {checkoutData.title && (
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={checkoutData.image}
                        alt={checkoutData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-black text-sm">{checkoutData.title}</p>
                      {checkoutData.size && (
                        <p className="text-xs text-gray-600 mt-1">Size: {checkoutData.size}</p>
                      )}
                      <p className="text-xs text-gray-600">Qty: {checkoutData.qty || 1}</p>
                    </div>
                  </div>
                )}

                {checkoutData.cartItems && (
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {checkoutData.cartItems.map((item: any) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image1}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-black truncate">{item.title}</p>
                          <p className="text-xs text-gray-600">Size: {item.size}</p>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t pt-4 space-y-2">
                  {checkoutData.mrp && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">MRP</span>
                      <span className="text-gray-700">₹{checkoutData.mrp}</span>
                    </div>
                  )}

                  {checkoutData.discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-₹{checkoutData.discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-black font-medium">
                      ₹{checkoutData.price || checkoutData.total - (checkoutData.delivery_charge || 0)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Charge</span>
                    <span className={checkoutData.delivery_charge === 0 ? "text-green-600 font-medium" : "text-black font-medium"}>
                      {checkoutData.delivery_charge === 0 ? "Free" : `₹${checkoutData.delivery_charge || 50}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span className="text-black">Total</span>
                    <span className="text-black">₹{checkoutData.total || checkoutData.finalTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={processing}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    processing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {processing ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COD Confirmation Modal */}
      {showCodModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-2 text-black">Confirm Cash on Delivery</h2>
            <p className="text-sm text-gray-600 mb-4">
              You will pay ₹{checkoutData.total || checkoutData.finalTotal} on delivery. Please confirm to place your order.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowCodModal(false)}
                disabled={processing}
                className="px-4 py-2 border rounded text-black hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCodOrder}
                disabled={processing}
                className={`px-4 py-2 rounded text-white ${
                  processing ? "bg-gray-400" : "bg-black hover:bg-gray-800"
                }`}
              >
                {processing ? "Placing..." : "Confirm Order"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}












// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import AuthModal from "@/components/includes/AuthModal";
// import api from "@/components/config/Api";
// import { useAuth } from "@/components/context/AuthContext";


// const INDIAN_STATES = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
//   "Delhi",
// ];

// export default function CheckoutPage() {
//   const { user, loading } = useAuth();
//   const [step, setStep] = useState(1);
//   const [hasAddress, setHasAddress] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("prepaid");
//   const [showCodModal, setShowCodModal] = useState(false);

//   const [showAuth, setShowAuth] = useState(false);
//   const [checkoutItem, setCheckoutItem] = useState(null);
//   const router = useRouter();

//   const confirmCodOrder = async () => {
//     try {
//       await api.post("api/v1/user/create-order/", {
//         title: checkoutItem.title,
//         slug: checkoutItem.slug,
//         qty: checkoutItem.qty,
//         price: checkoutItem.price,
//         total: checkoutItem.total,
//         size: checkoutItem.size,
//         mrp: checkoutItem.mrp,  
//         delivery_charge: checkoutItem.delivery_charge,
//         discount: checkoutItem.discount,
//         payment_method: "cod",
//         address: address,
//       });

//       alert("Order placed successfully (Cash on Delivery)");
//       setShowCodModal(false);
//       router.push("/orders");
//       // router.push("/orders");
//     } catch {
//       alert("Failed to place COD order");
//     }
//   };



//   const handlePayment = async () => {
//     if (!checkoutItem) return;

//     if (paymentMethod === "cod") {
//       setShowCodModal(true);
//       return;
//     }

//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     try {
//       // 1️⃣ Create order in backend
//       const orderRes = await api.post("api/v1/user/create-order/", {
//         title: checkoutItem.title,
//         slug: checkoutItem.slug,
//         qty: checkoutItem.qty,
//         price: checkoutItem.price,
//         total: checkoutItem.total,
//         mrp: checkoutItem.mrp,
//         size: checkoutItem.size,
//         delivery_charge: checkoutItem.delivery_charge,
//         discount: checkoutItem.discount,
//         payment_method: paymentMethod,
//         address: address,
//       });

//       const { order_id, amount, razorpay_key, title: product } = orderRes.data;

//       // 2️⃣ Open Razorpay checkout
//       const options = {
//         key: razorpay_key,
//         amount,
//         currency: "INR",
//         name: product,
//         order_id,
//         handler: async (response) => {
//           await api.post("api/v1/user/verify-payment/", {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//           });
//           alert("Payment Successful!");
//           router.push("/orders");
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (err) {
//       console.error(err.response?.data);
//       alert("Payment failed. Try again.");
//     }
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       if (typeof window === "undefined") return resolve(false);

//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     alt_phone: "",
//     pincode: "",
//     state: "",
//     city: "",
//     location: "",
//     address_line: "",
//     landmark: "",
//   });

//   /* ---------------- INIT ---------------- */
//   useEffect(() => {
//     const item = localStorage.getItem("checkoutItem");
//     if (!item) return;
//     setCheckoutItem(JSON.parse(item));
//   }, []);

//   useEffect(() => {
//     if (user) {
//       setStep(2);
//       fetchAddress();
//     }
//   }, [user]);

//   /* ---------------- ADDRESS ---------------- */
//   const fetchAddress = async () => {
//     try {
//       const res = await api.get("api/v1/user/address/");
//       if (res.data?.name) {
//         setAddress(res.data);
//         setHasAddress(true); // 👈 THIS IS KEY
//       }
//     } catch {}
//   };

//   const saveAddress = async () => {
//     try {
//       if (hasAddress) {
//         // UPDATE
//         await api.put("api/v1/user/address/", address);
//       } else {
//         // CREATE
//         await api.post("api/v1/user/address/", address);
//         setHasAddress(true);
//       }

//       setStep(3);
//     } catch (err) {
//       console.error(err.response?.data);
//       alert("Failed to save address");
//     }
//   };

//   if (!checkoutItem) return null;

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen bg-gray-100 p-6 text-black flex">
//       <div className="w-4/5 bg-white rounded-xl p-6 shadow">
//         {/* STEPPER */}
//         <div className="flex justify-between mb-6 text-sm">
//           <Step label="Account" active={step >= 1} done={step > 1} />
//           <Step label="Address" active={step >= 2} done={step > 2} />
//           <Step label="Payment" active={step >= 3} />
//         </div>

//         {/* STEP 1 */}
//         {step === 1 && (
//           <div>
//             <h2 className="font-bold mb-2">Account</h2>
//             <button
//               onClick={() => setShowAuth(true)}
//               className="px-4 py-2 bg-black text-white rounded"
//             >
//               Login / Register
//             </button>
//           </div>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <div>
//             <h2 className="font-bold mb-3">Delivery Address</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <input
//                 value={address.name}
//                 onChange={(e) =>
//                   setAddress({ ...address, name: e.target.value })
//                 }
//                 placeholder="Full Name"
//               />
//               <input
//                 value={address.phone}
//                 onChange={(e) =>
//                   setAddress({ ...address, phone: e.target.value })
//                 }
//                 placeholder="Mobile Number"
//               />
//               <input
//                 value={address.alt_phone}
//                 onChange={(e) =>
//                   setAddress({ ...address, alt_phone: e.target.value })
//                 }
//                 placeholder="Alt Phone (optional)"
//               />
//               <input
//                 value={address.pincode}
//                 onChange={(e) =>
//                   setAddress({ ...address, pincode: e.target.value })
//                 }
//                 placeholder="Pincode"
//               />
//               <input
//                 value={address.location}
//                 onChange={(e) =>
//                   setAddress({ ...address, location: e.target.value })
//                 }
//                 placeholder="Location"
//               />
//               <input
//                 value={address.city}
//                 onChange={(e) =>
//                   setAddress({ ...address, city: e.target.value })
//                 }
//                 placeholder="City / District"
//               />

//               <select
//                 value={address.state}
//                 onChange={(e) =>
//                   setAddress({ ...address, state: e.target.value })
//                 }
//               >
//                 <option value="">Select State</option>
//                 {INDIAN_STATES.map((s) => (
//                   <option key={s}>{s}</option>
//                 ))}
//               </select>

//               <input
//                 value={address.address_line}
//                 onChange={(e) =>
//                   setAddress({ ...address, address_line: e.target.value })
//                 }
//                 placeholder="Home Address (optional)"
//               />
//               <input
//                 value={address.landmark}
//                 onChange={(e) =>
//                   setAddress({ ...address, landmark: e.target.value })
//                 }
//                 placeholder="Landmark (optional)"
//               />
//             </div>

//             <button
//               onClick={saveAddress}
//               className="mt-4 px-6 py-2 bg-black text-white rounded"
//             >
//               Save & Continue
//             </button>
//           </div>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <div>
//             <h2 className="font-bold mb-3">Payment Method</h2>

//             <div className="space-y-2">
//               <label className="flex gap-2 items-center">
//                 <input
//                   type="radio"
//                   name="payment_method"
//                   checked={paymentMethod === "prepaid"}
//                   onChange={() => setPaymentMethod("prepaid")}
//                 />
//                 <span>Prepaid</span>
//               </label>

//               <label className="flex gap-2 items-center">
//                 <input
//                   type="radio"
//                   name="payment_method"
//                   checked={paymentMethod === "cod"}
//                   onChange={() => setPaymentMethod("cod")}
//                 />
//                 <span>Cash on Delivery</span>
//               </label>
//             </div>

//             <button
//               onClick={handlePayment}
//               className="mt-4 w-full py-3 bg-green-600 text-white rounded"
//             >
//               {paymentMethod === "cod" ? "Place Order" : "Continue to Payment"}
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="w-1/5 bg-white">
//         {checkoutItem && (
//           <div className="bg-gray-100 rounded-xl p-4 space-y-3 text-black">
//             <h2 className="font-bold text-lg">Order Summary</h2>

//             <div className="flex gap-3 items-center">
//               <img
//                 src={checkoutItem.image}
//                 alt={checkoutItem.title}
//                 className="w-20 h-20 object-cover rounded-lg border"
//               />
//               <div className="flex-1">
//                 <p className="font-semibold">{checkoutItem.title}</p>
//                 <p className="text-sm">Size: {checkoutItem.size}</p>
//                 <p className="text-sm">Qty: {checkoutItem.qty}</p>
//               </div>
//             </div>

//             <div className="space-y-1 text-sm">
//               <div className="flex justify-between">
//                 <span>MRP</span>
//                 <span>₹{checkoutItem.mrp}</span>
//               </div>

//               <div className="flex justify-between text-green-600">
//                 <span>Discount</span>
//                 <span>-₹{checkoutItem.discount}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹{checkoutItem.price}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Delivery Charge</span>
//                 <span>
//                   {checkoutItem.delivery_charge === 0 ? (
//                     <span className="text-green-600 font-medium">Free</span>
//                   ) : (
//                     `₹${checkoutItem.delivery_charge}`
//                   )}
//                 </span>
//               </div>

//               <hr />

//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>₹{checkoutItem.total}</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <CodConfirmModal
//   open={showCodModal}
//   onClose={() => setShowCodModal(false)}
//   onConfirm={confirmCodOrder}
// />


//       {/* AUTH MODAL */}
//       <AuthModal
//         open={showAuth}
//         onClose={() => setShowAuth(false)}
//         onSuccess={() => setStep(2)}
//       />
//     </div>
//   );
// }

// /* ---------------- STEP UI ---------------- */
// function Step({ label, active, done }) {
//   return (
//     <div
//       className={`flex-1 text-center ${active ? "font-bold" : "text-gray-400"}`}
//     >
//       {done ? "✔ " : ""}
//       {label}
//     </div>
//   );
// }

// function CodConfirmModal({ open, onClose, onConfirm }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-full max-w-sm text-black">
//         <h2 className="text-lg font-bold mb-2">Confirm Cash on Delivery</h2>
//         <p className="text-sm text-gray-600 mb-4">
//           You will pay ₹ on delivery. Please confirm to place your order.
//         </p>

//         <div className="flex gap-3 justify-end">
//           <button onClick={onClose} className="px-4 py-2 border rounded">
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 bg-black text-white rounded"
//           >
//             Confirm Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
