import { useState, useEffect } from "react"
import axios from "axios"

function Catalogo() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response => 
        {
           const result = response.data.results.map(item => {
               return {
                   ...item,
                   type:  axios.get(item.url).then(response => response).then(data =>data)
               }
           })
             
            setPokemons(result)
        })
    }, []);

    return (
        <div>
            <h1>Catálogo</h1>
            {pokemons?.map((data, index) => {
                let test 
                const pokemon = {
                    name: data.name,
                    id: index + 1,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                    type:  axios.get(data.url).then(response => response).then(data =>data)
                }
                    console.log(data        )
                return (<div key={pokemon.id}>
                    {pokemon.id}
                    {pokemon.name}
                    {data.type}
                    <img alt={pokemon.name} src={pokemon.image} />
                </div>)
            })}
        </div>
    )
}

export default Catalogo