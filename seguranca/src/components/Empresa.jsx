import React from 'react';
import ListComponent from './ListComponent';
import { listEmpresas } from '../services/svcEmpresa';

class Empresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }
    voltar = () => {
        let { originalBody } = this.state;
        console.log(this)
        this.setState({ body: originalBody });
    }

    componentDidMount() {
        (async () => {
            let lista = await listEmpresas();
            let body = <ListComponent lista={lista} voltar={this.voltar} />
            this.setState({ body, originalBody: body })
        })();

    }

    render() {
        return (<React.Fragment>{this.state.body}</React.Fragment>);
    }
}

export default Empresa;