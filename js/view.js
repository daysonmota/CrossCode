	function montaColuna(){ 
		$("#tableContato").html("");
		$("#tableContato").html(`
			<thead>
				<tr>                
					<th>Codigo</th>
					<th>Nome</th>
					<th>Email</th>
					<th>Endereco</th>
					<th>Telefone Fixo</th>
					<th>Telefone Celular</th>
					<th>Editar</th>
					<th>Excluir</th>
				</tr>                
			</thead>
			<tbody>
			</tbody>
			`); 
	}

	function listarContatos(){
		
		montaColuna();
		var contatos = devolveContatos();
		for (i in contatos) {
			var contato = JSON.parse(contatos[i]);
			$("#tableContato tbody").append(`
				<tr>                     
					<td>  ${contato.codigo}  </td> 
					<td>  ${contato.nome}  </td> 
					<td>  ${contato.email}  </td> 
					<td>  ${contato.endereco}  </td> 
					<td>  ${contato.telefone_fixo}  </td> 
					<td>  ${contato.telefone_celular}  </td> 
					<td> <img src='imagens/edit.png' data-contato-id="${i}" class='botao-editar' />  </td>
					<td> <img src='imagens/delete.png' data-contato-id="${i}" class='botao-excluir' />  </td>
				</tr>
				`);
		}
	}

	function pesquisaContato(nome){
		var contatoPesquisado = null;
		var contatos = devolveContatos();
		for(i in contatos){
			var contact = JSON.parse(contatos[i]);
			if(contact.nome == nome){
				contatoPesquisado = contact;
			}
		}

			$("#tableContato tbody").empty();
			$("#tableContato tbody").append(`
				<tr>                     
					<td>  ${contatoPesquisado.codigo}  </td> 
					<td>  ${contatoPesquisado.nome}  </td> 
					<td>  ${contatoPesquisado.email}  </td> 
					<td>  ${contatoPesquisado.endereco}  </td> 
					<td>  ${contatoPesquisado.telefone_fixo}  </td> 
					<td>  ${contatoPesquisado.telefone_celular}  </td> 
					<td> <img src='imagens/edit.png' data-contato-id="${contatoPesquisado}" class='botao-editar' />  </td>
					<td> <img src='imagens/delete.png' data-contato-id="${contatoPesquisado}" class='botao-excluir' />  </td>
				</tr>
				`);
	}


