(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/config/Api.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8000/"
});
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$config$2f$Api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/config/Api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OrdersPage() {
    _s();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrdersPage.useEffect": ()=>{
            fetchOrders();
        }
    }["OrdersPage.useEffect"], []);
    const fetchOrders = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$config$2f$Api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/v1/user/orders/");
            setOrders(res.data);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center",
            children: "Loading orders..."
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    if (!orders.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold",
                    children: "No orders found"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/"),
                    className: "mt-4 px-6 py-2 bg-black rounded",
                    children: "Continue Shopping"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-6 text-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "My Orders"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-4 shadow space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-lg",
                                        children: order.product_name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: order.payment_status
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 space-y-1 flex gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: order.product_image,
                                        alt: "",
                                        className: "w-20"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Order ID: #",
                                                    order.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                                lineNumber: 63,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Size: ",
                                                    order.size || "N/A"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Quantity: ",
                                                    order.qty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Payment: ",
                                                    order.payment_method.toUpperCase()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Ordered on: ",
                                                    new Date(order.created_at).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center pt-2 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-lg",
                                        children: [
                                            "₹",
                                            order.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push(`/products/${order.product_slug}`),
                                        className: "text-sm font-medium text-blue-600",
                                        children: "View Product →"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, order.id, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(OrdersPage, "mgUUa4nHfov0woFVt8IOkYnGKJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrdersPage;
/* ---------------- STATUS BADGE ---------------- */ function StatusBadge({ status }) {
    const styles = {
        initiated: "bg-yellow-100 text-yellow-700",
        paid: "bg-green-100 text-green-700",
        failed: "bg-red-100 text-red-700"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `px-3 py-1 text-xs font-semibold rounded-full ${styles[status] || "bg-gray-100 text-gray-600"}`,
        children: status.toUpperCase()
    }, void 0, false, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/orders/page.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c1 = StatusBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "OrdersPage");
__turbopack_context__.k.register(_c1, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_Babyday-maind31_9_15_Babyday-main_frontend_cb18b141._.js.map