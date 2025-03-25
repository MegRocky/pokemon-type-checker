import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";

function StrengthsGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [doubleDamageTo, setDoubleDamageTo] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      console.log(response);
      return setDoubleDamageTo(response.damage_relations.double_damage_to);
    });
  }, [type]);
  return (
    <>
      <p>{type} deals double damage to:</p>
      <section className="type-grid">
        {doubleDamageTo.map((damagedType) => {
          return (
            <TypeCard
              typeName={damagedType.name}
              key={damagedType.name}
            ></TypeCard>
          );
        })}
      </section>
    </>
  );
}
export default StrengthsGrid;
