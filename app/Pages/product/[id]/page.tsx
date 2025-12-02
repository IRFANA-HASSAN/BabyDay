"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS } from "@/app/data/products";
import ProductDetailPage from "@/app/Components/ProductDetailPage";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  // Find the product by ID
  const product = PRODUCTS.find((p) => p.id.toString() === productId);

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
          <button
            onClick={() => router.push("/")}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProductDetailPage 
      product={product} 
      onClose={() => router.back()}
    />
  );
}