import React, { useEffect, useState } from 'react';

const AppConnection = () => {
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
        console.log(data)
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