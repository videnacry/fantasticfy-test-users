describe('GET endpoint', () => {
	it('should return a message and users array', async () => {
		const url = 'http://localhost:3000/api/users'
		const response = await fetch(url)
		const result = await response.json()

		expect(result).toHaveProperty('message')
		expect(result).toHaveProperty('users')
		expect(typeof result.message).toBe('string')
		expect(Array.isArray(result.users)).toBe(true)
	})

	it('first user returned should have required keys (at least one user must exist in db for this test)', async () => {
		const url = 'http://localhost:3000/api/users'
		const response = await fetch(url)
		const result = await response.json()

		const user = result.users[0]
		const userRequiredKeys = Object.keys(user)
		const exampleRequiredKeys = ['_id', 'name', 'username', 'email', 'address']

		expect(userRequiredKeys).toEqual(exampleRequiredKeys)
	})
})
