import React, { Component } from 'react'
import Select from 'react-select'


const region= [
    { value: "Auvergne-Rhône-Alpes", label: "Auvergne-Rhône-Alpes" },
    { value: "Bourgogne-Franche-Comté", label: "Bourgogne-Franche-Comté" },
    { value: "Bretagne", label: "Bretagne" },
    { value: "	Centre-Val de Loire", label: "	Centre-Val de Loire" },
    { value: "Corse", label: "Corse" },
    { value: "Grand Est", label: "Grand Est" },
    { value: "Hauts-de-France", label: "Hauts-de-France" },
    { value: "Île-de-France", label: "Île-de-France" },
    { value: "Normandie", label: "Normandie" },
    { value: "Nouvelle-Aquitaine", label: "Nouvelle-Aquitaine" },
    { value: "Occitanie", label: "Occitanie" },
    { value: "Pays de la Loire", label: "Pays de la Loire" },
    { value: "Provence-Alpes-Côte d'Azur", label: "Provence-Alpes-Côte d'Azur" },
]


function Selector() {




    return(
        <Select options={region} />

    )
}

export default Selector;