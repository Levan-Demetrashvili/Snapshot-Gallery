export async function getImages(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.errors);
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
}
