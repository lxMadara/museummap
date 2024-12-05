export const handler = async (event, context)=> {
    const url = new URL(event.rawUrl);
    const params= {
        page: url.searchParams.get('page')
            ? parseInt(url.searchParams.get('page'))
            : undefined,
    }
    const API_KEY = "7ROyDsd0";
    const CULTURE = "en"; 

    const response = await fetch(
        `https://www.rijksmuseum.nl/api/${CULTURE}/collection?key=${API_KEY}&p=${params.page}&imgonly=true`
      );
      const data = await response.json();


    return{
        statusCode: 200, 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
}