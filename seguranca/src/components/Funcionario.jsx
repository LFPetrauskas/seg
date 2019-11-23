import React from 'react';
import ListComponent from './ListComponent';
import { EditFuncionario } from './FuncionarioDetail';
import { listFuncionarios } from '../services/svcFuncionario';

class Funcionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            editWindow: ''
        }
    }

    voltar = () => {
        let { originalBody } = this.state;
        this.setState({ body: originalBody, editWindow: null });
    }

    editar = codigo => {
        this.setState({
            editWindow: <EditFuncionario codigo={codigo} voltar={this.voltar} />,
            body: null
        })
    }

    componentDidMount() {
        (async () => {
            let lista = await listFuncionarios();
            let body = <ListComponent lista={lista} voltar={this.voltar} editar={this.editar} />
            this.setState({ body, originalBody: <Funcionario props={this.props} /> })
        })();

    }

    render() {
        return (
            <React.Fragment>
                {this.state.editWindow}
                {this.state.body}
            </React.Fragment>);
    }
}

export default Funcionario;