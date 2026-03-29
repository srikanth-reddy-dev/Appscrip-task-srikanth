"use client";

import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  // 🔵 Loading state
  if (loading) return <h1>Loading...</h1>;

  // 🔴 Error state
  if (error) return <h1>Failed to load product</h1>;

  // 🟢 Success state
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width={200} />
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
    </div>
  );
}