import { useState, useEffect } from "react";
import { feedingLanguagePatterns } from "../services/civilizations";

function FeedingNamePatterns() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [languageButton, setLanguageButton] = useState("");

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

  function updateButtonContent(content: string) {
    setLanguageButton(content);
  }

  return (
    <div>
      <h1>Our Own Zeta</h1>
      <h2>Civilization language</h2>
      <p>
        Our Own Zeta uses algorithms to break down the names of your
        civilization into small patterns that can help create new names for the
        future of your Civilization. This patterns are used to, for example,
        generate a unique name for your Civilization and the future people who
        will be born in it.
      </p>
      <p>
        You can either choose a preset of words, otherwise you can provide your
        own words for your language.
      </p>
      <label>
        <input
          onChange={() => updateButtonContent("preset")}
          type="radio"
          name="language"
        />{" "}
        Use a preset language
      </label>
      <br></br>
      <label>
        <input
          onChange={() => updateButtonContent("inputLanguage")}
          type="radio"
          name="language"
        />
        I want to use my own words for the language
      </label>
      <br></br>
      <br></br>
      {languageButton == "preset" && (
        <>
          <p>Please choose a language from the list below</p>
          <select>
            <option>Orc</option>
            <option>Dwarf</option>
            <option>Elf</option>
            <option>Human</option>
            <option>Oriental Warrior</option>
            <option>Murlock</option>
            <option>Ogre</option>
          </select>
        </>
      )}
      {languageButton == "inputLanguage" && (
        <>
          <p>
            You can write your own words. The algorith will process the language
            pattern and use it to generate similar structured words to the ones
            you are providing. The more amount of words you provide, the more
            accurate the algorithm will be.
          </p>
          <p>Please write your words separated by a comma</p>
          <textarea placeholder="USING OWN WORDS"></textarea>
        </>
      )}

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
