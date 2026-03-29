export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Failed to load product</h1>;
  }

  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>

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

      <h3>₹ {product.price}</h3>
    </div>
  );
}