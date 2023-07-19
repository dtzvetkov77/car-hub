export async function fetchCars(){
  const headers = {
    'X-RapidAPI-Key': 'c4f490df90msh91c875e61fe1f41p1a60e7jsnb414ee027192',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result
}