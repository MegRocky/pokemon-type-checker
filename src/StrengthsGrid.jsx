import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";

function StrengthsGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [doubleDamageTo, setDoubleDamageTo] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setDoubleDamageTo(response.damage_relations.double_damage_to);
    });
  }, []);

  return doubleDamageTo.length > 0 ? (
    <>
      <p>{type} deals double damage to:</p>
      <InteractionsGrid interaction={doubleDamageTo}></InteractionsGrid>
    </>
  ) : (
    <></>
  );
}
export default StrengthsGrid;
