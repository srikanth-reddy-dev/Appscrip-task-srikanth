"use client";

import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
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

  if (loading) return <h1>Loading...</h1>;

  if (!product || !product.title) {
    return <h1>Failed to load product</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} width="300" />

      <p>{product.description}</p>

      <h3>₹ {product.price}</h3>
    </div>
  );
}