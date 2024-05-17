@font-face {
    font-family: 'Helvetica Neue1';
    src:  url('../fonts/helveticaneue.woff2') format('woff2'),
        url('../fonts/helveticaneue.woff') format('woff');}

@media (max-width: 764px){
    #capa .col-5,.divImgPrincipalCapa{
        display:none;
    }
    #capa .col-7 {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }
    button#btVo {
        position: absolute;
        left: 2px;
        bottom: 10% !important;
        padding: 8px !important;
    }
    button#btAv {
        position: absolute;
        right: 2px;
        bottom: 10% !important;
        padding: 8px !important;
    }
}
.capaDireita {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 40%;
}
@media (max-width: 764px)
{
    #progresso {
        display: none !important;
    }
    .justify-content-md-center {
        padding: 30px;
    }
    .capaDireita {
        display:none;
    }
    .identificadorAulas .dados {
        font-size: 12pt !important;
    }
    body{
        font-size: 16pt !important;
    }
    span.fonte {
        font-size: 11pt !important;
    }
    .h5, h5 {
        font-size: 18pt !important;
    }

}
@media (min-width: 765px)
{

    .identificadorAulas .dados {
        font-size: 1.2vw !important;
    }
    body{
        font-size: 1.6vw !important;
    }
    span.fonte {
        font-size: 1.1vw !important;
    }
    .h5, h5 {
        font-size: 1.8vw !important;
    }
    #progresso {
        display: block;
    }
}

.imgPrincipalCapaDireita {
    width: 100% !important;
    height: 100% !important;
}
.divImgPrincipalCapa {
    overflow: hidden;
    height: 100%;
}
.capaDireita {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

}
.imgPrincipalCapaDireita {
    width: 100% !important;
    height: 100% !important;
}
.divImgPrincipalCapa {
    overflow: hidden;
    height: 100%;
}
.capaDireita {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

}
body{
    background-image: url('../img/fundoGeral.png');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Helvetica Neue','Roboto',Arial, sans-serif !important;

}

.h5, h5 {

    font-weight: bold !important;
}
div#conteudo {
    /* overflow: auto; */
    padding-inline: 0;
    overflow-x: hidden !important;
}
.identificadorAulas .dados {
    float: left;
    margin-left: 10px;

}


button#btAv {
    position: absolute;
    right: 2px;
    bottom: 50%;
    padding:8px !important;
}

button#btVo {
    position: absolute;
    left: 2px;
    bottom: 50%;
    padding:8px !important;
}
.textocredito{
    font-size:12pt;
}
.barracredito{
    background:white;
}