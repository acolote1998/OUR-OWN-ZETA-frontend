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
      <h2>Your Civilization language</h2>
      <p>
        Our Own Zeta uses algorithms to break down the names of your
        civilization into small patterns that can help create new names for the
        future of your Civilization. This patterns are used to, for example,
        generate a unique name for your Civilization and the future people who
        will be born in it.
      </p>
      <p>
        You can either choose a preset of words from the list below, otherwise
        please use the text area to write your own words, separated by a coma
      </p>
      <label>
        <input type="radio" name="language" /> Use a preset language
      </label>
      <br></br>
      <label>
        <input type="radio" name="language" /> I want to use my own words for
        the language
      </label>
      <select>
        <option>asd</option>
      </select>
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
