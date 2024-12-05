import React, { useEffect, useState } from 'react';

const AppConnection = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const API_KEY = "7ROyDsd0";
  const CULTURE = "en"; 

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/${CULTURE}/collection?key=${API_KEY}&q=Rembrandt&ps=10&imgonly=true`
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data = await response.json();
        setArtworks(data.artObjects); 
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
    <div>
      <h1>Rijksmuseum Collection</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <h2>{artwork.title}</h2>
            {artwork.webImage && (
              <img
                src={artwork.webImage.url}
                alt={artwork.title}
                style={{ width: "200px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppConnection 