import React from 'react'
import ReactDOM from 'react-dom/client'
import Fakestoreapi from './Fakestoreapi'
import PokemonsApi from './PokemonsApi'
import Dragons from './Dragons'
import './Style.css'
import Randomuser from './Randomuser'
import Raw from './Raw'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>

  
  <Fakestoreapi/>
  <PokemonsApi/>
  <Dragons/>
  <Raw/>
  <Randomuser/>

  
  </>
)
