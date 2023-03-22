const form = document.querySelector('#form')
let priceDiv = document.querySelector('#priceDiv')


form.addEventListener('submit', function (invioForm) {
    //Evito che si ricarichi il sito
    invioForm.preventDefault();

    // ottenere i valore di numero km
    let numberKms = document.querySelector('#form-km-number').value;
    // Ottenere il valore della sezione select
    let selectDiscount = document.getElementById('form-sconto');
    let valueDiscount = selectDiscount.options[selectDiscount.selectedIndex].value;

    
    //  calcolare il prezzo base per km
    let pricePerKm = numberKms * 0.21;

    console.log(numberKms, pricePerKm, valueDiscount);

    // calcolare il prezzo finale
    if (valueDiscount == 'under18') {

        finalPrice = pricePerKm / 100 * 80;
        discountNotify = 'Hai usufrito dello sconto Under 18 equivalente al 20% del prezzo totale';

    } else if (valueDiscount == 'over65') {

        finalPrice = pricePerKm / 100 * 60;
        discountNotify = 'Hai usufrito dello sconto Over 65 equivalente al 40% del prezzo totale';


    } else {
        finalPrice = pricePerKm;
        discountNotify = 'Non usufruisci di alcuno sconto';


    };
    console.log(finalPrice);

    // Avviso discount

    // funzione per gnerare il prezzo in html
    function displayPrice( ) {
        priceDiv.innerHTML =
        `
        <span class="fs-3">Il tuo prezzo finale è:</span>
        <h2>${finalPrice.toFixed(2)} &euro;</h2>
        <span class="fst-italic text-start">(${discountNotify})</span>
        
        `
    };

    displayPrice();

});


// Tasto per resettare il form
const resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', function resetFunction(params) {
    form.reset ();
})
