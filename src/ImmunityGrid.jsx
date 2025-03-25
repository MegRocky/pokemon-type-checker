import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";

function ImmunityGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [noDamageFrom, setNoDamageFrom] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setNoDamageFrom(response.damage_relations.no_damage_from);
    });
  }, [type]);
  return noDamageFrom.length > 0 ? (
    <>
      <>
        <p>{type} takes no damage from:</p>
        <InteractionsGrid interaction={noDamageFrom}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default ImmunityGrid;
