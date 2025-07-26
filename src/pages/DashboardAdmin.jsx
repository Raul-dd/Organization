import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

function DashboardAdmin() {
  const [forms, setForms] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [mensajeFeedback, setMensajeFeedback] = useState(null);
  const [tipoFeedback, setTipoFeedback] = useState(null);
  const inputRef = useRef(null); // Para limpiar input

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetch("http://localhost:8000/api/admin/forms", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setForms);
  }, []);

  const handleImageUpload = async () => {
    if (!imageFile) return;

    setCargando(true);
    setMensajeFeedback(null);
    setTipoFeedback(null);

    const formData = new FormData();
    formData.append("image", imageFile); // 👈 CAMBIO CLAVE

    try {
      const res = await fetch("http://localhost:8000/api/admin/gallery", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        setTipoFeedback("success");
        setMensajeFeedback("Imagen subida correctamente");
        setImageFile(null);
        if (inputRef.current) inputRef.current.value = ""; // Limpia input
      } else {
        setTipoFeedback("error");
        setMensajeFeedback("Error al subir imagen");
      }
    } catch (err) {
      setTipoFeedback("error");
      setMensajeFeedback("Error de conexión al subir imagen");
    }

    setCargando(false);
    setTimeout(() => setMensajeFeedback(null), 2500);
  };

  return (
    <div className="p-6 relative">
      {/* Toast animado flotante */}
      {(mensajeFeedback || cargando) &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="px-6 py-4 rounded-lg shadow-lg text-white text-center min-w-[260px] max-w-[90%] text-sm font-medium flex flex-col items-center justify-center backdrop-blur-sm"
              style={{
                backgroundColor:
                  cargando || tipoFeedback === "success"
                    ? "#1e40af"
                    : tipoFeedback === "error"
                    ? "#dc2626"
                    : "#1e40af",
                opacity: 0.9,
                pointerEvents: "auto",
              }}
            >
              {cargando ? (
                <>
                  <div
                    className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                    style={{ animation: "spin 1s linear infinite" }}
                  ></div>
                  <p className="mt-2">Subiendo imagen...</p>
                </>
              ) : (
                <>
                  <span className="text-3xl">
                    {tipoFeedback === "success" ? "✅" : "❌"}
                  </span>
                  <p>{mensajeFeedback}</p>
                </>
              )}
            </div>
          </div>,
          document.body
        )}

      <h1 className="text-3xl font-bold mb-4">Formularios recibidos</h1>
      <ul className="mb-8">
        {forms.map((f) => (
          <li key={f.id} className="mb-3 p-3 bg-gray-100 rounded shadow">
            <strong>
              {f.nombre} {f.apellido}
            </strong>{" "}
            — {f.email}
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
      <input
        type="file"
        name="imagen" // opcional pero recomendable
        ref={inputRef}
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <button
        onClick={handleImageUpload}
        className="ml-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Subir
      </button>
    </div>
  );
}

export default DashboardAdmin;
