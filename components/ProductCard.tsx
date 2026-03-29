type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: "150px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <p style={{ fontSize: "14px", fontWeight: "bold" }}>
        {product.title}
      </p>

      <p style={{ color: "green", fontWeight: "bold" }}>
        ${product.price}
      </p>
    </div>
  );
}