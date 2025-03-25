import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";

function WeaknessGrid({ currentPokemonDetails }) {
  const type = currentPokemonDetails.types[0].type.name;

  const [doubleDamageFrom, setDoubleDamagefrom] = useState([]);

  useEffect(() => {
    getTypeDetails(type).then((response) => {
      return setDoubleDamagefrom(response.damage_relations.double_damage_from);
    });
  }, [type]);
  return (
    <>
      <p>{type} takes double damage from:</p>
      <section className="type-grid">
        {doubleDamageFrom.map((damageType) => {
          return (
            <TypeCard
              typeName={damageType.name}
              key={damageType.name}
            ></TypeCard>
          );
        })}
      </section>
    </>
  );
}
export default WeaknessGrid;
