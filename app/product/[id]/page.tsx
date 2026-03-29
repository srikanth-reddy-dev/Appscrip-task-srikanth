export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) {
    return <h2 style={{ padding: "40px" }}>Failed to load product</h2>;
  }

  const product = await res.json();

  if (!product || !product.title) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
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