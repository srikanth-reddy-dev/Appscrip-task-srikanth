async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img src={product.image} width={200} alt={product.title} />

      <p>{product.description}</p>

      <h3>₹ {product.price}</h3>
    </div>
  );
}