import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error(error);
        setMessage("Could not connect to backend.");
      });
  }, []);

  return (
    <div>
      <h1>Campus Lost & Found</h1>
      <p>Welcome to the Campus Lost & Found system.</p>

      <h2>Backend Status</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;