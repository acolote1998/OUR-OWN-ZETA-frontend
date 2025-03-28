const BASE_URL = "http://localhost:8080/civilizations";

export async function feedingLanguagePatterns(data: { names: string[] }) {
  const response = await fetch(BASE_URL + "/feedingLanguagePatterns", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data.names),
  });

  if (!response.ok) {
    const errorMessage = await response.text(); // Lee el cuerpo como texto
    throw new Error(`API Error: ${response.status} ${errorMessage}`);
  }
  return response.json();
}
