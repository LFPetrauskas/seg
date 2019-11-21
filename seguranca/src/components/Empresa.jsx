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

    componentDidMount() {
        (async () => {
            let lista = await listEmpresas();
            let body = <ListComponent lista={lista} />
            this.setState({ body })
        })();

    }

    render() {
        return (<React.Fragment>{this.state.body}</React.Fragment>);
    }
}

export default Empresa;