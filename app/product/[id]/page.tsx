export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    return <h1>Failed to load product</h1>;
  }

  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} width="300" />

      <p>{product.description}</p>

      <h3>₹ {product.price}</h3>
    </div>
  );
}