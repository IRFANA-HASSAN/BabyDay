(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
function ProductFilters({ products, priceRange, setPriceRange, inStockOnly, setInStockOnly, sortBy, setSortBy, gridCols, setGridCols, productCount, isOpen, onClose }) {
    const handleClearFilters = ()=>{
        setPriceRange([
            0,
            5000
        ]);
        setInStockOnly(false);
        setSortBy("best-selling");
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/10 bg-opacity-50 z-40",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl overflow-y-auto z-50 animate-slide-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl text-black font-bold",
                                children: "FILTERS"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-full transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-gray-800"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 pb-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Showing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-black",
                                    children: productCount
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                    lineNumber: 71,
                                    columnNumber: 21
                                }, this),
                                " products"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-black font-semibold mb-3",
                                children: "Sort By"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full text-black px-4 py-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-black",
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "best-selling",
                                        children: "Best selling"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-low-high",
                                        children: "Price: Low to High"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-high-low",
                                        children: "Price: High to Low"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Newest"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 hidden lg:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-black font-semibold mb-3",
                                children: "Grid Layout"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((cols)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGridCols(cols),
                                        className: `p-2 border rounded transition flex-1 ${gridCols === cols ? 'bg-black text-white border-black' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'}`,
                                        title: `${cols} column${cols > 1 ? 's' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: cols
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    }, cols, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-black font-semibold mb-3",
                                children: "Availability"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex text-black items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: inStockOnly,
                                        onChange: (e)=>setInStockOnly(e.target.checked),
                                        className: "w-4 h-4 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    "In stock only (",
                                    products.filter((p)=>p.in_stock).length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-black font-semibold mb-3",
                                children: "Price Range"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "5000",
                                        value: priceRange[1],
                                        onChange: (e)=>setPriceRange([
                                                priceRange[0],
                                                parseInt(e.target.value)
                                            ]),
                                        className: "w-full cursor-pointer accent-gray-800"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-gray-600 mb-1",
                                                        children: "Min Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: priceRange[0],
                                                        onChange: (e)=>setPriceRange([
                                                                parseInt(e.target.value) || 0,
                                                                priceRange[1]
                                                            ]),
                                                        className: "w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black",
                                                        placeholder: "₹ 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-gray-600 mb-1",
                                                        children: "Max Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: priceRange[1],
                                                        onChange: (e)=>setPriceRange([
                                                                priceRange[0],
                                                                parseInt(e.target.value) || 5000
                                                            ]),
                                                        className: "w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black",
                                                        placeholder: "₹ 5000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-600 text-center",
                                        children: [
                                            "₹",
                                            priceRange[0],
                                            " - ₹",
                                            priceRange[1]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearFilters,
                        className: "w-full py-3 text-sm font-medium text-gray-700 hover:text-black border border-gray-300 rounded hover:bg-gray-50 transition",
                        children: "Clear All Filters"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
} // "use client";
 // import { X } from "lucide-react";
 // interface Product {
 //   id: number;
 //   price: string;
 //   in_stock: boolean;
 // }
 // interface ProductFiltersProps {
 //   products: Product[];
 //   priceRange: number[];
 //   setPriceRange: (range: number[]) => void;
 //   inStockOnly: boolean;
 //   setInStockOnly: (value: boolean) => void;
 //   sortBy: string;
 //   setSortBy: (value: string) => void;
 //   gridCols: number;
 //   setGridCols: (value: number) => void;
 //   productCount: number;
 //   isOpen: boolean;
 //   onClose: () => void;
 // }
 // export default function ProductFilters({
 //   products,
 //   priceRange,
 //   setPriceRange,
 //   inStockOnly,
 //   setInStockOnly,
 //   sortBy,
 //   setSortBy,
 //   gridCols,
 //   setGridCols,
 //   productCount,
 //   isOpen,
 //   onClose
 // }: ProductFiltersProps) {
 //   const handleClearFilters = () => {
 //     setPriceRange([0, 900]);
 //     setInStockOnly(false);
 //     setSortBy("best-selling");
 //   };
 //   if (!isOpen) return null;
 //   return (
 //     <>
 //       {/* Overlay */}
 //       <div
 //         className="fixed inset-0 bg-black/10 bg-opacity-50 z-40"
 //         onClick={onClose}
 //       ></div>
 //       {/* Sidebar Filters - Slides from Right */}
 //       <div className="fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl overflow-y-auto z-50 animate-slide-in">
 //         <div className="flex items-center justify-between mb-6">
 //           <h2 className="text-2xl text-black font-bold">FILTERS</h2>
 //           <button
 //             onClick={onClose}
 //             className="p-2 hover:bg-gray-100 rounded-full transition"
 //           >
 //             <X className="w-6 h-6 text-gray-800" />
 //           </button>
 //         </div>
 //         {/* Product Count */}
 //         <div className="mb-6 pb-4 border-b border-gray-200">
 //           <p className="text-sm text-gray-600">
 //             Showing <span className="font-semibold text-black">{productCount}</span> products
 //           </p>
 //         </div>
 //         {/* Sort By */}
 //         <div className="mb-6">
 //           <label className="block text-black font-semibold mb-3">Sort By</label>
 //           <select 
 //             className="w-full text-black px-4 py-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
 //             value={sortBy}
 //             onChange={(e) => setSortBy(e.target.value)}
 //           >
 //             <option value="best-selling">Best selling</option>
 //             <option value="price-low-high">Price: Low to High</option>
 //             <option value="price-high-low">Price: High to Low</option>
 //             <option value="newest">Newest</option>
 //           </select>
 //         </div>
 //         {/* Grid Columns */}
 //         <div className="mb-6 hidden lg:block">
 //           <label className="block text-black font-semibold mb-3">Grid Layout</label>
 //           <div className="flex items-center gap-2">
 //             {[1, 2, 3, 4, 5].map((cols) => (
 //               <button
 //                 key={cols}
 //                 onClick={() => setGridCols(cols)}
 //                 className={`p-2 border rounded transition flex-1 ${
 //                   gridCols === cols ? 'bg-black text-white border-black' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-300'
 //                 }`}
 //                 title={`${cols} column${cols > 1 ? 's' : ''}`}
 //               >
 //                 <span className="text-xs">{cols}</span>
 //               </button>
 //             ))}
 //           </div>
 //         </div>
 //         {/* Availability Filter */}
 //         <div className="mb-6">
 //           <label className="block text-black font-semibold mb-3">Availability</label>
 //           <label className="flex text-black items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
 //             <input
 //               type="checkbox"
 //               checked={inStockOnly}
 //               onChange={(e) => setInStockOnly(e.target.checked)}
 //               className="w-4 h-4 cursor-pointer"
 //             />
 //             In stock only ({products.filter(p => p.in_stock).length})
 //           </label>
 //         </div>
 //         {/* Price Filter */}
 //         <div className="mb-6">
 //           <label className="block text-black font-semibold mb-3">Price Range</label>
 //           <div className="space-y-3">
 //             <input
 //               type="range"
 //               min="0"
 //               max="900"
 //               value={priceRange[1]}
 //               onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
 //               className="w-full cursor-pointer accent-gray-800"
 //             />
 //             <div className="flex items-center gap-2 text-sm">
 //               <div className="flex flex-col flex-1">
 //                 <label className="text-xs text-gray-600 mb-1">Min Price</label>
 //                 <input
 //                   type="number"
 //                   value={priceRange[0]}
 //                   onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
 //                   className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
 //                   placeholder="₹ 0"
 //                 />
 //               </div>
 //               <div className="flex flex-col flex-1">
 //                 <label className="text-xs text-gray-600 mb-1">Max Price</label>
 //                 <input
 //                   type="number"
 //                   value={priceRange[1]}
 //                   onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 900])}
 //                   className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
 //                   placeholder="₹ 900"
 //                 />
 //               </div>
 //             </div>
 //             <div className="text-xs text-gray-600 text-center">
 //               ₹{priceRange[0]} - ₹{priceRange[1]}
 //             </div>
 //           </div>
 //         </div>
 //         {/* Clear Filters */}
 //         <button
 //           onClick={handleClearFilters}
 //           className="w-full py-3 text-sm font-medium text-gray-700 hover:text-black border border-gray-300 rounded hover:bg-gray-50 transition"
 //         >
 //           Clear All Filters
 //         </button>
 //       </div>
 //     </>
 //   );
 // }
_c = ProductFilters;
var _c;
__turbopack_context__.k.register(_c, "ProductFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/WishlistContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/context/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$screens$2f$home$2f$ProductFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/ProductFilters.tsx [app-client] (ecmascript)");
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
    'kids_boy': 'Kids - Boy',
    'kids_girl': 'Kids - Girl',
    'kids_unisex': 'Kids - Unisex',
    'adults_men': 'Adults - Men',
    'adults_women': 'Adults - Women',
    'adults_unisex': 'Adults - Unisex',
    'all_age_men': 'All Age - Men',
    'all_age_women': 'All Age - Women',
    'all_age_unisex': 'All Age - Unisex'
};
const PRODUCT_CATEGORY_LABELS = {
    'cloth': 'Cloth',
    'jewellery': 'Jewellery'
};
function ProductsPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gridCols, setGridCols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showQuickView, setShowQuickView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        5000
    ]);
    const [inStockOnly, setInStockOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("best-selling");
    const [wishlistLoading, setWishlistLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [groupByCategory, setGroupByCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { wishlistItems, addToWishlist, removeFromWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { isFilterOpen, closeFilters, setShowFilterButton } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilter"])();
    // Get category filters from URL
    const ageCategory = searchParams.get('age_category');
    const productCategory = searchParams.get('product_category');
    // Show filter button when component mounts, hide when unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPage.useEffect": ()=>{
            setShowFilterButton(true);
            return ({
                "ProductsPage.useEffect": ()=>setShowFilterButton(false)
            })["ProductsPage.useEffect"];
        }
    }["ProductsPage.useEffect"], [
        setShowFilterButton
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPage.useEffect": ()=>{
            const fetchProducts = {
                "ProductsPage.useEffect.fetchProducts": async ()=>{
                    try {
                        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1")}/public/products/`);
                        if (!res.ok) throw new Error('Failed to fetch');
                        const data = await res.json();
                        setProducts(data);
                    } catch (err) {
                        setError(err.message || "Failed to fetch");
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProductsPage.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["ProductsPage.useEffect"], []);
    const handleQuickView = (product)=>{
        setSelectedProduct(product);
        setShowQuickView(true);
    };
    const handleWishlistToggle = async (e, productSlug)=>{
        e.preventDefault();
        e.stopPropagation();
        if (!token) {
            alert("Please login to add items to wishlist");
            return;
        }
        if (wishlistLoading === productSlug) return;
        try {
            setWishlistLoading(productSlug);
            const isInWishlist = wishlistItems.some((item)=>item.slug === productSlug);
            if (isInWishlist) {
                await removeFromWishlist(productSlug);
            } else {
                await addToWishlist(productSlug);
            }
        } catch (error) {
            console.error("Wishlist error:", error);
            alert(error.message || "Failed to update wishlist");
        } finally{
            setWishlistLoading(null);
        }
    };
    const isInWishlist = (productSlug)=>{
        return wishlistItems.some((item)=>item.slug === productSlug);
    };
    const filteredProducts = products.filter((product)=>{
        const price = parseFloat(product.price) || 0;
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
        const matchesStock = !inStockOnly || product.in_stock !== false;
        const matchesAgeCategory = !ageCategory || product.age_category === ageCategory;
        const matchesProductCategory = !productCategory || product.product_category === productCategory;
        return matchesPrice && matchesStock && matchesAgeCategory && matchesProductCategory;
    });
    const sortedProducts = [
        ...filteredProducts
    ].sort((a, b)=>{
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        switch(sortBy){
            case "price-low-high":
                return priceA - priceB;
            case "price-high-low":
                return priceB - priceA;
            case "newest":
                return b.id - a.id;
            case "best-selling":
            default:
                return 0;
        }
    });
    // Group products by product category only (not age category)
    const groupedProducts = sortedProducts.reduce((acc, product)=>{
        const key = product.product_category;
        if (!acc[key]) {
            acc[key] = {
                productCategory: product.product_category,
                products: []
            };
        }
        acc[key].products.push(product);
        return acc;
    }, {});
    const ProductCard = ({ product })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-t-lg aspect-square",
                    children: [
                        product.image1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: product.image1,
                            alt: product.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gray-200 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "No Image"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>handleWishlistToggle(e, product.slug),
                                    disabled: wishlistLoading === product.slug,
                                    className: `p-2 rounded-full shadow-lg transition-all ${wishlistLoading === product.slug ? 'bg-gray-100 cursor-not-allowed' : isInWishlist(product.slug) ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500'}`,
                                    title: isInWishlist(product.slug) ? "Remove from wishlist" : "Add to wishlist",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: `w-4 h-4 sm:w-5 sm:h-5 transition-all ${isInWishlist(product.slug) ? 'fill-current' : ''} ${wishlistLoading === product.slug ? 'animate-pulse' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickView(product),
                                    className: "bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-100 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-4 h-4 text-gray-800 sm:w-5 sm:h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 186,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                    lineNumber: 172,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 lg:p-4 flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mb-1 uppercase",
                            children: "BabyDay"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 216,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium mb-2 line-clamp-2 text-black flex-1",
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 217,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base lg:text-lg font-bold text-gray-900",
                                    children: [
                                        "₹ ",
                                        parseFloat(product.price).toFixed(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 11
                                }, this),
                                product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs lg:text-sm text-gray-400 line-through",
                                    children: [
                                        "₹ ",
                                        parseFloat(product.mrp).toFixed(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 222,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/products/${product.slug}`,
                            className: "block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto",
                            children: "Detail View"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                    lineNumber: 215,
                    columnNumber: 7
                }, this)
            ]
        }, product.id, true, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
            lineNumber: 167,
            columnNumber: 5
        }, this);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-lg",
            children: "Loading products..."
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
            lineNumber: 246,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
            lineNumber: 254,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$screens$2f$home$2f$ProductFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                products: products,
                priceRange: priceRange,
                setPriceRange: setPriceRange,
                inStockOnly: inStockOnly,
                setInStockOnly: setInStockOnly,
                sortBy: sortBy,
                setSortBy: setSortBy,
                gridCols: gridCols,
                setGridCols: setGridCols,
                productCount: sortedProducts.length,
                isOpen: isFilterOpen,
                onClose: closeFilters
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 lg:p-6 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: (ageCategory || productCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: "Filtered by:"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this),
                                        ageCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition",
                                            children: [
                                                AGE_CATEGORY_LABELS[ageCategory] || ageCategory,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        productCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            className: "inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition",
                                            children: [
                                                PRODUCT_CATEGORY_LABELS[productCategory] || productCategory,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGroupByCategory(!groupByCategory),
                                className: "px-4 py-2 border text-gray-800 border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-50 transition",
                                children: groupByCategory ? 'Show All' : 'Group by Category'
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    sortedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg mb-4",
                                children: "No products found"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPriceRange([
                                        0,
                                        5000
                                    ]);
                                    setInStockOnly(false);
                                },
                                className: "text-blue-600 hover:underline",
                                children: "Clear filters"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this) : groupByCategory ? // Grouped by Category View
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: Object.entries(groupedProducts).map(([key, group])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "m-3 h-8 w-2 bg-black rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl lg:text-3xl  font-bold text-black",
                                                    children: PRODUCT_CATEGORY_LABELS[group.productCategory] || group.productCategory
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 lg:gap-6",
                                        style: {
                                            gridTemplateColumns: `repeat(${("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth >= 1024 ? gridCols : window.innerWidth >= 640 ? 2 : 1}, minmax(0, 1fr))`
                                        },
                                        children: group.products.slice(0, gridCols * 2).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                                product: product
                                            }, product.id, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/products?product_category=${group.productCategory}`,
                                                className: "inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg",
                                                children: [
                                                    "View All ",
                                                    PRODUCT_CATEGORY_LABELS[group.productCategory] || group.productCategory,
                                                    " (",
                                                    group.products.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            group.products.length > gridCols * 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-gray-800",
                                                children: [
                                                    "Showing ",
                                                    gridCols * 2,
                                                    " of ",
                                                    group.products.length,
                                                    " items"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 336,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this) : // Simple Grid View
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 lg:gap-6",
                        style: {
                            gridTemplateColumns: `repeat(${("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth >= 1024 ? gridCols : window.innerWidth >= 640 ? 2 : 1}, minmax(0, 1fr))`
                        },
                        children: sortedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                product: product
                            }, product.id, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            showQuickView && selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 lg:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowQuickView(false),
                                className: "float-right p-2 hover:bg-gray-100 rounded-full transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 lg:w-6 text-black lg:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square",
                                        children: selectedProduct.image1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedProduct.image1,
                                            alt: selectedProduct.title,
                                            className: "w-full h-full object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gray-200 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "No Image"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs lg:text-sm text-gray-500 mb-2",
                                                children: "BABYDAY"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl lg:text-2xl font-bold mb-4 text-black",
                                                children: selectedProduct.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl lg:text-3xl font-bold text-green-600",
                                                        children: [
                                                            "₹ ",
                                                            parseFloat(selectedProduct.price).toFixed(0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this),
                                                    selectedProduct.mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg lg:text-xl text-gray-400 line-through",
                                                        children: [
                                                            "₹ ",
                                                            parseFloat(selectedProduct.mrp).toFixed(0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 430,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm lg:text-base text-gray-700 mb-6 flex-1",
                                                children: selectedProduct.age_limits || selectedProduct.material_type || "High-quality product with unique design. Perfect for everyday use."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-3 mt-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/products/${selectedProduct.slug}`,
                                                        className: "flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-center font-medium text-sm lg:text-base",
                                                        children: "View Full Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>handleWishlistToggle(e, selectedProduct.slug),
                                                        disabled: wishlistLoading === selectedProduct.slug,
                                                        className: `px-6 py-3 border rounded-lg transition ${wishlistLoading === selectedProduct.slug ? 'border-gray-200 cursor-not-allowed' : isInWishlist(selectedProduct.slug) ? 'border-red-300 bg-red-50 hover:bg-red-100' : 'border-gray-300 hover:bg-gray-50'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: `w-5 h-5 lg:w-6 lg:h-6 mx-auto transition-all ${isInWishlist(selectedProduct.slug) ? 'fill-current text-red-500' : 'text-gray-600'} ${wishlistLoading === selectedProduct.slug ? 'animate-pulse' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                                lineNumber: 411,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                        lineNumber: 403,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                    lineNumber: 402,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
                lineNumber: 401,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/app/products/page.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useEffect, useState } from "react";
 // import { useSearchParams } from "next/navigation";
 // import Link from "next/link";
 // import { Heart, Eye, X } from "lucide-react";
 // import { useWishlist } from "@/components/context/WishlistContext";
 // import { useCart } from "@/components/context/CartContext";
 // import { useFilter } from "@/components/context/FilterContext";
 // import ProductFilters from "@/components/screens/home/ProductFilters";
 // interface Product {
 //   id: number;
 //   slug: string;
 //   title: string;
 //   price: string;
 //   mrp?: string;
 //   image1?: string;
 //   in_stock: boolean;
 //   age_limits?: string;
 //   material_type?: string;
 //   age_category: string;
 //   product_category: string;
 // }
 // const AGE_CATEGORY_LABELS: { [key: string]: string } = {
 //   'kids_boy': 'Kids - Boy',
 //   'kids_girl': 'Kids - Girl',
 //   'kids_unisex': 'Kids - Unisex',
 //   'adults_men': 'Adults - Men',
 //   'adults_women': 'Adults - Women',
 //   'adults_unisex': 'Adults - Unisex',
 //   'all_age_men': 'All Age - Men',
 //   'all_age_women': 'All Age - Women',
 //   'all_age_unisex': 'All Age - Unisex',
 // };
 // const PRODUCT_CATEGORY_LABELS: { [key: string]: string } = {
 //   'cloth': 'Clothing',
 //   'jewellery': 'Jewellery',
 // };
 // export default function ProductsPage() {
 //   const searchParams = useSearchParams();
 //   const [products, setProducts] = useState<Product[]>([]);
 //   const [loading, setLoading] = useState(true);
 //   const [error, setError] = useState("");
 //   const [gridCols, setGridCols] = useState(5);
 //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
 //   const [showQuickView, setShowQuickView] = useState(false);
 //   const [priceRange, setPriceRange] = useState([0, 5000]);
 //   const [inStockOnly, setInStockOnly] = useState(false);
 //   const [sortBy, setSortBy] = useState("best-selling");
 //   const [wishlistLoading, setWishlistLoading] = useState<string | null>(null);
 //   const [groupByCategory, setGroupByCategory] = useState(true);
 //   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
 //   const { token } = useCart();
 //   const { isFilterOpen, closeFilters, setShowFilterButton } = useFilter();
 //   // Get category filters from URL
 //   const ageCategory = searchParams.get('age_category');
 //   const productCategory = searchParams.get('product_category');
 //   // Show filter button when component mounts, hide when unmounts
 //   useEffect(() => {
 //     setShowFilterButton(true);
 //     return () => setShowFilterButton(false);
 //   }, [setShowFilterButton]);
 //   useEffect(() => {
 //     const fetchProducts = async () => {
 //       try {
 //         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/`);
 //         if (!res.ok) throw new Error('Failed to fetch');
 //         const data = await res.json();
 //         setProducts(data);
 //       } catch (err) {
 //         setError((err as Error).message || "Failed to fetch");
 //       } finally {
 //         setLoading(false);
 //       }
 //     };
 //     fetchProducts();
 //   }, []);
 //   const handleQuickView = (product: Product) => {
 //     setSelectedProduct(product);
 //     setShowQuickView(true);
 //   };
 //   const handleWishlistToggle = async (e: React.MouseEvent, productSlug: string) => {
 //     e.preventDefault();
 //     e.stopPropagation();
 //     if (!token) {
 //       alert("Please login to add items to wishlist");
 //       return;
 //     }
 //     if (wishlistLoading === productSlug) return;
 //     try {
 //       setWishlistLoading(productSlug);
 //       const isInWishlist = wishlistItems.some((item: any) => item.slug === productSlug);
 //       if (isInWishlist) {
 //         await removeFromWishlist(productSlug);
 //       } else {
 //         await addToWishlist(productSlug);
 //       }
 //     } catch (error) {
 //       console.error("Wishlist error:", error);
 //       alert((error as Error).message || "Failed to update wishlist");
 //     } finally {
 //       setWishlistLoading(null);
 //     }
 //   };
 //   const isInWishlist = (productSlug: string) => {
 //     return wishlistItems.some((item: any) => item.slug === productSlug);
 //   };
 //   const filteredProducts = products.filter((product) => {
 //     const price = parseFloat(product.price) || 0;
 //     const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
 //     const matchesStock = !inStockOnly || (product.in_stock !== false);
 //     const matchesAgeCategory = !ageCategory || product.age_category === ageCategory;
 //     const matchesProductCategory = !productCategory || product.product_category === productCategory;
 //     return matchesPrice && matchesStock && matchesAgeCategory && matchesProductCategory;
 //   });
 //   const sortedProducts = [...filteredProducts].sort((a, b) => {
 //     const priceA = parseFloat(a.price) || 0;
 //     const priceB = parseFloat(b.price) || 0;
 //     switch (sortBy) {
 //       case "price-low-high":
 //         return priceA - priceB;
 //       case "price-high-low":
 //         return priceB - priceA;
 //       case "newest":
 //         return b.id - a.id;
 //       case "best-selling":
 //       default:
 //         return 0;
 //     }
 //   });
 //   // Group products by product category only (not age category)
 //   const groupedProducts = sortedProducts.reduce((acc, product) => {
 //     const key = product.product_category;
 //     if (!acc[key]) {
 //       acc[key] = {
 //         productCategory: product.product_category,
 //         products: []
 //       };
 //     }
 //     acc[key].products.push(product);
 //     return acc;
 //   }, {} as Record<string, { productCategory: string; products: Product[] }>);
 //   const ProductCard = ({ product }: { product: Product }) => (
 //     <div
 //       key={product.id}
 //       className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 group relative flex flex-col"
 //     >
 //       {/* Product Image */}
 //       <div className="relative overflow-hidden rounded-t-lg aspect-square">
 //         {product.image1 ? (
 //           <img
 //             src={product.image1}
 //             alt={product.title}
 //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
 //           />
 //         ) : (
 //           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
 //             <span className="text-gray-400">No Image</span>
 //           </div>
 //         )}
 //         {/* Hover Buttons */}
 //         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
 //           <button 
 //             onClick={(e) => handleWishlistToggle(e, product.slug)}
 //             disabled={wishlistLoading === product.slug}
 //             className={`p-2 rounded-full shadow-lg transition-all ${
 //               wishlistLoading === product.slug
 //                 ? 'bg-gray-100 cursor-not-allowed'
 //                 : isInWishlist(product.slug)
 //                   ? 'bg-red-50 text-red-500 hover:bg-red-100'
 //                   : 'bg-gray-100 text-gray-800 hover:bg-red-50 hover:text-red-500'
 //             }`}
 //             title={isInWishlist(product.slug) ? "Remove from wishlist" : "Add to wishlist"}
 //           >
 //             <Heart 
 //               className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
 //                 isInWishlist(product.slug) ? 'fill-current' : ''
 //               } ${wishlistLoading === product.slug ? 'animate-pulse' : ''}`}
 //             />
 //           </button>
 //           <button
 //             onClick={() => handleQuickView(product)}
 //             className="bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
 //           >
 //             <Eye className="w-4 h-4 text-gray-800 sm:w-5 sm:h-5" />
 //           </button>
 //         </div>
 //       </div>
 //       {/* Product Info */}
 //       <div className="p-3 lg:p-4 flex flex-col flex-1">
 //         <p className="text-xs text-gray-500 mb-1 uppercase">BabyDay</p>
 //         <h3 className="text-sm font-medium mb-2 line-clamp-2 text-black flex-1">
 //           {product.title}
 //         </h3>
 //         {/* Price */}
 //         <div className="flex items-center gap-2 mb-3">
 //           <span className="text-base lg:text-lg font-bold text-gray-900">
 //             ₹ {parseFloat(product.price).toFixed(0)}
 //           </span>
 //           {product.mrp && parseFloat(product.mrp) > parseFloat(product.price) && (
 //             <span className="text-xs lg:text-sm text-gray-400 line-through">
 //               ₹ {parseFloat(product.mrp).toFixed(0)}
 //             </span>
 //           )}
 //         </div>
 //         {/* Detail View Button */}
 //         <Link
 //           href={`/products/${product.slug}`}
 //           className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition text-xs lg:text-sm font-medium mt-auto"
 //         >
 //           Detail View
 //         </Link>
 //       </div>
 //     </div>
 //   );
 //   if (loading) {
 //     return (
 //       <div className="min-h-screen flex items-center justify-center text-lg">
 //         Loading products...
 //       </div>
 //     );
 //   }
 //   if (error) {
 //     return (
 //       <div className="min-h-screen flex items-center justify-center text-red-500">
 //         {error}
 //       </div>
 //     );
 //   }
 //   return (
 //     <div className="bg-gray-50 min-h-screen">
 //       {/* Filter Sidebar Component */}
 //       <ProductFilters
 //         products={products}
 //         priceRange={priceRange}
 //         setPriceRange={setPriceRange}
 //         inStockOnly={inStockOnly}
 //         setInStockOnly={setInStockOnly}
 //         sortBy={sortBy}
 //         setSortBy={setSortBy}
 //         gridCols={gridCols}
 //         setGridCols={setGridCols}
 //         productCount={sortedProducts.length}
 //         isOpen={isFilterOpen}
 //         onClose={closeFilters}
 //       />
 //       {/* Main Content */}
 //       <div className="p-4 lg:p-6 w-full">
 //         {/* Top Bar with Toggle */}
 //         <div className="mb-6 flex items-center justify-between">
 //           <div className="flex items-center gap-4">
 //             {/* Category Filter Badge */}
 //             {(ageCategory || productCategory) && (
 //               <div className="flex items-center gap-2 flex-wrap">
 //                 <span className="text-sm text-gray-600">Filtered by:</span>
 //                 {ageCategory && (
 //                   <Link
 //                     href="/products"
 //                     className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
 //                   >
 //                     {AGE_CATEGORY_LABELS[ageCategory] || ageCategory}
 //                     <X className="w-3 h-3" />
 //                   </Link>
 //                 )}
 //                 {productCategory && (
 //                   <Link
 //                     href="/products"
 //                     className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
 //                   >
 //                     {PRODUCT_CATEGORY_LABELS[productCategory] || productCategory}
 //                     <X className="w-3 h-3" />
 //                   </Link>
 //                 )}
 //               </div>
 //             )}
 //           </div>
 //           {/* Group By Toggle */}
 //           <button
 //             onClick={() => setGroupByCategory(!groupByCategory)}
 //             className="px-4 py-2 border text-gray-800 border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
 //           >
 //             {groupByCategory ? 'Show All' : 'Group by Category'}
 //           </button>
 //         </div>
 //         {/* Products Display */}
 //         {sortedProducts.length === 0 ? (
 //           <div className="text-center py-20">
 //             <p className="text-gray-500 text-lg mb-4">No products found</p>
 //             <button
 //               onClick={() => {
 //                 setPriceRange([0, 900]);
 //                 setInStockOnly(false);
 //               }}
 //               className="text-blue-600 hover:underline"
 //             >
 //               Clear filters
 //             </button>
 //           </div>
 //         ) : groupByCategory ? (
 //           // Grouped by Category View
 //           <div className="space-y-12">
 //             {Object.entries(groupedProducts).map(([key, group]) => (
 //               <div key={key}>
 //                 {/* Category Header */}
 //                 <div className="mb-6">
 //                   <div className=" flex items-center">
 //                     <div className="m-3 h-8 w-2 bg-black rounded-sm"></div>
 //                     <h2 className="text-2xl lg:text-3xl  font-bold text-black">
 //                       {PRODUCT_CATEGORY_LABELS[group.productCategory] || group.productCategory}
 //                     </h2>
 //                     {/* <p className="text-sm lg:text-base text-gray-600">
 //                       {group.products.length} {group.products.length === 1 ? 'item' : 'items'}
 //                     </p> 
 //                     <div className="mt-3 h-1 w-20 bg-black rounded-full"></div> */}
 //                   </div>
 //                 </div>
 //                 {/* Products Grid */}
 //                 <div 
 //                   className="grid gap-4 lg:gap-6"
 //                   style={{
 //                     gridTemplateColumns: `repeat(${
 //                       typeof window !== 'undefined' && window.innerWidth >= 1024 
 //                         ? gridCols 
 //                         : window.innerWidth >= 640 ? 2 : 1
 //                     }, minmax(0, 1fr))`
 //                   }}
 //                 >
 //                   {group.products.slice(0, gridCols * 2).map((product) => (
 //                     <ProductCard key={product.id} product={product} />
 //                   ))}
 //                 </div>
 //                 {/* View All Button at Bottom - Always show */}
 //                 <div className="mt-8 text-center">
 //                   <Link
 //                     href={`/products?product_category=${group.productCategory}`}
 //                     className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg"
 //                   >
 //                     View All {PRODUCT_CATEGORY_LABELS[group.productCategory] || group.productCategory} ({group.products.length})
 //                   </Link>
 //                   {group.products.length > gridCols * 2 && (
 //                     <p className="mt-3 text-sm text-gray-800">
 //                       Showing {gridCols * 2} of {group.products.length} items
 //                     </p>
 //                   )}
 //                 </div>
 //               </div>
 //             ))}
 //           </div>
 //         ) : (
 //           // Simple Grid View
 //           <div 
 //             className="grid gap-4 lg:gap-6"
 //             style={{
 //               gridTemplateColumns: `repeat(${
 //                 typeof window !== 'undefined' && window.innerWidth >= 1024 
 //                   ? gridCols 
 //                   : window.innerWidth >= 640 ? 2 : 1
 //               }, minmax(0, 1fr))`
 //             }}
 //           >
 //             {sortedProducts.map((product) => (
 //               <ProductCard key={product.id} product={product} />
 //             ))}
 //           </div>
 //         )}
 //       </div>
 //       {/* Quick View Modal */}
 //       {showQuickView && selectedProduct && (
 //         <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
 //           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
 //             <div className="p-4 lg:p-6">
 //               <button
 //                 onClick={() => setShowQuickView(false)}
 //                 className="float-right p-2 hover:bg-gray-100 rounded-full transition"
 //               >
 //                 <X className="w-5 h-5 lg:w-6 text-black lg:h-6" />
 //               </button>
 //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-12">
 //                 <div className="aspect-square">
 //                   {selectedProduct.image1 ? (
 //                     <img
 //                       src={selectedProduct.image1}
 //                       alt={selectedProduct.title}
 //                       className="w-full h-full object-cover rounded-lg"
 //                     />
 //                   ) : (
 //                     <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
 //                       <span className="text-gray-400">No Image</span>
 //                     </div>
 //                   )}
 //                 </div>
 //                 <div className="flex flex-col">
 //                   <p className="text-xs lg:text-sm text-gray-500 mb-2">BABYDAY</p>
 //                   <h2 className="text-xl lg:text-2xl font-bold mb-4 text-black">{selectedProduct.title}</h2>
 //                   <div className="flex items-center gap-3 mb-6">
 //                     <span className="text-2xl lg:text-3xl font-bold text-green-600">
 //                       ₹ {parseFloat(selectedProduct.price).toFixed(0)}
 //                     </span>
 //                     {selectedProduct.mrp && (
 //                       <span className="text-lg lg:text-xl text-gray-400 line-through">
 //                         ₹ {parseFloat(selectedProduct.mrp).toFixed(0)}
 //                       </span>
 //                     )}
 //                   </div>
 //                   <p className="text-sm lg:text-base text-gray-700 mb-6 flex-1">
 //                     {selectedProduct.age_limits || selectedProduct.material_type || 
 //                      "High-quality product with unique design. Perfect for everyday use."}
 //                   </p>
 //                   <div className="flex flex-col sm:flex-row gap-3 mt-auto">
 //                     <Link
 //                       href={`/products/${selectedProduct.slug}`}
 //                       className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-center font-medium text-sm lg:text-base"
 //                     >
 //                       View Full Details
 //                     </Link>
 //                     <button 
 //                       onClick={(e) => handleWishlistToggle(e, selectedProduct.slug)}
 //                       disabled={wishlistLoading === selectedProduct.slug}
 //                       className={`px-6 py-3 border rounded-lg transition ${
 //                         wishlistLoading === selectedProduct.slug
 //                           ? 'border-gray-200 cursor-not-allowed'
 //                           : isInWishlist(selectedProduct.slug)
 //                             ? 'border-red-300 bg-red-50 hover:bg-red-100'
 //                             : 'border-gray-300 hover:bg-gray-50'
 //                       }`}
 //                     >
 //                       <Heart 
 //                         className={`w-5 h-5 lg:w-6 lg:h-6 mx-auto transition-all ${
 //                           isInWishlist(selectedProduct.slug) 
 //                             ? 'fill-current text-red-500' 
 //                             : 'text-gray-600'
 //                         } ${wishlistLoading === selectedProduct.slug ? 'animate-pulse' : ''}`}
 //                       />
 //                     </button>
 //                   </div>
 //                 </div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       )}
 //     </div>
 //   );
 // }
_s(ProductsPage, "PUjkt6vmzJhVVX+buDEQ/7YiX0Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$components$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilter"]
    ];
});
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const slides = [
    {
        title: "Discover Fashion That",
        highlight: "Fits Your Lifestyle",
        description: "From simple casual to statement shopping experiences, discover collections to elevate your wardrobe.",
        image: "/icons/hero/hero1.png",
        imagePosition: "right",
        link: "/products?product_category=cloth",
        bgColor: "bg-[#F3E7D3]"
    },
    {
        title: "Upgrade Your",
        highlight: "Daily Style",
        description: "Hand-picked collections designed for comfort, confidence, and class.",
        image: "/icons/hero/hero2.png",
        imagePosition: "left",
        link: "/products?product_category=jewellery",
        bgColor: "bg-[#D6E4FF]"
    },
    {
        title: "New Season",
        highlight: "New Arrivals",
        description: "Stay ahead with trending outfits crafted for modern fashion lovers.",
        image: "/icons/hero/hero.png",
        imagePosition: "right",
        link: "/products?age_category=all_age_unisex",
        bgColor: "bg-[#DCECDC]"
    },
    {
        title: "New Season",
        highlight: "New Arrivals",
        description: "Stay ahead with trending outfits crafted for modern fashion lovers.",
        image: "/icons/hero/hero5.png",
        imagePosition: "left",
        link: "/products?age_category=all_age_unisex",
        bgColor: "bg-[#E6DCCF]"
    },
    {
        title: "New Season",
        highlight: "New Arrivals",
        description: "Stay ahead with trending outfits crafted for modern fashion lovers.",
        image: "/icons/hero/hero6.png",
        imagePosition: "right",
        link: "/products?age_category=all_age_unisex",
        bgColor: "bg-[#E3DDF4]"
    }
];
function Hero() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>{
                    setCurrent({
                        "Hero.useEffect.timer": (prev)=>(prev + 1) % slides.length
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 5000);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative h-[50vh] min-h-[420px] overflow-hidden transition-colors duration-700 ${slides[current].bgColor}`,
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto h-full px-6 py-8 md:py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid md:grid-cols-2 gap-8 items-center h-full ${slide.imagePosition === "left" ? "md:grid-flow-dense" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col justify-center ${slide.imagePosition === "left" ? "md:col-start-2" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight",
                                            children: [
                                                slide.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-800",
                                                    children: slide.highlight
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-base md:text-lg text-gray-700 max-w-md",
                                            children: slide.description
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: slide.link,
                                            className: "inline-block mt-6 bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors w-fit rounded-sm",
                                            children: "Shop Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative h-full max-h-[420px] flex items-center justify-center ${slide.imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: slide.image,
                                            alt: slide.title,
                                            fill: true,
                                            priority: index === 0,
                                            className: "object-contain max-h-full",
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrent(index),
                        className: `w-3 rounded-full transition-all ${index === current ? "h-12 bg-black" : "h-3 bg-gray-400 hover:bg-gray-600"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Babyday$2d$maind31$2e$9_15$2f$Babyday$2d$main$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrent(index),
                        className: `h-2 rounded-full transition-all ${index === current ? "w-8 bg-black" : "w-2 bg-gray-400"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Babyday-maind31.9_15/Babyday-main/frontend/components/screens/home/Hero.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useEffect, useState } from "react";
 // import Image from "next/image";
 // import Link from "next/link";
 // import { link } from "fs";
 // const slides = [
 //   {
 //     title: "Discover Fashion That",
 //     highlight: "Fits Your Lifestyle",
 //     description:
 //       "From simple casual to statement shopping experiences, discover collections to elevate your wardrobe.",
 //     image: "/icons/hero/hero1.png",
 //     imagePosition: "right",
 //     link: "/products?product_category=cloth",
 //     bgColor: "bg-[#f5d7dd]",
 //   },
 //   {
 //     title: "Upgrade Your",
 //     highlight: "Daily Style",
 //     description:
 //       "Hand-picked collections designed for comfort, confidence, and class.",
 //     image: "/icons/hero/hero2.png",
 //     imagePosition: "left",
 //     link: "/products?product_category=jewellery",
 //     bgColor: "bg-[#d7eaf5]",
 //   },
 //   {
 //     title: "New Season",
 //     highlight: "New Arrivals",
 //     description:
 //       "Stay ahead with trending outfits crafted for modern fashion lovers.",
 //     image: "/icons/hero/hero.png",
 //     imagePosition: "right",
 //     link: "/products?age_category=all_age_unisex",
 //     bgColor: "bg-[#e6f5d7]",
 //   },
 //   {
 //     title: "New Season",
 //     highlight: "New Arrivals",
 //     description:
 //       "Stay ahead with trending outfits crafted for modern fashion lovers.",
 //     image: "/icons/hero/hero5.png",
 //     imagePosition: "left",
 //     link: "/products?age_category=all_age_unisex",
 //     bgColor: "bg-[#f5efd7]",
 //   },
 //   {
 //     title: "New Season",
 //     highlight: "New Arrivals",
 //     description:
 //       "Stay ahead with trending outfits crafted for modern fashion lovers.",
 //     image: "/icons/hero/hero6.png",
 //     imagePosition: "right",
 //     link: "/products?age_category=all_age_unisex",
 //     bgColor: "bg-[#F1EEFA]",
 //   },
 // ];
 // export default function Hero() {
 //   const [current, setCurrent] = useState(0);
 //   useEffect(() => {
 //     const timer = setInterval(() => {
 //       setCurrent((prev) => (prev + 1) % slides.length);
 //     }, 5000);
 //     return () => clearInterval(timer);
 //   }, []);
 //   return (
 //     <section
 //       className={`relative min-h-[80vh] overflow-hidden transition-colors duration-700 ${
 //         slides[current].bgColor
 //       }`}
 //     >
 //       {slides.map((slide, index) => (
 //         <div
 //           key={index}
 //           className={`absolute inset-0 transition-opacity duration-700 ${
 //             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
 //           }`}
 //         >
 //           <div className="max-w-7xl mx-auto h-full px-6 py-12 md:py-20">
 //             <div className={`grid md:grid-cols-2 gap-8 items-center h-full ${
 //               slide.imagePosition === "left" ? "md:grid-flow-dense" : ""
 //             }`}>
 //               {/* Text Content */}
 //               <div className={`flex flex-col justify-center ${
 //                 slide.imagePosition === "left" ? "md:col-start-2" : ""
 //               }`}>
 //                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
 //                   {slide.title}
 //                   <br />
 //                   <span className="text-gray-800">{slide.highlight}</span>
 //                 </h1>
 //                 <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md">
 //                   {slide.description}
 //                 </p>
 //                 <Link
 //                   href={slide.link}
 //                   className="inline-block mt-8 bg-black text-white px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-colors w-fit rounded-sm"
 //                 >
 //                   Shop Now
 //                 </Link>
 //               </div>
 //               {/* Image */}
 //               <div className={`relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center ${
 //                 slide.imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""
 //               }`}>
 //                 <div className="relative w-full h-full">
 //                   <Image
 //                     src={slide.image}
 //                     alt={slide.title}
 //                     fill
 //                     priority={index === 0}
 //                     className={`object-contain ${
 //                       slide.imagePosition === "left" 
 //                         ? "object-left" 
 //                         : "object-right"
 //                     }`}
 //                     sizes="(max-width: 768px) 100vw, 50vw"
 //                   />
 //                 </div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       ))}
 //       {/* Navigation Dots - Right Side Vertical */}
 //       <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
 //         {slides.map((_, index) => (
 //           <button
 //             key={index}
 //             onClick={() => setCurrent(index)}
 //             className={`w-3 rounded-full transition-all ${
 //               index === current 
 //                 ? "h-12 bg-black" 
 //                 : "h-3 bg-gray-400 hover:bg-gray-600"
 //             }`}
 //             aria-label={`Go to slide ${index + 1}`}
 //           />
 //         ))}
 //       </div>
 //       {/* Mobile Dots - Bottom Center Horizontal */}
 //       <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
 //         {slides.map((_, index) => (
 //           <button
 //             key={index}
 //             onClick={() => setCurrent(index)}
 //             className={`h-2 rounded-full transition-all ${
 //               index === current ? "w-8 bg-black" : "w-2 bg-gray-400"
 //             }`}
 //             aria-label={`Go to slide ${index + 1}`}
 //           />
 //         ))}
 //       </div>
 //     </section>
 //   );
 // }
_s(Hero, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Babyday-maind31_9_15_Babyday-main_frontend_265e6423._.js.map