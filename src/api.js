export async function getData(text) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
  );
  if (response.ok) {
    const res = await response.json();
    return res[0];
  }
  throw {
    message: "Failed to fetch data",
    status: response.status,
    text: response.statusText,
  };
}
