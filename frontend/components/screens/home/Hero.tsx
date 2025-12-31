"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Discover Fashion That",
    highlight: "Fits Your Lifestyle",
    description:
      "From simple casual to statement shopping experiences, discover collections to elevate your wardrobe.",
    image: "/icons/hero/hero1.png",
    imagePosition: "right",
    link: "/products?product_category=cloth",
    bgColor: "bg-[#F3E7D3]",
  },
  {
    title: "Upgrade Your",
    highlight: "Daily Style",
    description:
      "Hand-picked collections designed for comfort, confidence, and class.",
    image: "/icons/hero/hero2.png",
    imagePosition: "left",
    link: "/products?product_category=jewellery",
    bgColor: "bg-[#D6E4FF]",
  },
  {
    title: "New Season",
    highlight: "New Arrivals",
    description:
      "Stay ahead with trending outfits crafted for modern fashion lovers.",
    image: "/icons/hero/hero.png",
    imagePosition: "right",
    link: "/products?age_category=all_age_unisex",
    bgColor: "bg-[#DCECDC]",
  },
  {
    title: "New Season",
    highlight: "New Arrivals",
    description:
      "Stay ahead with trending outfits crafted for modern fashion lovers.",
    image: "/icons/hero/hero5.png",
    imagePosition: "left",
    link: "/products?age_category=all_age_unisex",
    bgColor: "bg-[#E6DCCF]",
  },
  {
    title: "New Season",
    highlight: "New Arrivals",
    description:
      "Stay ahead with trending outfits crafted for modern fashion lovers.",
    image: "/icons/hero/hero6.png",
    imagePosition: "right",
    link: "/products?age_category=all_age_unisex",
    bgColor: "bg-[#E3DDF4]",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`relative h-[50vh] min-h-[420px] overflow-hidden transition-colors duration-700 ${
        slides[current].bgColor
      }`}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="max-w-7xl mx-auto h-full px-6 py-8 md:py-10">
            <div
              className={`grid md:grid-cols-2 gap-8 items-center h-full ${
                slide.imagePosition === "left" ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`flex flex-col justify-center ${
                  slide.imagePosition === "left" ? "md:col-start-2" : ""
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                  <br />
                  <span className="text-gray-800">{slide.highlight}</span>
                </h1>

                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-md">
                  {slide.description}
                </p>

                <Link
                  href={slide.link}
                  className="inline-block mt-6 bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors w-fit rounded-sm"
                >
                  Shop Now
                </Link>
              </div>

              {/* Image */}
              <div
                className={`relative h-full max-h-[420px] flex items-center justify-center ${
                  slide.imagePosition === "left"
                    ? "md:col-start-1 md:row-start-1"
                    : ""
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-contain max-h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Desktop Navigation Dots */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 rounded-full transition-all ${
              index === current
                ? "h-12 bg-black"
                : "h-3 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-8 bg-black" : "w-2 bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}










// "use client";

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


