import React from 'react';
import { addFuncionario, editFuncionario, deleteFuncionario, getFuncionario } from '../services/svcFuncionario';

class FuncionarioDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode || 'EDIT',
            cdEmpresa: props.cdEmpresa,
            cdFuncionario: props.cdFuncionario,
            nome: '',
            logradouro: '',
            numeroEndereco: '',
            bairro: '',
            municipio: '',
            aoAtivo: ''
        }
    }

    save = () => {
        (async () => {
            let { mode } = this.state;
            if (mode === 'ADD') {
                let { nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa } = this.state;
                await addFuncionario(nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa)
            } else {
                let { cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo } = this.state;
                await editFuncionario(cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo)
            }
        })();
    }

    delete = () => {
        (async () => {
            let { mode } = this.state;
            if (mode === 'EDIT') {
                let { cdFuncionario } = this.state;
                await deleteFuncionario(cdFuncionario);
            }
        })();
    }

    componentDidMount() {
        (async () => {
            if (this.state.mode === 'EDIT') {
                let func = await getFuncionario(this.state.cdFuncionario)
                this.setState({
                    nome: func.nome,
                    logradouro: func.logradouro,
                    numeroEndereco: func.nr_endereco,
                    bairro: func.bairro,
                    municipio: func.municipio,
                    aoAtivo: func.ao_ativo
                })
            }
        })()
    }

    render() {

        return (
            <React.Fragment>
                <table>
                    <tbody>
                        {this.state.mode === 'EDIT' ? <tr><td>Cód. Funcionário</td><td></td></tr> : null}
                    </tbody>
                </table>
                <button onClick={() => this.save()}>Salvar</button> <br />
                <button onClick={() => { console.log(this.props.voltar); this.props.voltar() }}>Voltar</button>
            </React.Fragment>
        );
    }
}


export { FuncionarioDetails };