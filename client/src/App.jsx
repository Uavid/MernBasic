import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api`)
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div style={{ padding: "50px", fontSize: "24px" }}>
      <h1>Frontend Running 🚀</h1>
      <p>Backend Says: {msg}</p>
    </div>
  );
}

export default App;
