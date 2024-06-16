import React, { useEffect, useState } from 'react';

function Randomuser() {
  const [Randons, setRandon] = useState({ results: [] });

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      signal: controller.signal
    };

    fetch('https://randomuser.me/api/?results=10', options)
      .then(res => res.json())
      .then(data => {
        setRandon(data);
      })
      .catch(err => console.log(err));

    // Abortar la solicitud fetch si el componente se desmonta
    return () => controller.abort();
  }, []);

  return (
    <main>
      {Randons.results.map((randon, index) => (
        <div key={index} className='Contenedor__Randon'>
          <h2>{`${randon.name.title} ${randon.name.first} ${randon.name.last}`}</h2>
          <p>Años: {randon.dob.age}</p>
          <p>Ciudad: {randon.location.city} <br /> Estado: {randon.location.state}</p>
          <p>Teléfono: {randon.phone}</p>
          <p>Email: {randon.email}</p>
          <img src={randon.picture.large} alt="imagen usuario" />
        </div>
      ))}
    </main>
  );
}

export default Randomuser;
