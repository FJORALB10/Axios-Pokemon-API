import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonApp = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        const results = response.data.results;
        setPokemonList(results);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>807 Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonApp;
