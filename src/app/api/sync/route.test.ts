describe('POST endpoint', () => {
	it('should return a message and user array', async () => {
		const url = 'http://localhost:3000/api/sync'
		const response = await fetch(url, { method: 'POST' })
		const result = await response.json()

		expect(result).toHaveProperty('message')
		expect(result).toHaveProperty('savedUsers')
		expect(typeof result.message).toBe('string')
		expect(Array.isArray(result.savedUsers)).toBe(true)
	})
})
