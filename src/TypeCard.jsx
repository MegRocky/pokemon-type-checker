function TypeCard({ typeName }) {
  return (
    <div className="type-card">
      <img src={`src/assets/${typeName}.png`}></img>
      <h4>{typeName}</h4>
    </div>
  );
}

export default TypeCard;
