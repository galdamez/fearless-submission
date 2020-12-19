export async function fetchCount(setCount, setLoading) {
  const url = 'https://api.countapi.xyz/hit/fearless-counter/1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
  setLoading(true);
  const response = await fetch(url);
  const data = await response.json();
  setCount(data.value);
  setLoading(false);
}