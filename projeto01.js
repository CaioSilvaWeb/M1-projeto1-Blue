console.clear();
const prompt = require('prompt-sync')();
let respostaSim = 0;

//saudação

const nome = prompt('Qual o seu nome? ');
console.log(`Hoje ${nome}, você será entrevistado(a) por um de nossos recrutadores para a vaga de desenvolvedor JR.`);

console.log(`Ola ${nome}, seja bem vindo! Vamos iniciar a entrevista.\n`)

//declaração de variáveis e estrutura que limita o usuário a digitar 'sim' ou 'nao' e contador de respostas 'sim'.

let perguntaUm = prompt(`${nome}, você fala mais de um idioma? `).toLowerCase()
while (perguntaUm != 'sim' && perguntaUm != 'nao') {
    console.log('Entrada inválida, digite apenas Sim ou Não!')
    perguntaUm = prompt(`${nome}, você fala mais de um idioma? `).toLowerCase()
}
if(perguntaUm == 'sim'){
    respostaSim++
}

let perguntaDois = prompt(`Você trabalha bem em equipe ${nome}? `).toLowerCase()
while (perguntaDois != 'sim' && perguntaDois != 'nao') {
    console.log('Entrada inválida, digite apenas Sim ou Não!')
    perguntaDois = prompt(`Você trabalha bem em equipe ${nome}? `).toLowerCase()
}
if(perguntaDois == 'sim') {
    respostaSim++
}
let perguntaTres = prompt(`${nome}, você tem disponibilidade pra viajar pela empresa? `).toLowerCase()
while (perguntaTres != 'sim' && perguntaTres != 'nao') {
    console.log('Entrada inválida, digite apenas Sim ou Não!')
    perguntaTres = prompt(`${nome}, você tem disponibilidade pra viajar pela empresa? `).toLowerCase()
}
if(perguntaTres == 'sim') {
    respostaSim++
}

let perguntaQuatro = prompt(`Você possui CNH ${nome}? `).toLowerCase()
while (perguntaQuatro != 'sim' && perguntaQuatro != 'nao') {
    console.log('Entrada inválida, digite apenas Sim ou Não!')
    perguntaQuatro = prompt(`Você possui CNH ${nome}? `).toLowerCase()
}
if(perguntaQuatro == 'sim') {
    respostaSim++
}

let perguntaCinco = prompt(`${nome}, você tem veículo próprio? `).toLowerCase()
while (perguntaCinco != 'sim' && perguntaCinco != 'nao') {
    console.log('Entrada inválida, digite apenas Sim ou Não!')
    perguntaCinco = prompt(`${nome}, você tem veículo próprio? `).toLowerCase()
}
if(perguntaCinco == 'sim') {
    respostaSim++
}

//estrutura que analisa as respostas e toma a decisão final, se o candidato foi contratado ou nao.

if(respostaSim == 0){
    console.log(`Você nâo se encaixa no perfil desta vaga ${nome}!`)
}
else if(respostaSim == 1 || respostaSim == 2){
    console.log(`Você nao ficou com a vaga ${nome}, mas nâo desanime!`);
}else if(respostaSim == 3){
    console.log(`Você nao ficou com a vaga ${nome}, mas vamos deixar seu contato no banco de talentos`)
}else if(respostaSim == 4){
    console.log(`Você nâo ficou com a vaga ${nome}, mas tenho uma oporunidade de estágio pra você!`)
}else if(respostaSim == 5){
    console.log(`Parabens você será contratado ${nome}!`)
}

