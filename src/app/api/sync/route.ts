import User from '@/src/models/User'
import { connectDb } from '@/src/utils/mongoose'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

type typeUserAPI = {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export const POST = async () => {
	try {
		await connectDb()
		await User.init()
		const callAPI = await fetch('https://jsonplaceholder.typicode.com/users')
		const usersAPI: typeUserAPI[] = await callAPI.json()
		const savedUsers = []
		for (let i = 0; i < usersAPI.length; i++) {
			const userFound = await User.findOne({
				external_id: usersAPI[i].id.toString(),
			}).exec()
			if (userFound) continue
			const {
				id,
				name,
				username,
				email,
				address: { street, suite, city, zipcode },
			} = usersAPI[i]
			const _id = new ObjectId().toString()
			const address = `${city}, ${zipcode}, ${street}, ${suite}`
			const newUser = new User({
				external_id: id.toString(),
				name,
				username,
				email,
				address,
				_id,
			})
			const savedUser = await newUser.save()
			savedUsers.push(savedUser)
		}
		const message =
			savedUsers.length > 0 ? 'New users added' : 'No new users to add'
		return NextResponse.json({ message, savedUsers })
	} catch (e: any) {
		return NextResponse.json({ message: e.message }, { status: 400 })
	}
}
