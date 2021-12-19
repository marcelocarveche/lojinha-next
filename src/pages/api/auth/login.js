/* eslint-disable import/no-anonymous-default-export */

import connectDB from '../../../../utils/connectDB'
import Users from '../../../models/userModel'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '../../../../utils/generateToken'

connectDB()

export default async(req, res) => {
    switch(req.method) {
        case "POST":
            await login(req, res)
            break
        case "GET":
            console.log("get")
            break
    }
}

const login = async(req, res) => {
    try {
        const {email, senha } = req.body

        const user = await Users.findOne({ email })
        if (!user) return res.status(400).json({err: 'Usuário não existe!'})

        const verPwd = await bcrypt.compare(senha, user.senha)
        if (!verPwd) return res.status(400).json({err: 'Senha Incorreta!'})

        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})


        res.json({
            msg: "Login Success",
            refresh_token,
            access_token,
            user: {
                nome: user.nome,
                email: user.email,
                role: user.role,
                root: user.root
            }
        })


    } catch (err) {
        res.status(500).json({err: err.message});
    }
}


