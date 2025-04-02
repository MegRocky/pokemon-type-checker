import { useEffect, useState } from "react";
import { getTypeDetails } from "../api";
import TypeCard from "./TypeCard";
import InteractionsGrid from "./InteractionsGrid";

function ImmunityGrid({ immuneTo }) {
  return immuneTo.length > 0 ? (
    <>
      <>
        <p>takes no damage from:</p>
        <InteractionsGrid interaction={immuneTo}></InteractionsGrid>
      </>
    </>
  ) : (
    <></>
  );
}
export default ImmunityGrid;
