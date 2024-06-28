// import Weather from "../../components/DashboardCom/Weather/Weather";
import axios from 'axios'
import { useState } from 'react'
import { FaToolbox } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { LuListTodo } from 'react-icons/lu'
import { MdAttachMoney } from 'react-icons/md'
import TodoList from '../../components/TodoList/TodoList'
import useHeaderTitle from '../../hooks/useHeaderTitle'
import useLength from '../../hooks/useLength'

function Dashboard() {
	const { setText } = useHeaderTitle()
	const { length } = useLength()
	const [toggle, setToggle] = useState(false)

	let todosLength = JSON.parse(localStorage?.getItem('todos'))?.length

	// let data = {
	// 	url: 'https://www.instagram.com/reel/C6EJBDIIOmo/?igsh=ZmxidDJnczUwbmdw',
	// }

	// function postData() {
	// 	axios.post('http://192.168.0.227:8000/api/instagram/', data).then(res => {
	// 		console.log(res)
	// 	})
	// }

	const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	}

	function getData() {
		fetch(
			'http://192.168.0.227:8000/api/instagram1/?url=https://www.instagram.com/reel/C6EJBDIIOmo/?igsh=ZmxidDJnczUwbmdw',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.error(error))
	}

	// function getData2() {
	// 	var request = new Request(
	// 		'https://instagram.ftas1-1.fna.fbcdn.net/v/t66.30100-16/10000000_319210237614128_8585364341530102690_n.mp4?_nc_ht=instagram.ftas1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=VUpSooEKwBkQ7kNvgG-F2Hi&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYAP3d3m8sR7RhPk3nlkpznx3_0hIhSAIo2fWSMEdE3G4A&oe=6647AA5E&_nc_sid=cf751b'
	// 	)

	// 	fetch(request).then(function (res) {
	// 		console.log(res) // This should be the final URL
	// 	})
	// }

	setText('Dashboard')

	return (
		<>
			<section>
				<ul className='grid gap-5 grid-cols-3 grid-rows-1 mb-[50px] max-[768px]:overflow-scroll max-[768px]:grid-cols-2 max-[768px]:grid-rows-2'>
					<li className='flex justify-between relative overflow-hidden p-[20px] max-[768px]:p-[12px] w-[100%] h-[120px] max-[768px]:h-[90px] bg-[#0093E9] bg-[linear-gradient(160deg,#0093E9_0%,#80D0C7_100%)] rounded-[10px]'>
						<div className='absolute left-0 bottom-[-10px] origin-center rotate-45 text-[65px] text-slate-100 max-[768px]:text-[40px]'>
							<FaToolbox />
						</div>
						<div className='text-slate-100 text-[24px] font-bold max-[768px]:text-[14px]'>
							Projects
						</div>
						<div className='text-[50px] font-bold text-slate-100 max-[768px]:text-[35px]'>
							{length}
						</div>
					</li>
					<li className='flex justify-between relative overflow-hidden p-[20px] w-[100%] h-[120px] max-[768px]:h-[90px] max-[768px]:p-[12px] bg-[#8BC6EC] rounded-[10px] bg-[linear-gradient(135deg,#8BC6EC_0%,#9599E2_100%)]'>
						<div className='absolute left-0 bottom-[-10px] origin-center rotate-45 text-[65px] text-slate-100 max-[768px]:text-[40px]'>
							<LuListTodo />
						</div>
						<div className='text-slate-100 text-[24px] font-bold max-[768px]:text-[14px]'>
							Todo
						</div>
						<div className='text-[50px] font-bold text-slate-100 max-[768px]:text-[35px]'>
							{todosLength}
						</div>
					</li>
					<li className='flex justify-between relative overflow-hidden p-[20px] w-[100%] h-[120px] max-[768px]:h-[90px] max-[768px]:p-[12px] rounded-[10px]  bg-[#FAD961] bg-[linear-gradient(90deg,#FAD961_0%,#F76B1C_100%)]'>
						<div className='absolute left-0 bottom-[-10px] origin-center rotate-45 text-[65px] text-slate-100 max-[768px]:text-[40px]'>
							<MdAttachMoney />
						</div>
						<div className='text-slate-100 text-[24px] font-bold max-[768px]:text-[14px]'>
							Balance
						</div>
						<div className='text-[14px] font-bold text-slate-100 max-[768px]:text-[12px]'>
							10 000 000s
						</div>
					</li>
				</ul>
				<section className='grid grid-cols-3 grid-rows-1 max-[768px]:grid-cols-1'>
					<div className='relative'>
						<div className='absolute top-[-12px] border border-slate-300 rounded-full left-[20px] text-[14px] px-[5px] text-slate-400 bg-white'>
							Todo List
						</div>
						<button
							className={`${
								toggle ? 'rotate-90' : ''
							} flex items-center absolute right-[20px] top-[-10px] justify-center w-[25px] h-[25px] rounded-full bg-blue-500 transition-all duration-[0.6s]`}
							onClick={() => setToggle(!toggle)}
						>
							<IoIosArrowDown className='text-white' />
						</button>
						<div
							style={toggle ? { height: '40px' } : { height: '560px' }}
							className={`${
								toggle ? '' : 'h-[40px]'
							} border border-slate-300 rounded-[10px] p-[20px] overflow-scroll h-[560px] transition-all duration-[0.6s] `}
						>
							<TodoList />
						</div>
					</div>
				</section>
				<input className='border border-gray-400' type='text' />
				<button onClick={getData}>Submit</button>
			</section>
		</>
	)
}
export default Dashboard
