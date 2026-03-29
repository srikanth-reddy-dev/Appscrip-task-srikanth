export default async function ProductPage({ params }: any) {
  const id = params.id; // ❌ DON'T use await here

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
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

      <h3>₹ {product.price}</h3>
    </div>
  );
}