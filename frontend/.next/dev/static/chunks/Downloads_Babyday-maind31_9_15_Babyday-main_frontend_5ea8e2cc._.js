(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyNowModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BuyNowModal({ open, onClose, product, size, onRequireAuth }) {
    if (!open || !product) return null;
    const mrp = Number(product.mrp);
    const price = Number(product.price);
    const charge = Number(product.delivery_charge);
    const discount = mrp - price;
    const total = price + charge;
    const qty = 1;
    const handleCheckout = ()=>{
        // always save checkout intent
        localStorage.setItem("checkoutItem", JSON.stringify({
            slug: product.slug,
            title: product.title,
            image: product.image1,
            size,
            qty,
            price,
            mrp,
            discount,
            delivery_charge: charge,
            total
        }));
        window.location.href = "/checkout";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl w-full max-w-md p-6 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Order Summary"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mb-4 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: product.image1,
                            alt: product.title,
                            className: "w-20 h-20 object-cover rounded-lg border"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Size: ",
                                        size
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Qty: ",
                                        qty
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "MRP"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "₹",
                                        mrp
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-green-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Discount"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "-₹",
                                        discount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Subtotal"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "₹",
                                        price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Delivery Charge"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: charge === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-600 font-medium",
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this) : `₹${charge}`
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between font-bold text-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "₹",
                                        total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 py-2 border rounded",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCheckout,
                            className: "flex-1 py-2 bg-green-600 text-white rounded",
                            children: "Proceed to Checkout"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = BuyNowModal;
var _c;
__turbopack_context__.k.register(_c, "BuyNowModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/WishlistContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$AuthModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/AuthModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$BuyNowModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/includes/BuyNowModal.jsx [app-client] (ecmascript)");
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
function ProductDetailPage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [relatedProducts, setRelatedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentImage, setCurrentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showAuth, setShowAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBuyNow, setShowBuyNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlistLoading, setWishlistLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addToCart, token, cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { wishlistItems, addToWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const inWishlist = wishlistItems.some((i)=>i.slug === slug);
    const inCart = cartItems.some((i)=>i.slug === slug);
    /* ---------------- Fetch product ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            const fetchProduct = {
                "ProductDetailPage.useEffect.fetchProduct": async ()=>{
                    try {
                        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1")}/public/products/${slug}/`);
                        if (!res.ok) throw new Error("Product not found");
                        const data = await res.json();
                        setProduct(data);
                        if (data.available_sizes?.length) {
                            setSelectedSize(data.available_sizes[0]);
                        }
                    } catch  {
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
    /* ---------------- Fetch related products ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            if (!product) return;
            const fetchRelated = {
                "ProductDetailPage.useEffect.fetchRelated": async ()=>{
                    try {
                        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1")}/public/products/`);
                        if (!res.ok) return;
                        const data = await res.json();
                        const related = data.filter({
                            "ProductDetailPage.useEffect.fetchRelated.related": (p)=>p.slug !== product.slug && p.product_category === product.product_category && p.age_category === product.age_category
                        }["ProductDetailPage.useEffect.fetchRelated.related"]).slice(0, 6);
                        setRelatedProducts(related);
                    } catch (err) {
                        console.error("Related products error", err);
                    }
                }
            }["ProductDetailPage.useEffect.fetchRelated"];
            fetchRelated();
        }
    }["ProductDetailPage.useEffect"], [
        product
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: "Loading product..."
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this);
    }
    if (error || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    const images = [
        product.image1,
        product.image2,
        product.image3,
        product.image4
    ].filter(Boolean);
    const discountPercent = product.mrp && parseFloat(product.mrp) > parseFloat(product.price) ? Math.round((+product.mrp - +product.price) / +product.mrp * 100) : 0;
    const getEstimatedDelivery = ()=>{
        const s = new Date();
        const e = new Date();
        s.setDate(s.getDate() + 2);
        e.setDate(e.getDate() + 5);
        return `${s.toDateString().slice(4, 10)} - ${e.toDateString().slice(4, 10)}`;
    };
    /* ---------------- UI ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-white rounded-lg aspect-square",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: images[currentImage],
                                    className: "w-full h-full object-contain",
                                    alt: product.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentImage((currentImage - 1 + images.length) % images.length),
                                            className: "absolute left-2 top-1/2 bg-white p-2 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentImage((currentImage + 1) % images.length),
                                            className: "absolute right-2 top-1/2 bg-white p-2 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                discountPercent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full",
                                    children: [
                                        discountPercent,
                                        "% OFF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: product.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: AGE_CATEGORY_LABELS[product.age_category]
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold",
                                        children: [
                                            "₹ ",
                                            parseFloat(product.price).toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    product.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-through text-gray-400",
                                        children: [
                                            "₹ ",
                                            parseFloat(product.mrp).toFixed(0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            product.available_sizes?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium mb-2",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: product.available_sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedSize(s),
                                                className: `px-4 py-2 border rounded ${selectedSize === s ? "bg-black text-white" : "bg-white"}`,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border w-fit rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                        className: "p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4",
                                        children: quantity
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuantity(quantity + 1),
                                        className: "p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>token ? addToCart(slug, selectedSize) : setShowAuth(true),
                                className: "w-full border-2 border-black py-3 font-semibold",
                                children: inCart ? "Added to Cart" : "Add to Cart"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowBuyNow(true),
                                className: "w-full bg-black text-white py-3",
                                children: "Buy Now"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    "Estimated Delivery: ",
                                    getEstimatedDelivery()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            relatedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-12 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Related Products"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
                        children: relatedProducts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products/${p.slug}`,
                                className: "bg-white rounded-lg shadow hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.image1,
                                        className: "aspect-square object-cover rounded-t-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium line-clamp-2",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold mt-1",
                                                children: [
                                                    "₹ ",
                                                    parseFloat(p.price).toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$BuyNowModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showBuyNow,
                onClose: ()=>setShowBuyNow(false),
                product: product,
                size: selectedSize,
                onRequireAuth: ()=>{
                    setShowBuyNow(false);
                    setShowAuth(true);
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$includes$2f$AuthModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showAuth,
                onClose: ()=>setShowAuth(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/[slug]/page.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useEffect, useState } from "react";
 // import { useParams, useRouter } from "next/navigation";
 // import { Star, Minus, Plus, Heart, Truck, ChevronLeft, ChevronRight } from "lucide-react";
 // import { useCart } from "@/components/context/CartContext";
 // import { useWishlist } from "@/components/context/WishlistContext";
 // import AuthModal from "../../../components/includes/AuthModal";
 // import BuyNowModal from "../../../components/includes/BuyNowModal";
 // export default function ProductDetailPage() {
 //   const { slug } = useParams();
 //   const router = useRouter();
 //   const [product, setProduct] = useState(null);
 //   const [loading, setLoading] = useState(true);
 //   const [error, setError] = useState("");
 //   const [currentImage, setCurrentImage] = useState(0);
 //   const { wishlistItems, addToWishlist } = useWishlist();
 //   const [selectedSize, setSelectedSize] = useState("");
 //   const [showAuth, setShowAuth] = useState(false);
 //   const { addToCart, token, cartItems } = useCart();
 //   const [showBuyNow, setShowBuyNow] = useState(false);
 //   const [quantity, setQuantity] = useState(1);
 //   const [wishlistLoading, setWishlistLoading] = useState(false);
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
 //         // If you have a removeFromWishlist function in context
 //         // await removeFromWishlist(slug);
 //         console.log("Remove from wishlist:", slug);
 //       } else {
 //         await addToWishlist(slug);
 //         console.log("Added to wishlist:", slug);
 //       }
 //     } catch (error) {
 //       console.error("Wishlist error:", error);
 //       alert("Failed to update wishlist");
 //     } finally {
 //       setWishlistLoading(false);
 //     }
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
_s(ProductDetailPage, "asduPBr2/V427pQO19KkqOh1dGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Truck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }
    ],
    [
        "path",
        {
            d: "M15 18H9",
            key: "1lyqi6"
        }
    ],
    [
        "path",
        {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ]
];
const Truck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("truck", __iconNode);
;
 //# sourceMappingURL=truck.js.map
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Truck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_Babyday-maind31_9_15_Babyday-main_frontend_5ea8e2cc._.js.map