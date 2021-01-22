import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styles";
import { Typography, Button, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

function Catalogo() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const itensPage = 25;

  const getPokemons = async () => {
    const dataInAPI = (
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${itensPage}`
      )
    ).data;
    const resultFormatted = dataInAPI.results?.map(async (item, index) => {
      const urlInfo = await axios.get(item.url);
      const { data } = await Promise.resolve(urlInfo);
      // console.log(data.id)
      return {
        name: item.name,
        id: data.id,
        image: data?.sprites.front_default,
        types: data?.types,
        count: dataInAPI.count,
      };
    });
    (async () => {
      const result = await Promise.all(resultFormatted);
      setPokemons(result);
    })();
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

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
      <Box display="flex" justifyContent="center" m={4}>
        <Pagination
          count={Math.ceil(pokemons[0]?.count / itensPage)}
          page={page / itensPage + 1}
          onChange={(e, value) => setPage(itensPage * (value - 1))}
        />
      </Box>
    </S.PageWrapper>
  );
}

export default Catalogo;
