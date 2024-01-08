import Link from 'next/link'
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table,
} from '../components/table'
import Typography from '../components/typography'

type UserType = {
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

const getTableBody = (users: UserType[]) => (
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
	const response = await fetch(process.env.API_USERS??'', {cache: 'no-store'})
	const result = await response.json()
	const titles = ['Nº', 'Nombre', 'Correo', 'Nombre de usuario']
	const users: UserType[] = result?.users || [userExample]

	return (
		<main style={{maxWidth: '1200px', margin:'auto'}}>
			<header style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'16px 0 24px 0'}}>
				<div>
					<Typography component='h1' variant='h3'>Fantasticfy</Typography>
					<Typography component='p' variant='subtitle1'>Prueba técnica</Typography>
				</div>
				<Link href={'/add'}>Añadir usuario</Link>
			</header>
			<TableContainer style={{minWidth: '1000px'}}>
				<Table>
					{getTableHead(titles)}
					{getTableBody(users)}
				</Table>
			</TableContainer>
		</main>
	)
}