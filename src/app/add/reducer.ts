export type StateField = 'name' | 'username' | 'email' | 'address'
export const stateFields:StateField[] = ['name', 'username', 'email', 'address']
export const initialState = {
	name: {
        name: 'name',
		label: 'Nombre',
		error: '',
		value: '',
	},
	username: {
        name: 'username',
		label: 'Nombre de usuario',
		error: '',
		value: '',
	},
	email: {
        name: 'email',
		label: 'Correo electrónico',
		error: '',
		value: '',
	},
	address: {
        name: 'address',
		label: 'Dirección',
		error: '',
		value: '',
	},
}

type Action = {
	type:
		| 'set/name/error'
		| 'set/username/error'
		| 'set/email/error'
		| 'set/address/error'
		| 'check/name/value'
		| 'check/username/value'
		| 'check/email/value'
		| 'check/address/value'
		| 'check/all/value'
		| 'set/username/value'
		| 'set/name/value'
		| 'set/email/value'
		| 'set/address/value'
		| 'set/all/value'
        | 'set/all/error'
	payload: string
}

const actions = {
	['set/name/error']: (state = initialState, payload: string) => {
		return {
			...state,
			name: {
				...state.name,
				error: payload,
			},
		}
	},
	['set/username/error']: (state = initialState, payload: string) => {
		return {
			...state,
			username: {
				...state.username,
				error: payload,
			},
		}
	},
	['set/email/error']: (state = initialState, payload: string) => {
		return {
			...state,
			email: {
				...state.email,
				error: payload,
			},
		}
	},
	['set/address/error']: (state = initialState, payload: string) => {
		return {
			...state,
			address: {
				...state.address,
				error: payload,
			},
		}
	},
    ['set/all/error']: (state = initialState, payload: string) => {
        return {
          ...state,
          name: {
            ...state.name,
            error: payload,
          },
          username: {
            ...state.username,
            error: payload,
          },
          email: {
            ...state.email,
            error: payload,
          },
          address: {
            ...state.address,
            error: payload,
          },
        };
      },
	['check/name/value']: (state = initialState) => {
		const name = state.name.value.trim()
		const minLengthError =
			name.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : ''

		return {
			...state,
			name: {
				...state.name,
				error: minLengthError,
			},
		}
	},
	['check/username/value']: (state = initialState) => {
		const username = state.username.value.trim()
		const minLengthError =
			username.length < 2
				? 'El nombre de usuario debe tener al menos 2 caracteres'
				: ''

		return {
			...state,
			username: {
				...state.username,
				error: minLengthError,
			},
		}
	},
	['check/email/value']: (state = initialState) => {
		const basicValidation =
			state.email.value.trim() === ''
				? 'El correo electrónico es obligatorio'
				: ''

		if (basicValidation) {
			return {
				...state,
				email: {
					...state.email,
					error: basicValidation,
				},
			}
		}

		const emailFormatValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
			state.email.value,
		)
			? ''
			: 'Invalid email address'

		return {
			...state,
			email: {
				...state.email,
				error: emailFormatValidation,
			},
		}
	},
	['check/address/value']: (state = initialState) => {
		const address = state.address.value.trim()
		const notEmptyError = address === '' ? 'La dirección es obligatoria' : ''

		return {
			...state,
			address: {
				...state.address,
				error: notEmptyError,
			},
		}
	},
	['check/all/value']: (state = initialState) => {
		const nameError =
			state.name.value.trim().length < 2
				? 'El nombre debe tener al menos 2 caracteres'
				: ''
		const usernameError =
			state.username.value.trim().length < 2
				? 'El nombre de usuario debe tener al menos 2 caracteres'
				: ''
		const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.value)
			? ''
			: 'Correo electrónico inválido'
		const addressError =
			state.address.value.trim() === '' ? 'La dirección es obligatoria' : ''

		return {
			...state,
			name: {
				...state.name,
				error: nameError,
			},
			username: {
				...state.username,
				error: usernameError,
			},
			email: {
				...state.email,
				error: emailError,
			},
			address: {
				...state.address,
				error: addressError,
			},
		}
	},
	['set/username/value']: (state = initialState, payload: string) => {
		return {
			...state,
			username: {
				...state.username,
				value: payload,
			},
		}
	},
	['set/name/value']: (state = initialState, payload: string) => {
		return {
			...state,
			name: {
				...state.name,
				value: payload,
			},
		}
	},
	['set/email/value']: (state = initialState, payload: string) => {
		return {
			...state,
			email: {
				...state.email,
				value: payload,
			},
		}
	},
	['set/address/value']: (state = initialState, payload: string) => {
		return {
			...state,
			address: {
				...state.address,
				value: payload,
			},
		}
	},
	['set/all/value']: (state = initialState, payload: string) => {
		return {
			...state,
			name: {
				...state.name,
				value: payload,
			},
			username: {
				...state.username,
				value: payload,
			},
			email: {
				...state.email,
				value: payload,
			},
			address: {
				...state.address,
				value: payload,
			},
		}
	},
}

export const reducer = (state = initialState, { type, payload }: Action) => {
	return actions[type](state, payload)
}
