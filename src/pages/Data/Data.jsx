import { Button, Tabs } from 'antd'
import { IoIosAdd } from 'react-icons/io'

import useHeaderTitle from '../../hooks/useHeaderTitle'

function Data() {
	const { setText } = useHeaderTitle()

	setText('Data')

	const onChange = key => {}

	const items = [
		{
			key: '1',
			label: 'Movie',
			children: '',
		},
	]

	return (
		<>
			<div className='flex items-center justify-between w-[1000px]'>
				<Tabs defaultActiveKey='1' items={items} onChange={onChange} />
				<Button className='flex items-center gap-[5px]'>
					Add
					<IoIosAdd />
				</Button>
			</div>
		</>
	)
}
export default Data
