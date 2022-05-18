export async function getYelpData(searchFilter) {
  const yelpRequest = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await yelpRequest.json();

  return data;
}
