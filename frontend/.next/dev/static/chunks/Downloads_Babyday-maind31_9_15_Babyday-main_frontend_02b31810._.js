(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/CartContext.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/includes/CartCheckoutModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CartPage() {
    _s();
    const { cartItems, removeFromCart, loading, updateQty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading cart..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    if (cartItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                        className: "w-24 h-24 text-gray-300 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Your cart is empty"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Add some products to get started!"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/products",
                        className: "inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition",
                        children: "Continue Shopping"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    const total = cartItems.reduce((sum, item)=>sum + Number(item.price) * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-black mb-2",
                                children: "Shopping Cart"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    cartItems.length,
                                    " ",
                                    cartItems.length === 1 ? 'item' : 'items',
                                    " in your cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-4",
                                children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image1,
                                                    alt: item.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-semibold text-lg text-black mb-1 truncate",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm mb-2",
                                                        children: [
                                                            "Size: ",
                                                            item.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-bold text-black",
                                                                children: [
                                                                    "₹ ",
                                                                    parseFloat(item.price).toFixed(0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 border border-gray-300 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateQty(item.slug, "decrease"),
                                                                        disabled: item.quantity === 1,
                                                                        className: `px-3 py-1 text-lg rounded-l-lg transition ${item.quantity === 1 ? "text-gray-300 cursor-not-allowed" : "text-black hover:bg-gray-100"}`,
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-4 py-1 font-semibold text-black border-x border-gray-300",
                                                                        children: item.quantity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateQty(item.slug, "increase"),
                                                                        disabled: item.quantity === 10,
                                                                        className: `px-3 py-1 text-lg rounded-r-lg transition ${item.quantity === 10 ? "text-gray-300 cursor-not-allowed" : "text-black hover:bg-gray-100"}`,
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                                        lineNumber: 103,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                                lineNumber: 86,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-2",
                                                        children: [
                                                            "Subtotal: ₹ ",
                                                            (parseFloat(item.price) * item.quantity).toFixed(0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeFromCart(item.slug),
                                                className: "flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition",
                                                title: "Remove from cart",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow p-6 sticky top-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-black mb-4",
                                            children: "Order Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: [
                                                                "₹ ",
                                                                total.toFixed(0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Delivery Charge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-green-600",
                                                            children: "₹ 50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t pt-3 flex justify-between text-lg font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-black",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-black",
                                                            children: [
                                                                "₹ ",
                                                                (total + 50).toFixed(0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCheckout(true),
                                            className: "w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-3",
                                            children: "Proceed to Checkout"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition",
                                            children: "Continue Shopping"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 pt-6 border-t",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "We Accept:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-7 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white",
                                                            children: "VISA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-[10px] font-bold text-white",
                                                            children: "MC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-7 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold text-white",
                                                            children: "UPI"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 177,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-7 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-white",
                                                            children: "COD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartCheckoutModal, {
                open: showCheckout,
                onClose: ()=>setShowCheckout(false),
                cartItems: cartItems,
                total: total
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/cart/page.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
} // "use client";
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
_s(CartPage, "JCxVEiKq+VbdjAT2eYMnTNWgZ7M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartPage;
var _c;
__turbopack_context__.k.register(_c, "CartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ShoppingBag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }
    ],
    [
        "path",
        {
            d: "M3.103 6.034h17.794",
            key: "awc11p"
        }
    ],
    [
        "path",
        {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm"
        }
    ]
];
const ShoppingBag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shopping-bag", __iconNode);
;
 //# sourceMappingURL=shopping-bag.js.map
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingBag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_Babyday-maind31_9_15_Babyday-main_frontend_02b31810._.js.map