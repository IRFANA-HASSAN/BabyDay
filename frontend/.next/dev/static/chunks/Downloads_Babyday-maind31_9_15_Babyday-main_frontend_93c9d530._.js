(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyNowModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BuyNowModal({ open, onClose, product, size, onRequireAuth }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [shippingInfo, setShippingInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        alt_phone: "",
        address_line: "",
        city: "",
        state: "",
        pincode: "",
        location: "",
        landmark: ""
    });
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("prepaid");
    if (!open || !product) return null;
    const mrp = Number(product.mrp);
    const price = Number(product.price);
    const charge = Number(product.delivery_charge);
    const discount = mrp - price;
    const total = price + charge;
    const qty = 1;
    const handleShippingSubmit = (e)=>{
        e.preventDefault();
        setStep(2);
    };
    const handlePaymentSubmit = async (e)=>{
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
            paymentMethod
        };
        sessionStorage.setItem("checkoutItem", JSON.stringify(checkoutData));
        onClose();
        router.push("/checkout");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-black",
                            children: step === 1 ? "Shipping Information" : "Payment"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-full transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6 text-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-2 ${step >= 1 ? 'text-black' : 'text-gray-400'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`,
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium hidden sm:inline",
                                                children: "Shipping"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-0.5 bg-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-2 ${step >= 2 ? 'text-black' : 'text-gray-400'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`,
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium hidden sm:inline",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleShippingSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-5 h-5 text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-black",
                                                        children: "Delivery Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Full Name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: shippingInfo.name,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        name: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "John Doe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Phone Number *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                required: true,
                                                                value: shippingInfo.phone,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "+91 1234567890"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Email *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                required: true,
                                                                value: shippingInfo.email,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        email: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "john@example.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Alternate Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: shippingInfo.alt_phone,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        alt_phone: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "+91 9876543210"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Address *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        value: shippingInfo.address_line,
                                                        onChange: (e)=>setShippingInfo({
                                                                ...shippingInfo,
                                                                address_line: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                        placeholder: "House no, Building name, Street",
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
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
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: shippingInfo.location,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        location: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Area/Locality"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Landmark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: shippingInfo.landmark,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        landmark: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Near landmark"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
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
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: shippingInfo.city,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        city: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Mumbai"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "State *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: shippingInfo.state,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        state: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "Maharashtra"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                                children: "Pincode *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: shippingInfo.pincode,
                                                                onChange: (e)=>setShippingInfo({
                                                                        ...shippingInfo,
                                                                        pincode: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent",
                                                                placeholder: "400001"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mt-6",
                                                children: "Continue to Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handlePaymentSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                        className: "w-5 h-5 text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-black",
                                                        children: "Payment Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
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
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-black",
                                                                        children: "Online Payment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: "Credit/Debit Card, UPI, Net Banking"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
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
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-black",
                                                                        children: "Cash on Delivery"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                        lineNumber: 321,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600",
                                                                        children: "Pay when you receive the product"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50 p-4 rounded-lg mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-black mb-2",
                                                        children: "Delivering to:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: shippingInfo.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: shippingInfo.address_line
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: [
                                                            shippingInfo.city,
                                                            ", ",
                                                            shippingInfo.state,
                                                            " - ",
                                                            shippingInfo.pincode
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 mt-1",
                                                        children: shippingInfo.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setStep(1),
                                                        className: "text-blue-600 text-sm mt-2 hover:underline",
                                                        children: "Change Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 328,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setStep(1),
                                                        className: "flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition",
                                                        children: "Proceed to Checkout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 rounded-lg p-4 sticky top-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        className: "w-5 h-5 text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-black",
                                                        children: "Order Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 mb-4 pb-4 border-b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: product.image1,
                                                            alt: product.title,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-black line-clamp-2",
                                                                children: product.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600 mt-1",
                                                                children: [
                                                                    "Size: ",
                                                                    size
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600",
                                                                children: [
                                                                    "Qty: ",
                                                                    qty
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "MRP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-gray-700",
                                                                children: [
                                                                    "₹",
                                                                    mrp.toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this),
                                                    discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-green-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: [
                                                                    "-₹",
                                                                    discount.toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Subtotal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-black",
                                                                children: [
                                                                    "₹",
                                                                    price.toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600",
                                                                children: "Delivery Charge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-medium ${charge === 0 ? 'text-green-600' : 'text-black'}`,
                                                                children: charge === 0 ? "Free" : `₹${charge}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-lg font-bold border-t pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: "Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-black",
                                                                children: [
                                                                    "₹",
                                                                    total.toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        className: "w-4 h-4 text-green-600 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Estimated delivery in 3-5 days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
} // "use client";
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
_s(BuyNowModal, "CiuSdIM4lXT+mhiiKdp/ylQarm8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BuyNowModal;
var _c;
__turbopack_context__.k.register(_c, "BuyNowModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/WishlistContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$AuthModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/AuthModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$BuyNowModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProductDetailPage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [relatedProducts, setRelatedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { wishlistItems, addToWishlist, removeFromWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAuth, setShowAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addToCart, token, cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [showBuyNow, setShowBuyNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [wishlistLoading, setWishlistLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [relatedWishlistLoading, setRelatedWishlistLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inWishlist = wishlistItems.some((item)=>item.slug === slug);
    const inCart = cartItems.some((item)=>item.slug === slug);
    const AGE_CATEGORY_LABELS = {
        kids_boy: "Kids (Boy)",
        kids_girl: "Kids (Girl)",
        kids_unisex: "Kids (Unisex)",
        adults_men: "Adults (Men)",
        adults_women: "Adults (Women)",
        adults_unisex: "Adults (Unisex)",
        all_age_men: "All Age (Men)",
        all_age_women: "All Age (Women)",
        all_age_unisex: "All Age (Unisex)"
    };
    const getEstimatedDelivery = ()=>{
        const today = new Date();
        const start = new Date(today);
        start.setDate(today.getDate() + 2);
        const end = new Date(today);
        end.setDate(today.getDate() + 5);
        const format = (date)=>date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            });
        return `${format(start)} - ${format(end)}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            const fetchProduct = {
                "ProductDetailPage.useEffect.fetchProduct": async ()=>{
                    try {
                        const res = await fetch(`http://localhost:8000/api/v1/public/products/${slug}/`);
                        if (!res.ok) {
                            throw new Error('Product not found');
                        }
                        const data = await res.json();
                        setProduct(data);
                        if (data.available_sizes && data.available_sizes.length > 0) {
                            setSelectedSize(data.available_sizes[0]);
                        }
                        // Fetch all products for related products
                        const allProductsRes = await fetch(`http://localhost:8000/api/v1/public/products/`);
                        if (allProductsRes.ok) {
                            const allProducts = await allProductsRes.json();
                            // Filter and sort related products
                            const related = allProducts.filter({
                                "ProductDetailPage.useEffect.fetchProduct.related": (p)=>p.slug !== data.slug
                            }["ProductDetailPage.useEffect.fetchProduct.related"]).map({
                                "ProductDetailPage.useEffect.fetchProduct.related": (p)=>{
                                    // Calculate relevance score
                                    let score = 0;
                                    if (p.product_category === data.product_category) score += 10;
                                    if (p.age_category === data.age_category) score += 5;
                                    return {
                                        ...p,
                                        relevanceScore: score
                                    };
                                }
                            }["ProductDetailPage.useEffect.fetchProduct.related"]).filter({
                                "ProductDetailPage.useEffect.fetchProduct.related": (p)=>p.relevanceScore > 0
                            }["ProductDetailPage.useEffect.fetchProduct.related"]) // Only products with some relevance
                            .sort({
                                "ProductDetailPage.useEffect.fetchProduct.related": (a, b)=>{
                                    // Sort by relevance first, then by ID (newest)
                                    if (b.relevanceScore !== a.relevanceScore) {
                                        return b.relevanceScore - a.relevanceScore;
                                    }
                                    return b.id - a.id;
                                }
                            }["ProductDetailPage.useEffect.fetchProduct.related"]).slice(0, 8); // Limit to 8 related products
                            setRelatedProducts(related);
                        }
                    } catch (err) {
                        setError("Product not found");
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProductDetailPage.useEffect.fetchProduct"];
            fetchProduct();
        }
    }["ProductDetailPage.useEffect"], [
        slug
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading product details..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 mb-4",
                        children: error || "Product not found"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/"),
                        className: "text-blue-600 hover:underline",
                        children: "Return to Home"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
            lineNumber: 130,
            columnNumber: 7
        }, this);
    }
    const productImages = [
        product.image1,
        product.image2,
        product.image3,
        product.image4
    ].filter(Boolean);
    const nextImage = ()=>{
        setCurrentImage((prev)=>(prev + 1) % productImages.length);
    };
    const prevImage = ()=>{
        setCurrentImage((prev)=>(prev - 1 + productImages.length) % productImages.length);
    };
    const incrementQuantity = ()=>{
        if (quantity < (product.stock_qty || 10)) {
            setQuantity((prev)=>prev + 1);
        }
    };
    const decrementQuantity = ()=>{
        setQuantity((prev)=>prev > 1 ? prev - 1 : 1);
    };
    const handleAddToCart = ()=>{
        if (!selectedSize && product.available_sizes?.length > 0) {
            alert("Please select a size");
            return;
        }
        if (!token) {
            localStorage.setItem("pendingCart", JSON.stringify({
                slug,
                size: selectedSize
            }));
            setShowAuth(true);
            return;
        }
        addToCart(slug, selectedSize);
    };
    const handleWishlist = async ()=>{
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
        } finally{
            setWishlistLoading(false);
        }
    };
    const handleRelatedWishlistToggle = async (e, productSlug)=>{
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
            const isInWishlist = wishlistItems.some((item)=>item.slug === productSlug);
            if (isInWishlist) {
                await removeFromWishlist(productSlug);
            } else {
                await addToWishlist(productSlug);
            }
        } catch (error) {
            console.error("Wishlist error:", error);
            alert("Failed to update wishlist");
        } finally{
            setRelatedWishlistLoading(null);
        }
    };
    const isInWishlist = (productSlug)=>{
        return wishlistItems.some((item)=>item.slug === productSlug);
    };
    const discountPercent = product.mrp && parseFloat(product.mrp) > parseFloat(product.price) ? Math.round((parseFloat(product.mrp) - parseFloat(product.price)) / parseFloat(product.mrp) * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 text-xs sm:text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/"),
                                className: "hover:text-gray-900",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize",
                                children: product.product_category || 'Products'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-900 truncate",
                                children: product.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col-reverse sm:flex-row gap-4",
                                children: [
                                    productImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex sm:flex-col gap-3 overflow-x-auto",
                                        children: productImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentImage(idx),
                                                className: `flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition ${currentImage === idx ? 'border-gray-800' : 'border-gray-200'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: img,
                                                    alt: `View ${idx + 1}`,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-white rounded-lg overflow-hidden relative aspect-square",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: productImages[currentImage],
                                                alt: product.title,
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this),
                                            productImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: prevImage,
                                                        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: nextImage,
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            discountPercent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold",
                                                children: [
                                                    discountPercent,
                                                    "% OFF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl font-semibold text-gray-900 mb-2",
                                                        children: product.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 capitalize",
                                                        children: AGE_CATEGORY_LABELS[product.age_category] || product.age_category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleWishlist,
                                                disabled: wishlistLoading,
                                                className: `flex-shrink-0 p-3 rounded-full transition-all duration-200 ${wishlistLoading ? 'bg-gray-100 cursor-not-allowed opacity-50' : inWishlist && token ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                title: !token ? "Login to add to wishlist" : inWishlist ? "In wishlist" : "Add to wishlist",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: `w-6 h-6 transition-all ${inWishlist && token ? 'fill-current scale-110' : ''} ${wishlistLoading ? 'animate-pulse' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-bold text-gray-900",
                                                children: [
                                                    "Rs. ",
                                                    parseFloat(product.price).toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this),
                                            product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl text-gray-400 line-through",
                                                children: [
                                                    "Rs. ",
                                                    parseFloat(product.mrp).toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            discountPercent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600 font-semibold",
                                                children: [
                                                    "Save ",
                                                    discountPercent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: Number(product.delivery_charge) === 0 ? "Free Delivery • Tax included" : `Delivery Fee Rs. ${product.delivery_charge} • Tax included`
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2",
                                        children: product.stock_qty > 0 || product.is_available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-600 font-medium",
                                            children: [
                                                "✓ In Stock ",
                                                product.stock_qty && `(${product.stock_qty} available)`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 font-medium",
                                            children: "✗ Out of Stock"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    (product.material_type || product.fit_type || product.pattern_design) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 py-4 border-t",
                                        children: [
                                            product.material_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Material:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 396,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    product.material_type
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this),
                                            product.fit_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Fit:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    product.fit_type
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this),
                                            product.pattern_design && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Pattern:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 402,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    product.pattern_design
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 402,
                                                columnNumber: 19
                                            }, this),
                                            product.age_limits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Age:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 405,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    product.age_limits
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    product.available_sizes && product.available_sizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-black",
                                                        children: "Size:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-black",
                                                        children: selectedSize || 'Select'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 414,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 flex-wrap",
                                                children: product.available_sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedSize(size),
                                                        className: `px-5 py-2 border rounded-md transition ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'}`,
                                                        children: size
                                                    }, size, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 418,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium mb-3 text-black",
                                                children: "Quantity"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center border border-black rounded-md w-fit",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: decrementQuantity,
                                                        className: "p-3 hover:bg-gray-100 transition",
                                                        disabled: quantity <= 1,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                            className: "w-4 h-4 text-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 442,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: quantity,
                                                        readOnly: true,
                                                        className: "w-16 text-center border-x border-black text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: incrementQuantity,
                                                        className: "p-3 hover:bg-gray-100 transition",
                                                        disabled: quantity >= (product.stock_qty || 10),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4 text-black"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 450,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    !token && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-yellow-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                    lineNumber: 463,
                                                    columnNumber: 19
                                                }, this),
                                                " Please",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowAuth(true),
                                                    className: "underline font-semibold",
                                                    children: "login"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                "to add items to cart, wishlist, or make a purchase."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddToCart,
                                                disabled: !product.is_available,
                                                className: `w-full py-4 border-2 font-semibold rounded-md transition ${product.is_available ? 'border-black text-black hover:bg-gray-50' : 'border-gray-300 text-gray-400 cursor-not-allowed'}`,
                                                children: product.is_available ? token ? inCart ? "Added to Cart" : "Add to Cart" : "Login to Add to Cart" : "Out of Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (!selectedSize && product.available_sizes?.length > 0) {
                                                        alert("Please select a size");
                                                        return;
                                                    }
                                                    setShowBuyNow(true);
                                                },
                                                disabled: !product.is_available,
                                                className: `w-full py-4 font-semibold rounded-md transition ${product.is_available ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                                                children: product.is_available ? token ? "Buy it Now" : "Login to Buy Now" : "Out of Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-sm font-medium text-gray-700 mb-3",
                                                children: "Secure Checkout With"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 511,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-xs font-bold text-white",
                                                        children: "MC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 513,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white",
                                                        children: "VISA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white",
                                                        children: "AMEX"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-white",
                                                        children: "PAY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 516,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-white border-2 border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700",
                                                        children: "GPay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 517,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white",
                                                        children: "UPI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 518,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 pt-4 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                className: "w-5 h-5 text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Estimated Delivery:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 525,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        children: getEstimatedDelivery()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 526,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 w-2 bg-black rounded-sm mr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl lg:text-3xl font-bold text-black",
                                                children: "Related Products"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 538,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 ml-5",
                                        children: "You might also like these products"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6",
                                children: relatedProducts.map((relatedProduct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden rounded-t-lg aspect-square",
                                                children: [
                                                    relatedProduct.image1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: relatedProduct.image1,
                                                        alt: relatedProduct.title,
                                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 553,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-gray-200 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400",
                                                            children: "No Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 560,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 559,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleRelatedWishlistToggle(e, relatedProduct.slug),
                                                            disabled: relatedWishlistLoading === relatedProduct.slug,
                                                            className: `p-2 rounded-full shadow-lg transition-all ${relatedWishlistLoading === relatedProduct.slug ? 'bg-gray-100 cursor-not-allowed' : isInWishlist(relatedProduct.slug) ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                className: `w-4 h-4 transition-all ${isInWishlist(relatedProduct.slug) ? 'fill-current' : ''} ${relatedWishlistLoading === relatedProduct.slug ? 'animate-pulse' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                                lineNumber: 576,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 551,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 lg:p-4 flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-1 uppercase",
                                                        children: "BabyDay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-medium mb-2 line-clamp-2 text-black flex-1",
                                                        children: relatedProduct.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base lg:text-lg font-bold text-gray-900",
                                                                children: [
                                                                    "₹ ",
                                                                    parseFloat(relatedProduct.price).toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, this),
                                                            relatedProduct.mrp && parseFloat(relatedProduct.mrp) > parseFloat(relatedProduct.price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs lg:text-sm text-gray-400 line-through",
                                                                children: [
                                                                    "₹ ",
                                                                    parseFloat(relatedProduct.mrp).toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                                lineNumber: 596,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/products/${relatedProduct.slug}`,
                                                        className: "block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                        lineNumber: 602,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                                lineNumber: 585,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, relatedProduct.id, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                        lineNumber: 547,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                        lineNumber: 534,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$BuyNowModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showBuyNow,
                onClose: ()=>setShowBuyNow(false),
                product: product,
                size: selectedSize,
                onRequireAuth: ()=>{
                    setShowBuyNow(false);
                    setShowAuth(true);
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 616,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$AuthModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showAuth,
                onClose: ()=>setShowAuth(false),
                onSuccess: (accessToken)=>{
                    const pending = localStorage.getItem("pendingCart");
                    if (pending) {
                        const { slug, size } = JSON.parse(pending);
                        addToCart(slug, size, accessToken);
                        localStorage.removeItem("pendingCart");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
                lineNumber: 627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.jsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
} // "use client";
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
_s(ProductDetailPage, "BDJdKQ9p3d2Ylt/0jo5rFuK05fo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Babyday-maind31_9_15_Babyday-main_frontend_93c9d530._.js.map