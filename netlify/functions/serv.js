export const handler = async (event, context)=> {
    const url = new URL(event.rawUrl);
    const params= {
        page: url.searchParams.get('page')
            ? parseInt(url.searchParams.get('page'))
            : undefined,
        search: url.searchParams.get("search") ? url.searchParams.get("search") : undefined
    }
    const API_KEY = "7ROyDsd0";
    const CULTURE = "en"; 
let link =  `https://www.rijksmuseum.nl/api/${CULTURE}/collection?key=${API_KEY}&p=${params.page}&imgonly=true`
if(params.search) link += `&q=${params.search}`
    const response = await fetch(
       link
      );
      const data = await response.json();


    return{
        statusCode: 200, 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
}