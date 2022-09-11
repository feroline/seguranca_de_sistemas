
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
            let mensagemCriptografada = '';
            let mensagem = '';
            let chaveCriptografada = '';
            let tamanhoChave = this.chave.length;
            let cont = 0;
            
            Object.entries(this.mensagem).forEach((indexLetra,index) => {
                
                mensagem += indexLetra[1];

                if( index === (tamanhoChave + cont - 1)){
                    cont += tamanhoChave; 
                    mensagem = mensagem.concat('.') 
                }
                
            });
            
            let arrayMessagem = mensagem.split('.');
            let testesoma = '';
            Object.entries(arrayMessagem[0]).forEach((indexLetra, indexMensagem) => {
                let caracteresValuesMensagem = getIndexOnCaracteres(indexLetra[1]);

                Object.entries(this.chave).forEach((indexLetraChave, indexChave) => { 
                    let caracteresValuesChave = getIndexOnCaracteres(indexLetraChave[1])

                    if(indexMensagem = indexChave ){
                        
                        TESTE SOMA É ´P SER A CRIPTGRAFIA
                        testesoma += caracteres[(getIndexOnCaracteres(caracteresValuesMensagem + caracteresValuesChave))]; 
                        FALTA UM CALCULO DE PORCENTAGEM BEM AQUI Q N ME LEMBRO
                        console.log(testesoma)
                    }
                    
                });
            
                
            });

            Object.entries(this.chave).forEach((indexLetra) => {
                chaveCriptografada += this.criptografiaAlfabetica(indexLetra,this.CRIPTO_POLIMORFICA);
            });

           /// return [mensagemCriptografada,chaveCriptografada];
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
            }else if(tipoCriptografia === this.CRIPTO_POLIMORFICA){ //somar a letra da mensagem mais a letra da chave
             
                    return caracteres[(getIndexOnCaracteres(letra) + 3)]
                
            }else if(tipoCriptografia === this.CRIPTO_PLAYFAIR){

            }
        }
}

let criptografiasDeCesar = new Criptografias("CAROL");
    //console.log(criptografias.deCesar());
let criptografias = new Criptografias("VAMOSATACARAMANHASEMFALTA", "GRITO");
    console.log(criptografias.dePolimorfica());
