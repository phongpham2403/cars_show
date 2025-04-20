const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cbf2a09244mshedd4ad9065a864cp1c6beajsn0f51c8d50fa3',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

export async function fetchCars() {
    const headers = {
		'x-rapidapi-key': 'cbf2a09244mshedd4ad9065a864cp1c6beajsn0f51c8d50fa3',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers});
    const result = await response.json()

    return result
}