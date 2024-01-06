import './index.css'

type typeProps = {
	children: React.ReactNode
}

const TableHead = ({ children }: typeProps) => {
	return <thead className="table-c_head">{children}</thead>
}

export default TableHead
