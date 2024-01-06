import './index.css'

type typeProps = {
	children: React.ReactNode
}

const Table = ({ children }: typeProps) => {
	return <table className="table-c_table">{children}</table>
}

export default Table
