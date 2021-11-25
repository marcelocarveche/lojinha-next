import React, { useContext, useState } from 'react'
import Wrapper from '../../components/Wrapper'
import { Container } from '../../styles/styled-components/Container'
import { Formik, Form, Field } from 'formik'
import { Button } from '@material-ui/core'
import { InputWrapper } from '../../styles/styled-components/RegisterUser'
import { DataContext } from '../../store/GlobalState'
import { postData } from '../../../utils/fetchData'

const RegisterUser: React.FC = () => {
  const { state, dispatch } = useContext(DataContext);
  let errorMessage = null;

  const onSubmit = async (values: any, errors: any) => {
    // e.preventDefault();
    if(errorMessage) {
      console.log(errors);
      dispatch({ type: 'NOTIFY', payload: {error: errorMessage} });
    }
    console.log(values)
    const userData = {
      nome: values.nome,
      email: values.email,
      senha: values.senha
    }
    const res = await postData('auth/registro', userData)
    if (res.error) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    }
    console.log('RES', res)
    return dispatch({ type: 'NOTIFY', payload: { success: 'Tudo certo!' } });

  }
  return (
    <Wrapper>
      <Container>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            senha: '',
            confirmarSenha: ''
          }}
          validate={values => {
            let errors: any = {}
            errorMessage = '';
            if (!values.nome) {
              errors.nome = 'Nome é obrigatório.'
              errorMessage += errors.nome + '\n';
            }
            if (!values.email) {
              errors.email = 'Email é obrigatório.'
              errorMessage += errors.email + '\n';
            }
            if (!values.senha) {
              errors.senha = 'Senha é obrigatório.'
              errorMessage += errors.senha + '\n';
            }
            if (!values.confirmarSenha) {
              errors.confirmarSenha = 'Confirmar senha é obrigatório.'
              errorMessage += errors.confirmarSenha + '\n';
            } else if (values.senha !== values.confirmarSenha) {
              errors.confirmarSenha = 'As senhas informadas não são iguais.'
              errorMessage += errors.confirmarSenha + '\n';
            }
            // console.log('ERROS: ', JSON.stringify(errors))
            return errors
          }}
          onSubmit={(values, errors) => {
            onSubmit(values, errors)
          }}
        >
          {({values, errors}) => (
            <Form>
              <h1>Cadastre-se</h1>
              <InputWrapper>
                <label htmlFor="nome">Insira seu nome completo</label>
                <Field id="nome" name="nome" placeholder="Nome" />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="email">Insira seu e-mail</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="senha">Insira sua senha</label>
                <Field
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Senha"
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="confirmarSenha">Confirme sua senha</label>
                <Field
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  placeholder="Confirmar senha"
                />
              </InputWrapper>

              <Button variant="contained" color="primary" onClick={() => onSubmit(values, errors)}>
                Enviar
              </Button>
            </Form>
          )}
        </Formik>

        <span></span>
      </Container>
    </Wrapper>
  )
}

export default RegisterUser
