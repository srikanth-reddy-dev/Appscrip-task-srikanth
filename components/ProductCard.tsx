import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        style={{
          border: "1px solid #eee",
          padding: "15px",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "0.2s",
          background: "#fff",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.03)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
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

        <h3 style={{ fontSize: "16px", marginTop: "10px" }}>
          {product.title}
        </h3>

        <p style={{ fontWeight: "bold", marginTop: "5px" }}>
          ₹ {product.price}
        </p>
      </div>
    </Link>
  );
}