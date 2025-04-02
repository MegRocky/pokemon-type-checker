import HalfDamageFromGrid from "./HalfDamageFromGrid";
import ImmunityGrid from "./ImmunityGrid";
import WeaknessGrid from "./WeaknessGrid";
import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import QuadDamageFromGrid from "./QuadDamageFromGrid";
import QuarterDamageFromGrid from "./QuarterDamageFromGrid";

function PokemonDetails({ currentPokemonDetails }) {
  const [damageRelations, setDamageRelatons] = useState({});
  const [immuneTo, setImmuneTo] = useState([]);

  useEffect(() => {
    const relations = {};
    const immunity = [];

    for (let typ of currentPokemonDetails.types) {
      const name = typ.type.name;
      getTypeDetails(name)
        .then((response) => {
          for (let type of response.damage_relations?.half_damage_from) {
            if (type.name in relations) {
              relations[type.name] -= 2;
            } else {
              relations[type.name] = -2;
            }
          }
          for (let type of response.damage_relations?.double_damage_from) {
            if (type.name in relations) {
              relations[type.name] += 2;
            } else {
              relations[type.name] = 2;
            }
          }
          for (let type of response.damage_relations.no_damage_from) {
            if (type.name in relations) {
              delete relations[type.name];
              immunity.push(type.name);
            } else {
              immunity.push(type.name);
            }
          }
        })
        .then(() => {
          return setDamageRelatons(relations);
        })
        .then(() => {
          return setImmuneTo(immunity);
        });
    }
  }, [currentPokemonDetails]);

  return (
    <>
      <h3>{currentPokemonDetails.name}</h3>
      {currentPokemonDetails.types.length === 1 ? (
        <>
          <p>{currentPokemonDetails.types[0].type.name} type </p>
          <img
            src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
          ></img>
        </>
      ) : (
        <>
          <p>
            {currentPokemonDetails.types[0].type.name} and{" "}
            {currentPokemonDetails.types[1].type.name} type{" "}
          </p>
          <img
            src={`src/assets/${currentPokemonDetails.types[0].type.name}.png`}
          ></img>{" "}
          <img
            src={`src/assets/${currentPokemonDetails.types[1].type.name}.png`}
          ></img>
        </>
      )}
      <ImmunityGrid immuneTo={immuneTo}></ImmunityGrid>
      <QuadDamageFromGrid
        damageRelations={damageRelations}
      ></QuadDamageFromGrid>
      <WeaknessGrid damageRelations={damageRelations}></WeaknessGrid>
      <QuarterDamageFromGrid
        damageRelations={damageRelations}
      ></QuarterDamageFromGrid>
      <HalfDamageFromGrid
        damageRelations={damageRelations}
      ></HalfDamageFromGrid>
    </>
  );
}
export default PokemonDetails;
