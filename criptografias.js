
// Object.entries

let mensagemCriptografada = {};

class Criptografias {

        constructor(mensagem, chave) {
            //TODO: pedir para o usuário informar
            this.mensagem = mensagem; 
            this.chave = chave; 
          
            const CRIPTO_CESAR = 'CESAR';
            const CRIPTO_POLIMORFICA = 'POLIMORFICA';
            const CRIPTO_PLAYFAIR = 'PLAYFAIR';

        }
        
        deCesar(){

            let mensagemCriptografada = '';
            
            Object.entries(this.mensagem).forEach((indexLetra) => {
                mensagemCriptografada += this.criptografiaAlfabetica(indexLetra,this.CRIPTO_CESAR);
            });

            return mensagemCriptografada;
        }

        dePolimorfica(){ 
            return;
        }
        
        dePlayFair(){
            return;
        }
        
        criptografiaAlfabetica(indexLetra, tipoCriptografia){
            
                let letra = indexLetra[1].toLocaleUpperCase();
                let letraCriptografada = this.getTipoCriptografia(tipoCriptografia,letra); 
                return letraCriptografada; 
        }

        getTipoCriptografia(tipoCriptografia,letra){

            if(tipoCriptografia === this.CRIPTO_CESAR){
                return caracteres[(getIndexOnCaracteres(letra) + 3)]
            }else if(tipoCriptografia === this.CRIPTO_POLIMORFICA){

            }else if(tipoCriptografia === this.CRIPTO_PLAYFAIR){

            }
        }
}

let criptografias = new Criptografias("CAROL");
console.log(criptografias.deCesar());
