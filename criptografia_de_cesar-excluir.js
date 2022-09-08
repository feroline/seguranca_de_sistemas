
importScripts * as './Criptografias.';

//TODO: Refatorar
criptografarCesar();
 
let mensagem = Object.entries("Carol");  // TODO: Pedir para o usuário informar 
let mensagemCriptografada = new Object(); // TODO: CRIAR FUNÇÃO

class criptografarCesar {

    //TODO: Refatorar

    Criptografias.caracteres.forEach((letraCrip) => {

        Object.entries(word).forEach((letraWord) => {

            if (letraWord[1].toLocaleUpperCase() == letraCrip[1]) {

                let valorLetraCrip = parseInt(letraCrip[0]);
                criptografado[letraWord[0]] = (caracteres[valorLetraCrip + 3]);

                // console.log(letraWord[1], letraCrip[1], letraCrip[0], valorLetraCrip+3, caracteres[valorLetraCrip+3])
            }

        });
    });
    console.log(Object.entries(criptografado).toString());


    // let resultPosition  = (p+3)
    // let resultCaracter = (caracteres[resultPosition]);
} 