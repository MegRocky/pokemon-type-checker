import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import InteractionsGrid from "./InteractionsGrid";
function DualTypeGrids({ currentPokemonDetails }) {
  const quadDamageFrom = [];
  const typeFirst = currentPokemonDetails.types[0].type.name;
  const typeSecond = currentPokemonDetails.types[1].type.name;
  const [doubleDamageFromFirst, setDoubleDamageFromFirst] = useState([]);
  const [doubleDamageFromSecond, setDoubleDamageFromSecond] = useState([]);
  useEffect(() => {
    getTypeDetails(typeFirst).then((response) => {
      return setDoubleDamageFromFirst(
        response.damage_relations.double_damage_from.map((type) => {
          return type.name;
        })
      );
    });
    getTypeDetails(typeSecond).then((response) => {
      return setDoubleDamageFromSecond(
        response.damage_relations.double_damage_from.map((type) => {
          return type.name;
        })
      );
    });
  }, []);
  for (let type of doubleDamageFromFirst) {
    if (doubleDamageFromSecond.includes(type)) {
      quadDamageFrom.push({ name: type });
    }
  }

  return (
    <>
      <p>
        is a {currentPokemonDetails.types[0].type.name} and{" "}
        {currentPokemonDetails.types[1].type.name} type{" "}
      </p>
      <img
        src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
      ></img>{" "}
      <img
        src={`src/assets/${currentPokemonDetails.types[1].type.name}.png`}
      ></img>
      <p> takes 4x damage from:</p>
      <InteractionsGrid interaction={quadDamageFrom}></InteractionsGrid>
    </>
  );
}
export default DualTypeGrids;
