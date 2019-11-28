import React from 'react';
import ListComponent from './ListComponent';
import { FuncionarioDetails } from './FuncionarioDetail';
import { listFuncionarios } from '../services/svcFuncionario';

class Funcionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cdEmpresa: props.cdEmpresa || '-1',
            addButton: '',
            addWindow: '',
            body: '',
            editWindow: ''
        }
    }

    voltar = () => {
        let { originalBody } = this.state;
        this.setState({ body: originalBody, addWindow: null, addButton: null, editWindow: null });
    }

    adicionar = () => {
        this.setState({
            addButton: null,
            addWindow: <FuncionarioDetails voltar={this.voltar} mode={'ADD'} />,
            editWindow: null,
            body: null
        })
    }

    editar = codigo => {
        this.setState({
            addButton: null,
            addWindow: null,
            editWindow: <FuncionarioDetails codigo={codigo} voltar={this.voltar} />,
            body: null
        })
    }

    componentDidMount() {
        (async () => {
            let { cdEmpresa } = this.state;
            let lista = await listFuncionarios(cdEmpresa);
            let addButton = <button onClick={this.adicionar}>Novo</button>
            let body = <ListComponent lista={lista} voltar={this.voltar} editar={this.editar} />
            this.setState({ body, originalBody: <Funcionario props={this.props} />, addButton })
        })();

    }

    render() {
        return (
            <React.Fragment>
                {this.state.addButton}
                {this.state.addWindow}
                {this.state.editWindow}
                {this.state.body}
            </React.Fragment>);
    }
}

export default Funcionario;