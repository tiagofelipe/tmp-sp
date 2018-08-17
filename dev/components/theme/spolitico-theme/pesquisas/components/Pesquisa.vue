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
        <div class="col-3">
            <u-chat-message
                    label='Sunday, 19th'
            />

            <u-chat-message
                    name="me"
                    avatar="/components/theme/spolitico-theme/pesquisas/assets/img/edson.jpg"
                    :text="['Olá, quantas respostas já tivemos nas pesquisas']"
                    stamp="4 minutes ago"
                    sent
            />
            <u-chat-message
                    name="him"
                    avatar="/components/theme/spolitico-theme/pesquisas/assets/img/pessoa.png"
                    :text="['Já entrevistamos 800 pessoas']"
                    stamp="4 min"
                    sent
            />
        </div>
    </div>

</template>


<style scoped>


</style>