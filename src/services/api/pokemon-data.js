import {invoke} from './invoke';

export const getPokemonList = (limit = 0) => {
    return invoke('GET', 'pokemon-species/?limit=' + limit );
}