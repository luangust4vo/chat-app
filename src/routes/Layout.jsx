import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <Outlet />
    </Container>
  )
}
