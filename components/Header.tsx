export default function Header() {
  return (
    <div
      style={{
        padding: "15px 20px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>MyStore</h2>

      <div>
        <span style={{ marginRight: "15px" }}>Home</span>
        <span style={{ marginRight: "15px" }}>Shop</span>
        <span>Contact</span>
      </div>
    </div>
  );
}