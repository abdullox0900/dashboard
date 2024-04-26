import { NavLink } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/navigation'

function Sidebar() {
	return (
		<>
			<nav className='w-[250px] h-lvh p-[30px] max-[768px]:h-[80px] max-[768px]:flex max-[768px]:p-[10px] max-[768px]:w-full'>
				<div className='flex items-center justify-center text-[22px] max-[768px]:hidden w-[200px] h-[60px] rounded-[10px] bg-[#fff] mb-[20px] shadow-md'>
					👾 MyPanel
				</div>
				<ul className='flex flex-col gap-[15px] max-[768px]:flex-row max-[768px]:overflow-x-scroll '>
					{DASHBOARD_SIDEBAR_LINKS.map((content, index) => (
						<SidebarLink key={index} item={content} />
					))}
				</ul>
			</nav>
		</>
	)
}

function SidebarLink({ item }) {
	return (
		<NavLink to={item.path}>
			<li className='flex gap-[5px] items-center py-[8px] px-[10px] text-[#67748e] font-medium hover:bg-[#fff] hover:text-[#252f40] rounded-[10px] active:bg-slate-300 duration-100 ease-in cursor-pointer'>
				<div className='flex justify-center items-center w-[30px] h-[30px] rounded-[8px] bg-[#fff] shadow-md'>
					<ion-icon
						style={{ fontSize: '20px', color: '#3A416F' }}
						name={item.icon}
					></ion-icon>
				</div>
				{item.name}
			</li>
		</NavLink>
	)
}
export default Sidebar
