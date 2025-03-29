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

  function validateWordsInput(content: string): string {
    let response: string = "";
    let responseCharArray: string[] = content.replace(/\s+/g, "").split(",");
    let abc: string[] = "abcdefghijklmnopqrstuvwxyz ,".split("");
    console.log(responseCharArray);

    for (let i = 0; i < responseCharArray.length; i++) {
      // Comprobar si el caracter está vacío o si contiene algo que no es una letra
      for (let char of responseCharArray[i].trim()) {
        if (!abc.includes(char.toLowerCase())) {
          response = "Please use only letters. Words separated by commas.";
          console.log(response);
          return response; // Salir inmediatamente si encontramos un error
        }
      }
    }

    // Si todo es correcto
    response = "All good!";
    console.log(response);
    return response;
  }

  return (
    <div>
      <h1>Our Own Zeta</h1>
      <h2>Civilization language</h2>
      <p>
        Our Own Zeta utilizes algorithms to analyze the names of your
        civilization and break them down into small, meaningful patterns. These
        patterns are then used to generate new names for your civilization and
        its future inhabitants. For example, they can help create a unique name
        for your civilization and the people who will be born within it.
      </p>
      <p>
        You can either select a language pattern from a preset list or provide
        your own custom words for the language.
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
            You can enter your own words, and the algorithm will process the
            language patterns to generate words with a similar structure to
            those you provide. The more words you input, the more accurate and
            relevant the generated names will be.
          </p>
          <p>Please enter your words separated by commas</p>
          <textarea id="inputWords" placeholder="USING OWN WORDS"></textarea>
          <br></br>
          <button
            onClick={() =>
              validateWordsInput(
                (document.getElementById("inputWords") as HTMLTextAreaElement)
                  ?.value
              )
            }
          >
            Submit
          </button>
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
