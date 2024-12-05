import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Painting from './Painting'
import Pagination from './pagination'
import SearchBar from  './recherche.jsx'

function App() {
  
  const [ page, setPage]= useState(1);
  const [currentData, setCurrentData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchArtworks = async (page) => {
    try {
      const response = await fetch(
        `/.netlify/functions/serv?page=${page}`
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      console.log("TEST")
     
      const data = await response.json();
      setCurrentData(data.artObjects)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArtworks(1);
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className='app'>
<SearchBar
  page={page}
  onChange={
    (key, page) => {

    }
  }></SearchBar>


     {
      currentData.map((e) => {
        return (
          <Painting
            key={e.id}
            image={e.webImage.url} 
            artist={e.principalOrFirstMaker}
            titre={e.title}
          ></Painting>
        );
      })
    }

<Pagination 
CurrentPAge={page}
onPageChange={async (page) => {
  setPage (page);
  fetchArtworks(page)
}
}>
</Pagination>

    </div>
  )
}

export default App
