import React from 'react'
import { useEffect,useState } from 'react'


function Fakestoreapi() {
  


    const[ropas,setRopas] = useState([]);

    useEffect(()=>{

      let controller = new AbortController
      let options={
        method: 'GET',
        headers:{
          'Content-type': 'application/json'
        },
        signal: controller.signal
      }


        fetch('https://fakestoreapi.com/products', options)
        .then(res=>res.json())
        .then(data =>{
            setRopas(data)
        })
        .catch(err=> console.log(err))
        .finally(()=>controller.abort())
    },[])

    return <>
    

    <div className="contenedorRopa">

        {ropas.map((ropa)=>{

            return <div className="contenedorRopa__card">
                <h2 className='contenedorRopa__textoCard'> {ropa.title}</h2>
                <h3 className='contenedorRopa__textoCard'>Precio: {ropa.price}</h3>
                <p className='contenedorRopa__textoCard'>"{ropa.description}"</p>
                <h3 className='contenedorRopa__textoCard'>"{ropa.category}"</h3>
                <img src={ropa.image} className='contenedorRopa__imagenCard' width={200} height={400}/>
                

                
            </div>
        })}
    </div>
    </>
}

export default Fakestoreapi;