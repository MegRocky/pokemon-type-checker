import TypeCard from "./TypeCard";

function InteractionsGrid({ interaction }) {
  return (
    <>
      {interaction.length > 0 ? (
        <>
          <section className="type-grid">
            {interaction.map((type) => {
              return <TypeCard typeName={type} key={type}></TypeCard>;
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
