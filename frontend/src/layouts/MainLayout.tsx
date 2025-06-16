import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h1>🌐 AI Learning Tool</h1>
      </header>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
