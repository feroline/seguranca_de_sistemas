// import { criptografiaCesar } from "./criptografia_de_cesar.js";
// import { criptografiaPolimorfica } from "./criptografia_de_cesar.js";

// let mensagem = "CAROL";
let caracteres = import("./caracteres.js");
console.log(caracteres)

// Object.entries

let mensagemCriptografada = {};

class Criptografias {
    
        __constructor(mensagem, chave) {
            // this.mensagem = mensagem; 
            this.mensagem = "CAROL"; 
            this.chave = chave; 
        }
        
        deCesar(){
            // TODO: realizar chamada da função dos calculos aqui

            Object.entries(caracteres).forEach((letraCrip) => {

                Object.entries(this.mensagem).forEach((letraWord) => {

                    if (letraWord[1].toLocaleUpperCase() == letraCrip[1]) {

                        let valorLetraCrip = parseInt(letraCrip[0]);
                        mensagemCriptografada[letraWord[0]] = (caracteres[valorLetraCrip + 3]);

                        // console.log(letraWord[1], letraCrip[1], letraCrip[0], valorLetraCrip+3, caracteres[valorLetraCrip+3])
                    }

                });
            });
            console.log(Object.entries(mensagemCriptografada).toString());
            return;
        }

        dePolimorfica(){ 
            return;
        }
        
        dePlayFair(){
            return;
        }
        
}

let criptografias = new Criptografias( "CAROL",  "CAROL");
console.log(criptografias.deCesar());
