import React, { useState } from "react";

function LoginAdmin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin/dashboard";
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto mt-12 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login Administrador</h2>
      <input
        className="mb-3 w-full border p-2"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        className="mb-3 w-full border p-2"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="bg-blue-800 text-white px-4 py-2 rounded">Iniciar sesión</button>
    </form>
  );
}

export default LoginAdmin;
