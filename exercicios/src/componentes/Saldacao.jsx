import React, {Component} from "react";
export default class Saldacao extends Component {
    constructor(props) {
        super(props);
        this.state = {nome: this.props.nome};
    }
    setNome(e) {
        this.setState({nome: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Olá Mundo!</h1>
                <input type="text" value={this.state.nome} onChange={e => this.setNome(e)} />
                <br />
                <label htmlFor="sobrenome">Sobrenome</label>
                <input id="sobrenome" type="text" placeholder="Sobrenome"/>
            </div>
        );
    }       
}

