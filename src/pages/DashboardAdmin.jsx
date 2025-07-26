import React, { useEffect, useState } from "react";

function DashboardAdmin() {
  const [forms, setForms] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetch("http://localhost:8000/api/admin/forms", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setForms);
  }, []);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch("http://localhost:8000/api/admin/gallery", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) alert("Imagen subida");
    else alert("Error al subir imagen");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Formularios recibidos</h1>
      <ul className="mb-8">
        {forms.map((f) => (
          <li key={f.id} className="mb-3 p-3 bg-gray-100 rounded shadow">
            <strong>{f.nombre} {f.apellido}</strong> — {f.email}  
            <br />
            {f.mensaje}
            <br />
            {f.telefono}
            <br />
            {new Date(f.created_at).toLocaleString("es-MX", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Subir imagen</h2>
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <button onClick={handleImageUpload} className="ml-4 bg-green-600 text-white px-4 py-2 rounded">
        Subir
      </button>
    </div>
  );
}

export default DashboardAdmin;
