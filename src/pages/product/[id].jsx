import { useState } from 'react'
import { getData } from '../../../utils/fetchData'
import Wrapper from '../../components/Wrapper'
import { Container } from '../../styles/styled-components/Container'

const DetailProduct = props => {
  const [product] = useState(props.product)
  return (
    <Wrapper>
      <Container>
        <h1>{product.title}</h1>
        + Informações
      </Container>
    </Wrapper>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`)
  console.log(res)
  return {
    props: { product: res.product }
  }
}

export default DetailProduct
