<script>
  export default {
    name: 'Ocorrencias',
    data () {
      return {
        todos: [
          {id: 1, assunto: 'Chuva estragou a estrada e ninguém conserta', solicitante: 'Vinícios Soares', data: '-', tipo: 'Reclamação', prioridade: 'Urgente'},
          {id: 2, assunto: 'Lixo na minha rua a mais de três dias', solicitante: 'Zé de Jõao', data: '-', tipo: 'Solicitação', prioridade: 'Baixa'},
          {id: 3, assunto: ' Lixo na minha rua, transtornada', solicitante: 'João de Zé', data: '-', tipo: 'Denúncia', prioridade: 'Urgente'},
          {id: 4, assunto: 'Chuva estragou a estrada e ninguém conserta', solicitante: 'Maria de Zé', data: '-', tipo: 'Reclamação', prioridade: 'Urgente'},
          {id: 5, assunto: 'Lixo na minha rua a mais de três dias', solicitante: 'Ana de Maria', data: '-', tipo: 'Solicitação', prioridade: 'Baixa'},
          {id: 6, assunto: ' Lixo na minha rua, transtornada', solicitante: 'Hebley Freitas', data: '-', tipo: 'Denúncia', prioridade: 'Urgente'},
          {id: 7, assunto: ' Lixo na minha rua, transtornada', solicitante: 'Hebley Freitas', data: '-', tipo: 'Denúncia', prioridade: 'Urgente'},
        ],
        filtros: [
          { nome: 'Seus não atendidos', numero: 4 },
          { nome: 'Reportados por você', numero: 0 },
          { nome: 'Não atribuídos', numero: 0 },
          { nome: 'Todos os atendidos', numero: 2 },
          { nome: 'Atualizados recentes', numero: 8 },
          { nome: 'Novos em seus grupos', numero: 9 },
          { nome: 'Pendentes', numero: 2 },
          { nome: 'Resolvidos recentemente', numero: 2 },
          { nome: 'Suspensos', numero: 0 },
        ]
      }
    }
  }
</script>

<template>
	<div class="contApp">
		<div class="teste"></div>
		<div class="leftApp pull-left">
			<div class="headerApp wrapper">
				<div class="row">
					<div class="col-5">
						<router-link to="ocorrencia/cadastrar" class="btn btn-sm bg-red text-white" style="font-size: 12px">Novo Atendimento</router-link>
					</div>
					<div class="col-md-1 offset-md-5">
						<button class="btn btn-sm bg-grey-1 text-black no-select m-l box-shadow no-radius"><i class="fas fa-sync-alt"></i></button>
					</div>
				</div>
			</div><!-- Fim Header App -->
			<div class="bodyApp wrapper">
				<ul class="listFiltros">
					<li class="m-b-xs" v-for="filtro in filtros" :key="filtro">
						<a>{{ filtro.nome }}<span class="pull-right">{{ filtro.numero }}</span></a>
					</li>
				</ul>

				<div class="m-t m-b block col-12">
                    <div class="m-b-xs">Buscar Atendimento:</div>
                    <form class="">
                        <div class="input-group">
                            <input type="text" class="inputAtendimento" required="" placeholder="protocolo, assunto, pessoa">
                            <span class="">
                                <button type="submit" class="btnInputAtendimento">
                                 	<i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>	

                <div class="col-4">
                	<u-btn-dropdown
			        split
			        color="transparent"
			        text-color="dark"
			        label="Mais"
			        :no-caps="true"
			        style=""	        
			    >
			        <u-list link>
				        <u-item style="padding: 5px 15px; min-height: 0;">
				            <u-item-main>
				         	    <u-item-tile sublabel>Todos Atendimentos</u-item-tile>
				            </u-item-main>				            			            
				        </u-item> 
				        <u-item style="padding: 5px 15px; min-height: 0;">
				            <u-item-main>
				         	    <u-item-tile sublabel>Buscar um Atendimento</u-item-tile>
				            </u-item-main>				            			            
				        </u-item>        
			        </u-list>
			    </u-btn-dropdown>
                </div>

			</div>
		</div>
		<div class="rightApp bg-white wrapper pull-left">
			<h3 class="h3 m-t-none m-b-sm">Seus atendimentos em aberto</h3>
			<h4 class="h4 m-n text-muted">7 tickets</h4>
			<div class="u-table-middle scroll m-t">
				<table class="tableOcorrencias u-table u-table-horizontal-separator">
					<thead>
						<tr>
							<th class="text-left">
								<input type="checkbox" name="">
							</th>
							<th class="text-left sortable">Assunto</th>
							<th class="text-left sortable">Solicitante</th>
							<th class="text-left">Data</th>
							<th class="text-left">Tipo</th>
							<th class="text-left">Prioridade</th>
						</tr>
					</thead>
					<tbody>
						<tr class="" v-for="todo in todos" :key="todo">
							<td class="text-left">
								<u-checkbox v-model="check2" color="secondary" />
							</td>
							<td class="text-left">
								<router-link :to="{name: 'janelaOcorrencia', params: {id:todo.id}}" class="text-muted"><span class="atendimento m-r-xs text-white">a</span> {{ todo.assunto }}</router-link></td>
							<td class="text-left">
								<router-link :to="{name: 'janelaOcorrencia', params: {id:todo.id}}" class="text-muted">{{ todo.solicitante }}</router-link>
							</td>
							<td class="text-left">
								<router-link :to="{name: 'janelaOcorrencia', params: {id:todo.id}}" class="text-muted">{{ todo.data }}</router-link>
							</td>
							<td class="text-left">
								<router-link :to="{name: 'janelaOcorrencia', params: {id:todo.id}}" class="text-muted">{{ todo.tipo }}</router-link>
							</td>
							<td class="text-left">
								<router-link :to="{name: 'janelaOcorrencia', params: {id:todo.id}}" class="text-muted">{{ todo.prioridade }}</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.teste{
		float: left;
		background-color: #323232;
		width: 60px;
	}
	.contApp{
		display: flex;
		align-items: stretch;
		font-size: 14px;
	}
	.contApp .leftApp{
		width: 25%;
		background-color: #e4eaec;
		border-right: 1px solid #dee5e7;
		height:100vh;
	}
	.contApp .leftApp .headerApp{
		background-color: #edf1f2;
		border-bottom: 1px solid #dee5e7;
	}
	.contApp .leftApp .bodyApp .listFiltros li a{
		display: block;
		border-radius: 4px;
		color: #58666e;
		padding: 6px 12px;
		font-size: 13px;
	}
	.contApp .leftApp .bodyApp .listFiltros li a:hover{
		background-color: rgba(0,0,0,.05);
	}
	.contApp .leftApp .bodyApp .listFiltros li:first-child a{
		background-color: #23b7e5;
		color: #FFFFFF;
	}
	.contApp .leftApp .bodyApp .inputAtendimento{
		border: 1px solid #ccc;
		color: #555;
		height: 30px;
    	padding: 5px 10px;
    	font-size: 12px;
    	line-height: 1.5;
    	width: 89%;
	}
	.contApp .leftApp .bodyApp .btnInputAtendimento{
		width: 11%;
		text-align: center;
    	font-size: 12px;
    	height: 30px;
    	line-height: 1.5;
    	background-color: #FFFFFF;
    	outline: none;
    	border: 1px solid #ccc;
    	border-left: 0 !important;
	}
	.contApp .leftApp .bodyApp .btnInputAtendimento:hover{
		color: #58666e!important;
    	background-color: #edf1f2;
    	border-color: #c7d3d6;
	}
	.contApp .rightApp{
		width: 75%;
	}
	.contApp .rightApp .tableOcorrencias thead tr{
		height: 37px !important;
	}
	.contApp .rightApp .tableOcorrencias thead tr th{
		font-weight: bold;
		border-color: #eaeff0 !important;
		border-width: 1px 0 1px 0 !important;
		color: #000000 !important;
		font-size: 13px;
	}
	.contApp .rightApp .tableOcorrencias tbody td{
		height: 37px !important;
		border-color: #eaeff0 !important;
	}
	.contApp .rightApp .tableOcorrencias thead tr th:first-child,
	.contApp .rightApp .tableOcorrencias tbody tr td:first-child{
		padding: 0 5px !important;
	}
	.contApp .rightApp .tableOcorrencias tbody tr:last-child td{
		border: none !important;
	}
	.contApp .rightApp .tableOcorrencias .atendimento{
		display: inline;
    	padding: .2em .6em .3em;
    	font-size: 75%;
    	background-color: #fad733;
    	border-radius: .25em;
	}
</style>
