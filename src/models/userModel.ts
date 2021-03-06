import { Schema, models, model} from 'mongoose'
import { User } from './types/userType'
const userSchema = new Schema<User>({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  root: {
    type: Boolean,
    default: false,
  }
},
  {
    timestamps: true
  }
)

const Dataset = models.user || model<User>('user', userSchema);


export default Dataset;
