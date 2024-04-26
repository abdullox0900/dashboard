import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

function Layout() {
	const isRowBased = useMediaQuery('(max-width: 768px)')
	return (
		<div
			className='flex flex-row h-screen w-screen overflow-hidden'
			style={
				isRowBased
					? { flexDirection: 'column-reverse' }
					: { flexDirection: 'row' }
			}
		>
			<Sidebar />
			<div
				className='w-full bg-[#fff] m-[10px] p-[25px] relative overflow-y-auto rounded-[20px] shadow-lg max-[768px]:h-screen'
				style={isRowBased ? { margin: '0' } : { margin: '10px' }}
			>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
export default Layout
