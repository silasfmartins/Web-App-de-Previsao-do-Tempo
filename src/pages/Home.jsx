import { useState, useEffect } from "react";
import "../styles/main.css";
import { api } from "../lib/api";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  async function handleGetWeather(event) {
    event.preventDefault();
    const response = await api.get(search);
    setCity(search);

    setWeather(response.data);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    if (search === "") {
      setSearch(localStorage.getItem("search") || " ");
    } else {
      localStorage.setItem("search", search);
    }
  }, [search]);

  return (
      <div className="App">
        <h2 className="digiteCidade">
          Digite a cidade para saber a Previsão do Tempo
        </h2>
        <br />
        <header>
          <form onSubmit={handleGetWeather}>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            ></input>{" "}
            <button>Enviar</button>
          </form>
        </header>

        {weather && (
          <main>
            <h1>{city.toUpperCase()}</h1>
            <section className="current-weather">
              <h2>Tempo Atual</h2>

              <p>{weather.temperature}</p>
            </section>
            <section className="forecast">
              <h2>Previsão</h2>

              <ol>
                {weather.forecast.map((day) => (
                  <li>
                    <div>
                      <FaTemperatureHigh />
                      <p className="li-temperature">{day.temperature}</p>
                    </div>
                    <div>
                      <FaWind />
                      <p className="li-wind">{day.wind}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <br />
              <br />
              <br />
            </section>
          </main>
        )}
        <footer>
          <Link className="linkHome" to="/">
            Ir para a<br /> Página Inicial
          </Link>
          <Link className="linkPolitica" to="/privacy">
            Política de
            <br /> Privacidade
          </Link>
          <Link className="linkTermos" to="/terms">
            Termos e<br /> Condições de Uso
          </Link>
        </footer>
      </div>
  );
}