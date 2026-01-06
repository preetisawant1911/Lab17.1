import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function CountryDetails() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);

  // Fetch selected country
  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    }

    fetchCountry();
  }, [code]);

  // Fetch border countries
  useEffect(() => {
    async function fetchBorders() {
      if (!country?.borders) return;

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`
        );
        const data = await res.json();
        setBorders(data);
      } catch (error) {
        console.error("Error fetching borders:", error);
      }
    }

    fetchBorders();
  }, [country]);

  if (!country) return <Loading />;

  const flag = country?.flags?.png || "";
  const name = country?.name?.common || "Unknown";
  const nativeName =
    Object.values(country?.name?.nativeName || {})[0]?.common || "N/A";
  const population = country?.population
    ? country.population.toLocaleString()
    : "N/A";
  const region = country?.region || "N/A";
  const subregion = country?.subregion || "N/A";
  const capital = country?.capital?.[0] || "N/A";
  const tld = country?.tld?.[0] || "N/A";
  const currencies = Object.values(country?.currencies || {})
    .map((c) => c.name)
    .join(", ") || "N/A";
  const languages =
    Object.values(country?.languages || {}).join(", ") || "N/A";

  return (
    <div className="details-page">
      <button className="back-btn shadow" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-content">
        <img src={flag} alt={name} className="details-flag" />

        <div className="details-info">
          <h2>{name}</h2>

          <div className="info-columns">
            <div>
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Subregion:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
            </div>

            <div>
              <p>
                <strong>Top Level Domain:</strong> {tld}
              </p>
              <p>
                <strong>Currencies:</strong> {currencies}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
            </div>
          </div>

          <div className="borders">
            <strong>Border Countries:</strong>
            <div className="border-list">
              {borders.length > 0 ? (
                borders.map((b) => (
                  <button
                    key={b.cca3}
                    className="border-btn shadow"
                    onClick={() => navigate(`/country/${b.cca3}`)}
                  >
                    {b.name.common}
                  </button>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
