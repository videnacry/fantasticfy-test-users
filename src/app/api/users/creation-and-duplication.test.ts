describe('PUT endpoint', () => {
	it("should create one user and return it (user with same values must'nt exist)", async () => {
		const newUser = {
			username: 'Chavezfoundation',
			email: 'info@chavezfoundation.org',
			name: 'Cesario Estrada Chávez',
			address: '29700 Woodford-Tehachapi Rd, Keene, CA 93531, USA',
		}

		const url = 'http://localhost:3000/api/users'
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}

		const response = await fetch(url, options)
		const result = await response.json()

		expect(result).toHaveProperty('message')
		expect(result).toHaveProperty('savedUser')
		expect(typeof result.message).toBe('string')

		const { username, name, email, address } = result.savedUser
		expect(username).toBe(newUser.username)
		expect(name).toBe(newUser.name)
		expect(email).toBe(newUser.email)
		expect(address).toBe(newUser.address)
	})

	it('should return just a custom message if username already exist ', async () => {
		const newUser = {
			username: 'Chavezfoundation',
			email: 'info1@chavezfoundation.org',
			name: 'Cesario Estrada Chávez1',
			address: '29700 Woodford-Tehachapi Rd, Keene, CA 93531, USA',
		}

		const url = 'http://localhost:3000/api/users'
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}

		const response = await fetch(url, options)
		const result = await response.json()

		const resultKeys = Object.keys(result)
		const keys = ['message']

		expect(resultKeys).toEqual(keys)
		expect(result.message).toBe(
			`username '${newUser.username}' already exists.`,
		)
	})

	it('should return a custom error message if the name already exists', async () => {
		const newUser = {
			username: 'Chavezfoundation2',
			email: 'info2@chavezfoundation.org',
			name: 'Cesario Estrada Chávez',
			address: '29700 Woodford-Tehachapi Rd, Keene, CA 93531, USA',
		}

		const url = 'http://localhost:3000/api/users'
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}

		const response = await fetch(url, options)
		const result = await response.json()

		const resultKeys = Object.keys(result)
		const keys = ['message']

		expect(resultKeys).toEqual(keys)
		expect(result.message).toBe(`name '${newUser.name}' already exists.`)
	})

	it('should return a custom error message if the email already exists', async () => {
		const newUser = {
			username: 'Chavezfoundation3',
			email: 'info@chavezfoundation.org',
			name: 'Cesario Estrada Chávez 3',
			address: '29700 Woodford-Tehachapi Rd, Keene, CA 93531, USA',
		}

		const url = 'http://localhost:3000/api/users'
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		}

		const response = await fetch(url, options)
		const result = await response.json()

		const resultKeys = Object.keys(result)
		const keys = ['message']

		expect(resultKeys).toEqual(keys)
		expect(result.message).toBe(`email '${newUser.email}' already exists.`)
	})
})
