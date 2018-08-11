<script>
export default {
  name: 'Registrar Atendimento'
}
</script>
<template>
	<div class="appCadastro">
		<div class="headerCadastro">
			<h3 class="">Registrar Atendimento</h3>
			<span><i class="fa fas close"></i></span>
		</div>
		<div class="bodyCadastro">
			<div class="leftContainer pull-left wrapper">
				<form class="formLeft">
					<div class="m-b">
						<label>Solicitante:</label>
						<input type="text" class="form-control w-full wrapper-xs" placeholder="Selecione uma pessoa">
					</div>

					<div class="m-b">
						<label>Canal de atendimento:</label>
						<select class="form-control w-full wrapper-xs">
							<option value="" class="" selected="selected">Selecione</option>
							<option label="Presencial" value="1">Presencial</option>
							<option label="E-mail" value="2">E-mail</option>
							<option label="Telefone" value="3">Telefone</option>
							<option label="Formulário web" value="4">Formulário web</option>
							<option label="Redes Sociais" value="5">Redes Sociais</option>
							<option label="Carta" value="6">Carta</option>
						</select>
					</div>

					<div class="m-b">
						<label>Unidade Vinculada:</label>
						<select class="form-control w-full wrapper-xs">
							<option value="" class="" selected="selected">Selecione</option>
							<option label="Obras" value="1">Obras</option>
							<option label="Pavimentação" value="2">Pavimentação</option>
							<option label="Gabinete" value="3">Gabinete</option>
							<option label="Marketing" value="4">Marketing</option>
							<option label="Ouvidoria Geral" value="5">Ouvidoria Geral</option>
							<option label="Assessoria" value="6">Assessoria</option>
						</select>
					</div>

					<div class="row m-b">
						<div class="col-5">
							<label>Motivo:</label>
							<select class="form-control w-full wrapper-xs">
								<option value="" class="" selected="selected">Selecione</option>
								<option label="Solicitação" value="1">Solicitação</option>
								<option label="Elogio" value="2">Elogio</option>
								<option label="Sugestão" value="3">Sugestão</option>
								<option label="Crítica" value="4">Crítica</option>
								<option label="Reclamação" value="5">Reclamação</option>
								<option label="Denúncia" value="6">Denúncia</option>
							</select>
						</div>
						<div class="col-5 offset-md-2">
							<label>Prioridade:</label>
							<select class="form-control w-full wrapper-xs">
								<option label="Baixa" value="0">Baixa</option>
								<option label="Normal" value="1" selected="selected">Normal</option>
								<option label="Urgente" value="2">Urgente</option>
							</select>
						</div>
					</div>

					<div class="m-b">
						<label>Tags:</label>
						<select class="form-control w-full wrapper-xs">
							<option value="" class="" selected="selected">Selecione Tags</option>
							<option>Lixo</option>
							<option>Comunidade Landim</option>
							<option>Saneamento Básico</option>
							<option>Especiais</option>
						</select>
					</div>

					<div class="m-b">
						<label>Data Limite:</label>
						<input class="form-control w-full wrapper-xs" type="text" name="">
					</div>

					<div class="m-b">
						<div class="col-6">
							<label>Data Limite:</label>
						</div>
						<div class="col-6">
							<button class="btn btn-sm btn-sucesso">assumir</button>
						</div>
						<input type="text" name="">
					</div>
				</form>				
			</div>
			<div class="rightContainer bg-white pull-left wrapper">
				<form class="formRight wrapper">
					<label for="assunto">Assunto</label>
					<input id="assunto" class="w-full" type="text" name="" tabindex="">
					<label for="mensagem">Mensagem:</label>
					<textarea id="mensagem" class="w-full"></textarea>
				</form>
			</div>
		</div>
		<div class="footerCadastro pos-fix text-center">Footer</div>
	</div>
</template>

<style scoped>
	.bodyCadastro{
		display: flex;
		align-items: stretch;
	}
	.bodyCadastro .leftContainer{
		width: 25%;
		background-color: #edf1f2;
		margin-bottom: 70px;
	}
	.bodyCadastro .leftContainer .formLeft label{
		display: block;
		font-size: 12px;
	}
	.bodyCadastro .leftContainer .formLeft input[type="text"],
	.bodyCadastro .leftContainer .formLeft select{
		border: 1px solid #cfdadd !important;
	}
	.bodyCadastro .rightContainer{
		width: 75%;
	}
	.bodyCadastro .rightContainer .formRight textarea{
		height: 200px;
		resize: none;
	}

	.footerCadastro{
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #f3f5f6;
		border-top: 2px solid #e5e5e5;
		padding: 25px;
	}

</style>