import { useState, useEffect } from "react";
import { feedingLanguagePatterns } from "../services/civilizations";

function FeedingNamePatterns() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Llamamos a fetchData() solo una vez cuando el componente se monta
    async function fetchData() {
      try {
        const data = await feedingLanguagePatterns({
          names: ["Aki", "Pepe", "Legolas"],
        });
        setResponseData(data); // Actualizamos el estado con la respuesta de la API
      } catch (err) {
        setError((err as Error).message); // Manejo de error
      }
    }

    fetchData(); // Llamamos la función para obtener datos de la API
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1></h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre> // Mostramos la respuesta de la API
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FeedingNamePatterns;
