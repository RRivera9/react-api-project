import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewButton from './NewButton'
import PokemonInfo from './PokemonInfo'

export default App

function App() {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [search5, setSearch5] = useState("");
  const [search6, setSearch6] = useState("");

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search1}
                  onChange={(e) => setSearch1(e.target.value)}
              />
              <PokemonInfo pokemonName={search1} />
        </div>
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search2}
                  onChange={(e) => setSearch2(e.target.value)}
              />
              <PokemonInfo pokemonName={search2} />
        </div>
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search3}
                  onChange={(e) => setSearch3(e.target.value)}
              />
              <PokemonInfo pokemonName={search3} />
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search4}
                  onChange={(e) => setSearch4(e.target.value)}
              />
              <PokemonInfo pokemonName={search4} />
        </div>
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search5}
                  onChange={(e) => setSearch5(e.target.value)}
              />
              <PokemonInfo pokemonName={search5} />
        </div>
        <div className="grid-item">
              <input
                  type="text"
                  placeholder="Enter Pokémon name"
                  value={search6}
                  onChange={(e) => setSearch6(e.target.value)}
              />
              <PokemonInfo pokemonName={search6} />
          </div>
        </div>
    </>
  )
}


