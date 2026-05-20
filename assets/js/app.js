// Griglia principale dove appariranno le card
const griglia = document.getElementById('griglia-cocktail');

// Barra di ricerca
const inputRicerca = document.getElementById('cerca-cocktail');

// Filtri Barra Laterale 
const boxFiltriAttivi = document.getElementById('filtri-attivi');
const btnPulisci = document.getElementById('pulisci-filtri');
const inputIngrediente = document.getElementById('cerca-ingrediente');
const btnAggiungiIngrediente = document.getElementById('aggiungi-ingrediente');
const btnAlcolici = document.getElementById('bottone-alcolici');
const btnAnalcolici = document.getElementById('bottone-analcolici');
const selectDifficolta = document.getElementById('seleziona-difficolta');
const selectGusto = document.getElementById('seleziona-gusto');

// Finestra Ricetta
const modale = document.getElementById('finestra-ricetta');
const btnChiudiModale = document.getElementById('chiudi-finestra');
const imgModale = document.getElementById('foto-cocktail');
const titoloModale = document.getElementById('titolo-cocktail');
const ingredientiModale = document.getElementById('lista-ingredienti');
const testoModale = document.getElementById('testo-preparazione');

// Filtri applicati
let statoFiltri = {
    nome: "",           
    ingredienti: [],    
    alcolico: null,     
    difficolta: "",     
    gusto: ""           
};

// Funzione per mostrare le card con i cocktail
function mostraCocktail(lista) {
    griglia.innerHTML = "";

    if (lista.length === 0) {
        griglia.innerHTML = '<p id="nessun-risultato">Nessun cocktail trovato</p>'; //Mostra il messaggio se non è stato trovato nessun cocktail
        return;
    }

    for (let cocktail of lista) {
        const card = document.createElement('div'); //Creazione delle card per ogni elemento della lista
        card.id = cocktail.id;
        card.className = "card-cocktail";
        card.innerHTML = `
            <img src="${cocktail.immagine}" alt="${cocktail.nome}"">
            <h3>${cocktail.nome}</h3>
        `;

        card.addEventListener('click', () => {
            document.getElementById('foto-cocktail').src = cocktail.immagine;
            document.getElementById('titolo-cocktail').textContent = cocktail.nome;
            document.getElementById('testo-preparazione').textContent = cocktail.ricetta;
            
            const listaIngredienti = document.getElementById('lista-ingredienti');  
            listaIngredienti.innerHTML = "";
            for (let ingrediente of cocktail.ingredienti) {
                listaIngredienti.innerHTML += `<li>${ingrediente}</li>`;
            }
            document.getElementById('finestra-ricetta').style.display = "block"; //Apre la finestra
        });
        griglia.appendChild(card); // Aggiunge la card alla griglia
    }
}

document.getElementById('chiudi-finestra').addEventListener('click', () => {
    document.getElementById('finestra-ricetta').style.display = "none"; //Chiude la finestra
});

// Funzione che filtra i cocktails per nome
function filtraCocktails() {
    let risultati = [];

    for (let cocktail of cocktailsDatabase) {
        let nomeCocktail = cocktail.nome.toLowerCase();
        let testoCercato = statoFiltri.nome.toLowerCase();

        if (nomeCocktail.includes(testoCercato)) {
            risultati.push(cocktail);
        }
    }
    mostraCocktail(risultati);
}

// Evento che registra le ricerche 
inputRicerca.addEventListener('input', () => {
    statoFiltri.nome = inputRicerca.value;
    filtraCocktails();
});

filtraCocktails();