/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
        p[k] = v
    })
    return k ? p[k] : p;
}
function inicializaSistema() {


    montaMenu();

    atualizaProgresso();
    $('#conteudo').load('slide/capa.html');
    $('.alteraAula').on("click", function () {
        mudaAula(parseInt($(this).attr('ident')));
        return false;
    });



    $('#btVo').hide();
    $('#btAv').hide();
    $('.navbar ').hide();
    $('#progresso').hide();
    $('.timeline').hide();
    $('[data-toggle="tooltip"]').tooltip();

    //Verifica URL Página
    var pagina = getSearchParams("pagina");
    if (pagina) {
        mudaAula(pagina);
        $('#btInicio').hide();
    }


}

function iniciaCurso() {
    mudaAula(0);
    aulaAtual = 0;
    $('#btInicio').hide();
    $('.navbar ').show();
    $('#progresso').show();
    $('#conteudo').css('height', '95vh');
    $('.timeline').show();
}

function montaMenu() {
    //Prepara Li para Adicionar
    retornoNav = '';
    retornoMenu = '';
    items.forEach(function (item, indice, array) {
        retornoMenu += '<a href=# class="alteraAula" ident=' + indice + ' >' + item.nome + '</a>';
        retornoNav += '<i id="aA' + indice + '" class="alteraAula timeline--inner-pin  is-normal" ident=' + indice + ' data-title="' + item.nome + '"></i>';
    });

    $('#menuAulas').append(retornoMenu);
    $('.timeline--inner').append(retornoNav);

}

function atualizaProgresso() {
    totalitems = items.length;
    totalconcluido = conclusao.length;
    progressoatual = (totalconcluido == 0) ? 0 : Math.round((totalconcluido / totalitems) * 100);
    if(progressoatual>100){
        progressoatual=100;
    }
    $('#classeProgress').removeClass();
    $('#classeProgress').addClass('c100 small p' + progressoatual);
    $('#valorProgresso').html(progressoatual + '%');

}

function mudaAula(aula) {
    if (conclusao.indexOf(aula) == -1) {
        conclusao.push(aula)
    }
    aulaAtual = aula;
    atualizaProgresso();
    $('#conteudo').load('slide/' + items[aula].arquivo + '?v3',function(){$('#dadosAula').html(nomeUnidade + "<br>" + nomeAula+"<b class='desenv'><br>Arq:"+ items[aula].arquivo+"</b>" );});
    //Exibe os navegadores
    
    if (aulaAtual == 0) {
        $('#btVo').hide();
        $('#btAv').show();
    } else if (aulaAtual == items[items.length - 1].identificador) {
        $('#btVo').show();
        $('#btAv').hide();
    } else {
        $('#btVo').show();
        $('#btAv').show();
    }
    closeNav();
    $('.alteraAula[ident=' + aula + ']').addClass('concluido');
}

function Navega(opcao) {
    if (opcao == 'volta' && aulaAtual != 0) {
        mudaAula(aulaAtual - 1);
    } else if (opcao == 'avanca' && aulaAtual != items[items.length - 1].identificador) {
        mudaAula(aulaAtual + 1);
    }

}

//Menu lateral esquerdo
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("menuAulas").style.width = "250px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("menuAulas").style.width = "0";

}

$(document).keydown(function(e){
    if (e.which == 37) { 
      Navega('volta')
       return false;
    }
     if (e.which == 39) { 
      Navega('avanca')
       return false;
    }
});