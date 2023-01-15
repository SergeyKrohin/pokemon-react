import './App.css';
import Navbar from "./components/navbar/Navbar";
import PokemonList from './components/pokemon-list/PokemonList';
import NotFound from './components/not-found/NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getPokemonList} from "./services/api/pokemon-data";
import {search} from "./services/utils/utils";

function App() {
    
    const [pokemonList, setPokemonList] = useState([]);
    const [inputVal, setInputVal] = useState('');

    useEffect(() => {
        getPokemonList(5).then((res) => {
            setPokemonList(res.results);
        });
    }, [])

    return (
        <Router>
          <div className="App">
            <Navbar inputVal={inputVal} setInputVal={setInputVal}/>
            <Routes>
                <Route path="/pokemon-list" element={<PokemonList pokemonList={search(pokemonList, inputVal, 'name')} />}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </Router>
    );
}

export default App;
