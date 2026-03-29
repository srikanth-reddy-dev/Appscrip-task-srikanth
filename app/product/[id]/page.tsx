export default async function ProductPage({ params }: any) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>{product.title}</h1>

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