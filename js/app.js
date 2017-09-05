function salvaLocalStorage(contato){
	var contatos = devolveContatos();
	contatos.push(contato);
	localStorage.setItem('contato', JSON.stringify(contatos));
	return true;
}



function removeElemento(contatos,posicao_selecionada){
	contatos.splice(posicao_selecionada,1);
	localStorage.setItem('contato', JSON.stringify(contatos));
}



function adicionaContato(){
	var contato = criaObjetoJson();
	salvaLocalStorage(contato);
	alert('Contato Adicionado com Sucesso!')
	return true;
}



function atualizarContato(){
	var contatos = devolveContatos();
	contatos[posicao_selecionada] = JSON.stringify({
		"codigo" : $("#campo-id").val(),
		"nome" : $("#campo-nome").val(),
		"email" : $("#campo-email").val(),
		"endereco" : $("#campo-endereco").val(),
		"telefone_fixo" : $("#campo-telefone-Fixo").val(),
		"telefone_celular" : $("#campo-celular").val()
	});
	localStorage.setItem('contato', JSON.stringify(contatos));
	alert('Contato Atualizado com Sucesso!');
	return true;
}

function excluirContato(posicao_selecionada){
	contatos = devolveContatos();
	removeElemento(contatos,posicao_selecionada);
	alert('Contato Excluído com sucesso!');
}