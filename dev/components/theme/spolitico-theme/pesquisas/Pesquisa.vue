<script>
    import UAlert from "../../../../../src/components/alert/UAlert"
    import pesquisa from "../api/pesquisa_eleicoes_map.json"
    const VOTO_CONQUISTADO = 0, INDECISO =1, NAO_RESPONDIDO=2, PERDIDO=3
    export default {
    name: "pesquisa",
    components: {UAlert},
    props: ['name'],
    data: function () {
    return {
        mapName: this.name + "-map",
    }
    },
    methods:{
    },
    mounted() {
    }
    }
</script>

<google-map name="example">
</google-map>

<template>


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