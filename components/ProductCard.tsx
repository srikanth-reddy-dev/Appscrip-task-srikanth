import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
          }}
        />

        <h3 style={{ fontSize: "16px" }}>{product.title}</h3>
        <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>
      </div>
    </Link>
  );
}