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

// Variabili per gestire la navigazione con le frecce
let cocktailFiltratiGlobali = []; 
let indiceCocktailCorrente = 0;

// Filtri applicati
let statoFiltri = {
    nome: "",           
    ingredienti: [],    
    alcolico: null,     
    difficolta: "",     
    gusto: ""           
};


function apriFinestraRicetta(cocktail) {
    imgModale.src = cocktail.immagine;
    imgModale.alt = `Fotografia del cocktail ${cocktail.nome}`; 
    titoloModale.textContent = cocktail.nome;
    testoModale.textContent = cocktail.ricetta;
    document.getElementById('difficolta-cocktail').textContent = cocktail.difficolta;
    document.getElementById('gusto-cocktail').textContent = cocktail.gusto;

    const tipoBadge = document.getElementById('tipo-cocktail');
    if (cocktail.alcolico === true) {
        tipoBadge.textContent = "Alcolico";
        tipoBadge.parentElement.className = "info-selezione badge-alcolico";
    } else {
        tipoBadge.textContent = "Analcolico";
        tipoBadge.parentElement.className = "info-selezione badge-analcolico";
    }

    const listaIngredienti = document.getElementById('lista-ingredienti');  
    listaIngredienti.innerHTML = "";
    for (let ingrediente of cocktail.ingredienti) {
        listaIngredienti.innerHTML += `<li>${ingrediente}</li>`;
    }
    
    modale.classList.add('mostra-finestra');
}

function mostraCocktail(lista) {
    griglia.innerHTML = "";

    if (lista.length === 0) {
        griglia.innerHTML = '<p id="nessun-risultato">Nessun cocktail trovato</p>';
        return;
    }

    for (let cocktail of lista) {
        const card = document.createElement('div');
        card.id = cocktail.id;
        card.className = "card-cocktail";
        card.innerHTML = `
        <img src="${cocktail.immagine}" alt="${cocktail.nome}" width="400" height="500">
        <h3>${cocktail.nome}</h3>
        `;

        card.addEventListener('click', () => {
            indiceCocktailCorrente = cocktailFiltratiGlobali.indexOf(cocktail);
            apriFinestraRicetta(cocktail);
        });
        
        griglia.appendChild(card);
    }
}


btnChiudiModale.addEventListener('click', () => {
    modale.classList.remove('mostra-finestra'); 
});

document.getElementById('successivo-cocktail').addEventListener('click', () => {
    if (cocktailFiltratiGlobali.length <= 1) return; 
    indiceCocktailCorrente = (indiceCocktailCorrente + 1) % cocktailFiltratiGlobali.length; 
    apriFinestraRicetta(cocktailFiltratiGlobali[indiceCocktailCorrente]);
});

document.getElementById('precedente-cocktail').addEventListener('click', () => {
    if (cocktailFiltratiGlobali.length <= 1) return;
    indiceCocktailCorrente = (indiceCocktailCorrente - 1 + cocktailFiltratiGlobali.length) % cocktailFiltratiGlobali.length;
    apriFinestraRicetta(cocktailFiltratiGlobali[indiceCocktailCorrente]);
});



function normalizzaIngrediente(ingrediente) {
    const search = ingrediente.trim().toLowerCase();
    
    let mapping = dizionarioSinonimi.find(item => item.ufficiale.toLowerCase() === search);
    if (mapping) return mapping.ufficiale.toLowerCase();
    
    mapping = dizionarioSinonimi.find(item =>
        item.sinonimi.some(sinonimo => sinonimo.toLowerCase() === search)
    );
    if (mapping) return mapping.ufficiale.toLowerCase();
    
    return search;
}

function filtraCocktails() {
    let risultati = [];

    for (let cocktail of cocktailsDatabase) {
        let check = true;
        let nomeCocktail = cocktail.nome.toLowerCase();
        let testoCercato = statoFiltri.nome.toLowerCase();

        if (!nomeCocktail.includes(testoCercato)) check = false;
        if (statoFiltri.difficolta !== "" && cocktail.difficolta !== statoFiltri.difficolta) check = false;
        if (statoFiltri.gusto !== "" && cocktail.gusto !== statoFiltri.gusto) check = false;
        if (statoFiltri.alcolico !== null && cocktail.alcolico !== statoFiltri.alcolico) check = false;

        if (statoFiltri.ingredienti.length > 0) {
            for (let ingredienteCercato of statoFiltri.ingredienti) {
                let trovato = false;
                let cercatoNormalizzato = normalizzaIngrediente(ingredienteCercato);

                for (let ingredienteCocktail of cocktail.ingredienti) {
                    let cocktailNormalizzato = normalizzaIngrediente(ingredienteCocktail);
                    
                    if (cocktailNormalizzato === cercatoNormalizzato) {
                        trovato = true;
                        break; 
                    }
                }

                if (trovato === false) {
                    check = false;
                    break;
                }
            }
        }

        if (check === true) {
            risultati.push(cocktail);
        }
    }
    
    cocktailFiltratiGlobali = risultati; 
    mostraCocktail(risultati);
}

// Evento che filtra la ricerca per nome 
inputRicerca.addEventListener('input', () => {
    statoFiltri.nome = inputRicerca.value;
    filtraCocktails();
});

// Evento che filtra la difficolta
selectDifficolta.addEventListener('change', () => {
    statoFiltri.difficolta = selectDifficolta.value;
    filtraCocktails();
});

// Evento che filtra il gusto
selectGusto.addEventListener('change', () => {
    statoFiltri.gusto = selectGusto.value;
    filtraCocktails();
});

// Evento che accende/spegne il bottone alcolici
btnAlcolici.addEventListener('click', () => {
    if (statoFiltri.alcolico === true) {
        statoFiltri.alcolico = null;
        btnAlcolici.classList.remove('attivo');
    } else {
        statoFiltri.alcolico = true;
        btnAlcolici.classList.add('attivo');
        btnAnalcolici.classList.remove('attivo'); 
    }
    filtraCocktails();
});

// Evento che accende/spegne il bottone analcolici
btnAnalcolici.addEventListener('click', () => {
    if (statoFiltri.alcolico === false) {
        statoFiltri.alcolico = null;
        btnAnalcolici.classList.remove('attivo');
    } else {
        statoFiltri.alcolico = false;
        btnAnalcolici.classList.add('attivo');
        btnAlcolici.classList.remove('attivo'); 
    }
    filtraCocktails();
});

// Funzione che mostra gli ingredienti selezionati e permette di rimuoverli
function aggiornaGraficaFiltri() {
    boxFiltriAttivi.innerHTML = ""; 

    if (statoFiltri.ingredienti.length === 0) {
        const messaggioVuoto = document.createElement('span');
        messaggioVuoto.className = "nessun-filtro-testo"; 
        messaggioVuoto.textContent = "Nessun ingrediente aggiunto";
        boxFiltriAttivi.appendChild(messaggioVuoto);
        return; 
    }

    for (let i = 0; i < statoFiltri.ingredienti.length; i++) {
        let ingrediente = statoFiltri.ingredienti[i];
        
        const tag = document.createElement('span');
        tag.className = "tag-ingrediente"; 
        tag.innerHTML = `${ingrediente} <span class="rimuovi-x">✕</span>`;    
        tag.addEventListener('click', () => {
            statoFiltri.ingredienti.splice(i, 1); 
            aggiornaGraficaFiltri();
            filtraCocktails();
        });
        
        boxFiltriAttivi.appendChild(tag);
    }
}

// Evento che filtra per ingredienti
btnAggiungiIngrediente.addEventListener('click', () => {
    let parolaScritta = inputIngrediente.value; 

    if (parolaScritta !== "") {
        let parolaMinuscola = parolaScritta.toLowerCase();

        // Fix logic check to match existing tags properly
        if (statoFiltri.ingredienti.some(i => i.toLowerCase() === parolaMinuscola)) {
            alert("Hai già aggiunto questo ingrediente!");
            inputIngrediente.value = ""; 
            return; 
        }

        statoFiltri.ingredienti.push(parolaScritta);
        inputIngrediente.value = "";

        aggiornaGraficaFiltri();
        filtraCocktails();
    }
});

// Evento che pulisce i filtri
btnPulisci.addEventListener('click', () => {
    statoFiltri.nome = "";
    statoFiltri.ingredienti = [];
    statoFiltri.alcolico = null;
    statoFiltri.difficolta = "";
    statoFiltri.gusto = "";

    inputRicerca.value = "";
    inputIngrediente.value = "";
    selectDifficolta.value = "";
    selectGusto.value = "";

    btnAlcolici.classList.remove('attivo');
    btnAnalcolici.classList.remove('attivo');

    aggiornaGraficaFiltri();
    filtraCocktails();
});

// Inizializzazione pagina
aggiornaGraficaFiltri();
filtraCocktails();

const btnApriFiltri  = document.getElementById('apri-filtri');
const btnChiudiFiltri = document.getElementById('chiudi-filtri');
const sidebarPannello = document.getElementById('sidebar');
const btnMostraRisultati = document.getElementById('mostra-risultati');

btnApriFiltri.addEventListener('click', () => {
    sidebarPannello.classList.add('sidebar-aperta');
});

btnChiudiFiltri.addEventListener('click', () => {
    sidebarPannello.classList.remove('sidebar-aperta');
});

btnMostraRisultati.addEventListener('click', () => {
    sidebarPannello.classList.remove('sidebar-aperta');
});