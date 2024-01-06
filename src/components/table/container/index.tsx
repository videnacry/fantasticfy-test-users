import { CSSProperties } from 'react'
import './index.css'

type typeProps = {
	children: React.ReactNode
	style: CSSProperties
}

const TableContainer = ({ children, style }: typeProps) => {
	return (
		<div className="table-c_container" style={style}>
			{children}
		</div>
	)
}

export default TableContainer
