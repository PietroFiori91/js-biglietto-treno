const kmPercorsi = prompt("Inserisci i chilometri da percorrere.");

// OPZIONE 1

// const anniPasseggero = prompt("Inserisci la tua età.");

// OPZIONE 2

const userYearOfBirth = prompt("In che anno sei nato?");
const currentDate = new Date();
const userAge = currentDate.getFullYear() - parseInt(userYearOfBirth);

console.log("l'utente ha " + userAge + " anni.");

// prezzo biglietto 

const prezzoBiglietto = (kmPercorsi * 0.21).toFixed(2);

// GLI IF E GLI ELSE

if (userAge <= 18) {
    const sconto20 = (prezzoBiglietto * 20) / 100;
    console.log("L'utente ha diritto a" + " " + sconto20 + " " + "Euro" + " " + "di sconto");
} else if (userAge > 18 && userAge < 65) {
    const noSconto = prezzoBiglietto;
    console.log("L'utente ha diritto a" + " " + 0 + " " + "Euro" + " " + "di sconto");
} else {
    const sconto40 = (prezzoBiglietto * 40) / 100;
    console.log("L'utente ha diritto a" + " " + sconto40 + " " + "Euro" + " " + "di sconto");
}

const sconto20 = (prezzoBiglietto * 20) / 100;
const noSconto = prezzoBiglietto;
const sconto40 = (prezzoBiglietto * 40) / 100;

const finalPriceMinor = prezzoBiglietto - sconto20.toFixed(2);
const finalPriceMajor = prezzoBiglietto - sconto40.toFixed(2);
const finalPriceFull = prezzoBiglietto;

document.getElementById("prezzofinale").innerHTML = finalPriceMinor

document.getElementById("prezzofinale").innerHTML = finalPriceMajor

document.getElementById("prezzofinale").innerHTML = finalPriceFull