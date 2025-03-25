import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonDetails = (pokemonName) => {
  return pokeApi.get(`/pokemon/${pokemonName}`).then((res) => {
    return res.data;
  });
};

export const getTypeDetails = (pokemonName) => {
  return pokeApi.get(`/pokemon/${pokemonName}`).then((res) => {
    return res.data;
  });
};
