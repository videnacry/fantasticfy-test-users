describe('PUT endpoint', () => {
	it('should return just a custom message if name is less than two characters ', async () => {
		const newUser = {
			name: 'a',
			username: 'Cesario Estrada Chávez',
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
			'User validation failed: name: Your name must be at least 2 characters',
		)
	})

	it('should return just a custom message if username is less than two characters ', async () => {
		const newUser = {
			username: 'a',
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
			'User validation failed: username: Your username must be at least 2 characters',
		)
	})

	it('should return just a custom message if user email is missing a local part', async () => {
		const newUser = {
			email: '@cesario.com',
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
			'User validation failed: email: Invalid email address',
		)
	})

	it('should return just a custom message if user email is missing an "@"', async () => {
		const newUser = {
			email: 'cesario.gmail.com',
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
			'User validation failed: email: Invalid email address',
		)
	})

	it('should return just a custom message if user email is missing a domain name', async () => {
		const newUser = {
			email: 'cesario@.com',
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
			'User validation failed: email: Invalid email address',
		)
	})

	it('should return just a custom message if user email is missing a TLD (top level domain)', async () => {
		const newUser = {
			email: 'cesario@gmail',
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
			'User validation failed: email: Invalid email address',
		)
	})

	it('should return just a custom message if address is less than 1 character', async () => {
		const newUser = {
			username: 'Chavezfoundation',
			email: 'info@chavezfoundation.org',
			name: 'Cesario Estrada Chávez',
			address: '',
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
