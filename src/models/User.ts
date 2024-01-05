import Mongoose from 'mongoose'
import { ObjectId } from 'mongodb'

const schema = new Mongoose.Schema({
	_id: { type: String, default: () => new ObjectId().toString() },
	name: {
    unique: true,
		type: String,
		required: [true, 'Please provide a name'],
		trim: true,
		minLength: [2, 'Your name must be at least 2 characters'],
	},
	username: {
    unique: true,
		type: String,
		required: [true, 'Please choose a username'],
		trim: true,
		minLength: [2, 'Your username must be at least 2 characters']
	},
	email: {
    unique: true,
		type: String,
		required: [true, 'Please provide your email'],
		trim: true,
		validate: {
			validator: function (value: string) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
			},
			message: 'Invalid email address',
		},
	},
	external_id: {
    unique: true,
    sparse: true,
		type: String
	},
	address: {
		type: String,
		required: [true, 'Please provide an address'],
		trim: true,
		minLength: [1, 'Your address must not be empty'],
	},
})

schema.post('save', (error:any, doc:any, next:(error?: Error) => void):void => {

  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    const value = error.keyValue[field];
    const errMsg = `${field} '${value}' already exists.`;
    next(new Error(errMsg));
  } else {
    next();
  }

});

export default Mongoose.models.User || Mongoose.model('User', schema)
