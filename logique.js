const nombre = parseInt (prompt("Veuillez saisr un nombre"));
if(!isNaN(nombre)){
    if ((nombre % 2===0 && nombre % 5 === 0) || (nombre % 3===0 && nombre % 9 === 0)){
        console.log(23);
    }
}

//  || (nombre % 7 == nombre % 9 === 0)