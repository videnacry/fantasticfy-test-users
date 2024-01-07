import { CSSProperties, ReactNode } from 'react'
import './index.css'

type Props = {
	children: ReactNode
	onClick: () => void
	style?: CSSProperties
}

const Button = ({ children, ...props }: Props) => (
	<button className="button-c" {...props}>
		{children}
	</button>
)

export default Button
