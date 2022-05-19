export async function getYelpData(searchFilter) {
  const yelpRequest = await fetch(`/.netlify/functions/yelp?location=${searchFilter}`);
  const data = await yelpRequest.json();
  // console.log(data);
  return data;
}
