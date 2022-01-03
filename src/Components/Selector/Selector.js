import React from "react";
import Select from "react-select";
import "./Selector.css";
import "./Selector.scss"
import { region, bedrooms, type } from '../../JSON/Arrays'

function Selector({
  filterRegion,
  setFilterRegion,
  filterBedrooms,
  setFilterBedrooms,
  filterPrice,
  setFilterPrice,
  filterType,
  setFilterType,
}) {
  function handleRegion(e) {
    setFilterRegion(e.value);
  }
  function handleBedrooms(e) {
    setFilterBedrooms(e.value);
  }
  function handleType(e) {
    setFilterType(e.value);
  }

  const handlePrice = (e) => {
    setFilterPrice(e.target.value);
  };
  //fonction trouver sur google pour espacer les chiffres des prix
  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <div className="selector-line">
      <div className="select-block">
        <label>Dans quel type:</label>
        <Select
          className="select-type"
          options={type}
          placeholder="Choisissez un type"
          value={type.find((obj) => obj.value === filterType)}
          onChange={handleType}
          isSearchable
        />
      </div>
      <div className="select-block">
        <label>Dans quelle région:</label>
        <Select
          className="select-region"
          options={region}
          placeholder="Choisissez une région"
          value={region.find((obj) => obj.value === filterRegion)}
          onChange={handleRegion}
          isSearchable
        />
      </div>
      <div className="select-block">
        <label>Nombre de chambre:</label>
        <Select
          className="select-chambre"
          options={bedrooms}
          placeholder="Choisissez par nombre de chambres"
          value={bedrooms.find((obj) => obj.value === filterBedrooms)}
          onChange={(e) => handleBedrooms(e)}
          isSearchable
        />
        <div>
          <label>Prix Max : </label>
          <input
            className="price-slider"
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="10000000"
            onChange={handlePrice}
            step="50000"
            value={filterPrice}
          />
          <label className="selected-price" for="price">
            {numberWithSpaces(filterPrice)} €
          </label>
        </div>
      </div>
    </div>
  );
}

export default Selector;
