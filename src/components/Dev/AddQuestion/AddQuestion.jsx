import { Button, Input, Select } from 'antd'
import axios from 'axios'
import { useState } from 'react'

function AddQuestion() {
	const API_URL = 'https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list'

	const [qName, setQName] = useState('')
	const [qLanguage, setQLanguage] = useState('')
	const [qType, setQType] = useState('')
	const [qAnswer, setQAnswer] = useState('')

	const clearData = () => {
		setQName('')
		setQAnswer('')
		setQType('')
		setQLanguage('')
	}

	const submitData = () => {
		const data = {
			q_name: qName,
			q_answer: qAnswer,
			q_type: qType,
			q_language: qLanguage,
		}

		if (qName !== '' && qType !== '' && qLanguage !== '' && qAnswer !== '') {
			axios.post(API_URL, data).then(res => {
				clearData()
			})
		} else {
			console.log('Malumot yozing')
		}
	}

	const { TextArea } = Input
	const handleChange1 = value => {
		setQLanguage(value)
	}
	const handleChange2 = value => {
		setQType(value)
	}

	return (
		<>
			<div className='flex flex-col gap-[20px] w-[500px] min-h-[300px] p-[20px] bg-white rounded-[16px] shadow-md'>
				<Input
					placeholder='Question Name'
					size='large'
					value={qName}
					onChange={e => setQName(e.target.value)}
				/>
				<Select
					defaultValue='JavaScript'
					style={{
						width: '100%',
					}}
					value={qLanguage}
					size='large'
					onChange={handleChange1}
					options={[
						{
							value: 'javascript',
							label: 'JavaScript',
						},
						{
							value: 'typescript',
							label: 'TypeScript',
						},
					]}
				/>
				<Select
					defaultValue='Medium'
					style={{
						width: '100%',
					}}
					value={qType}
					size='large'
					onChange={handleChange2}
					options={[
						{
							value: 'beginner',
							label: 'Beginner',
						},
						{
							value: 'medium',
							label: 'Medium',
						},
						{
							value: 'advance',
							label: 'Advance',
						},
					]}
				/>
				<TextArea
					showCount
					maxLength={700}
					placeholder='Answer'
					value={qAnswer}
					onChange={e => setQAnswer(e.target.value)}
					size='large'
					style={{
						height: 170,
						resize: 'none',
					}}
				/>
				<Button onClick={submitData} size='large'>
					Submit
				</Button>
			</div>
		</>
	)
}
export default AddQuestion
