/*
const etaPasseggero = prompt("Quanti anni hai?");
const etaNumero = parseInt(etaPasseggero);

const kmPasseggero = prompt("Quanti km vuoi percorrere?");
const kmNumero = parseInt(kmPasseggero);

const costoKm = 0.21;

const scontoMinorenne = (0.21 / 100 * 20);
const scontoOver65 = (0.21 / 100 * 40);

if (etaNumero <18) {
    alert("Il tuo prezzo è " + (kmNumero * (0.21 - scontoMinorenne )) .toFixed(2) + " euro");
}

else if  (etaNumero >= 65) {
    alert("Il tuo prezzo è " + (kmNumero * (0.21 - scontoOver65)) .toFixed(2) + " euro");
}

else { (etaNumero >= 18 && etaNumero <65) 
    alert("Il tuo prezzo è " + (kmNumero * 0.21) .toFixed(2) + " euro");
}
*/



const kmPasseggero = document.getElementById('inputNome').value;
console.log('KMPASSEGGERO---->', kmPasseggero);

document.getElementById('genera').addEventListener('click', 
    function() {
        console.log('HO CLICCATO');

        const nomePasseggero = document.getElementById('inputNome').value;
        console.log('nomePasseggero---->', nomePasseggero);

        const etaPasseggero = document.getElementById('inputEta').value;
        const etaNumero = parseInt(etaPasseggero);
        console.log('ETAPASSEGGERO---->', etaPasseggero);

        
        
        const kmPasseggero = document.getElementById('km_da_percorrere').value;
        const kmNumero = parseInt(kmPasseggero);
        console.log('kmPasseggero---->', kmPasseggero);

        const costoKm = 0.21;
        
        const scontoMinorenne = (0.21 / 100 * 20);
        const scontoOver65 = (0.21 / 100 * 40);
        
        if (etaNumero <18) {
            alert("Il tuo prezzo è " + (kmNumero * (0.21 - scontoMinorenne )) .toFixed(2) + " euro");
        }
        
        else if (etaNumero >= 65) {
            alert("Il tuo prezzo è " + (kmNumero * (0.21 - scontoOver65)) .toFixed(2) + " euro");
        }
        
        else { (etaNumero >= 18 && etaNumero <65) 
            alert("Il tuo prezzo è " + (kmNumero * 0.21) .toFixed(2) + " euro");
        }
    }
)



