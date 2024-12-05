import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Painting from './Painting'
import Pagination from './pagination'


function App() {
  const [ page, setPage]= useState(1);
  const [currentData, setCurrentData] = useState([]);

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          `/.netlify/functions/serv`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        console.log("TEST")
       
        const data = await response.json();
        setArtworks(data.artObjects); 
        setCurrentData(data.artObjects)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <>
    {
      currentData.map((e) => {
        <Painting
          image={e.webImage.url} 
          artist={e.principalOrFirstMaker}
        ></Painting>
      })
    }

<Pagination 
CurrentPAge={page}
onPageChange={async (page) => {
  setPage (page);
  setCurrentData()
}
}>
</Pagination>

    </>
  )
}

export default App
