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

var nomeUnidade = "Unidade 2 - Princípios de Anatomia e Fisiologia da Pele e Classificação das Feridas";
var nomeAula = "Aula 2.2 - Lesões Elementares da Pele";

items.push({
    'titulo': 'OBJETIVOS DE APRENDIZAGEM',
    'nome': 'Aula 1',
    'arquivo': '1.html',
    'identificador': '0'
});

items.push({
    'titulo': 'O QUE SÃO LESÕES ELEMENTARES E COMO RECONHECÊ-LAS',
    'nome': 'Aula 2',
    'arquivo': '2.html',
    'identificador': '1'
});
items.push({
    'titulo': 'CLASSIFICAÇÃO E DESCRIÇÃO DAS LESÕES ELEMENTARES',
    'nome': 'Aula 3',
    'arquivo': '3.html',
    'identificador': '2'
});
items.push({
    'titulo': 'LESÕES ELEMENTARES PRIMÁRIAS',
    'nome': 'Aula 4',
    'arquivo': '4.html',
    'identificador': '3'
});
items.push({
    'titulo': '',
    'nome': 'Aula 5',
    'arquivo': '5.html',
    'identificador': '4'
});
items.push({
    'titulo': 'LESÕES PLANAS',
    'nome': 'Aula 6',
    'arquivo': '6.html',
    'identificador': '5'
});
items.push({
    'titulo': 'LESÕES SÓLIDAS',
    'nome': 'Aula 7',
    'arquivo': '7.html',
    'identificador': '6'
});
items.push({
    'titulo': 'LESÕES DE CONTEÚDO LÍQUIDO',
    'nome': 'Aula 8',
    'arquivo': '8.html',
    'identificador': '7'
});


items.push({
    'titulo': 'LESÕES ELEMENTARES SECUNDÁRIAS', 'nome': 'Aula 9', 'arquivo': '9.html', 'identificador': '8'
});
items.push({
    'titulo': 'LESÕES COM ALTERAÇÕES DA CONSISTÊNCIA E ESPESSURA', 'nome': 'Aula 10', 'arquivo': '10.html', 'identificador': '9'
});
items.push({
    'titulo': '', 'nome': 'Aula 11', 'arquivo': '11.html', 'identificador': '10'
});
items.push({
    'titulo': 'LESÕES COM PERDAS RESIDUAIS', 'nome': 'Aula 12', 'arquivo': '12.html', 'identificador': '11'
});
// items.push({
//     'titulo': '', 'nome': 'Aula 13', 'arquivo': '13.html', 'identificador': '12'
// });
items.push({
    'titulo': 'AVALIAÇÃO', 'nome': 'Aula 14', 'arquivo': '14.html', 'identificador': '12'
});
items.push({
    'titulo': 'REFERÊNCIAS', 'nome': 'Aula 15', 'arquivo': '15.html', 'identificador': '13'
});



items.push({
    'titulo': 'FICHA TÉCNICA', 'nome': 'Credito', 'arquivo': 'credito1.html', 'identificador': 'c1'
});
items.push({
    'titulo': '', 'nome': 'Credito', 'arquivo': 'credito2.html', 'identificador': 'c2'
});






//Variáveis para progresso
var totalitems = items.length;
var totalconcluido = conclusao.length;
var progressoatual = (totalconcluido == 0) ? 0 : (totalitems / totalconcluido);

var aulaAtual = 0;