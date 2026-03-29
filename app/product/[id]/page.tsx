"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.id]);

  // Loading state
  if (loading) return <h2 style={{ padding: "40px" }}>Loading product...</h2>;

  // Error state
  if (!product || !product.title) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  // UI
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          display: "block",
          marginBottom: "20px",
        }}
      />

      <p style={{ marginBottom: "20px" }}>{product.description}</p>

      <h2>₹ {product.price}</h2>
    </div>
  );
}