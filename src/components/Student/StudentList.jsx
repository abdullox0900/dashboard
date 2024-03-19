// Import packages
import { useStudentData } from '../../api/useStudent'
import { Statistic, Dropdown, Button } from 'antd'

function StudentList() {
	const { data, isLoading, isError } = useStudentData()

	//   const formatter = (value) => <CountUp end={value} separator="," />;

	const items = [
		{
			key: '1',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.antgroup.com'
				>
					1st menu item
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.aliyun.com'
				>
					2nd menu item
				</a>
			),
		},
		{
			key: '3',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.luohanacademy.com'
				>
					3rd menu item
				</a>
			),
		},
	]

	return (
		<>
			<div className='content-tabs w-[1000px] h-[700px] overflow-scroll mt-[20px] py-[20px] bg-[#fff] rounded-[16px]'>
				<h1 className='mb-[20px] pl-[20px]'>Students List</h1>

				<ul className='flex flex-col'>
					{data?.data?.map((item, index) => {
						return (
							<li
								className='p-[20px] flex items-center justify-between border-t-[1px] border-[#F5F5F5]'
								key={index}
							>
								<img
									className='w-[36px] h-[36px] object-cover rounded-[8px]'
									src={item?.img}
									alt=''
									width={'50px'}
									height={'50px'}
								/>
								<span className='w-[300px] text-[16px] font-medium'>
									{item.name + ' ' + item.last_name}
								</span>
								<span className='w-[200px] text-[14px] text-gray-500'>
									{item.number}
								</span>
								<span className='w-[200px] text-[16px] uppercase text-gray-500'>
									{item.job}
								</span>
								<span className='w-[200px] text-[16px] uppercase text-gray-500'>
									{550000}
									{/* <Statistic
                    title="Account Balance (CNY)"
                    value={112893}
                    precision={2}
                    formatter={formatter}
                  /> */}
								</span>
								<Dropdown
									menu={{
										items,
									}}
									placement='bottom'
									arrow
								>
									<Button className='flex justify-center items-center w-[40px] h-[40px] rounded-[50%]'>
										<ion-icon name='create-outline'></ion-icon>
									</Button>
								</Dropdown>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
export default StudentList
