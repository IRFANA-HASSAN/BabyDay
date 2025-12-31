(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1");
const INDIAN_STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi"
];
function CheckoutPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkoutData, setCheckoutData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        alt_phone: "",
        pincode: "",
        state: "",
        city: "",
        location: "",
        address_line: "",
        landmark: ""
    });
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("prepaid");
    const [showCodModal, setShowCodModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
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
        }
    }["CheckoutPage.useEffect"], [
        router
    ]);
    const fetchAddress = async (token)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/user/address/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.data?.name) {
                setAddress(res.data);
            }
        } catch (err) {
            console.error("Failed to fetch address:", err);
        }
    };
    const loadRazorpayScript = ()=>{
        return new Promise((resolve)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = ()=>resolve(true);
            script.onerror = ()=>resolve(false);
            document.body.appendChild(script);
        });
    };
    const handleCodOrder = async ()=>{
        setProcessing(true);
        const token = localStorage.getItem("access");
        try {
            // Save address first
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/address/`, address, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
                address: address
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/create-order/`, orderData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Order placed successfully!");
            sessionStorage.removeItem("checkoutItem");
            sessionStorage.removeItem("cartCheckout");
            router.push("/orders");
        } catch (err) {
            console.error("COD order error:", err);
            alert(err.response?.data?.message || "Failed to place order");
        } finally{
            setProcessing(false);
            setShowCodModal(false);
        }
    };
    const handlePrepaidOrder = async ()=>{
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/address/`, address, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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
                address: address
            };
            const orderRes = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/create-order/`, orderData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const { order_id, amount, razorpay_key, title } = orderRes.data;
            // Open Razorpay checkout
            const options = {
                key: razorpay_key,
                amount,
                currency: "INR",
                name: title,
                order_id,
                handler: async (response)=>{
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/verify-payment/`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        alert("Payment Successful!");
                        sessionStorage.removeItem("checkoutItem");
                        sessionStorage.removeItem("cartCheckout");
                        router.push("/orders");
                    } catch (err) {
                        alert("Payment verification failed");
                    }
                },
                modal: {
                    ondismiss: ()=>{
                        setProcessing(false);
                    }
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            console.error("Prepaid order error:", err);
            alert(err.response?.data?.message || "Failed to create order");
            setProcessing(false);
        }
    };
    const handlePlaceOrder = ()=>{
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading checkout..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this);
    }
    if (!checkoutData) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-black mb-6",
                        children: "Checkout"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-black mb-4",
                                        children: "Delivery Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Full Name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: address.name,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        name: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "John Doe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Phone Number *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                required: true,
                                                                value: address.phone,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "+91 1234567890"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Alternate Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        value: address.alt_phone,
                                                        onChange: (e)=>setAddress({
                                                                ...address,
                                                                alt_phone: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                        placeholder: "+91 9876543210"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Address *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: address.address_line,
                                                        onChange: (e)=>setAddress({
                                                                ...address,
                                                                address_line: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                        placeholder: "House no, Building name, Street",
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Location *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: address.location,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        location: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Area/Locality"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Landmark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: address.landmark,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        landmark: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Near landmark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "City *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: address.city,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        city: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Mumbai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "State *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                value: address.state,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        state: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select State"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    INDIAN_STATES.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: state,
                                                                            children: state
                                                                        }, state, false, {
                                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 23
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Pincode *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: address.pincode,
                                                                onChange: (e)=>setAddress({
                                                                        ...address,
                                                                        pincode: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "400001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-black mb-4",
                                                children: "Payment Method"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "payment",
                                                                value: "prepaid",
                                                                checked: paymentMethod === "prepaid",
                                                                onChange: (e)=>setPaymentMethod(e.target.value),
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-black",
                                                                        children: "Online Payment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: "Credit/Debit Card, UPI, Net Banking"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "payment",
                                                                value: "cod",
                                                                checked: paymentMethod === "cod",
                                                                onChange: (e)=>setPaymentMethod(e.target.value),
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-black",
                                                                        children: "Cash on Delivery"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: "Pay when you receive the product"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-4 sm:p-6 shadow sticky top-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-black mb-4",
                                            children: "Order Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                checkoutData.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: checkoutData.image,
                                                                alt: checkoutData.title,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-black text-sm",
                                                                    children: checkoutData.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 23
                                                                }, this),
                                                                checkoutData.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 mt-1",
                                                                    children: [
                                                                        "Size: ",
                                                                        checkoutData.size
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600",
                                                                    children: [
                                                                        "Qty: ",
                                                                        checkoutData.qty || 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                checkoutData.cartItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 max-h-48 overflow-y-auto",
                                                    children: checkoutData.cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: item.image1,
                                                                        alt: item.title,
                                                                        className: "w-full h-full object-cover"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-black truncate",
                                                                            children: item.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                            lineNumber: 466,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-600",
                                                                            children: [
                                                                                "Size: ",
                                                                                item.size
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                            lineNumber: 467,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-600",
                                                                            children: [
                                                                                "Qty: ",
                                                                                item.quantity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t pt-4 space-y-2",
                                                    children: [
                                                        checkoutData.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "MRP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-700",
                                                                    children: [
                                                                        "₹",
                                                                        checkoutData.mrp
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 21
                                                        }, this),
                                                        checkoutData.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm text-green-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Discount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "-₹",
                                                                        checkoutData.discount
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Subtotal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-black font-medium",
                                                                    children: [
                                                                        "₹",
                                                                        checkoutData.price || checkoutData.total - (checkoutData.delivery_charge || 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Delivery Charge"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: checkoutData.delivery_charge === 0 ? "text-green-600 font-medium" : "text-black font-medium",
                                                                    children: checkoutData.delivery_charge === 0 ? "Free" : `₹${checkoutData.delivery_charge || 50}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-lg font-bold border-t pt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-black",
                                                                    children: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-black",
                                                                    children: [
                                                                        "₹",
                                                                        checkoutData.total || checkoutData.finalTotal
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handlePlaceOrder,
                                                    disabled: processing,
                                                    className: `w-full py-3 rounded-lg font-semibold transition ${processing ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}`,
                                                    children: processing ? "Processing..." : "Place Order"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            showCodModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-full max-w-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold mb-2 text-black",
                            children: "Confirm Cash on Delivery"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                            lineNumber: 531,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-4",
                            children: [
                                "You will pay ₹",
                                checkoutData.total || checkoutData.finalTotal,
                                " on delivery. Please confirm to place your order."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCodModal(false),
                                    disabled: processing,
                                    className: "px-4 py-2 border rounded text-black hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCodOrder,
                                    disabled: processing,
                                    className: `px-4 py-2 rounded text-white ${processing ? "bg-gray-400" : "bg-black hover:bg-gray-800"}`,
                                    children: processing ? "Placing..." : "Confirm Order"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                    lineNumber: 530,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/checkout/page.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
} // "use client";
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
_s(CheckoutPage, "bdkE9sWJUPyZxq7h4Dc4iFI6uLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=6c7f9_Babyday-maind31_9_15_Babyday-main_frontend_app_checkout_page_tsx_33dc302b._.js.map