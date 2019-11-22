import React from 'react';
import './ListComponent.css';
import { getParams } from '../services/svcDocumento'
let key = 0;

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: props.lista,
            body: [],
            editWindow: null,
        };
        this.editar = () => { console.log('asd'); this.setState({ editWindow: this.state.editWindow ? null : <div>EAEAEAEAEAE EAEAEAEAEAE EAEAEAEAEAE EAEAEAEAEAE </div> }) }
    }

    // componentDidMount() {
    //     (async () => {
    //         try {
    //             let { lista } = this.state;
    //             let propriedades = null, body = [];
    //             if (lista && lista.length > 0) {
    //                 let middle = [], body = [];
    //                 propriedades = Object.keys(lista[0]);
    //                 let colunas = await getParams(propriedades.toString());
    //                 let top = <div key='titulo'>{colunas.map(c => <div key={c.desc_param}>{c.valor_param}</div>)}</div>;

    //                 for (let i = 0; i < lista.length; i++) {
    //                     for (let j = 0; j < propriedades.length; j++) {
    //                         middle.push(<div key={key++}>{lista[i][propriedades[j]]}</div>)
    //                     }
    //                     body.push(<div key={key++}>{middle}</div>)
    //                 }
    //                 body.unshift(top)
    //                 this.setState({ body });
    //             }
    //         } catch (error) {
    //             console.log(error)
    //             throw error;
    //         }
    //     })();
    // }

    addEditButton = (codigo) => {
        return <td key={key++}><button onClick={this.editar}>Editar {codigo} </button></td>

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
                            middle.push(<td key={key++}>{lista[i][propriedades[j]]}</td>)
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