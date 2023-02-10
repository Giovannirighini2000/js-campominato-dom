// CONTROLLIAMO CHE IL COLLEMENTO FUNZIONI DANDO IL BENVENUTO ALL'UTENTE
// alert('BENVENUTO A CAMPO MINATO')
// COLLEGARE IL BOTTONE PLAY AD UN EVENT LISTENER PER FAR APPARIRE LA GRIGLIA DI GIOCO
const btn = document.getElementById("mybuttonplay")
// COLLEGO IL VALARE CHE INSERISCE L'UTENTE NEL CALCOLARE LA GRIGLIA
const inputLatoGriglia = document.getElementById("input-lato-griglia")
// CONTEGGIO PUNTI CASELLE BLU CLICK
const punteggiolivelloAttuale = document.getElementById("ilmioconteggiopunti")


// QUANDO L'UTENTE FARE UN CLICK SI CE EVENT LISTENER CON UN FUNZIONE CHE A OGNI CLICK CREA UNA NUOVO GIOCO
btn.addEventListener("click", function () {
    // CALCOLO LE CELLE DELLE GRIGLIA 
    let latoGriglia = inputLatoGriglia.value
    let numeroCelle = latoGriglia * latoGriglia

    // console.log(latoGriglia, numeroCelle)
    // COLLEMENTO AL DOM
    const grigliaElement = document.querySelector('.griglia-caselle-di-gioco')
    console.log(grigliaElement)

    // GENERO LE BOMBE CASUALI IN BASE ALLE CELLE
    let bombeCasuali = []
    let bomba
    while (bombeCasuali.length < 16) {
        bomba = Math.floor(Math.random() * numeroCelle) + 1
        console.log(bomba)

        if (bombeCasuali.includes(bomba)) {

        } else {
            bombeCasuali.push(bomba)
            console.log(bombeCasuali)

        }
    };

    // RIMUOVO TUTTI I NODI FIGLI PRIMA DI RIGENERARE LE CELLE RESET DEL GIOCO AL CLICK PLAY
    while (grigliaElement.firstChild) {
        grigliaElement.removeChild(grigliaElement.firstChild)
    }

    // DICHIARO UNA VARIABILE
    let num

    // INVOCAZIONE FUNZIONE CREAZIONE DIV CASELLE
    let divCreati = crezioneDiv()

    // RIPRENDO LA CLASSE CELLA E LA UTILIZZO
    const celleTotali = document.querySelectorAll('.cella')
    
    // INVOCAZIONE FUNZIONE CREAZIONE BOMBE E PUNTI
    const vinciPerdi = generazioneBombePunti()

    // CON UNA FUNZIONE
    // CREO LE DIV CON UN CICLO FOR E USO APPEND PER METTERLI ALL'INZIO DELLA GRIGLIA E CALCOLO LA LORO DIMENSIONE
    function crezioneDiv(divWidth) {
        for (let i = 0; i < numeroCelle; i++) {
            let num = i + 1
            // console.log(num)
            let cellaElement = document.createElement('div')
            // console.log(cellaElement)
            grigliaElement.append(cellaElement)
            cellaElement.classList.add("cella");
            cellaElement.append(num)
            cellaElement.style.width = `calc(100% / ${latoGriglia})`

        }
    }

    // CON UNA FUNZIONE
    // CREO UN CICLO FOR CHE AL CLICK MI DICE IL NUMERO DELLA CASELLA E MI IMPOSTA IL COLORE 
    // DISPONGO LE BOMBE ROSSE CHE AL CLICK DOVRANNO FINIRE IL GIOCO E LE CASELLE BLU SONO I PUNTI CHE AL CLICK DOVRANNO AUMENTARE IL CONTEGGIO E ALLA FINE DELLE CASELLE BLU A DISPOSIZIONE DOVRA FINIRE IL GAME
    
    function generazioneBombePunti(bombePunti) {
        for (let i = 0; i < celleTotali.length; i++) {
            const cella = celleTotali[i]
            let punteggio = 0
            
            cella.addEventListener('click', function () {
                console.log(i + 1)
                if (bombeCasuali.includes(i + 1)) {
                    cella.style.backgroundColor = "red";
                    window.alert("Hai perso!");
                    btn.click()
                    
                    

                } else {
                    cella.style.backgroundColor = "blue";
                    punteggio++
                    // arguments.callee fa riferimento alla funzione anonima
                    cella.removeEventListener('click',arguments.callee)
                    // STAMPO IL CONTEGGIO PUNTI CORREGGERE
                    punteggiolivelloAttuale.innerHTML = punteggio
                    
                    
                    
                    if (punteggio === numeroCelle - 16) {
                        window.alert(`Hai vinto! Il tuo punteggio è ${punteggio} Punti`)
                        btn.click()
                        
                        
                       
                    }

                }
            })
        }
    }
    
    
});