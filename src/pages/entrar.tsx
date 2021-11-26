import { Button } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import React, { useContext, useState } from 'react'
import { postData } from '../../utils/fetchData'
import Wrapper from '../components/Wrapper'
import {  ContainerLogin } from '../styles/styled-components/Container'
import { InputWrapper } from '../styles/styled-components/RegisterUser'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'
import connectDB from '../../utils/connectDB';

const Entrar: React.FC = () => {
  let errorMessage = null
  const [userData, setUserData] = useState({ email: '', password: '' })
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state


  const onSubmit = async (values: any, errors: any) => {
    // e.preventDefault();
    // e.preventDefault()

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const userData = { email: values.email, senha: values.senha }
    const res = await postData('auth/login', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: "Erro: " +res.err } })

    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user
      }
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('primeiroLogin', true);
  }
  return (
    <Wrapper>
      <ContainerLogin>
      <span></span>
        <Formik
          initialValues={{
            email: '',
            senha: ''
          }}
          validate={values => {
            let errors: any = {}
            errorMessage = ''

            if (!values.email) {
              errors.email = 'Email é obrigatório.'
              errorMessage += errors.email + '\n'
            }
            if (!values.senha) {
              errors.senha = 'Senha é obrigatório.'
              errorMessage += errors.senha + '\n'
            }
            return errors
          }}
          onSubmit={(values, errors) => {
            onSubmit(values, errors)
          }}
        >
          {({ values, errors }) => (
            <Form>
              <h1>Faça seu login</h1>

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

              <Button
                variant="contained"
                color="primary"
                onClick={() => onSubmit(values, errors)}
              >
                ENTRAR
              </Button>
            </Form>
          )}
        </Formik>
      </ContainerLogin>
    </Wrapper>
  )
}

export default Entrar
