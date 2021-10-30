import React from 'react'
import Wrapper from '../../components/Wrapper'
import { Container } from '../../styles/styled-components/Container'
import { Formik, Form, Field } from 'formik'
import { Button } from '@material-ui/core'
import { InputWrapper } from '../../styles/styled-components/RegisterUser'

const RegisterUser: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            senha: ''
          }}
          onSubmit={values => {
            console.log(values)
          }}
        >
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

            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Form>
        </Formik>

        <span></span>
      </Container>
    </Wrapper>
  )
}

export default RegisterUser
