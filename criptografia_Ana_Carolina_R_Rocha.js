
//TODO: Refatorar


let caracteres = {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25}

let word = "carol"; // TODO: PEDIR PARA O USUÁRIO
let wordObj = {} // TODO: CRIAR FUNÇÃO

   
   
   
       
    Object.entries(caracteres).forEach((letraWord,indiceWord) => {
        
        Object.entries(word).forEach((letraCrip,indiceCrip) => {
            if(letraWord == letraCrip){
                let newIndice = indiceWord+3;
                // TODO meter um calculo louco aqui que eu n lembro
                continue;
            }
        });
    });
    

// let resultPosition  = (p+3)
// let resultCaracter = (caracteres[resultPosition]);