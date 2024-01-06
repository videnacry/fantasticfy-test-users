import { useMemo } from 'react'
import './index.css'

type typeProps = {
	children: React.ReactNode
	component: 'th' | 'td'
}

const TableCell = ({ children, component }: typeProps) => {
	const Component = useMemo(() => {
		if (component == 'td') {
			return <td className="table-c_cell">{children}</td>
		}
		return <th className="table-c_cell">{children}</th>
	}, [component, children])

	return Component
}

export default TableCell
