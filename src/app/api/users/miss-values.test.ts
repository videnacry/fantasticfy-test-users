describe('PUT endpoint', () => {
	it('should return just a custom message if user is missing name property ', async () => {
		const newUser = {
			username: 'Chavezfoundation',
			email: 'info@chavezfoundation.org',
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
			'User validation failed: name: Please provide a name',
		)
	})

	it('should return just a custom message if user is missing username property ', async () => {
		const newUser = {
			name: 'Cesario Estrada Chávez',
			email: 'info@chavezfoundation.org',
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
			'User validation failed: username: Please choose a username',
		)
	})

	it('should return just a custom message if user is missing email property ', async () => {
		const newUser = {
			name: 'Cesario Estrada Chávez',
			username: 'Chavezfoundation',
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
			'User validation failed: email: Please provide your email',
		)
	})

	it('should return just a custom message if user is missing email property ', async () => {
		const newUser = {
			username: 'Chavezfoundation',
			email: 'info@chavezfoundation.org',
			name: 'Cesario Estrada Chávez',
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
			'User validation failed: address: Please provide an address',
		)
	})
})
