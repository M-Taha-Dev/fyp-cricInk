async function fetchPlayerNames(query) {
  try {
    // Encode the query string
    // Construct the API endpoint URL
    const apiUrl = `http://localhost:5000/api/intent/${query}`;
  
    // Make the fetch request
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('the output of API is:')
    console.log(data);
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
    throw error; // Re-throw the error if needed
  }
}

export default fetchPlayerNames;
