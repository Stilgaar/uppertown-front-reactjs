import React from "react";
import Select from "react-select";
import "./Selector.css";
import "./Selector.scss";

const region = [
  { value: "all", label: "Toutes les régions" },
  { value: "Auvergne-Rhône-Alpes", label: "Auvergne-Rhône-Alpes" },
  { value: "Bourgogne-Franche-Comté", label: "Bourgogne-Franche-Comté" },
  { value: "Bretagne", label: "Bretagne" },
  { value: "Centre-Val de Loire", label: "Centre-Val de Loire" },
  { value: "Corse", label: "Corse" },
  { value: "Grand Est", label: "Grand Est" },
  { value: "Hauts-de-France", label: "Hauts-de-France" },
  { value: "Ile-de-France", label: "Ile-de-France" },
  { value: "Normandie", label: "Normandie" },
  { value: "Nouvelle-Aquitaine", label: "Nouvelle-Aquitaine" },
  { value: "Occitanie", label: "Occitanie" },
  { value: "Pays de la Loire", label: "Pays de la Loire" },
  { value: "Provence-Alpes-Côte d'Azur", label: "Provence-Alpes-Côte d'Azur" },
];

const bedrooms = [
  { value: "all", label: "Tout les nombres de chambres" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7+" },
];

const type = [
  {value: "all", label: "Tout les types" },
  {value: "Appartement", label: "Appartement" },
  {value: "Maison", label: "Maison" },
  {value: "Immeuble", label: "Immeuble" },
]

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
