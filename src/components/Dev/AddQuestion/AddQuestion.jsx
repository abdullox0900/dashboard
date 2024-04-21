import { Button, Input, Select, Form, Space } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Editor } from 'primereact/editor'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

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

	const onFinish = values => {
		console.log('Received values of form:', values)
	}

	const [link, setLink] = useState([''])
	const [text, setText] = useState('')

	console.log(text)

	function handleChange(i, event) {
		const values = [...link]
		values[i] = event.target.value
		setLink(values)
	}

	return (
		<>
			<div className='flex flex-col gap-[20px] w-[600px] min-h-[300px] p-[20px] bg-white rounded-[16px] shadow-md'>
				<Input
					placeholder='Question Name'
					size='large'
					value={qName}
					onChange={e => setQName(e.target.value)}
				/>
				<Select
					style={{
						width: '100%',
					}}
					value={qLanguage}
					placeholder='Language'
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
					defaultValue={''}
					placeholder='Level'
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
				<Form
					name='dynamic_form_nest_item'
					onFinish={onFinish}
					style={{ width: '100%' }}
					autoComplete='off'
				>
					<Form.List name='users'>
						{(fields, { add, remove }) => (
							<>
								{fields.map(({ key, name, ...restField }) => (
									<div
										className='flex items-center h-[40px] mb-[20px] gap-[10px]'
										key={key}
									>
										<Input
											placeholder='YuoTube Link'
											style={{ width: '100%', height: '40px' }}
											size='large'
										/>
										<MinusCircleOutlined onClick={() => remove(name)} />
									</div>
								))}
								<Button
									type='dashed'
									onClick={() => add()}
									size='large'
									block
									icon={<PlusOutlined />}
								>
									Add YouTube Link
								</Button>
							</>
						)}
					</Form.List>
				</Form>

				<Form
					name='dynamic_form_nest_item'
					onFinish={onFinish}
					style={{ width: '100%' }}
					autoComplete='off'
				>
					<Form.List name='users'>
						{(fields, { add, remove }) => (
							<>
								{fields.map(({ key, name, ...restField }) => (
									<div
										className='flex items-center h-[40px] mb-[20px] gap-[10px]'
										key={key}
									>
										<Input
											placeholder='YuoTube Name'
											style={{ width: '100%', height: '40px' }}
											size='large'
											onChange={e => handleChange(key, e)}
										/>
										<Input
											placeholder='YuoTube Link'
											style={{ width: '100%', height: '40px' }}
											size='large'
											onChange={e => handleChange(key, e)}
										/>
										<MinusCircleOutlined onClick={() => remove(name)} />
									</div>
								))}
								<Button
									type='dashed'
									onClick={() => add()}
									size='large'
									block
									icon={<PlusOutlined />}
								>
									Add Web Link
								</Button>
							</>
						)}
					</Form.List>
				</Form>
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
				<Editor
					value={text}
					onTextChange={e => setText(e.htmlValue)}
					style={{ height: '320px' }}
				/>
				<Button onClick={submitData} size='large'>
					Submit
				</Button>
			</div>
		</>
	)
}
export default AddQuestion
