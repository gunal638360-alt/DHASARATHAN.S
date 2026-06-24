import React, { useState } from "react";

function WorkshopApp() {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Check for duplicate email
    const exists = participants.some(
      (participant) => participant.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      setMessage("❌ This email is already registered!");
      return;
    }

    const newParticipant = { name, email };
    setParticipants([...participants, newParticipant]);
    setMessage(`✅ Registration confirmed for ${name}!`);

    // Reset form
    setName("");
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Workshop Registration</h1>

      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      <h2 style={styles.subtitle}>Participant List</h2>
      <ul style={styles.list}>
        {participants.map((p, index) => (
          <li key={index} style={styles.listItem}>
            {p.name} ({p.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline CSS styles for polished UI
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #f0f4ff, #dbeafe)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  title: { color: "#1e3a8a" },
  subtitle: { marginTop: "20px", color: "#2563eb" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #93c5fd",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: { marginTop: "10px", fontWeight: "bold" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    background: "#eff6ff",
    margin: "5px 0",
    padding: "8px",
    borderRadius: "5px",
  },
};

export default WorkshopApp;
