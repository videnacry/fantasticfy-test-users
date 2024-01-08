import {
	FormEvent,
	useState,
	CSSProperties,
	useEffect,
	useRef,
	MutableRefObject,
} from 'react'

import './index.css'

type Props = {
	label: string
	value: string
	onInput: (e: FormEvent<HTMLInputElement>) => void
	onFocus?: () => void
	onBlur?: () => void
	style?: CSSProperties
}
const TextField = ({ label, value, onInput, onFocus=()=>{}, onBlur=()=>{}, style }: Props) => {
	const [hasFocus, setHasFocus] = useState(false)

	const input: MutableRefObject<HTMLInputElement | null> = useRef(null)
	const id = 'text-field-id-' + label
	useEffect(() => {
		if (document.activeElement == input.current) setHasFocus(true)
	}, [])

	return (
		<div
			className={`text-field-c ${hasFocus && 'focus'} ${
				value.length > 0 && 'setted'
			}`}
			style={style}
		>
			<label className="text-field-c_label" htmlFor={id}>
				{label}
			</label>
			<div className="text-field-c_input-container">
				<input
					id={id}
					className="text-field-c_input"
					value={value}
					onInput={onInput}
					onFocus={() => {
						setHasFocus(true)
						onFocus()
					}}
					onBlur={() => {
						setHasFocus(false)
						onBlur()
					}}
					ref={(ref) => (input.current = ref)}
				/>
				<fieldset className="text-field-c_fieldset" aria-hidden="true">
					<legend className="text-field-c_legend">
						<span className="text-field-c_legend_span">{label}</span>
					</legend>
				</fieldset>
			</div>
		</div>
	)
}

export default TextField
