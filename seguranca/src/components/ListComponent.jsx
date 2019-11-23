import React from 'react';
import './ListComponent.css';
import { getParams } from '../services/svcDocumento';
import { EditEmpresa } from './EmpresaDetails';

let key = 0;

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: props.lista,
            body: [],
            editWindow: null
        };
        this.editar = (cdEmpresa) => {
            this.setState({
                editWindow: <EditEmpresa cdEmpresa={cdEmpresa} voltar={this.props.voltar} />,
                body: null
            })
        }
    }

    addEditButton = (cdEmpresa) => {
        return <td key={key++}><button onClick={() => this.editar(cdEmpresa)}>Editar {cdEmpresa} </button></td>

    }

    componentDidMount() {
        (async () => {
            try {
                let { lista } = this.state;
                let propriedades = null, body = [];
                if (lista && lista.length > 0) {
                    propriedades = Object.keys(lista[0]);
                    let colunas = await getParams(propriedades.toString());
                    let top = <tr className='titulo' key='titulo'>{colunas.map(c => <td key={c.desc_param}>{c.valor_param}</td>)}<td>Editar</td></tr>;

                    for (let i = 0; i < lista.length; i++) {
                        let middle = [];
                        for (let j = 0; j < propriedades.length; j++) {
                            middle.push(<td key={key++}>
                                {propriedades[j].substring(0, 2) === 'ao' ?
                                    (lista[i][propriedades[j]] === 1 ? 'S' : 'N') :
                                    lista[i][propriedades[j]]}
                            </td>);
                        }
                        middle.push(this.addEditButton(lista[i][propriedades[0]]))
                        body.push(<tr key={key++}>{middle}</tr>)
                    }
                    body.unshift(top)
                    this.setState({ body });
                }
            } catch (error) {
                throw error;
            }
        })();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.editWindow}
                <table>
                    <tbody className="grid">
                        {this.state.body}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ListComponent;