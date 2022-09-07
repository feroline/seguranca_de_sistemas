
C

//TODO: Refatorar

function descriptografarCesar() {

    //TODO: Refatorar

    let descword = "FDUR0"; // TODO: PEDIR PARA O USUÁRIO
    let descriptografado = new Object(); // TODO: CRIAR FUNÇÃO




    Object.entries(caracteres).forEach((letraCrip) => {


        Object.entries(descword).forEach((letraWord) => {

            if (letraWord[1].toLocaleUpperCase() == letraCrip[1]) {

                let valorLetraCrip = parseInt(letraCrip[0]);
                descriptografado[letraWord[0]] = (caracteres[valorLetraCrip - 3]);

                // console.log(letraWord[1], letraCrip[1], letraCrip[0], valorLetraCrip+3, caracteres[valorLetraCrip+3])
            }

        });
    });
    console.log(Object.entries(descriptografado).toString());


    // let resultPosition  = (p+3)
    // let resultCaracter = (caracteres[resultPosition]); 
}


  
 
 

// let resultPosition  = (p+3)
// let resultCaracter = (caracteres[resultPosition]);