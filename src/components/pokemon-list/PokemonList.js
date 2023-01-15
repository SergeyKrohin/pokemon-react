import {useEffect, useState} from 'react';
import {getPokemonList} from "../../services/api/pokemon-data";

const PokemonList = ({pokemonList}) => {


    return (
        <div className="pokemon-list">
            {
                pokemonList.map(pokemon => (
                    <div className="pokemon" key={pokemon.name}>
                        {
                            pokemon.name
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default PokemonList;