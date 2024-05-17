/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Arquivos de Configurações do material

//Array que registra todos os identificadores já concluídos
var conclusao = [];

//Array que possui a listagem de todos os items exitentes
var items = [];

var nomeUnidade = "Unidade 2 - Princípios de Anatomia, Fisiologia da Pele e Classificação das Feridas";
var nomeAula = "Aula 2.3 - Classificação das Feridas";


items.push({
    'nome': 'Aula 1',
    'arquivo': '1.html',
    'identificador': '0'
});

items.push({
    'nome': 'Aula 2',
    'arquivo': '2.html',
    'identificador': '1'
});
items.push({
    'nome': 'Aula 3',
    'arquivo': '3.html',
    'identificador': '2'
});
items.push({
    'nome': 'Aula 4',
    'arquivo': '4.html',
    'identificador': '3'
});
items.push({
    'nome': 'Aula 5',
    'arquivo': '5.html',
    'identificador': '4'
});
items.push({
    'nome': 'Aula 6',
    'arquivo': '6.html',
    'identificador': '5'
});
items.push({
    'nome': 'Aula 7',
    'arquivo': '7.html',
    'identificador': '6'
});
items.push({
    'nome': 'Aula 8',
    'arquivo': '8.html',
    'identificador': '7'
});


items.push({'nome': 'Aula 9', 'arquivo': '9.html', 'identificador': '8'});


items.push({ 'nome': 'Credito', 'arquivo': 'credito1.html', 'identificador': 'c1'});
items.push({ 'nome': 'Credito', 'arquivo': 'credito2.html', 'identificador': 'c2'});








//Variáveis para progresso
var totalitems = items.length;
var totalconcluido = conclusao.length;
var progressoatual = (totalconcluido == 0) ? 0 : (totalitems / totalconcluido);

var aulaAtual = 0;