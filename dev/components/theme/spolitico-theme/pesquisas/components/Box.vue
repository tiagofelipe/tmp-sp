<template>

</template>

<script>
    const VOTO_CONQUISTADO = 0, INDECISO =1, NAO_RESPONDIDO=2, PERDIDO=3
    export default {
        name: "box",
        mounted(pesq){
            let status = ''
            switch (pesq.voto.status){
                case VOTO_CONQUISTADO:
                    status = '<button  class="btn btn-primary btn-xs"> <i class="fa fa-thumbs-up m-r-sm"></i><strong> Voto Conquistado  </strong></button>'
                    break;
                case INDECISO:
                    status = '<button class="btn btn-info btn-xs"> <i class="fa fa-frown m-r-sm"></i><strong> Indeciso  </strong></button>'
                    break;
                case NAO_RESPONDIDO:
                    status = '<button class="btn btn-warning btn-xs"> <i class="fa fa-thumbs-down m-r-sm"></i><strong> Não quis responder </strong></button>'
                    break;
                case PERDIDO:
                    status = '<button class="btn btn-danger btn-xs"> <i class="fa fa-thumbs-down m-r-sm"></i><strong> Voto Perdido </strong></button>'
                    break;
            }
            if(!pesq.pessoa.thumb){pesq.pessoa.thumb = 'img/pessoa.png'}
            let html = '' +
                '<div class="myInfoWindow">' +
                '    <div class="clearfix">' +
                '    <a class="pull-left thumb-sm avatar b-3x m-r">' +
                '    <img src="components/theme/spolitico-theme/pesquisas/assets/'+ pesq.pessoa.thumb +'" alt="...">' +
                '    </a>' +
                '    <span class="clear">' +
                '    <span class="ng-binding">'+ pesq.pessoa.nome +'</span>' +
                '    <div>' +
                status +
                '    </div>' +
                '    </span>' +
                '    </div>' +
                '    <div class="m-t">' +
                '    <small>'+pesq.pessoa.info+'</small>' +
                '    </div> <br>' +
                '    <ul class="list-group m-t no-border no-margin no-padder">' +
                '    <a style="color: #555" href="">' +
                '    <li class="list-group-item no-padder no-border">' +
                '    <i class="fa fa-phone fa-fw m-r-xs"></i> Ligar para '+ pesq.pessoa.nome+
                '    </li></a>' +
                '    <a style="color: #555" href="">' +
                '    <li class="list-group-item no-padder no-border">' +
                '    <i class="fa fa-envelope fa-fw m-r-xs"></i> Enviar Email'+
                '    </li></a>' +
                '    <a style="color: #555" href="">' +
                '    <li class="list-group-item no-padder no-border">' +
                '    <i class="fab fa-whatsapp fa-fw m-r-xs" aria-hidden="true"></i> Enviar SMS/WhatsApp' +
                '    </li>' +
                '    </a>' +
                '    </ul>' +
                '    <div class="m-t">' +
                '    <a href="/#/pesquisas/pesquisa/resposta/'+ pesq.pessoa.id +'" class="btn btn-default btn-xs btn-dark m-t-xs"><i class="fa fa-eye m-r-sm"></i> Visualizar</a>' +
                '    </div>' +
                '</div>'
            return (html)
        }
    }
</script>

<style scoped>

</style>