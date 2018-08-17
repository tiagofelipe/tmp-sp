<script>
    import UAlert from "../../../../../../src/components/alert/UAlert"
    import pesquisa from "../../api/pesquisa_eleicoes_map.json"
    import Box from "../components/Box"
    import {gmapApi} from 'vue2-google-maps'
    export default {
        name: "tempoReal",
        computed: {
            google: gmapApi
        },
        components: {UAlert, Box},
        data: function () {
            return {
                mapName: "-map",
                markers: [{
                    position: {
                        lat: 10.0,
                        lng: 10.0
                    },
                    icon: 'components/theme/spolitico-theme/pesquisas/assets/i0.png'
                }]
            }

        },
        methods:{
        },
        mounted() {
            const element = this.$el.querySelector('.google-map')
            for(let pesq of pesquisa.eleitores){
                let icone = 'components/theme/spolitico-theme/pesquisas/assets/i'+  pesq.voto.status+'.png'
                let html = Box.mounted(pesq)
            }
        }
    }
</script>

<template>
    <div class="preencher">
        <gmap-map
                :center="{lat:-15.148481940078748, lng:-42.87161350250244}"
                :zoom="14"
                map-type-id="roadmap"
                style="width: 100%; min-height: 300px; height: 100% "
        >

            <GmapMarker
                    :key="index"
                    v-for="(m,index) in markers"
                    :position="m.position"
                    :icon = "m.icon"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat:-15.148481940078748, lng:-42.87161350250244}"
            />
        </gmap-map>
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
        min-height: 500px;
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
