let nos_pays = [
    { Nom: "Nigéria", Superficie: 923768, Population: 212871345, Monnaie: "Naïra", Langue: "Anglais"},
    { Nom: "Égypte", Superficie: 1010408, Population: 100004225,Monnaie: "Dollar", Langue: "Arabe"},
    { Nom: "Somalie", Superficie: 1219912, Population: 57725606, Monnaie: "Siïle", Langue: "Espagnol"},
    { Nom: "Algérie", Superficie: 2381741, Population: 43820839, Monnaie: "Dinar", Langue: "Français"},
    { Nom: "Maroc", Superficie: 446550, Population: 35481848, Monnaie: "Livre", Langue: "Français"},
    { Nom: "Ghana", Superficie: 267667, Population: 6549402, Monnaie: "Cidis", Langue: "Anglais"},
    { Nom: "Tchad", Superficie: 1284200, Population: 5310548, Monnaie: "FCFA", Langue: "Anglais"},
    { Nom: "Cameroun", Superficie: 212510, Population:4905246, Monnaie: "FCFA", Langue: "François"},
    { Nom: "Tunisie", Superficie: 267667, Population: 2325082, Monnaie: "Dinar", Langue: "François"},
    { Nom: "Libéria", Superficie: 475650, Population: 2183687, Monnaie: "Livre", Langue: "Anglais"},
    { Nom: "Bénin", Superficie: 28051, Population: 2015334, Monnaie: "FCFA", Langue: "François"},
    { Nom: "Soudan", Superficie: 1886068, Population: 44318058 , Monnaie: "FCFA", Langue: "Anglais"},
];
console.log(nos_pays);

// Pour déterminer la densité de chacun des pays
nos_pays.forEach(objet => {
    objet.Densite = objet.Population/objet.Superficie;
});

//filter() Pour filter les pays dont la densité est supérieure à 50hts/km²
const filtrer = nos_pays.filter(function(cle){
    return cle.Densite > 50;
});
console.log(filtrer);

//Pour afficher la densité des pays dont la densité est supérieure à 50hts/km²
filtrer.forEach(key =>{
    console.log(key.Densite);
});


//every() Pour vérifier si tout les pays ont une densité supérieure à 50hts/km²
const tout = nos_pays.every(function(cle){
    return cle.Densite > 50;
});
console.log(tout);

// some() Pour vérifier s'il y a au moins un pays qui a une densité supérieure à 50hts/km² 
const aumoins = nos_pays.some(function(cle){
    return cle.Densite > 50;
});
console.log(aumoins);

// map() Pour 
const supefi = nos_pays.map(function(cle){
    if(cle.Densite > 50){
        return cle;
    }else{
        return "Non";
    }
});
console.log(supefi);







