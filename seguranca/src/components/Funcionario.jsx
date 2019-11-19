import React from 'react';
import ListComponent from './ListComponent';
import { listFuncionarios } from '../services/services';

class Funcionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }

    componentDidMount() {
        (async () => {
            let lista = await listFuncionarios();
            let body = <ListComponent lista={lista} />
            this.setState({ body })
        })();

    }

    render() {
        return (<React.Fragment>{this.state.body}</React.Fragment>);
    }
}

export default Funcionario;