$(function() {

	$('.formulario').bind("submit",function() {
		
		if(tipoCadastro == CRIA_CONTATO){
			
		return adicionaContato();
		}
		else{
			return atualizarContato();
		}

	});

	listarContatos();

	$(".botao-editar").click(function(){
		CRIA_CONTATO = 'EDITAR_CONTATO';
		
		posicao_selecionada = parseInt($(this).attr("data-contato-id"));
		var contatos = devolveContatos();
		var contato = JSON.parse(contatos[posicao_selecionada]);

		$("#campo-id").val(contato.codigo);
		$("#campo-nome").val(contato.nome);
		$("#campo-email").val(contato.email);
		$("#campo-endereco").val(contato.endereco);
		$("#campo-telefone-Fixo").val(contato.telefone_fixo);
		$("#campo-celular").val(contato.telefone_celular);
		$("#campo-id").attr('readonly', 'readonly');
		$("#campo-nome").focus();

	});

	$('.botao-excluir').bind("click",function() {
		var posicao_selecionada = parseInt($(this).attr("data-contato-id"));
		excluirContato(posicao_selecionada);
		listarContatos();
	});	

	$('#botao-pesquisar').on('click', function() {

		var pegaValorDaPesquisa = $('#campo-pesquisar').val();
		if(pegaValorDaPesquisa.length == 0){
			alert('não possui nenhum registro');
			return listarContatos();
		}
		pesquisaContato(pegaValorDaPesquisa);
	});


});