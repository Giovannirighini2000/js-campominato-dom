// CONTROLLIAMO CHE IL COLLEMENTO FUNZIONI DANDO IL BENVENUTO ALL'UTENTE
// alert('BENVENUTO A CAMPO MINATO')
// COLLEGARE IL BOTTONE PLAY AD UN EVENT LISTENER PER FAR APPARIRE LA GRIGLIA DI GIOCO
const btn = document.getElementById("mybuttonplay")
// COLLEGO IL VALARE CHE INSERISCE L'UTENTE NEL CALCOLARE LA GRIGLIA
const inputLatoGriglia = document.getElementById("input-lato-griglia")
// QUANDO L'UTENTE FARE UN CLICK SI CE EVENT LISTENER CON UN FUNZIONE 
btn.addEventListener("click", function () {
     // CALCOLO LE CELLE DELLE GRIGLIA 
    let latoGriglia = inputLatoGriglia.value
    let numeroCelle = latoGriglia * latoGriglia
    // GENERO LE BOMBE CASUALI IN BASE ALLE CELLE
    let bombeCasuali=[]
     let bomba
     while(bombeCasuali.length<16){
        bomba=Math.floor(Math.random()*numeroCelle)+1
        console.log(bomba)
        
        if(bombeCasuali.includes(bomba)){
            
        }else{
            bombeCasuali.push(bomba)
            console.log(bombeCasuali)

        }   
     }
    // console.log(latoGriglia, numeroCelle)
    // console.log("IL BOTTONE FUNZIONA");
     
    // COLLEMENTO AL DOM
    const grigliaElement = document.querySelector('.griglia-caselle-di-gioco')
    console.log(grigliaElement)
    // RIMUOVO TUTTI I NODI FIGLI PRIMA DI RIGENERARE LE CELLE
    while (grigliaElement.firstChild) {
        grigliaElement.removeChild(grigliaElement.firstChild)
    }
    let num
    // CREO LE DIV CON UN CICLO FOR E USO APPEND PER METTERLI ALL'INZIO DELLA GRIGLIA
    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
	    // console.log(num)
        let cellaElement = document.createElement('div')
        // console.log(cellaElement)
        grigliaElement.append(cellaElement)
        cellaElement.classList.add("cella", "width");
        cellaElement.append(num)
        cellaElement.style.width=`calc(100% / ${latoGriglia})`
        
    }
    // RIPRENDO IL TAG CELLA CREATO IN PRECEDENZA 
    const celleTotali = document.querySelectorAll('.cella')
    // CREO UN CICLO FOR CHE AL CLICK MI DICE IL NUMERO DELLA CASELLA E MI IMPOSTA IL COLORE 
    
    // DISPONGO LE BOMBE ROSSE E LE CASELLE BLU SONO I PUNTI 
    for (let i = 0; i < celleTotali.length; i++) {
        const cella = celleTotali[i]
        let punteggio=0
        cella.addEventListener('click', function () {
            console.log(i + 1)
            if (bombeCasuali.includes(i + 1)) {
                cella.style.backgroundColor = "red";
                window.alert("Hai perso!");
                btn.click()
                
                
                
            } else {
                cella.style.backgroundColor = "blue";
                punteggio++
                if(punteggio===numeroCelle-16){
                    window.alert(`Hai vinto! Il tuo punteggio è ${punteggio} Punti`)
                    btn.click()
                }
                
            }
        })
    }
  

});