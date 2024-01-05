import User from '@/src/models/User'
import { connectDb } from '@/src/utils/mongoose'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
	try {
		await connectDb()
		const users = await User.find().select('-__v -external_id')
		const message =
			users.length > 0 ? 'Users retrieved successfully' : 'No users found'
		return NextResponse.json({ message, users })
	} catch (e: any) {
		return NextResponse.json({ message: e.message }, { status: 400 })
	}
}

export const PUT = async (request: NextRequest) => {
	try {
		await connectDb()
		await User.init()
		const data = await request.json()
		const newUser = new User(data)
		const savedUser = await newUser.save()
		const message = 'User added successfully'
		return NextResponse.json({ message, savedUser })
	} catch (e: any) {
		return NextResponse.json({ message: e.message }, { status: 400 })
	}
}
