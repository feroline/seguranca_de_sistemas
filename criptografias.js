
// Object.entries

let mensagemCriptografada = {};

class Criptografias {

    CRIPTO_POLIMORFICA = "POLIMORFICA";
    CRIPTO_CESAR = "CESAR";
    CRIPTO_PLAYFAIR = "PLAYFAIR";

        constructor(mensagem, chave) {
            //TODO: pedir para o usuário informar
            this.mensagem = mensagem; 
            this.chave = chave; 
          

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
          
          
          
            let somaIndices = this.getSomaIndices(this.getArrayMensage());
            // console.log()
            console.log(somaIndices)
            somaIndices.forEach(indice => { //TODO: CRIAR FUNÇÃO
            
                mensagemCriptografada += this.criptografiaAlfabetica(indice,this.CRIPTO_POLIMORFICA)
            });
        
           return mensagemCriptografada;
        }
        
        dePlayFair(){
            return;
        }

        getArrayMensage(){
            let mensagem = '';
            let cont = 0;

            Object.entries(this.mensagem).forEach((indexLetra,index) => {

                mensagem += indexLetra[1];
                if( index === (this.chave.length + cont - 1)){
                    cont += this.chave.length; 
                    mensagem = mensagem.concat('.') 
                }

            });

            return mensagem.split('.');
        }
        
        getSomaIndices(arrayMessagem){
            console.log(arrayMessagem)
            let newIndices = []; 
            let mensagemCompleta = []; 
            let indiceLetra = '';
            let indiceLetraChave = '';
            
            Object.entries(arrayMessagem).forEach((palavras, indexPalavra) => {

                let palavra = Object.entries(palavras[1]);
                if(palavra != undefined && palavra != null && palavra != "" ){

                    palavra.forEach(letra => {

                       
                        
                        Object.entries(this.chave).forEach((letraChave, indexChave) => {  //TODO: fazer função

                            
    
                            if(indexPalavra == indexChave){
                                let somaIndices =  indiceLetra += getIndexOnCaracteres(letra[1]) + indiceLetraChave += getIndexOnCaracteres(letraChave[1]);
                                console.log(somaIndices)

                                return (somaIndices) > caracteres.length ? somaIndices - caracteres.length : somaIndices;
                            }
                            
                        });
                        // console.log(newIndices)
                    });         
                }
               
                // console.log(getIndexOnCaracteres(palavra[1]))
                // let mensagemCaracterIndice = getIndexOnCaracteres(palavra[1]);
                // Object.entries(this.chave).forEach((indexLetraChave, indexChave) => { 
// 
                    // let chaveCaracterIndice = getIndexOnCaracteres(indexLetraChave[1]);
                    // if(indexMensagem = indexChave ){
                        // let somaIndices = mensagemCaracterIndice + chaveCaracterIndice; 
                      //  TODO:  Adicionar este tratamento em todas as outras criptografias 
                        // newIndices.push( (somaIndices) > caracteres.length ? somaIndices - caracteres.length : somaIndices); 
                    // }
                    
                // });
                // 
                // mensagemCompleta.push(newIndices);
            });
            // console.log(newIndices)
            // return mensagemCompleta;
        }

        criptografiaAlfabetica(indexLetra, tipoCriptografia){

            let letra = (indexLetra[1]) ? indexLetra[1].toLocaleUpperCase() : indexLetra; 
            let letraCriptografada = this.getTipoCriptografia(tipoCriptografia,letra); 
            return letraCriptografada; 

        }

        getTipoCriptografia(tipoCriptografia,letra){
            if(tipoCriptografia === this.CRIPTO_CESAR){
                return caracteres[(getIndexOnCaracteres(letra) + 3)]
            }else if(tipoCriptografia === this.CRIPTO_POLIMORFICA){ 
                return caracteres[letra];
            }else if(tipoCriptografia === this.CRIPTO_PLAYFAIR){

            }
        }
}

let criptografiasDeCesar = new Criptografias("CAROL");
    //console.log(criptografias.deCesar());
let criptografias = new Criptografias("VAMOSATACARAMANHASEMFALTA", "GRITO");
    console.log(criptografias.dePolimorfica());
