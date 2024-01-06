import './index.css'

type typeProps = {
	children: React.ReactNode
}

const TableRow = ({ children }: typeProps) => {
	return <tr className="table-c_row">{children}</tr>
}

export default TableRow
