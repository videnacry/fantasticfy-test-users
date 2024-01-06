import './index.css'

type typeProps = {
	children: React.ReactNode
}

const TableBody = ({ children }: typeProps) => {
	return <tbody className="table-c_body">{children}</tbody>
}

export default TableBody
