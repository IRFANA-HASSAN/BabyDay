module.exports = [
"[project]/components/screens/home/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const slides = [
    {
        title: "Discover Fashion That",
        highlight: "Fits Your Lifestyle",
        description: "From simple casual to statement shopping experiences, discover collections to elevate your wardrobe.",
        image: "/icons/hero/hero1.png"
    },
    {
        title: "Upgrade Your",
        highlight: "Daily Style",
        description: "Hand-picked collections designed for comfort, confidence, and class.",
        image: "/icons/hero/hero2.png"
    },
    {
        title: "New Season",
        highlight: "New Arrivals",
        description: "Stay ahead with trending outfits crafted for modern fashion lovers.",
        image: "/icons/hero/hero3.png"
    }
];
function Hero() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrent((prev)=>(prev + 1) % slides.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[80vh] bg-[#faf7f3] overflow-hidden",
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto grid md:grid-cols-2 items-center h-full px-6 py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-gray-900 leading-tight",
                                        children: [
                                            slide.title,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/screens/home/Hero.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: slide.highlight
                                            }, void 0, false, {
                                                fileName: "[project]/components/screens/home/Hero.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/screens/home/Hero.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-gray-600 max-w-md",
                                        children: slide.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home/Hero.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "inline-block mt-6 bg-black text-white px-6 py-3 text-sm font-semibold",
                                        children: "Shop Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/screens/home/Hero.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/screens/home/Hero.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-10 md:mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: slide.image,
                                    alt: "Hero Image",
                                    width: 500,
                                    height: 600,
                                    priority: index === 0
                                }, void 0, false, {
                                    fileName: "[project]/components/screens/home/Hero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/screens/home/Hero.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/screens/home/Hero.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/components/screens/home/Hero.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrent(index),
                        className: `h-2 rounded-full transition-all ${index === current ? "w-6 bg-black" : "w-2 bg-gray-400"}`
                    }, index, false, {
                        fileName: "[project]/components/screens/home/Hero.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/screens/home/Hero.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/screens/home/Hero.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useEffect, useState } from "react";
 // import Image from "next/image";
 // import Link from "next/link";
 // const slides = [
 //   {
 //     id: 1,
 //     title: "Discover Fashion That",
 //     highlight: "Fits Your Lifestyle",
 //     description:
 //       "From simple casual to statement shopping experiences, discover collections to elevate your wardrobe.",
 //     image: "/hero/hero1.png",
 //     buttonText: "Shop Now",
 //     buttonLink: "/products",
 //   },
 //   {
 //     id: 2,
 //     title: "Upgrade Your",
 //     highlight: "Daily Style",
 //     description:
 //       "Hand-picked collections designed for comfort, confidence, and class.",
 //     image: "/hero/hero2.png",
 //     buttonText: "Explore",
 //     buttonLink: "/products",
 //   },
 //   {
 //     id: 3,
 //     title: "New Season",
 //     highlight: "New Arrivals",
 //     description:
 //       "Stay ahead with trending outfits crafted for modern fashion lovers.",
 //     image: "/hero/hero3.png",
 //     buttonText: "View Collection",
 //     buttonLink: "/products",
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
 //     <section className="relative w-full overflow-hidden bg-[#faf7f3]">
 //       {slides.map((slide, index) => (
 //         <div
 //           key={slide.id}
 //           className={`absolute inset-0 transition-opacity duration-700 ${
 //             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
 //           }`}
 //         >
 //           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16">
 //             {/* Text */}
 //             <div>
 //               <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
 //                 {slide.title}
 //                 <br />
 //                 <span className="text-gray-800">{slide.highlight}</span>
 //               </h1>
 //               <p className="mt-4 text-gray-600 max-w-md">
 //                 {slide.description}
 //               </p>
 //               <Link
 //                 href={slide.buttonLink}
 //                 className="inline-block mt-6 bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition"
 //               >
 //                 {slide.buttonText}
 //               </Link>
 //             </div>
 //             {/* Image */}
 //             <div className="relative mt-10 md:mt-0 flex justify-center">
 //               <Image
 //                 src={slide.image}
 //                 alt={slide.title}
 //                 width={500}
 //                 height={600}
 //                 className="object-contain"
 //                 priority={index === 0}
 //               />
 //             </div>
 //           </div>
 //         </div>
 //       ))}
 //       {/* Dots */}
 //       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
 //         {slides.map((_, index) => (
 //           <button
 //             key={index}
 //             onClick={() => setCurrent(index)}
 //             className={`h-2 w-2 rounded-full transition-all ${
 //               index === current ? "bg-black w-6" : "bg-gray-400"
 //             }`}
 //           />
 //         ))}
 //       </div>
 //     </section>
 //   );
 // }
}),
];

//# sourceMappingURL=components_screens_home_Hero_tsx_c3b16822._.js.map