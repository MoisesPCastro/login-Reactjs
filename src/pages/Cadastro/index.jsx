import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { InputMask } from 'primereact/inputmask';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { Formik, Form as FormFormik, Field } from 'formik';
import moment from 'moment';

import  UIButton from '../../components/UI/Button/Button';
import { CriarInscricao } from '../../services/Inscricao';
import { CriarLogin } from '../../services/Login';
import { showSuccess, showInfo ,showError} from '../../modulos/Message/MessagenAlert';
import { Validations } from '../../components/yupValidation';


import '../Login/Login.css';

const initialValues = () => {
    return {
        nome: '',
        cpf: '',
        telefone: '',
        celular: '',
        email: '',
        senha: '',
        dataNascimento: '',
        endereco: '',
        cidade: '',
        uf: '',
        obs: '',
    };
};

const Cadastro = () => {
    const history = useHistory();
    const messages = useRef(null);
    const [values, setValue] = useState(initialValues);

    const retiraMascara = (str) => str.replace(/[^0-9]/g, '');


    const handleChange = (event) => {
        const { value, name } = event.target;
        setValue({
            ...values,
            [name]: value,
        })
    }

    const onSubmit = async (values) => {
    
        const { senha, email } = values;
        values.cpf = retiraMascara(values.cpf);
        values.dataNascimento = moment(values.dataNascimento, ["DD/MM/YYYY"]).format("YYYY-MM-DD");

        console.log('values', values)
        let response = await CriarInscricao(values);
        if (response && response.status === 202) {
            showInfo(messages, 'Usuário já cadastrado');
        } else if (response && response.status === 200) {
            let responseLogin = await CriarLogin({ email, senha });
            if (responseLogin && responseLogin.status === 200 && response.status === 200) {
                showSuccess(messages, 'Iscricao salva com sucesso!');
                history.push('/login')
            } else {
                // showError(
                //     messages,
                //     'Dados incompletos, tente novamente!'
                // );
            }

        }
        setValue(initialValues);

    }

    return (
        <>
            <Messages ref={messages} />
            <div className='cadastro'>
                <div className="user-login">
                    <h1 className="user-login__title">Cadastrar</h1>
                    <Formik
                        onSubmit={onSubmit}
                        validationSchema={Validations}
                        initialValues={initialValues}
                        setFieldValue
                    >
                        {({
                            handleChange,
                            handleSubmit,
                            values,
                        }) => (
                            <FormFormik>
                                <div className="user-login__form-control">
                                    <label htmlFor="nome">Nome</label>
                                    <Field
                                        id="nome"
                                        type="text"
                                        onChange={handleChange}
                                        name="nome"
                                        autoComplete="off"
                                        value={values.nome}

                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="cpf">Cpf</label>
                                    <Field
                                        as = {InputMask}
                                        id="cpf"
                                        type="text"
                                        onChange={handleChange}
                                        name="cpf"
                                        value={values.cpf}
                                        mask="999.999.999-99"
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="dataNascimento">DataNascimento</label>
                                    <Field
                                        as={InputMask}
                                        id="dataNascimento"
                                        type="text"
                                        onChange={handleChange}
                                        name="dataNascimento"
                                        value={values.dataNascimento}
                                        mask="99/99/9999"
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="endereco">Endereco</label>
                                    <Field
                                        id="endereco"
                                        type="text"
                                        onChange={handleChange}
                                        name="endereco"
                                        value={values.endereco}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="cidade">Cidade</label>
                                    <Field
                                        id="cidade"
                                        type="text"
                                        onChange={handleChange}
                                        name="cidade"
                                        value={values.cidade}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="uf">Uf</label>
                                    <Field
                                        id="uf"
                                        type="text"
                                        onChange={handleChange}
                                        name="uf" value={values.uf}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="telefone">Telefone</label>
                                    <Field
                                        id="telefone"
                                        type="text"
                                        onChange={handleChange}
                                        name="telefone"
                                        value={values.telefone}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="celular">Celular</label>
                                    <Field
                                        id="celular"
                                        type="text"
                                        onChange={handleChange}
                                        name="celular"
                                        value={values.celular}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        id="email"
                                        type="text"
                                        onChange={handleChange}
                                        name="email"
                                        value={values.email}
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="senha">Senha</label>
                                    <Field
                                        as = {Password}
                                        id="senha"
                                        type="text"
                                        onChange={handleChange}
                                        name="senha"
                                        value={values.senha}
                                        toggleMask
                                    />
                                </div>
                                <div className="user-login__form-control">
                                    <label htmlFor="obs">OBS</label>
                                    <Field
                                        id="obs"
                                        type="text"
                                        onChange={handleChange}
                                        name="obs"
                                        value={values.obs}
                                    />
                                </div>
                                <UIButton
                                    label="Cadastrar"
                                    theme="contained-green"
                                    type="submit"
                                    icon="pi pi-plus"
                                    iconPos="left"
                                    className="user-login__submit-button"
                                    onClick={handleSubmit}
                                >
                                    Cadastrar
                                </UIButton>
                                 
                            
                       
                            </FormFormik>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    );

};

export default Cadastro;
