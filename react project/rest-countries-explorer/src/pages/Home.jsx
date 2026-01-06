import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CountryList from "../components/CountryList";
import Loading from "../components/Loading";

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  if (loading) return <Loading />;

  const filteredCountries = countries.filter((country) => {
    const name = country?.name?.common?.toLowerCase() || "";
    const matchesSearch = name.includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="container">
      <div className="top-controls">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter region={region} setRegion={setRegion} />
      </div>

      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default Home;
