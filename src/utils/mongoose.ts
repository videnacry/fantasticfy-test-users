import Mongoose from 'mongoose'

const connection = {
	isConnected: false,
}

export const connectDb = async () => {
	if (!connection.isConnected) {
		const { DB_HOST: host, DB_USER: user, DB_PASS: pass } = process.env
		const uri =
			host?.replace('<user>', user ?? '').replace('<pass>', pass ?? '') ?? ''
		const db = await Mongoose.connect(uri, { dbName: 'fantasticfy' })
		connection.isConnected = db.connection.readyState == 0 ? false : true
	}
}
