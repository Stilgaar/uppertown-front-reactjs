import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import './Selector.css'

const region = [
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

const options = [
  { value: "parking", label: "Parking" },
  { value: "piscine", label: "Piscine" },
  { value: "salle de sport", label: "Salle de sport" },
  { value: "jacuzzi", label: "Jacuzzi" },
  { value: "jardin", label: "Jardin" },
  { value: "tennis", label: "Tennis" },
];

function Selector() {

    

  return (
    <div className="selector-selecteur">
      <div>
        <label>Choisissez une région:</label>
        <Select options={region}
        placeholder="Choisissez une région"
        />
      </div>
      <div>
        <label>Choisissez une ou plusieurs options:</label>
        <Select options={options} 
        placeholder="Choisissez une ou plusieurs options"
        isMulti
        autoFocus
        isSearchable
        />
      </div>
    </div>
  );
}

export default Selector;
