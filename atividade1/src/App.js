import React, { Component } from 'react';
import './App.css';
import Pessoa from './Pessoa/Pessoa';
import { UserInput, UserOutput } from './User';

class App extends Component {

  state = {

	pessoas: [ {nome: 'Jan Frodeno', idade:36, voto:0}, {nome: 'Sebastian Kienle', idade: 33, voto:0} , { nome: 'Manoel Messias', idade:23, voto:0}  ],

	outroAtributo: 'outro valor',
	numero: '11',

	userName: "Default UserName"

  }

  trataEvento = () => {
		
	var voto0 = this.state.pessoas[0].voto + 1;
	var voto1 = this.state.pessoas[1].voto + 1;
	var voto2 = this.state.pessoas[2].voto + 1;
	this.setState(	{ 
		pessoas:
		 [ {voto:voto0},
		   {voto:voto1}, 
		   {voto:voto2}  
		 ]
	})

  }

  votar1 = (event) => {

	var voto0 = event.target.value;
	var voto1 = event.target.value;
	var voto2 = event.target.value;
	this.setState(	{ 
		pessoas:
		 [ {voto:voto0},
		   {voto:voto1}, 
		   {voto:voto2}  
		 ]
	})
 }


	onChangeUserName(value) {
		this.setState({
			userName: value
		})
	}

  render() {
    return (
      <div className="App">	
        <h1>Gerenciamento de Usuarios</h1>
				<button onClick={ this.trataEvento}> Votar em todos </button>
				<Pessoa nome={this.state.pessoas[0].nome}
					idade= {this.state.pessoas[0].idade }
					voto = {this.state.pessoas[0].voto}  
					atualizar={this.votar1}/>
				<Pessoa nome={this.state.pessoas[1].nome}
					idade= {this.state.pessoas[1].idade }
					voto= {this.state.pessoas[1].voto} />
				<Pessoa nome={this.state.pessoas[2].nome}
					idade= {this.state.pessoas[2].idade }
					voto = {this.state.pessoas[2].voto} />
				<UserInput changeUserName={this.onChangeUserName.bind(this)} initiaState={this.state.userName}/>
				<UserOutput name={this.state.userName} />
				<UserOutput name={this.state.userName} />
				<UserOutput name={this.state.userName} />
      </div>
    );
  }
}

export default App;
