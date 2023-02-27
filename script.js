const content = ["Côte d'Ivoire", "Mali", "Zambie", "Congo", "Togo", "Ghana", "Sénégal", "Gabon"];
let pays ="";

// for (const clef of content) {
//     chercherLettre(clef, "IvOIRE");
// }

function chercherLettre(mot, lettre){
    if (mot.toLowerCase().includes(lettre.toLowerCase())){
        console.log(`Le mot ${mot} contient la lettre ${lettre}`);
    }else{
        console.log(`Désolé, le mot ${mot} ne contient pas la lettre ${lettre}`);
    }
}

//This program allows you to insert elements and search for inserted elements.
function insert(e){
    const liste = document.getElementById("liste").value;
    const insert = document.getElementById("insert").value;
    if (liste != "" && insert != ""){
        let element = document.createElement("li");
        element.textContent = insert;
        if (liste === "ordonnee"){
            document.querySelector("ol").append(element);
            document.querySelector("#ordre .nombre").textContent = document.querySelectorAll("ol>li").length;
        }else{
            document.querySelector("ul").append(element);
            document.querySelector("#non-ordre .nombre").textContent = document.querySelectorAll("ul>li").length;
        }
        document.querySelector(".contenaire #total>strong").textContent = document.querySelectorAll(".contenaire li").length;
    }
}

function search(e){
    let trouve = document.getElementById("search").value;
    let li = document.querySelectorAll("li");
    let content = [];
    if(li.length > 0){
        li.forEach(contenu => {
            content.push(contenu.innerText);
        });
        let resultat = content.find(function(mot){
                return mot.toLowerCase().includes(trouve.toLowerCase());
        });
        if (resultat != undefined){
            document.getElementById("resultat").textContent = resultat;
        }else{
            document.getElementById("resultat").textContent = "Aucune reponse";
        } 
    }else{
        document.getElementById("resultat").textContent = "Aucun résultat";
    } 
}
document.getElementById("save").addEventListener("click", insert, false);
document.getElementById("go").addEventListener("click", search, false);

