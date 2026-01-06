function CountryCard({ country }) {
  const flag = country?.flags?.png || "";
  const name = country?.name?.common || "Unknown";
  const population = country?.population
    ? country.population.toLocaleString()
    : "N/A";
  const region = country?.region || "N/A";
  const capital = country?.capital?.[0] || "N/A";

  return (
    <div className="country-card shadow">
      <img src={flag} alt={name} className="flag" />

      <div className="card-body">
        <h3>{name}</h3>

        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
