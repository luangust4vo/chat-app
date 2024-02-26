import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { Form } from '../components/Form'

export const Login = () => {
  return (
    <Form title="Entrar com sua conta" btnMsg="Entrar">
      <Grid container>
        <Grid item xs>
          <Link to="*">Esqueceu sua senha?</Link>
        </Grid>
        <Grid item>
          <Link to="/register">Não tem uma conta?</Link>
        </Grid>
      </Grid>
    </Form>
  )
}
