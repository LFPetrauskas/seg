import React from 'react';
import './ListComponent.css';
import { getParams } from '../services/svcDocumento'
let key = 0;

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: props.lista,
            body: []
        }
    }

    componentDidMount() {
        (async () => {
            try {
                let { lista } = this.state;
                let propriedades = null, body = [];
                if (lista && lista.length > 0) {
                    propriedades = Object.keys(lista[0]);
                    let colunas = await getParams(propriedades.toString());
                    let top = <div key='titulo' className='title'>{colunas.map(c => <div className='cell' key={c.desc_param}>{c.valor_param}</div>)}</div>;
                    let middle = [], body = [];
                    for (let i = 0; i < lista.length; i++) {
                        for (let j = 0; j < propriedades.length; j++) {
                            middle.push(<div className='cell' key={key++}>{lista[i][propriedades[j]]}</div>)
                        }
                        body.push(<div className='row' key={key++}>{middle}</div>)
                    }
                    body.unshift(top)
                    this.setState({ body });
                }
            } catch (error) {
                console.log(error)
                throw error;
            }
        })();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.body}
            </React.Fragment>
        );
    }
}

export default ListComponent;