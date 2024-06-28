import { Input, Tag } from 'antd'
import { collection, getDocs, query } from 'firebase/firestore'
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
	const [data, setData] = useState([])

	const colRef = collection(db, 'javascript')

	const q = query()

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'javascript'))
			const fetchedData = []
			querySnapshot.forEach(doc => {
				fetchedData.push({ ...doc.data(), id: doc.data.id })
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
										<Tag color='green'>Beginner</Tag>
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
