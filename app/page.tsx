"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || p.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Products
        </h1>

        {/* 🔘 CATEGORY FILTER */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {[
            "all",
            "men's clothing",
            "women's clothing",
            "electronics",
            "jewelery",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                margin: "5px",
                padding: "8px 12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: category === cat ? "#000" : "#fff",
                color: category === cat ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔍 SEARCH */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* 🛍 PRODUCTS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}