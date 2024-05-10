import { Tabs } from 'antd'

import useHeaderTitle from '../../hooks/useHeaderTitle'
import { useEffect } from 'react'
import Wrapper from '../../components/Dev/Wrapper/Wrapper'

function Dev() {
	const { setText } = useHeaderTitle()

	useEffect(() => {
		setText('Dev')
	}, [])

	const onChange = key => {}

	const items = [
		{
			key: '1',
			label: 'Add Questions',
			children: <Wrapper />,
		},
	]

	return (
		<>
			<Tabs defaultActiveKey='1' items={items} onChange={onChange} />
		</>
	)
}
export default Dev
