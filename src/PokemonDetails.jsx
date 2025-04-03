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

  function handleTypeDetails(response) {
    const relations = {};
    const immunity = [];
    for (let entry of response) {
      for (let type of entry.damage_relations?.half_damage_from) {
        if (type.name in relations) {
          relations[type.name] -= 2;
        } else {
          relations[type.name] = -2;
        }
      }
      for (let type of entry.damage_relations?.double_damage_from) {
        if (type.name in relations) {
          relations[type.name] += 2;
        } else {
          relations[type.name] = 2;
        }
      }
      for (let type of entry.damage_relations.no_damage_from) {
        delete relations[type.name];
        immunity.push(type.name);
      }
    }
    return { relations, immunity };
  }

  useEffect(() => {
    const typeDetailsArr = [];
    if (currentPokemonDetails?.types.length > 1) {
      getTypeDetails(currentPokemonDetails.types[0]?.type.name).then(
        (response) => {
          console.log(response);
          typeDetailsArr.push(response);
        }
      );
      getTypeDetails(currentPokemonDetails.types[1]?.type.name)
        .then((response) => {
          console.log(response);
          typeDetailsArr.push(response);
        })
        .then(() => {
          console.log(typeDetailsArr);
          return handleTypeDetails(typeDetailsArr);
        })
        .then(({ relations, immunity }) => {
          setDamageRelatons(relations);
          setImmuneTo(immunity);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getTypeDetails(currentPokemonDetails.types[0]?.type.name)
        .then((response) => {
          console.log(response);
          typeDetailsArr.push(response);
        })
        .then(() => {
          console.log(typeDetailsArr);
          return handleTypeDetails(typeDetailsArr);
        })
        .then(({ relations, immunity }) => {
          setDamageRelatons(relations);
          setImmuneTo(immunity);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentPokemonDetails]);

  return (
    <>
      <h3>{currentPokemonDetails.name}</h3>
      {currentPokemonDetails.types.length === 1 ? (
        <>
          <p>{currentPokemonDetails.types[0].type.name} type </p>
          <img src={`/${currentPokemonDetails.types[0].type.name}.png`}></img>
        </>
      ) : (
        <>
          <p>
            {currentPokemonDetails.types[0].type.name} and{" "}
            {currentPokemonDetails.types[1].type.name} type{" "}
          </p>
          <img src={`/${currentPokemonDetails.types[0].type.name}.png`}></img>{" "}
          <img src={`/${currentPokemonDetails.types[1].type.name}.png`}></img>
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
