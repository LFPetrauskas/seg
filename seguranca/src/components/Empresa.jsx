import React from 'react';
import ListComponent from './ListComponent';
import { EditEmpresa } from './EmpresaDetails'
import { listEmpresas } from '../services/svcEmpresa';

class Empresa extends React.Component {
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
            editWindow: <EditEmpresa codigo={codigo} voltar={this.voltar} />,
            body: null
        })
    }

    componentDidMount() {
        (async () => {
            let lista = await listEmpresas();
            let body = <ListComponent lista={lista} voltar={this.voltar} editar={this.editar} />
            this.setState({ body, originalBody: <Empresa props={this.props} /> })
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

export default Empresa;