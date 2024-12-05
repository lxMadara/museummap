export const handler = async (event, context)=> {
    const params = event.queryStringParameters;
    // console.log(params.searchTerm);
    const API_KEY = "7ROyDsd0";
    const CULTURE = "en"; 

    const response = await fetch(
        `https://www.rijksmuseum.nl/api/${CULTURE}/collection?key=${API_KEY}&q=Rembrandt&ps=10&imgonly=true`
      );
      const data = await response.json();


    return{
        statusCode: 500, 
        body: JSON.stringify("test"),
        headers: { 'Content-Type': 'application/json' },
    };
}