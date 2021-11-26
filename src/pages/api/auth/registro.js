import connectDB from '../../../../utils/connectDB'
import Users from '../../../models/userModel'
// import validar from '../../../../utils/validar';
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
    case 'GET':
      console.log('get')
      break
  }
}

const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    // Validar Campos depois **
    const passwordHash = await bcrypt.hash(senha, 12);

    const newUser = new Users({nome, email, senha: passwordHash});

    console.log(newUser);

    await newUser.save();

    res.json({msg: "Usuário Registrado!"});

  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}
