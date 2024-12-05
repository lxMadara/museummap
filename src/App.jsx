import { useState, useEffect } from 'react';
import './App.css';
import Painting from './Painting';
import Pagination from './Pagination';
import SearchBar from './Recherche.jsx';

function App() {
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtworks = async (page, search = "") => {
    try {
      const response = await fetch(`/.netlify/functions/serv?page=${page}&search=${search}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      setCurrentData(data.artObjects);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks(page);
  }, [page]);

  const filteredData = currentData.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="app">
      <SearchBar
        searchTerm={searchTerm}
        onChange={(term) => {
          setSearchTerm(term)
          fetchArtworks(page, term)
        }}
      />
      <div className="painting">
        {filteredData.map((e) => (
          <Painting
            key={e.id}
            image={e.webImage?.url}
            artist={e.principalOrFirstMaker}
            titre={e.title}
          />
        ))}
      </div>
      <Pagination
        CurrentPage={page}
        onPageChange={async (newPage) => {
          setPage(newPage);
          fetchArtworks(newPage);
        }}
      />
    </div>
  );
}

export default App;
