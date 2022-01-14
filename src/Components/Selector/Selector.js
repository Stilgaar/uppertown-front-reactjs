import React from "react";
import Select from "react-select";
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

  return (
    <div className=" row gap-1 bg-white p-1 br-xs">

      <div className="col-12-xs col-6-md col-3-lg z-6">
        <label className="label">Dans quel type:</label>
        <Select className="mt-1"
          options={type}
          placeholder="Choisissez un type"
          value={type.find((obj) => obj.value === filterType)}
          onChange={(e) => handleType(e)}
          isSearchable />
      </div>

      <div className="col-12-xs col-6-md col-3-lg z-6">
        <label className="label">Dans quelle région:</label>
        <Select className="mt-1"
          options={region}
          placeholder="Choisissez une région"
          value={region.find((obj) => obj.value === filterRegion)}
          onChange={handleRegion}
          isSearchable />
      </div>

      <div className="col-12-xs col-6-md col-3-lg z-6">
        <label className="label">Nombre de chambre:</label>
        <Select className="mt-1"
          options={bedrooms}
          placeholder="Choisissez par nombre de chambres"
          value={bedrooms.find((obj) => obj.value === filterBedrooms)}
          onChange={(e) => handleBedrooms(e)}
          isSearchable />
      </div>

      <div className="display-f fd-col col-12-xs col-6-md col-3-lg z-6">
        <div>
          <label className="label">Prix Max : {filterPrice?.toLocaleString()} €</label>
          <input className="input slider mt-1"
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="10000000"
            onChange={handlePrice}
            step="50000"
            value={filterPrice} />
        </div>
      </div>
    </div>

  );
}

export default Selector;
