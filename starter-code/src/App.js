import React from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import countriesJSON from "./countries.json";
import { Link, NavLink, Route } from "react-router-dom";

const CountryDetail = props => {
  const countryCode = props.match.params.cca3;

  const country = countriesJSON.find(country => {
    return country.cca3 === countryCode;
  });

  console.log(country);
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 => {
                  const country = countriesJSON.find(country => {
                    return country.cca3 === cca3;
                  });
                  return (
                    <li key={cca3}>
                      <Link to={`/${cca3}`}>
                        {country.flag}
                        {country.name.common}
                      </Link>
                    </li>
                  );
                })}

                {/* <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li> */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div id="root">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countriesJSON.map(country => {
                  return (
                    <NavLink
                      //activeClassName={"my-active-class"}
                      key={country.cca3}
                      className="list-group-item list-group-item-action"
                      to={`/${country.cca3}`}
                    >
                      {country.flag} {country.name.common}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <Route path="/:cca3" component={CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
