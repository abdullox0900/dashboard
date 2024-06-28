import { Button, Input, Select, message } from 'antd'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import storage, { db } from '../../../config/firebase'

function AddQuestion() {
	// Loading
	const [isLoading, setIsLoading] = useState(false)

	// Inputs States
	const [qName, setQName] = useState('')
	const [qLanguage, setQLanguage] = useState()
	const [qType, setQType] = useState()
	const [qAnswer, setQAnswer] = useState('')
	const [possibly, setPossibly] = useState('')

	const [loading, setLoading] = useState(false)

	const [fileUrl, setFileUrl] = useState('')

	// Dynamic inputs state - 1
	const [inputsWeb, setInputsWeb] = useState([{ name: '', link: '' }])

	// Dynamic inputs state - 2
	const [inputsYuoTube, setInputsYuoTube] = useState([
		{ name: '', link: '', author_name: '' },
	])

	// Ant Message
	const [messageApi, contextHolder] = message.useMessage()

	const key = 'updatable'

	const error = () => {
		messageApi.open({
			type: 'error',
			content: 'This is an error message',
		})
	}
	const warning = () => {
		messageApi.open({
			type: 'warning',
			content: 'This is a warning message',
		})
	}

	// TextArea
	const { TextArea } = Input

	// Function cleat states
	const clearData = () => {
		setQName('')
		setQAnswer('')
		setPossibly('')
		setQType()
		setQLanguage()
		setFileUrl()
		setInputsWeb([{ name: '', link: '' }])
		setInputsYuoTube([{ name: '', link: '', author_name: '' }])
	}

	//  ============== Dynamic Input-1 ===============  //

	// Functions Handle Select
	const handleChange1 = value => {
		setQLanguage(value)
	}
	const handleChange2 = value => {
		setQType(value)
	}

	// Yangi input qo'shish
	const handleAddInput = () => {
		setInputsWeb([...inputsWeb, { name: '', link: '' }])
	}

	// Input qiymatlarini o'zgartirish
	const handleInputChange = (index, name, link) => {
		const newInputs = [...inputsWeb]
		newInputs[index] = { name, link }
		setInputsWeb(newInputs)
	}

	// Inputni o'chirish
	const handleRemoveInput = index => {
		const newInputs = [...inputsWeb]
		newInputs.splice(index, 1)
		setInputsWeb(newInputs)
	}

	// =============| Upload img firebase |=============
	const [file, setFile] = useState(null)
	const [progress, setProgress] = useState(0)
	const [url, setUrl] = useState('')

	const handleFileChange = e => {
		setFile(e.target.files[0])
	}

	console.log(url)

	const handleUpload = () => {
		if (!file) return

		const storageRef = ref(storage, `new-file/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			snapshot => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				setProgress(prog)
			},
			error => {
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					setUrl(downloadURL)
				})
			}
		)
	}

	//  ============== Dynamic Input-2 ===============  //

	// Yangi input qo'shish
	const handleAddInput2 = () => {
		setInputsYuoTube([
			...inputsYuoTube,
			{ name: '', link: '', author_name: '' },
		])
	}

	// Input qiymatlarini o'zgartirish
	const handleInputChange2 = (index, name, link, author_name) => {
		const newInputs = [...inputsYuoTube]
		newInputs[index] = { name, link, author_name }
		setInputsYuoTube(newInputs)
	}

	// Inputni o'chirish
	const handleRemoveInput2 = index => {
		const newInputs = [...inputsYuoTube]
		newInputs.splice(index, 1)
		setInputsYuoTube(newInputs)
	}

	// All state data
	const data = {
		title: qName,
		description: qAnswer,
		level: qType,
		lang: qLanguage,
		web: inputsWeb,
		youtube: inputsYuoTube,
		possibly,
		fileUrl,
		file: url,
		createdAt: serverTimestamp(),
	}

	// Post data for Firebase
	const sendDataToFirestore = async () => {
		try {
			setIsLoading(true)
			messageApi.open({
				key,
				type: 'loading',
				content: 'Loading...',
			})
			const res = await addDoc(collection(db, qLanguage), data)
			console.log("Ma'lumot yuborildi:", res)
			clearData()
			setIsLoading(false)
			messageApi.open({
				key,
				type: 'success',
				content: 'Malumot yozildi',
				duration: 2,
			})
		} catch (error) {
			error()
			console.error("Ma'lumotni yuborishda xato:", error)
		}
	}

	return (
		<>
			{contextHolder}
			<div className='flex flex-col gap-[20px] w-[600px] min-h-[300px] p-[20px] bg-white rounded-md border-[#d9d9d9] border-[1px] max-[1050px]:w-full'>
				<Input
					placeholder='Question Name'
					size='large'
					value={qName}
					onChange={e => setQName(e.target.value)}
				/>
				<Input
					placeholder='Possibly %'
					size='large'
					value={possibly}
					onChange={e => setPossibly(e.target.value)}
				/>
				<Select
					style={{
						width: '100%',
					}}
					placeholder='Language'
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
					style={{
						width: '100%',
					}}
					value={qType}
					size='large'
					onChange={handleChange2}
					placeholder='Level'
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

				{/* Dynamic Inputs */}
				<div className='flex flex-col gap-[20px]'>
					{inputsWeb.map((input, index) => (
						<div key={index} className='flex items-center justify-between'>
							<div className='flex flex-col gap-[20px] w-[90%]'>
								<Input
									size='large'
									placeholder='Name'
									value={input.name}
									onChange={e =>
										handleInputChange(index, e.target.value, input.link)
									}
								/>
								<Input
									size='large'
									placeholder='Link'
									value={input.link}
									onChange={e =>
										handleInputChange(index, input.name, e.target.value)
									}
								/>
							</div>
							{/* O'chirish tugmasi */}
							<button
								className='flex items-center justify-center w-[30px] h-[30px]'
								onClick={() => handleRemoveInput(index)}
								size='large'
							>
								<MdDeleteOutline className='text-red-500 text-[18px]' />
							</button>
						</div>
					))}

					{/* Yangi input qo'shish tugmasi */}
					<Button
						className='flex items-center justify-center'
						onClick={handleAddInput}
						size='large'
						type='dashed'
					>
						<IoIosAddCircleOutline className='text-[18px] text-[#d9d9d9]' />
					</Button>
				</div>

				<div className='flex flex-col gap-[20px]'>
					{inputsYuoTube.map((input, index) => (
						<div key={index} className='flex items-center justify-between'>
							<div className='flex flex-col gap-[20px] w-[90%]'>
								<Input
									size='large'
									placeholder='Name'
									value={input.name}
									onChange={e =>
										handleInputChange2(
											index,
											e.target.value,
											input.link,
											input.author_name
										)
									}
								/>
								<Input
									size='large'
									placeholder='Link'
									value={input.link}
									onChange={e =>
										handleInputChange2(
											index,
											input.name,
											e.target.value,
											input.author_name
										)
									}
								/>
								<Input
									size='large'
									placeholder='Author name'
									value={input.author_name}
									onChange={e =>
										handleInputChange2(
											index,
											input.name,
											input.link,
											e.target.value
										)
									}
								/>
							</div>
							{/* O'chirish tugmasi */}
							<button
								className='flex items-center justify-center w-[30px] h-[30px]'
								onClick={() => handleRemoveInput2(index)}
								size='large'
							>
								<MdDeleteOutline className='text-red-500 text-[18px]' />
							</button>
						</div>
					))}

					{/* Yangi input qo'shish tugmasi */}
					<Button
						className='flex items-center justify-center'
						onClick={handleAddInput2}
						size='large'
						type='dashed'
					>
						<IoIosAddCircleOutline className='text-[18px] text-[#d9d9d9]' />
					</Button>
				</div>

				{/* TextArea */}
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

				<div>
					<input type='file' onChange={handleFileChange} />
					<button onClick={handleUpload}>Upload</button>
					<hr />
					<h3>Yuklanish jarayoni: {progress}%</h3>
					{url && (
						<div>
							<h4>Yuklangan fayl URL manzili:</h4>
							<a href={url} target='_blank' rel='noopener noreferrer'>
								{url}
							</a>
						</div>
					)}
				</div>

				{/* Submit Button */}
				<Button onClick={sendDataToFirestore} size='large'>
					Submit
				</Button>
			</div>
		</>
	)
}
export default AddQuestion
