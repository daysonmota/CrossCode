	var posicao_selecionada = -1;
	var CRIA_CONTATO = "NOVO_CONTATO"
	var tipoCadastro = CRIA_CONTATO;
	
	function pegaTodosJson(){
		return localStorage.getItem('contato');
	}

	function devolveContatos(){
		var contatos = pegaTodosJson();
		contatos = JSON.parse(contatos);
		if(contatos == null){
			return contatos =[];
		}else{
			return contatos;
		}
	}
	
	function criaObjetoJson(){

		var contato = JSON.stringify({
			"codigo" : $("#campo-id").val(),
			"nome" : $("#campo-nome").val(),
			"email" : $("#campo-email").val(),
			"endereco" : $("#campo-endereco").val(),
			"telefone_fixo" : $("#campo-telefone-Fixo").val(),
			"telefone_celular" : $("#campo-celular").val()
		});

		return contato;
	}

	
