import { Tabs } from 'antd'
import useHeaderTitle from '../../hooks/useHeaderTitle'

import AddProject from '../../components/web_blocks/add_project'
import AddBlog from '../../components/web_blocks/add_blog'

function Website() {
	const { setText } = useHeaderTitle()

	setText('Website')

	const onChange = key => {}

	const items = [
		{
			key: '1',
			label: 'Projects',
			children: <AddProject />,
		},
		{
			key: '2',
			label: 'Blog',
			children: <AddBlog />,
		},
	]

	return (
		<>
			<Tabs defaultActiveKey='1' items={items} onChange={onChange} />
		</>
	)
}
export default Website
