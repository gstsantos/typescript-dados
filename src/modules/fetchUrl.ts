export default async function FetchUrl<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Erro: ' + res.status);
    return  await res.json();
  } catch (err) {
    if(err instanceof Error) console.error("fetchData: " + err.message)
    return null;
  }
}
