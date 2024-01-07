import {
	FormEvent,
	useState,
	CSSProperties,
	useMemo,
	useEffect,
	useRef,
	MutableRefObject,
} from 'react'

import './index.css'

type Props = {
	label: string
	value: string
	onInput: (e: FormEvent<HTMLInputElement>) => void
	style?: CSSProperties
}
const TextField = ({ label, value, onInput, style }: Props) => {
	const [hasFocus, setHasFocus] = useState(false)
	const id = useMemo(() => {
		const num = Math.floor(Math.random() * 10)
		return num + label
	}, [label])
	const input: MutableRefObject<HTMLInputElement | null> = useRef(null)

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
					}}
					onBlur={() => {
						setHasFocus(false)
					}}
					ref={(ref) => (input.current = ref)}
				/>
				<fieldset className="text-field-c_fieldset">
					<legend className="text-field-c_legend">
						<span className="text-field-c_legend_span">{label}</span>
					</legend>
				</fieldset>
			</div>
		</div>
	)
}

export default TextField
