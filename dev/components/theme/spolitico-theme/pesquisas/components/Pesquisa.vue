<script>
    import UAlert from "../../../../../../src/components/alert/UAlert"
    import pesquisa from "../../api/pesquisa_eleicoes_map.json"
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


<template>
    <!-- esse código está no em header.vue caso queira adaptar -->
    <div class="row">
        <div class="col">
    <div style="margin: 12px">
        <div class="bg-white b-b wrapper-md">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-7">
                    <div class="m-t-sm">Pesquisas ativas</div>
                </div>
                <div class="col-md-9 col-sm-6 col-xs-5">

                </div>
            </div>
        </div>
        <u-alert color="dark" class="">
            <h3>Período Eleitoral</h3>
            Para facilitar, durante as eleições esta pesquisa fixa estará ativa, as questões da pesquisa são básicas e necessárias para qualquer campanha, porém é possível customizá-la como quiser.
        </u-alert>

    </div>
        </div>
        <div class="col-3 bg-dark">
            <u-chat-message
                    label='Sunday, 19th'
            />

            <u-chat-message
                    name="me"
                    avatar="/components/theme/spolitico-theme/pesquisas/assets/img/edson.jpg"
                    :text="['hunter2']"
                    stamp="4 minutes ago"
                    sent
            />
            <u-chat-message
                    name="me"
                    avatar="/components/theme/spolitico-theme/pesquisas/assets/img/edson.jpg"
                    :text="['hunter2']"
                    stamp="4 minutes ago"
                    sent
            />
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