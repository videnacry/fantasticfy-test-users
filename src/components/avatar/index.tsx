import { ReactNode } from 'react'
import './index.css'

type typeProps = {
	children: ReactNode
}

const Avatar = ({ children }: typeProps) => {
	return <div className="avatar-c">{children}</div>
}

export default Avatar
