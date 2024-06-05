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

var nomeUnidade = "Unidade 5 - Prevenção e Tratamento de Feridas Agudas e Crônicas";
var nomeAula = "Aula 5.2 - Queimaduras";


items.push({ 'titulo': 'OBJETIVOS DE APRENDIZAGEM', 'nome': 'Aula 1', 'arquivo': '1.html', 'identificador': '0' });
items.push({ 'titulo': 'BOAS-VINDAS!', 'nome': 'Aula 2', 'arquivo': '2.html', 'identificador': '1' });
items.push({ 'titulo': 'HISTÓRICO DO TRATAMENTO DE QUEIMADURAS', 'nome': 'Aula 3', 'arquivo': '3.html', 'identificador': '2' });
items.push({ 'titulo': 'DEFINIÇÃO DE QUEIMADURAS', 'nome': 'Aula 4', 'arquivo': '4.html', 'identificador': '3' });
items.push({ 'titulo': 'ASPECTOS EPIDEMIOLÓGICOS', 'nome': 'Aula 5', 'arquivo': '5.html', 'identificador': '4' });
items.push({ 'titulo': '', 'nome': 'Aula 6', 'arquivo': '6.html', 'identificador': '5' });
items.push({ 'titulo': '', 'nome': 'Aula 7', 'arquivo': '7.html', 'identificador': '6' });
items.push({ 'titulo': 'CLASSIFICAÇÃO DAS QUEIMADURAS A PARTIR DA PROFUNDIDADE', 'nome': 'Aula 8', 'arquivo': '8.html', 'identificador': '7' });
items.push({ 'titulo': 'CLASSIFICAÇÃO DAS QUEIMADURAS A PARTIR DA PROFUNDIDADE', 'nome': 'Aula 9', 'arquivo': '9.html', 'identificador': '8' });
items.push({ 'titulo': 'QUEIMADURA DE PRIMEIRO GRAU', 'nome': 'Aula 10', 'arquivo': '10.html', 'identificador': '9' });
items.push({ 'titulo': 'QUEIMADURA DE SEGUNDO GRAU', 'nome': 'Aula 11', 'arquivo': '11.html', 'identificador': '10' });
items.push({ 'titulo': 'QUEIMADURA DE TERCEIRO GRAU', 'nome': 'Aula 12', 'arquivo': '12.html', 'identificador': '11' });
items.push({ 'titulo': 'CÁLCULO DA EXTENSÃO DA QUEIMADURA: SUPERFÍCIE CORPÓREA QUEIMADA – SCQ', 'nome': 'Aula 13', 'arquivo': '13.html', 'identificador': '12' });
items.push({ 'titulo': '', 'nome': 'Aula 14', 'arquivo': '14.html', 'identificador': '13' });
items.push({ 'titulo': '', 'nome': 'Aula 15', 'arquivo': '15.html', 'identificador': '14' });

items.push({ 'titulo': '', 'nome': 'Aula 16', 'arquivo': '16.html', 'identificador': '15' });
items.push({ 'titulo': '', 'nome': 'Aula 17', 'arquivo': '17.html', 'identificador': '16' });


items.push({ 'titulo': 'PROCEDIMENTOS PARA ATENDIMENTO AMBULATORIAL DO PEQUENO E MÉDIO QUEIMADO', 'nome': 'Aula 18', 'arquivo': '18.html', 'identificador': '17' });
items.push({ 'titulo': 'QUEIMADURAS QUÍMICAS', 'nome': 'Aula 19', 'arquivo': '19.html', 'identificador': '18' });
items.push({ 'titulo': '', 'nome': 'Aula 20', 'arquivo': '20.html', 'identificador': '19' });
items.push({ 'titulo': 'PLANTAS MEDICINAIS - QUEIMADURAS', 'nome': 'Aula 21', 'arquivo': '21.html', 'identificador': '20' });
items.push({ 'titulo': 'IMPORTANTE, EM RELAÇÃO À PREVENÇÃO!', 'nome': 'Aula 22', 'arquivo': '22.html', 'identificador': '21' });
items.push({ 'titulo': '', 'nome': 'Aula 23', 'arquivo': '23.html', 'identificador': '22' });
items.push({ 'titulo': 'AVALIAÇÃO', 'nome': 'Aula 24', 'arquivo': '24.html', 'identificador': '23' });
items.push({ 'titulo': 'REFERÊNCIAS', 'nome': 'Aula 25', 'arquivo': '25.html', 'identificador': '24' });
items.push({ 'titulo': '', 'nome': 'Aula 26', 'arquivo': '26.html', 'identificador': '25' });
items.push({ 'titulo': '', 'nome': 'Aula 27', 'arquivo': '27.html', 'identificador': '26' });
/*
items.push({ 'titulo': '', 'nome': 'Aula 28', 'arquivo': '28.html', 'identificador': '27'});
items.push({ 'titulo': '', 'nome': 'Aula 29', 'arquivo': '29.html', 'identificador': '28'});
items.push({ 'titulo': '', 'nome': 'Aula 30', 'arquivo': '30.html', 'identificador': '29'});
*/

items.push({ 'titulo': 'FICHA TÉCNICA', 'nome': 'Credito', 'arquivo': 'credito1.html', 'identificador': 'c1' });
items.push({ 'titulo': '', 'nome': 'Credito', 'arquivo': 'credito2.html', 'identificador': 'c2' });






//Variáveis para progresso
var totalitems = items.length;
var totalconcluido = conclusao.length;
var progressoatual = (totalconcluido == 0) ? 0 : (totalitems / totalconcluido);

var aulaAtual = 0;