import React, { useState, useEffect } from 'react';

function Raw() {
  const [videoJuego, setVideoJuego] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    };

    fetch('https://api.rawg.io/api/games?key=4be2ed928e1d42388d5f7aac8db2b987&page_size=100', options)
      .then(res => res.json())
      .then(data => setVideoJuego(data.results))
      .catch(error => console.error('Error fetching data:', error));

    
    return () => controller.abort();
  }, []);

  return (
    <main className='contenedor__videojuegos'>
      {videoJuego.map((juego, index) => (
        <div key={index} className='contenedor'>
          <h2 className="contenedor__titulo">{juego.name}</h2>
          <img src={juego.background_image} alt={juego.name} className='contenedor__img' width={300} height={300} />
          <p className='contenedor__texto'> Ranking {juego.rating}</p>
        </div>
      ))}
    </main>
  );
}

export default Raw;
