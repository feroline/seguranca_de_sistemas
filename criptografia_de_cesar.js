function criptografarCesar (){
    
    let mensagem = Object.entries("Carol");  // TODO: Pedir para o usuário informar 
    let mensagemCriptografada = ""; // TODO: CRIAR FUNÇÃO

     mensagem.forEach((indexLetra) => {
        
        let letra = indexLetra[1].toLocaleUpperCase();
        let letraCriptografada = caracteres[(getIndexOnCaracteres(letra) + 3)]
        mensagemCriptografada += letraCriptografada;
        
    });

    // console.log(mensagemCriptografada)
} 

criptografarCesar();