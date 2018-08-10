<script>
  export default {
    name: 'Campanhas'
  }
</script>

<template>
	<div class="layout-padding" style="background-color: #f0f3f4 !important">
		<div class="row">
			<div class="col-6">
				<span class="h2 text-dark">Comunicação e Marketing</span>
			</div>
			<div class="col-6">
				<!--<div class="u-btn-group row no-wrap inline u-btn-dropdown u-btn-dropdown-split no-wrap u-btn-item">
					<button tabindex="0" type="button" class="resetButton u-btn inline relative-position u-btn-item no-select u-btn-rectangle u-focusable u-hoverable bg-dark text-white u-btn-dropdown-current">
						<div class="u-focus-helper"></div>
						<div class="u-btn-inner row col items-center justify-center">
							<div>Criar campanha</div>
						</div>
					</button>
					<button tabindex="0" type="button" class="u-btn inline relative-position u-btn-item no-select u-btn-dropdown-arrow u-btn-rectangle u-focusable u-hoverable bg-dark text-white">
						<div class="u-focus-helper"></div>
						<div class="u-btn-inner row col items-center justify-center">
							<i class="material-icons transition-generic___no app-icon u-icon" aria-hidden="true">arrow_drop_down</i>
						</div>
					</button>
				</div>-->
				
				<u-btn-dropdown
			        split
			        color="dark"
			        label="Criar campanha"
			        :no-caps="true"
			        style="float: right;"	        
			    >
			        <u-list link>
				        <u-item v-for="n in 4" :key="n" style="padding: 5px 15px; min-height: 0;">
				        	<u-item-side style="float: left; min-width: 0;" icon="info" color="#404040" />
				            <u-item-main>
				         	    <u-item-tile sublabel>Campanha de Email</u-item-tile>
				            </u-item-main>				            			            
				        </u-item>        
			        </u-list>
			    </u-btn-dropdown>
			</div>
		</div><!-- Fim Header Pag -->
		<div class="campanhas m-t">
			<u-btn-dropdown
		        color="light"
		        label="Filtros"
		        :no-caps="true"
		        class="m-b-xs shadow-5 u-caption"
      		>
		        <u-list link>
			        <u-item style="padding: 5px 15px; min-height: 0;">
			            <u-item-main>
			              	<u-item-tile sublabel>Teste</u-item-tile>
			            </u-item-main>
			        </u-item>
		        </u-list>
		    </u-btn-dropdown>

			<ul v-for="n in 4" class="listaCampanhas" :key="n">
				<li class="bg-white m-b-md">
					<div class="row">
						<div class="col-1">
							<i class="fas fa-check-circle iconLinst iconCheck"></i>
						</div>
						<div class="col-5 u-body-1">
							<a class="text-dark m-b-xs u-subheading" style="display: inline-block;">Convite para Movimento Partidário </a><span class="iconMarketing"><i class="fas fa-phone"></i> Telefone</span>
							<div>
								<span class="m-b-xs" style="display: block;">Grupo Campanha</span>
								<span><strong>Enviado.</strong> 2 anos atrás, segunda-feira, 18 de julho de 2016</span>
							</div>
						</div>
						<div class="col-3">
							<div class="row wrapper">
								<div class="col-4">
									<span class="m-b-xs" style="display: block;">100%</span>
									<span>inscritos</span>
								</div>
								<div class="col-4">
									<span class="m-b-xs" style="display: block;">48%</span>
									<span>abertos</span>
								</div>
								<div class="col-4">
									<span class="m-b-xs" style="display: block;">26%</span>
									<span>cliques</span>
								</div>
							</div>
						</div>
						<div class="col-3">
							<u-btn-dropdown
						        color="bg-dark"
						        text-color="text-blue-grey-1"
						        float="right"
						        :no-caps="true"
						        label="Visualizar Relatório"
						        style="float: right;"
				      		>
						        <u-list link>
							        <u-item style="padding: 5px 15px; min-height: 0;">
							            <u-item-main>
							              	<u-item-tile sublabel>Pré-visualizar</u-item-tile>
							            </u-item-main>
							        </u-item>
							        <u-item style="padding: 5px 15px; min-height: 0;">
							            <u-item-main>
							              	<u-item-tile sublabel>Duplicar</u-item-tile>
							            </u-item-main>
							        </u-item>
						        </u-list>
						    </u-btn-dropdown>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div> 
</template>

<style scoped>
.resetButton{
	padding: 6px 12px;
	min-height: 0;
	text-transform: none;
    font-weight: normal;
    font-size: 14px;
    border-radius: 4px 0 0 4px;
}
.campanhas .listaCampanhas{
	display: flex;
}
.campanhas .listaCampanhas li{
	border: 1px solid #e7ecee;
	border-left: 3px solid #23b7e5;
	padding: 15px;
	flex: 1;
	align-items: center;
	flex-wrap: wrap;
}
.campanhas .listaCampanhas li .iconLinst{
	font-size: 3em;
	color: #27c24c;
}
.campanhas .listaCampanhas li .iconMarketing{
	margin-left: 10px;
	font-size: 10px !important;
	color: #58666e;
	background-color: #edf1f2;
	padding: 5px;
}
</style>
