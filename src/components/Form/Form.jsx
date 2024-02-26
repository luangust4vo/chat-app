import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Lock } from 'lucide-react'

export const Form = ({ title, btnMsg, children }) => {
  return (
    <Paper
      sx={{
        alignSelf: 'center',
        mx: 'auto',
        p: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <Lock />
      </Avatar>
      <Typography variant="h5">{title}</Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Seu email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Sua senha"
          name="password"
          autoComplete="password"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {btnMsg}
        </Button>
        {children}
      </Box>
    </Paper>
  )
}
