import React from 'react';
import './Pessoa.css'



const pessoa = function (props) {
	return <div className="pessoa"><h1>Nome: {props.nome}</h1>
		<p>Idade:{props.idade}  </p>
		<p>Votos:{props.voto}  </p>
<input type="text" onChange={props.atualizar} />
</div>;

}

export default pessoa;
