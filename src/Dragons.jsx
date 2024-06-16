import React, { useEffect, useState } from 'react';

function Dragons() {
  const [dragons, setDragons] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      signal: controller.signal
    };

    fetch('https://www.dnd5eapi.co/api/classes/', options)
      .then(res => res.json())
      .then(data => {
        setDragons(data);
      })
      .catch(error => console.error('Error fetching dragons:', error));

    // Abortar la solicitud fetch si el componente se desmonta
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="contenedor__clasePokemons">
        <h1>Clases de dragones: {dragons ? dragons.count : 'cargando...'}</h1>
      </div>

      <div className="contenedor__Dragon">
        {dragons && dragons.results ? (
          <ul className='lista__dragones'>
            {dragons.results.map(dragon => (
              <li key={dragon.index}>{dragon.name}</li>
            ))}
          </ul>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}

export default Dragons;
