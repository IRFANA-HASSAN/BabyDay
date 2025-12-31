(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/context/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accessToken, setAccessToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 🔥 run EVERY TIME token changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!accessToken) {
                setUser(null);
                setLoading(false);
                return;
            }
            const fetchUser = {
                "AuthProvider.useEffect.fetchUser": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:8000/api/v1/user/me/", {
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            }
                        });
                        const { username, email } = response.data;
                        setUser({
                            username,
                            email
                        });
                    } catch (error) {
                        console.error("Error fetching user info:", error.response || error.message);
                        logout(); // clear if token is invalid
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.fetchUser"];
            try {
                const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(accessToken);
                const expiresAt = decoded.exp * 1000;
                const remainingTime = expiresAt - Date.now();
                if (remainingTime <= 0) {
                    logout();
                    return;
                }
                setUser({
                    username: decoded.username || decoded.user_id
                });
                // ⏰ AUTO logout when token expires
                const timer = setTimeout(logout, remainingTime);
                fetchUser();
                return ({
                    "AuthProvider.useEffect": ()=>clearTimeout(timer)
                })["AuthProvider.useEffect"];
            } catch  {
                logout();
            } finally{
                setLoading(false);
            }
        }
    }["AuthProvider.useEffect"], [
        accessToken
    ]);
    // 🔁 restore token on refresh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const stored = localStorage.getItem("access");
            if (stored) setAccessToken(stored);
            else setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = ({ access, refresh, username, email })=>{
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        setAccessToken(access); // 🔥 THIS triggers timer
        setUser({
            username,
            email
        });
    };
    const logout = ()=>{
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setAccessToken(null);
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/context/AuthContext.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "h0prqyYnunaqiZlmu7/M4CGySJc=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* Base URL from env */ const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1");
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const CartProvider = ({ children })=>{
    _s();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* Load token */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            setToken(localStorage.getItem("access"));
        }
    }["CartProvider.useEffect"], []);
    const setAuthToken = (newToken)=>{
        localStorage.setItem("access", newToken);
        setToken(newToken);
    };
    /* Fetch Cart */ const fetchCart = async (authToken)=>{
        if (!authToken) {
            setCartItems([]);
            setLoading(false);
            return;
        }
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${BASE_URL}/user/cart/`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setCartItems(res.data);
        } catch (err) {
            console.error("Fetch cart error", err);
            setCartItems([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            fetchCart(token);
        }
    }["CartProvider.useEffect"], [
        token
    ]);
    /* Add to Cart */ const addToCart = async (slug, size, authToken = token)=>{
        if (!authToken) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${BASE_URL}/user/cart/add/${slug}/`, {
            size
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        fetchCart(authToken);
    };
    /* Remove from Cart */ const removeFromCart = async (slug)=>{
        if (!token) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${BASE_URL}/user/cart/remove/${slug}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        fetchCart(token);
    };
    /* Update Quantity */ const updateQty = async (slug, action)=>{
        if (!token) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`${BASE_URL}/user/cart/update/${slug}/`, {
            action
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        fetchCart(token);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            /* total items count */ cartCount: cartItems.reduce((sum, item)=>sum + item.quantity, 0),
            addToCart,
            removeFromCart,
            updateQty,
            setAuthToken,
            loading,
            token
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/context/CartContext.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CartProvider, "FqPdb/7sDH2uI8aom7RfWuwhYhE=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
}; // "use client";
 // import { createContext, useContext, useEffect, useState } from "react";
 // import api from "@/components/config/Api";
 // import axios from "axios";
 // const CartContext = createContext();
 // export const CartProvider = ({ children }) => {
 //   const [cartItems, setCartItems] = useState([]);
 //   const [token, setToken] = useState(null);
 //   const [loading, setLoading] = useState(true);
 //   // Load token
 //   useEffect(() => {
 //     setToken(localStorage.getItem("access"));
 //   }, []);
 //   const setAuthToken = (newToken) => {
 //     localStorage.setItem("access", newToken);
 //     setToken(newToken);
 //   };
 //   // Fetch cart from backend
 //   const fetchCart = async (authToken) => {
 //     if (!authToken) {
 //       setCartItems([]);
 //       setLoading(false);
 //       return;
 //     }
 //     const res = await axios.get("http://localhost:8000/api/v1/user/cart/", {
 //       headers: { Authorization: `Bearer ${authToken}` },
 //     });
 //     setCartItems(res.data);
 //     setLoading(false);
 //   };
 //   useEffect(() => {
 //     fetchCart(token);
 //   }, [token]);
 //   const addToCart = async (slug, size, authToken = token) => {
 //     if (!authToken) return;
 //     await api.post(`api/v1/user/cart/add/${slug}/`, { size });
 //     fetchCart(authToken);
 //   };
 //   // Remove from cart
 //   const removeFromCart = async (slug) => {
 //     if (!token) return;
 //     await axios.delete(
 //       `http://localhost:8000/api/v1/user/cart/remove/${slug}/`,
 //       {
 //         headers: {
 //           Authorization: `Bearer ${token}`,
 //         },
 //       }
 //     );
 //     fetchCart(token);
 //   };
 //   const updateQty = async (slug, action) => {
 //     if (!token) return;
 //     await axios.patch(
 //       `http://localhost:8000/api/v1/user/cart/update/${slug}/`,
 //       { action }, // "increase" | "decrease"
 //       {
 //         headers: {
 //           Authorization: `Bearer ${token}`,
 //         },
 //       }
 //     );
 //     fetchCart(token);
 //   };
 //   return (
 //     <CartContext.Provider
 //       value={{
 //         cartItems,
 //         cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
 //         addToCart,
 //         setAuthToken,
 //         removeFromCart,
 //         updateQty,
 //         loading,
 //         token,
 //       }}
 //     >
 //       {children}
 //     </CartContext.Provider>
 //   );
 // };
 // // Hook
 // export const useCart = () => useContext(CartContext);
_s1(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/context/WishlistContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const WishlistProvider = ({ children })=>{
    _s();
    const [wishlistItems, setWishlistItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            const access = localStorage.getItem("access");
            if (access) setToken(access);
            else setLoading(false);
        }
    }["WishlistProvider.useEffect"], []);
    const fetchWishlist = async (authToken)=>{
        if (!authToken) {
            setWishlistItems([]);
            setLoading(false);
            return;
        }
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:8000/api/v1/user/wishlist/", {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setWishlistItems(res.data);
        } catch  {
            setWishlistItems([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            if (token) fetchWishlist(token);
        }
    }["WishlistProvider.useEffect"], [
        token
    ]);
    const addToWishlist = async (slug)=>{
        if (!token) throw new Error("Not logged in");
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`http://localhost:8000/api/v1/user/wishlist/add/${slug}/`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        fetchWishlist(token);
    };
    const removeFromWishlist = async (slug)=>{
        if (!token) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:8000/api/v1/user/wishlist/remove/${slug}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        fetchWishlist(token);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: {
            wishlistItems,
            wishlistCount: wishlistItems.length,
            addToWishlist,
            removeFromWishlist,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/context/WishlistContext.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WishlistProvider, "n2nm9j/4tIi4AoJg+/KtmR4v0IY=");
_c = WishlistProvider;
const useWishlist = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
};
_s1(useWishlist, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/context/FilterContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterProvider",
    ()=>FilterProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useFilter",
    ()=>useFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const FilterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function FilterProvider({ children }) {
    _s();
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilterButton, setShowFilterButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openFilters = ()=>setIsFilterOpen(true);
    const closeFilters = ()=>setIsFilterOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterContext.Provider, {
        value: {
            isFilterOpen,
            openFilters,
            closeFilters,
            showFilterButton,
            setShowFilterButton
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/context/FilterContext.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(FilterProvider, "dOoFqwsaQz2aXuYQy7xn/jakuz0=");
_c = FilterProvider;
function useFilter() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilterContext);
    if (context === undefined) {
        // Return default values instead of throwing error
        return {
            isFilterOpen: false,
            openFilters: ()=>{},
            closeFilters: ()=>{},
            showFilterButton: false,
            setShowFilterButton: ()=>{}
        };
    }
    return context;
}
_s1(useFilter, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const __TURBOPACK__default__export__ = FilterProvider;
var _c;
__turbopack_context__.k.register(_c, "FilterProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // "use client";
 // import { createContext, useContext, useState, ReactNode } from "react";
 // interface FilterContextType {
 //   isFilterOpen: boolean;
 //   openFilters: () => void;
 //   closeFilters: () => void;
 //   showFilterButton: boolean;
 //   setShowFilterButton: (show: boolean) => void;
 // }
 // const FilterContext = createContext<FilterContextType | undefined>(undefined);
 // export function FilterProvider({ children }: { children: ReactNode }) {
 //   const [isFilterOpen, setIsFilterOpen] = useState(false);
 //   const [showFilterButton, setShowFilterButton] = useState(false);
 //   const openFilters = () => setIsFilterOpen(true);
 //   const closeFilters = () => setIsFilterOpen(false);
 //   return (
 //     <FilterContext.Provider
 //       value={{
 //         isFilterOpen,
 //         openFilters,
 //         closeFilters,
 //         showFilterButton,
 //         setShowFilterButton,
 //       }}
 //     >
 //       {children}
 //     </FilterContext.Provider>
 //   );
 // }
 // export function useFilter() {
 //   const context = useContext(FilterContext);
 //   if (context === undefined) {
 //     // Return default values instead of throwing error
 //     return {
 //       isFilterOpen: false,
 //       openFilters: () => {},
 //       closeFilters: () => {},
 //       showFilterButton: false,
 //       setShowFilterButton: () => {},
 //     };
 //   }
 //   return context;
 // }
}),
]);

//# sourceMappingURL=components_context_951a6f80._.js.map