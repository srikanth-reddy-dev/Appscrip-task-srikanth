export default function Header() {
  return (
    <div
      style={{
        padding: "15px",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>MyStore</h2>

      <div>
        <span style={{ marginRight: "15px", cursor: "pointer" }}>Home</span>
        <span style={{ marginRight: "15px", cursor: "pointer" }}>Shop</span>
        <span style={{ cursor: "pointer" }}>Contact</span>
      </div>
    </div>
  );
}