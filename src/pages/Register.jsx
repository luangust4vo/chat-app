import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { Form } from '../components/Form'

export const Register = () => {
  return (
    <Form title="Criar nova conta" btnMsg="Criar">
      <Grid container sx={{ justifyContent: 'flex-end' }}>
        <Grid item>
          <Link to="/login">Já tem uma conta?</Link>
        </Grid>
      </Grid>
    </Form>
  )
}
