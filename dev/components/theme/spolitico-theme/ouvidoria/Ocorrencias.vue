<script>
  export default {
    name: 'Ocorrencias'
  }
</script>

<template>
	<div class="contApp">
		<div class="leftApp pull-left">
			<div class="headerApp wrapper">
				<div class="row">
					<div class="col-5">
						<a class="btn btn-sm bg-red text-white">Novo Atendimento</a>
					</div>
					<div class="col-md-1 offset-md-5">
						<button class="btn btn-sm bg-white text-black"><i class="fas fa-sync-alt"></i></button>
					</div>
				</div>
			</div><!-- Fim Header App -->
			<div class="bodyApp wrapper">
				<ul class="listFiltros">
					<li class="m-b-xs" v-for="n in 9" :key="n">
						<a href="#">Seus não atendidos<span class="pull-right">0</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="rightApp bg-white wrapper pull-left">
			<h3 class="h3 m-t-none m-b-sm">Seus atendimentos em aberto</h3>
			<h4 class="h4 m-n text-muted">7 tickets</h4>
			<div class="u-table-middle scroll m-t">
				<table class="tableOcorrencias u-table u-table-horizontal-separator">
					<thead>
						<tr>
							<th class="text-left"><input type="checkbox"></th>
							<th class="text-left sortable">Assunto</th>
							<th class="text-left sortable">Solicitante</th>
							<th class="text-left">Data</th>
							<th class="text-left">Tipo</th>
							<th class="text-left">Prioridade</th>
						</tr>
					</thead>
					<tbody>
						<tr class="" v-for="n in 7" :key="n">
							<td class="text-left"><input type="checkbox"></td>
							<td class="text-left">
								<a href="#" class="text-muted"><span class="atendimento m-r-xs text-white">a</span> Lixo na minha rua a mais de três dias</a></td>
							<td class="text-left">
								<a href="#" class="text-muted">Hebley Freitas</a>
							</td>
							<td class="text-left">
								<a href="#" class="text-muted">2 dias atrás</a>
							</td>
							<td class="text-left">
								<a href="#" class="text-muted">Solicitação</a>
							</td>
							<td class="text-left">
								<a href="#" class="text-muted">Urgente</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.contApp{
		display: flex;
		align-items: stretch;
	}
	.contApp .leftApp{
		width: 22%;
		background-color: #e4eaec;
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
		padding: 8px 12px;
		font-size: 14px;
	}
	.contApp .leftApp .bodyApp .listFiltros li a:hover{
		background-color: rgba(0,0,0,.05);
	}
	.contApp .rightApp{
		width: 78%;
	}
	.contApp .rightApp .tableOcorrencias thead tr{
		height: 37px !important;
	}
	.contApp .rightApp .tableOcorrencias thead tr th{
		font-weight: bold;
		border-color: #eaeff0 !important;
		border-width: 1px 0 1px 0 !important;
		color: #000000 !important;
	}
	.contApp .rightApp .tableOcorrencias tbody td{
		height: 37px !important;
		border-color: #eaeff0 !important;
	}
	.contApp .rightApp .tableOcorrencias thead tr th:first-child,
	.contApp .rightApp .tableOcorrencias tbody tr td:first-child{
		padding-left: 5px !important;
	}
	.contApp .rightApp .tableOcorrencias .atendimento{
		display: inline;
    	padding: .2em .6em .3em;
    	font-size: 75%;
    	background-color: #fad733;
    	border-radius: .25em;
	}
</style>
