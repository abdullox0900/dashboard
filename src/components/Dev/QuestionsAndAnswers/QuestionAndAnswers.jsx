import { Input, Tag, theme } from 'antd'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { db } from '../../../config/firebase'

function QuestionAndAnswers() {
	const { token } = theme.useToken()
	const [data, setData] = useState([])

	const panelStyle = {
		marginBottom: 24,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: 'none',
	}

	const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `

	const getItems = panelStyle => [
		{
			key: '1',
			label: 'This is panel header 1',
			children: <p>{text}</p>,
			style: panelStyle,
		},
		{
			key: '2',
			label: 'This is panel header 2',
			children: <p>{text}</p>,
			style: panelStyle,
		},
		{
			key: '3',
			label: 'This is panel header 3',
			children: <p>{text}</p>,
			style: panelStyle,
		},
	]

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'javascript'))
			const fetchedData = []
			querySnapshot.forEach(doc => {
				fetchedData.push(doc.data())
			})
			setData(fetchedData)
		}
		fetchData()
	}, [])

	console.log(data)

	return (
		<div className='p-6 w-[900px] bg-white rounded-md border-[#d9d9d9] border-[1px]'>
			<div className='flex justify-between items-center mb-8'>
				<h3 className='text-[22px]'>Questions and Answers JavaScript</h3>
				<Input className='w-[300px]' placeholder='Basic usage' size='large' />
			</div>

			<Accordion
				allowZeroExpanded
				style={{ borderRadius: '10px', overflow: 'hidden' }}
				className='bg-white '
			>
				{data.map(item => {
					return (
						<AccordionItem className='bg-slate-100' key={item.id}>
							<AccordionItemHeading>
								<AccordionItemButton
									style={{ borderBottom: '1px solid #e5e7eb' }}
									className='p-[13px] bg-white'
								>
									{item.title}{' '}
									{item.level == 'beginner' ? (
										<Tag color='green'>oson</Tag>
									) : item.level == 'medium' ? (
										<Tag color='orange'>Medium</Tag>
									) : item.level == 'advance' ? (
										<Tag color='red'>Advance</Tag>
									) : (
										''
									)}
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>{item.description}</p>
							</AccordionItemPanel>
						</AccordionItem>
					)
				})}
			</Accordion>
		</div>
	)
}
export default QuestionAndAnswers
