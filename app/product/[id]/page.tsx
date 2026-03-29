export default async function ProductPage({ params }: any) {
  try {
    const id = params?.id;

    if (!id) {
      return <h1>Invalid Product ID</h1>;
    }

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return <h1>Failed to load product</h1>;
    }

    const product = await res.json();

    if (!product) {
      return <h1>No product found</h1>;
    }

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

        <p style={{ marginBottom: "20px" }}>
          {product.description}
        </p>

        <h3>₹ {product.price}</h3>
      </div>
    );
  } catch (error) {
    return <h1>Something went wrong</h1>;
  }
}