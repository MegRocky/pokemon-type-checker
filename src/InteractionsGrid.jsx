import TypeCard from "./TypeCard";

function InteractionsGrid({ interaction }) {
  console.log(interaction);
  return (
    <>
      {interaction.length > 0 ? (
        <>
          <section className="type-grid">
            {interaction.map((type) => {
              return <TypeCard typeName={type.name} key={type.name}></TypeCard>;
            })}
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default InteractionsGrid;
