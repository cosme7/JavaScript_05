//* Crie um array que receba 5 itens e exiba no console.
let musicName = ["True Survivor", "Plastic Love", "Killing My Love", "The Edge of Soul", "Towa no Mirai"];
    console.log(`Nome Música:`, musicName);
console.log(`=====`)

//* Utilize um método para adicionar um nome ao inicio do array.

// musicName.unshift("Baka Mitai");
musicName.splice(0, 0, "Baka Mitai");
console.log(`Add ao Início:`, musicName); 
console.log(`=====`)

//* Utilize um método para remover o último nome do array.

// musicName.pop();
musicName.splice(5, 1);
console.log(`Remover o Último:`, musicName); 
console.log(`=====`)

//* Utilize um método para adicionar dois nomes ao fim do array.

// musicName.push("Ballad of Youth", "Tears Of The Dragon");
musicName.splice(5, 0, "Ballad of Youth", "Tears Of The Dragon");
console.log(`Add ao Final:`, musicName); 
console.log(`=====`)

//* Utilize um método para remover o primeiro nome do array.

// musicName.shift(0);
musicName.splice(0, 1);
console.log(`Removendo do Início:`, musicName); 
console.log(`=====`)

//* Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4];
    numbers.sort(function(a, b){
        return a - b;
        });   
    console.log(`Contador Ordenado:`, numbers)
console.log(`=====`)

console.log(">>>>>>>>>> FIRULA <<<<<<<<<")

let sabao = ["cracra", "crecre", "cricri", "crocro", "crucru"];
    for(let mamonas = 0; mamonas < sabao.length; mamonas++){
         console.log(`Index: ${mamonas} | nome: ${sabao[mamonas]}`);
    }

console.log(">>>>>>>> FIRULA END <<<<<<<")