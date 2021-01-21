import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import { Typography, Button } from "@material-ui/core";

function Catalogo() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const { results } = (
      await axios.get("https://pokeapi.co/api/v2/pokemon")
    ).data;
    const resultFormatted = results?.map(async (item, index) => {
      const urlInfo = await axios.get(item.url);
      const { data } = await Promise.resolve(urlInfo);
      return {
        name: item.name,
        id: index + 1,
        image: data?.sprites.front_default,
        types: data?.types,
      };
    });
    (async () => {
      const result = await Promise.all(resultFormatted);
      setPokemons(result);
    })();
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <S.PageWrapper>
      <Typography variant="h2" align="center" gutterBottom>
        Catálogo
      </Typography>

      {pokemons?.map((data) => (
        <S.PaperStyled key={data.id}>
          <img alt={data.name} src={data.image} />
          <div className="info">
            <h2># {data.id}</h2>
            <h3>{data.name.toUpperCase()}</h3>
            <p>
              <strong>Type</strong>: {data.types[0].type.name.toUpperCase()}
            </p>
          </div>
          <Button color="primary" variant="contained">
            Capturar
          </Button>
        </S.PaperStyled>
      ))}
    </S.PageWrapper>
  );
}

export default Catalogo;
