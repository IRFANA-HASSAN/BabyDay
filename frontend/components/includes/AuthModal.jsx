"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useAuth } from "@/components/context/AuthContext";
import { useCart } from "@/components/context/CartContext";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AuthModal({ open, onClose, onSuccess }) {
  const { setAuthToken } = useCart();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const addGmail = () => {
    if (email && !email.includes("@")) {
      setEmail(email + "@gmail.com");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${BASE_URL}/register/auth/`,
        { email, password }
      );

      const { access } = res.data.data;

      login(res.data.data);
      setAuthToken(access);

      if (onSuccess) onSuccess(access);
      onClose();
    } catch (err) {
      setError(
        err?.response?.data?.error ||
          err?.response?.data?.non_field_errors?.[0] ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-black">
      <div className="relative bg-white rounded-xl w-full max-w-3xl overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl z-10"
        >
          ✕
        </button>

        {/* RESPONSIVE LAYOUT */}
        <div className="flex flex-col md:flex-row">

          {/* IMAGE SECTION */}
          <div className="w-full md:w-1/2 flex justify-center md:items-center bg-gray-50 p-6">
            <Image
              src="/icons/logo/Square44x44Logo.targetsize-256.png"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
          </div>

          {/* FORM SECTION */}
          <div className="w-full md:w-1/2 p-6 text-left">
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 pr-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={addGmail}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    @gmail.com
                  </button>
                </div>
              </div>

              {/* PASSWORD / PHONE */}
              <div>
                <label className="text-sm font-medium">
                  Password / Phone
                </label>
                <input
                  type="password"
                  placeholder="Password or Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Continue"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}






// "use client";

// import { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import { useAuth } from "@/components/context/AuthContext";
// import { useCart } from "@/components/context/CartContext";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export default function AuthModal({ open, onClose, onSuccess }) {
//   const { setAuthToken } = useCart();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   if (!open) return null;

//   const addGmail = () => {
//     if (email && !email.includes("@")) {
//       setEmail(email + "@gmail.com");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         `${BASE_URL}/register/auth/`,
//         { email, password }
//       );

//       const { access } = res.data.data;

//       // auth context login
//       login(res.data.data);

//       // cart context token
//       setAuthToken(access);

//       if (onSuccess) {
//         onSuccess(access);
//       }

//       onClose();
//     } catch (err) {
//       setError(
//         err?.response?.data?.error ||
//           err?.response?.data?.non_field_errors?.[0] ||
//           "Invalid email or password"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="text-black fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-full max-w-md bg-white rounded-xl p-6 relative">

//         {/* CLOSE BUTTON */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-xl"
//         >
//           ✕
//         </button>

//         {/* LOGO + TITLE */}
//         <div className="flex flex-col mb-4">
//           <div className="flex justify-center">
//             <Image
//               src="/icons/logo/Square44x44Logo.targetsize-256.png"
//               alt="Logo"
//               width={120}
//               height={120}
//               priority
//             />
//           </div>

//           <h2 className="text-2xl font-bold mt-2 text-left">
//             Register
//           </h2>
//         </div>


//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* EMAIL */}
//           <div>
//             <label className="text-sm font-medium">Email</label>
//             <div className="relative mt-1">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 pr-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={addGmail}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
//               >
//                 @gmail.com
//               </button>
//             </div>
//           </div>

//           {/* PASSWORD / PHONE */}
//           <div>
//             <label className="text-sm font-medium">Password / Phone</label>
//             <input
//               type="password"
//               placeholder="Password or Phone Number"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black mt-1"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
//           >
//             {loading ? "Processing..." : "Continue"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@/components/context/AuthContext";
// import { useCart } from "@/components/context/CartContext";

// export default function AuthModal({ open, onClose, onSuccess }) {
//   const { setAuthToken } = useCart();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   if (!open) return null;

//   const addGmail = () => {
//     if (!email.includes("@")) {
//       setEmail(email + "@gmail.com");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/register/auth/",
//         { email, password }
//       );

//       login(res.data.data);

//       const { access } = res.data.data;
//       setAuthToken(access);

//       if (onSuccess) {
//         onSuccess(access);
//       }

//       onClose();
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="text-black fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-full max-w-md bg-white rounded-xl p-6 relative">
//         <button onClick={onClose} className="absolute top-3 right-3 text-xl">
//           ✕
//         </button>
//         <img src="/icons/logo/180.png" alt="logo" className="items-center"/>
//         <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="">Email</label>
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Email"
//               className=" input w-full px-4 py-3 pr-28 border rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               onClick={addGmail}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-3 py-1 border rounded"
//             >
//               @gmail.com
//             </button>
//           </div>
//           </div>

//           <div>
//             <label htmlFor="">Phone Number</label>
//           <input
//             type="password"
//             placeholder="Phone Number"
//             className="input w-full px-4 py-3 border rounded-lg"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-lg"
//           >
//             {loading ? "Processing..." : "Continue"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
