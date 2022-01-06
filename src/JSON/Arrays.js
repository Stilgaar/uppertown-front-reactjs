export const rib = [
    {
        "name": "titulaire",
        "label": "Titulaire du Compte",
        "type": "text",
        "placeholder": "Uppertown"
    },
    {
        "name": "domiciliation",
        "label": "Domiciliation du Compte (Adresse)",
        "type": "text",
        "placeholder": "Banque d'UpperTown, 0600 Nice"
    },
    {
        "name": "iban",
        "label": "Code IBAN",
        "type": "text",
        "placeholder": "FR76"
    },

    {
        "name": "codeBanque",
        "label": "Code Banque",
        "type": "number",
        "placeholder": "14707"
    },

    {
        "name": "codeGuichet",
        "label": "Code Guichet",
        "type": "number",
        "placeholder": "0807"
    },

    {
        "name": "numeroCompte",
        "label": "Numero de Compte",
        "type": "number",
        "placeholder": "012345678901"
    },

    {
        "name": "clefRib",
        "label": "Clef RIB",
        "type": "number",
        "placeholder": "42"
    },

    {
        "name": "bicSwift",
        "label": "B.I.C / SWIFT",
        "type": "text",
        "placeholder": "BLM182R2D2"
    },
];

export const userUpate = [

    {
        "name": "firstname",
        "label": "Nouveau Prénom",
        "update": "Attention toute modification de votre prénom vous obligera à nous renvoyer au plus vite un justificatif d'identité",
        "placeholder": "Entrez votre nouveau Prénom",
        "type": "texte",
        "newinput": "newfirstname",
    },
    {
        "name": "lastname",
        "label": "Nouveau Nom",
        "update": "Attention toute modification de votre nom vous obligera à nous renvoyer au plus vite un justificatif d'identité",
        "placeholder": "Entrez votre nouveau Nom",
        "type": "texte",
        "newinput": "newlastname",
    },
    {
        "name": "email",
        "label": "Nouvel Email",
        "update": "Placeholder : est-ce qu'il faut qu'on mette en place une verification d'email ?",
        "placeholder": "Entrez votre nouvel email",
        "type": "email",
        "newinput": "newemail",
    },
    {
        "name": "tel",
        "label": "Nouveau numéro de Téléphone",
        "update": "Placeholder : est-ce qu'il faut qu'on mette en place une verification de numero de téléphone ?",
        "placeholder": "Entrez votre nouveau numero de téléphone",
        "type": "number",
        "newinput": "newtel",
    },
    {
        "name": "brandname",
        "label": "Votre société",
        "update": "",
        "placeholder": "Votre Societé",
        "type": "text",
        "newinput": "newbrandname",
    },
    {
        "name": "adress",
        "label": "Nouvelle Adresse",
        "update": "Attention toute modification d'adresse vous obligera à nous faire parvenir un nouveau justificatif de domicile de moins de trois mois",
        "placeholder": "Entrez votre nouvelle adresse",
        "type": "texte",
        "newinput": "newadress",
    },
    {
        "name": "rib",
        "label": "Nouveau Releve d'identité bancaire",
        "update": "Pour chaque RIB il vous faudra joindre une version numerisé de celui-ci",
        "placeholder": "FR00 .. ... .. .... ",
        "type": "text",
        "newinput": "newRib",
    },

];

export const userUpload = [
    {
        "name": "pieceidentite",
        "label": "Ajoutez un Pièce d'Identité",
        "title": "Vos Pièces d'identité",
        "update": "Pour obtenir plus d'options nous vous invitons à ajouter une pièce d'identité",
        "type": "file",
        "url": "/up/id"
    },
    {
        "name": "justificatifdomicile",
        "label": "Ajoutez un Justificatif de Domicile",
        "title": "Vos Justificatifs de Domiciles",
        "update": "Pour obtenir plus d'options nous vous invitons à ajouter un justiticatif de domicile de moins de trois mois",
        "type": "file",
        "url": "/up/jdd"
    },
    {
        "name": "avisFiscal",
        "label": "Ajoutez votre Avis Fiscal",
        "title": "Vos Avis Fiscaux",
        "update": "Pour obtenir plus d'options nous vous invitons à ajouter votre avis fiscal de l'année en cours",
        "type": "file",
        "url": "/up/avis"
    },
    {
        "name": "picrib",
        "label": "Ajoutez un RIB",
        "title": "Vos Relevé d'Identité Bancaire",
        "update": "Veuillez joidndre un RIB pour chaque RIB renseigné",
        "type": "file",
        "url": "/up/rib"
    }
];


export const region = [
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
    { value: "Outre-Mer", label: "Outre-Mer" },
    { value: "International", label: "International" },
];

export const bedrooms = [
    { value: "all", label: "Tout les nombres de chambres" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7+" },
];

export const type = [
    { value: "all", label: "Tout les types" },
    { value: "Appartement ancien", label: "Appartements anciens" },
    { value: "Appartement neuf", label: "Appartements neufs" },
    { value: "Maison ancienne", label: "Maisons anciennes" },
    { value: "Maison neuve", label: "Maisons neuves" },
    { value: "Immeuble", label: "Immeubles" },
    { value: "Résidence de service", label: "Résidences de service" },
    { value: "Terrain constructible", label: "Terrains constructibles" },
    { value: "Chalet de montagne", label: "Chalets de montagne" },

];

export const option = [
    { value: "piscine", label: "Piscine" },
    { value: "tennis", label: "Tennis" },
    { value: "jardin", label: "Jardin" },
    { value: "parking", label: "Parking" },
    { value: "jaccuzi", label: "Jaccuzi" },
]

export const annonce = [
    {
        "label": "Nom de l'Annonce",
        "placeholder": "Un petit nom sympa ?",
        "name": "title",
        "type": "text",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Description",
        "placeholder": "La meilleure déscription pour votre annonce ?",
        "name": "content",
        "type": "text",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Ville",
        "placeholder": "ville",
        "name": "city",
        "type": "text",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Code Postal",
        "placeholder": "Zip Code",
        "name": "zip_code",
        "type": "number",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Region",
        "placeholder": "",
        "name": "region",
        "type": "text",
        "select": true,
        "list": region,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Type de bien",
        "placeholder": "",
        "name": "type",
        "type": "text",
        "select": true,
        "list": type,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Nombre de chambres",
        "placeholder": "Chambres",
        "name": "bedrooms",
        "type": "numbers",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Superficie",
        "placeholder": "en m²",
        "name": "surface",
        "type": "number",
        "select": false,
        "option": false,
        "part": false,
        "photos": false,
    }, {
        "label": "Prix du Bien",
        "placeholder": "Prix Global",
        "name": "price",
        "type": "number",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Prix de la part",
        "placeholder": "",
        "name": "",
        "select": false,
        "option": false,
        "photos": false,
        "part": true,
    }, {
        "label": "Nombre de Parts",
        "placeholder": "",
        "values": [1000, 10000,],
        "name": "share_number",
        "type": "radio",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,

    }, {
        "label": "Options",
        "placeholder": "",
        "name": "options",
        "type": "checkbox",
        "select": false,
        "option": true,
        "list": option,
        "photos": false,
        "part": false,
    }, {
        "label": "Loyer Brut Par An",
        "placeholder": "",
        "name": "gross_rent_by_year",
        "type": "number",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Coûts mensuels",
        "placeholder": "",
        "name": "monthly_cost",
        "type": "number",
        "select": false,
        "option": false,
        "photos": false,
        "part": false,
    }, {
        "label": "Photos",
        "placeholder": "",
        "name": "image",
        "type": "file",
        "select": false,
        "option": false,
        "photos": true,
        "part": false,
    },
];