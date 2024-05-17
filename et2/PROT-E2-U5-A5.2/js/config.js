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

var nomeUnidade = "Unidade 5 - Documentos oficiais que embasam as políticas públicas de plantas medicinais e fitoterápicos";
var nomeAula = "Aula 5.2 - Ações para a implementação e organização da Fitoterapia no SUS";


items.push({'nome': 'Aula 1', 'arquivo': '1.html', 'identificador': '0'});
items.push({'nome': 'Aula 2', 'arquivo': '2.html', 'identificador': '1'});
items.push({'nome': 'Aula 3', 'arquivo': '3.html', 'identificador': '2'});
items.push({'nome': 'Aula 4', 'arquivo': '4.html', 'identificador': '3'});
items.push({'nome': 'Aula 5', 'arquivo': '5.html', 'identificador': '4'});
items.push({'nome': 'Aula 6', 'arquivo': '6.html', 'identificador': '5'});
items.push({'nome': 'Aula 7', 'arquivo': '7.html', 'identificador': '6'});
items.push({'nome': 'Aula 8', 'arquivo': '8.html', 'identificador': '7'});
items.push({'nome': 'Aula 9', 'arquivo': '9.html', 'identificador': '8'});
items.push({'nome': 'Aula 10', 'arquivo': '10.html', 'identificador': '9'});
items.push({'nome': 'Aula 11', 'arquivo': '11.html', 'identificador': '10'});

items.push({'nome': 'Aula 12', 'arquivo': '12.html', 'identificador': '11'});
items.push({'nome': 'Aula 13', 'arquivo': '13.html', 'identificador': '12'});

items.push({'nome': 'Aula 14', 'arquivo': '14.html', 'identificador': '13'});


items.push({'nome': 'Aula 15', 'arquivo': '15.html', 'identificador': '14'});

items.push({'nome': 'Aula 16', 'arquivo': '16.html', 'identificador': '15'});

items.push({'nome': 'Aula 17', 'arquivo': '17.html', 'identificador': '16'});


items.push({'nome': 'Aula 18', 'arquivo': '18.html', 'identificador': '17'});

items.push({'nome': 'Aula 19', 'arquivo': '19.html', 'identificador': '18'});

/*
items.push({'nome': 'Aula 20', 'arquivo': '20.html', 'identificador': '19'});
items.push({'nome': 'Aula 21', 'arquivo': '21.html', 'identificador': '20'});
items.push({'nome': 'Aula 22', 'arquivo': '22.html', 'identificador': '21'});


items.push({'nome': 'Aula 23', 'arquivo': '23.html', 'identificador': '22'});

items.push({'nome': 'Aula 24', 'arquivo': '24.html', 'identificador': '23'});


items.push({'nome': 'Aula 25', 'arquivo': '25.html', 'identificador': '24'});
items.push({'nome': 'Aula 26', 'arquivo': '26.html', 'identificador': '25'});
items.push({'nome': 'Aula 27', 'arquivo': '27.html', 'identificador': '26'});

items.push({'nome': 'Aula 28', 'arquivo': '28.html', 'identificador': '27'});
items.push({'nome': 'Aula 29', 'arquivo': '29.html', 'identificador': '28'});
items.push({'nome': 'Aula 30', 'arquivo': '30.html', 'identificador': '30'});
items.push({'nome': 'Aula 31', 'arquivo': '31.html', 'identificador': '31'});
items.push({'nome': 'Aula 32', 'arquivo': '32.html', 'identificador': '32'});
items.push({'nome': 'Aula 33', 'arquivo': '33.html', 'identificador': '33'});
items.push({'nome': 'Aula 34', 'arquivo': '34.html', 'identificador': '34'});
items.push({'nome': 'Aula 35', 'arquivo': '35.html', 'identificador': '35'});
items.push({'nome': 'Aula 36', 'arquivo': '36.html', 'identificador': '36'});
items.push({'nome': 'Aula 37', 'arquivo': '37.html', 'identificador': '37'});
items.push({'nome': 'Aula 38', 'arquivo': '38.html', 'identificador': '38'});
items.push({'nome': 'Aula 39', 'arquivo': '39.html', 'identificador': '39'});
items.push({'nome': 'Aula 40', 'arquivo': '40.html', 'identificador': '40'});


items.push({'nome': 'Aula 41', 'arquivo': '41.html', 'identificador': '41'});
items.push({'nome': 'Aula 42', 'arquivo': '42.html', 'identificador': '42'});
items.push({'nome': 'Aula 43', 'arquivo': '43.html', 'identificador': '43'});
items.push({'nome': 'Aula 44', 'arquivo': '44.html', 'identificador': '44'});
items.push({'nome': 'Aula 45', 'arquivo': '45.html', 'identificador': '45'});
items.push({'nome': 'Aula 46', 'arquivo': '46.html', 'identificador': '46'});
items.push({'nome': 'Aula 47', 'arquivo': '47.html', 'identificador': '47'});

*/
items.push({ 'nome': 'Credito', 'arquivo': 'credito1.html', 'identificador': 'c1'});
items.push({ 'nome': 'Credito', 'arquivo': 'credito2.html', 'identificador': 'c2'});






//Variáveis para progresso
var totalitems = items.length;
var totalconcluido = conclusao.length;
var progressoatual = (totalconcluido == 0) ? 0 : (totalitems / totalconcluido);

var aulaAtual = 0;