/*Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

Atenção
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

Entrada
O número total de salas no dungeon (um número inteiro).

Saída
Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".

Sempre que encontrar um monstro, imprima "Monstro na sala X!".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
3	Tesouro na sala 2!
Monstro na sala 3!
4	Tesouro na sala 2!
Monstro na sala 3!
Tesouro na sala 4!
2	Tesouro na sala 2!


Entrada	
3
Saída	
Tesouro na sala 2!
Monstro na sala 3!

Entrada
4	
Saída
Tesouro na sala 2!
Monstro na sala 3!
Tesouro na sala 4!


Entrada
2	
Saida
Tesouro na sala 2!
*/
const totalSalas = parseInt(gets());  //recebendo o valor vi teclado
//const totalSalas = 8;               //declarando o valor
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
if ( temTesouro ) {
    print("Tesouro na sala " + sala + "!");          // imprimindo resultado
   // console.log("Tesouro na sala " + sala + "!")  //imprimindo resultado com console.log
} else if (temMonstro  ) {
    print("Monstro na sala " + sala + "!");
    //console.log("Monstro na sala " + sala + "!")  //Resultado com console.log
}
}