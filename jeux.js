let question = confirm("Avez-vous plus de 18 ans");

if (question) {
    let nombre = parseInt(prompt("entrer un nombre compris de 1 à 10 "));

    if (1<= nombre <=10) {

        if (nombre % 2 === 0) {
            let verif =parseInt(prompt(`Entrer un nombre compris entre 1 et ${nombre}`));
            if (1 <= verif <= nombre && verif%3===0){
                console.log("Vous avez gagné");
            }
        }else {
            console.log("Vous avez perdu");
        }
    }else {
        console.log("Vous avez perdu");
    }
}else {
    console.log("Vous avez perdu");
}