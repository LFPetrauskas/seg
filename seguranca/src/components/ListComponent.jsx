import React from 'react';
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
        let { lista } = this.state;
        let propriedades = null, body = [];
        if (lista && lista.length > 0) {
            propriedades = Object.keys(lista[0]);
            for (let i = 0; i < lista.length; i++) {
                for (let j = 0; j < propriedades.length; j++) {
                    body.push(<div key={key++}>{lista[i][propriedades[j]]}</div>)
                }
            }
            this.setState({ body })
        }
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