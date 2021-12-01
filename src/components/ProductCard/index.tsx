import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Container } from './styles'
import { MdAddShoppingCart } from 'react-icons/md'
import {
  createTheme,
  MuiThemeProvider,
  createStyles
} from '@material-ui/core/styles'

interface ProctCardProps {
  title: string
  price: number
  description: string
  content: string
  images?: string
  category: string
  checked: boolean
  inStock: string
  sold: string
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#9B78EB',
      main: '#8E67E8',
      dark: '#8257e6',
      contrastText: '#fff'
    }
  }
})

const ProctCard: React.FC<ProctCardProps> = ({
  title,
  price,
  description,
  content,
  images,
  category,
  checked,
  inStock,
  sold
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={images} alt="" width="200px" />
        </div>
        <div
          style={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            align="left"
            variant="h5"
            style={{ color: '#8257e6', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography align="left" variant="caption">
            {description}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #e5e5e5 ',
              paddingTop: '10px',

            }}
          >
            <h2>{`R$${price}`}</h2>
            <Button
              color="primary"
              variant="contained"
              startIcon={<MdAddShoppingCart />}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </Container>
    </MuiThemeProvider>
  )
}

export default ProctCard