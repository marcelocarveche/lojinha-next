import connectDB from '../../../../utils/connectDB'
import Product from '../../../models/productModel'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res)
      break
  }
}

const getProducts = async (req, res) => {
  try {
    const { id } = req.query
    const product = await Product.findById(id)
    if (!product)
      return res.status(400).json({ err: 'este produto não existe!' })
    res.json({ product })
  } catch (error) {
    return res.status(500).json({err: error.message})
  }
}
