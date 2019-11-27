import React from 'react';
import ListComponent from './ListComponent';
import { EmpresaDetails } from './EmpresaDetails'
import { listEmpresas } from '../services/svcEmpresa';

class Empresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            addWindow: <EmpresaDetails voltar={this.voltar} mode={'ADD'} />,
            editWindow: null,
            body: null
        })
    }

    editar = codigo => {
        this.setState({
            addButton: null,
            addWindow: null,
            editWindow: <EmpresaDetails codigo={codigo} voltar={this.voltar} />,
            body: null
        })
    }

    componentDidMount() {
        (async () => {
            let lista = await listEmpresas();
            let addButton = <button onClick={this.adicionar}>Novo</button>
            let body =
                <div>
                    <ListComponent lista={lista} voltar={this.voltar} editar={this.editar} />
                </div>
            this.setState({ body, originalBody: <Empresa props={this.props} />, addButton })
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

export default Empresa;