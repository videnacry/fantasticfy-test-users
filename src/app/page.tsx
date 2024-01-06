import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table,
} from '../components/table'

type userType = {
	_id: string
	name: string
	email: string
	username: string
}
const userExample = {
	_id: '',
	name: '',
	email: '',
	username: '',
}

const getTableHead = (titles: string[]) => (
	<TableHead>
		<TableRow>
			{titles.map((title) => (
				<TableCell component="th" key={'col ' + title}>
					{title}
				</TableCell>
			))}
		</TableRow>
	</TableHead>
)

const getTableBody = (users: userType[]) => (
	<TableBody>
		{users.map(({ _id, name, email, username }) => (
			<TableRow key={'row ' + _id}>
				<TableCell component="td">{_id}</TableCell>
				<TableCell component="td">{name}</TableCell>
				<TableCell component="td">{email}</TableCell>
				<TableCell component="td">{username}</TableCell>
			</TableRow>
		))}
	</TableBody>
)

export default async function Home() {
	const response = await fetch('http://localhost:3000/api/users')
	const result = await response.json()
	const titles = ['Nº', 'Nombre', 'Correo', 'Nombre de usuario']
	const users: userType[] = result?.users || [userExample]

	return (
		<main style={{maxWidth: '1200px', margin:'auto'}}>
			<TableContainer style={{minWidth: '1000px'}}>
				<Table>
					{getTableHead(titles)}
					{getTableBody(users)}
				</Table>
			</TableContainer>
		</main>
	)
}
