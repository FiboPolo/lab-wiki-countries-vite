import React from "react";
import { useParams } from 'react-router-dom'

const { id } = useParams()
const country = countries.find((c) => c.alpha3Code === id)

if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="col-7">
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  
export default CountryDetails