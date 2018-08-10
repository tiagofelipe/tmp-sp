<script>
    import UAlert from "../../../../../src/components/alert/UAlert"
    import pesquisa from "../api/pesquisa_eleicoes_map.json"
    const VOTO_CONQUISTADO = 0, INDECISO =1, NAO_RESPONDIDO=2, PERDIDO=3
    export default {
    name: "tempoReal",
    components: {UAlert},
    props: ['name'],
    data: function () {
    return {
        mapName: this.name + "-map",
    }
    },
    methods:{
      bindInfoWindow(marker, map, infoWindow, html) {
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
      },
    },
    mounted() {
    console.log(pesquisa.eleitores)
    const element = document.getElementById(this.mapName)
    const options = {
        zoom: 14,
        center: new google.maps.LatLng(-15.148481940078748,-42.87161350250244)
    }
    const map = new google.maps.Map(element, options);

    for(let pesq of pesquisa.eleitores){
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
        let icone = 'components/theme/spolitico-theme/pesquisas/assets/i'+  pesq.voto.status+'.png'
        var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(pesq.lat,pesq.lng),
        icon: icone,}
        )
        var infoWindow = new google.maps.InfoWindow
        this.bindInfoWindow(marker, map, infoWindow, html);
    }
    }
    }
</script>

<google-map name="example">
</google-map>

<template>
    <div class="preencher">
   <div class="google-map " style="" :id="mapName"></div>
    <div class="legend">
    <div class="mapLegend w-xxl bg-white">
    <div class="panel-head wrapper  m-b">
        <span class="text-xs pull-right">
            <i class="fa fa-circle text-primary"></i> Aliado
            <i class="fa fa-circle text-danger m-r-xs m-l-sm"></i> Oposição
            <i class="fa fa-circle text-info m-r-xs m-l-sm"></i> Indeciso
            <i class="fa fa-circle text-warning m-r-xs m-l-sm"></i> Não respondeu
        </span>
        <!--<h5 class="font-thin m-t-none m-b-none text-muted">{{myMarkers.length}} eleitores</h5>-->
    </div>
    </div>
    </div>
    <div class="row foot">
    <u-alert color="light-blue" class="col altura">
    <small class="text-white block m-l"> Votos a Favor</small>
    <span class="text-2x m-l">100.000</span>
    </u-alert>
    <u-alert color="negative" class="col">
    <small class=" block m-l">Votos Contra</small>
    <span class="text-2x m-l">10.564</span>
    </u-alert>
    <u-alert color="info" class="col">
    <small class=" block m-l">Indecisos</small>
    <span class="text-2x m-l">2.564</span>
    </u-alert>
    <u-alert color="warning" class="col">
    <small class=" block m-l">Sem resposta </small>
    <span class="text-2x m-l">973</span>
    </u-alert>
    <u-alert color="positive" class="col altura">
    <small class=" block m-l">Saldo </small>
    <span class="text-2x m-l">673 <i class="fa fa-caret-up text-white inline m-l-xxs"></i></span>
    </u-alert>
    </div>
    </div>

</template>


<style scoped>

    .google-map {

    width: auto;
    min-height: 700px;
    height: 100%;
    margin: 0 auto;
    background: gray;
    }
    .foot{
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    }
    .preencher{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgb(229, 227, 223);
    }

    .legend{
   /* min-height: 56px;
    position: absolute;
    bottom: 0px;
    position:absolute;
    bottom:0px;
    top: 0px;
    min-height: 558px;*/
    }
    .altura{
    max-height: 68px;
    }
    .mapLegend{

    top: 10%;
    right: 20px;
    position: absolute;
    top:80px;
    color: #98a6ad;
    }

    .w-xxl {
    width: 360px;
    }
    .panel-head {
    border-radius: 2px 2px 0 0;
    padding: 15px;
    margin-bottom: 15px;
    }
</style>