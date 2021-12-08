import { useState } from 'react';
import { getData } from '../../../utils/fetchData';


const DetailProduct = (props) => {
  const [product] = useState(props.product)
  return (
    <>
      <div>Detalhe dos produtos</div>
      <h1>{product.title}</h1>
    </>
  )
}

export async function getServerSideProps({params: {id}}){
  const res = await getData(`product/${id}`)
  console.log(res)
  return{
    props: { product: res.product},
  }
}

export default DetailProduct
