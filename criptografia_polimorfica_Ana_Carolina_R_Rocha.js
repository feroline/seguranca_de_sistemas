
criptografiaPolimorfica();

function criptografiaPolimorfica(){
    let key = "chave";
    let word = "AnaCarolinaRodriguesRocha" // TODO: refatorar para que possa ser incluido palavras com espaço
    let criptografado = new Object();

    
    let wordValues = new Object();
    Object.entries(caracteres).forEach((letraCrip) => { //TODO: criar função e adicionar aqui


        Object.entries(word).forEach((letraWord) => {

            if (letraWord[1].toLocaleUpperCase() == letraCrip[1]) {

                wordValues[letraWord[0]] = parseInt(letraCrip[0]);
               
                //criptografado[letraWord[0]] = (caracteres[valorLetraCrip - 3]);
            
                // console.log(letraWord[1], letraCrip[1], letraCrip[0], valorLetraCrip+3, caracteres[valorLetraCrip+3])
            }

        });
    });

    // TODO: REFATORAR 
    // KEY VALUE
   
    let keyValues = new Object();
    Object.entries(caracteres).forEach((letraCrip) => { //TODO: criar função e adicionar aqui
        Object.entries(key).forEach((letraWord) => {

            if(letraWord[1].toLocaleUpperCase() == letraCrip[1]){
                keyValues[letraWord[0]] = parseInt(letraCrip[0]);
            }
            
        });
    });

    Object.entries(keyValues).forEach(valueLeterKey => {

        Object.entries(wordValues).forEach(valueLeterWord => {

            
        });
    });

    

    
}
