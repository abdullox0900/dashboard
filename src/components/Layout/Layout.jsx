import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

function Layout() {
	return (
		<div className='flex flex-row h-screen w-screen overflow-hidden'>
			<Sidebar />
			<div className='w-full bg-[#fff] m-[10px] p-[25px] relative overflow-y-auto rounded-[20px] shadow-lg'>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
export default Layout
