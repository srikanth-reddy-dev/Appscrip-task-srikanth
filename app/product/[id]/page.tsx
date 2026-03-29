async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductPage({ params }: any) {
  const id = params?.id;

  if (!id) {
    return <h1>Invalid Product ID</h1>;
  }

  const product = await getProduct(id);

  
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img src={product.image} width={200} alt={product.title} />
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
    </div>
  );
}