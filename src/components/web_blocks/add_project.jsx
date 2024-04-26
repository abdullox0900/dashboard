// Import React Hooks
import { useEffect, useState } from 'react'

// Import Packages
import { Button, Image, Input, List, Spin, message } from 'antd'
import axios from 'axios'

// Import Icon
import { CiEdit, CiImageOn } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

// Import Component
import { useProjectData } from '../../api/useProject'

// Firebase
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../config/firebase'
import useLength from '../../hooks/useLength'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function AddProject() {
	// API
	const URL_API =
		'https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/students'

	// Input states
	const [proName, setProName] = useState('')
	const [proImg, setProImg] = useState(null)
	const [proLinkOne, setProLinkOne] = useState('')
	const [proLinkTwo, setProLinkTwo] = useState('')
	const [proType, setProType] = useState('')
	const [proDescription, setProDescription] = useState('')

	const { setLength } = useLength()

	const [projectId, setProjectId] = useState()

	// Modifier Button state
	const [buttonModifier, setButtonModifier] = useState(false)

	// Section loading state
	const [loading, setLoading] = useState(false)

	// Ant textArea component
	const { TextArea } = Input

	// Message
	const [messageApi, contextHolder] = message.useMessage()

	// Fetching projects
	const { data, refetch } = useProjectData()

	const isRowBased = useMediaQuery('(max-width: 1050px)')

	// Length context
	useEffect(() => {
		setLength(10)
	}, [])

	// =============| messages |=============
	const success = text => {
		messageApi.open({
			type: 'success',
			content: text,
		})
	}

	const error = text => {
		messageApi.open({
			type: 'error',
			content: text,
		})
	}

	const warning = text => {
		messageApi.open({
			type: 'warning',
			content: text,
		})
	}

	// =============| clear input |=============
	const clearInput = () => {
		setProName('')
		setProImg('')
		setProLinkOne('')
		setProLinkTwo('')
		setProType('')
		setProDescription('')
		setButtonModifier(false)
	}

	// =============| submit function |=============
	const onSubmit = e => {
		e.preventDefault()

		if (
			proName == '' &&
			proImg == '' &&
			proLinkOne == '' &&
			proLinkTwo == '' &&
			proType == '' &&
			proDescription == ''
		) {
			warning('Malummot kiritin!')
		} else {
			setLoading(true)
			try {
				axios
					.post(URL_API, {
						name: proName,
						img: proImg,
						link_github: proLinkOne,
						link_view: proLinkTwo,
						type: proType,
						description: proDescription,
					})
					.then(res => {
						setLoading(false)
						success('Malumotlar yuklandi')
						clearInput()
						uploadImage(null)
						setProImg('')
						refetch('project-data')
					})
			} catch (e) {
				error()
				setLoading(false)
			}
		}
	}

	// =============| delete request |=============
	const onDelete = id => {
		setLoading(true)
		try {
			axios.delete(`${URL_API}/${id}`).then(res => {
				console.log(res)
				refetch('project-data')
				setLoading(false)
			})
		} catch (error) {
			console.error(
				"Ma'lumotlarni o'chirishda xatolik yuz berdi:",
				error.message
			)
		}
	}

	// =============| UpdateInput |=============
	const onUpdateProject = id => {
		axios(`${URL_API}/${id}`).then(res => {
			if (res) {
				setProName(res.data.name)
				setProImg(res.data.img)
				setProLinkOne(res.data.link_github)
				setProLinkTwo(res.data.link_view)
				setProType(res.data.type)
				setProDescription(res.data.description)
				setProjectId(res.data.id)
			}
			setButtonModifier(true)
		})
	}

	// =============| Update |=============
	const onUpdate = () => {
		setLoading(true)
		axios
			.put(`${URL_API}/${projectId}`, {
				name: proName,
				img: proImg,
				link_github: proLinkOne,
				link_view: proLinkTwo,
				type: proType,
				description: proDescription,
			})
			.then(res => {
				refetch()
				clearInput()
				setLoading(false)
			})
	}

	// =============| Upload img firebase |=============
	const uploadImage = async file => {
		if (file) {
			setLoading(true)
			const storageRef = ref(storage, 'project-img/' + file?.name)
			await uploadBytes(storageRef, file)
			const downloadURL = await getDownloadURL(storageRef)
			setProImg(await getDownloadURL(storageRef))

			if (downloadURL) {
				setLoading(false)
				success('Rasim yuklandi.')
			} else {
				error('Xatoli yuzberdi.')
			}

			return downloadURL
		} else {
			console.log('rasim yok')
		}
	}

	return (
		<section className='flex justify-between gap-[20px] max-[1050px]:flex-wrap '>
			{contextHolder}
			<Spin className='spin-new-class' spinning={loading} fullscreen />

			{/* =============| Add projects form |============= */}
			<div
				className='max-[1050px]:static max-[1050px]:w-full'
				style={
					isRowBased
						? { position: 'static' }
						: { position: 'sticky', top: '0px' }
				}
			>
				<form className='flex flex-col gap-5 w-[400px] sticky top-0 max-[1050px]:w-full'>
					<label
						htmlFor='upload'
						className='relative cursor-pointer bg-white border-[#d9d9d9] border-[1px] rounded-md p-[8px] hover:border-green-500'
					>
						<span className='text-[16px] text-[#d9d9d9] flex justify-center '>
							<CiImageOn className='text-[20px] text-green-500' />
						</span>
						<input
							type='file'
							id='upload'
							value={uploadImage}
							onChange={e => uploadImage(e.target.files[0])}
							className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
						/>
					</label>
					<Input
						placeholder='Project Name'
						size='large'
						value={proName}
						onChange={e => setProName(e.target.value)}
					/>
					{proImg && (
						<Image
							className='w-full h-[100px] object-cover object-center rounded-[10px]'
							src={proImg}
							height={200}
						/>
					)}
					<Input
						placeholder='Project GitHub link'
						size='large'
						value={proLinkOne}
						onChange={e => setProLinkOne(e.target.value)}
					/>
					<Input
						placeholder='Project View link'
						size='large'
						value={proLinkTwo}
						onChange={e => setProLinkTwo(e.target.value)}
					/>
					<Input
						placeholder='Project Type'
						size='large'
						value={proType}
						onChange={e => setProType(e.target.value)}
					/>
					<TextArea
						showCount
						maxLength={400}
						value={proDescription}
						onChange={e => setProDescription(e.target.value)}
						placeholder='Student description'
						style={{
							height: 120,
							resize: 'none',
						}}
					/>
					{buttonModifier ? (
						<Button className='w-full' size='large' onClick={onUpdate}>
							Update
						</Button>
					) : (
						<Button className='w-full' size='large' onClick={onSubmit}>
							Submit
						</Button>
					)}
				</form>
			</div>

			{/* =============| Map projects list |============= */}
			<List
				size='large'
				header={<div>Projects {data?.data.length}</div>}
				bordered
				className='w-full overflow-y-auto h-full relative'
				dataSource={data?.data}
				renderItem={item => {
					return (
						<List.Item
							style={{
								alignItems: 'center',
								gap: '20px',
							}}
						>
							<div className='flex items-center gap-[20px]'>
								<Image
									className='w-[100px] h-[60px] rounded-[10px] object-cover'
									src={
										item?.img?.length == 0
											? 'https://aestheticmedicalpractitioner.com.au/wp-content/uploads/2021/06/no-image.jpg'
											: item?.img
									}
									alt={item?.name}
									width={90}
									height={60}
								/>
								<div>
									<div className='text-[18px] font-semibold tracking-[0.8px]'>
										{item?.name.length > 20
											? item?.name.slice(0, 20) + '...'
											: item?.name}
									</div>
									<div>
										{item?.description.length > 40
											? item?.description.slice(0, 40) + '...'
											: item?.description}
									</div>
								</div>
							</div>

							<div className='flex gap-[10px]'>
								<button
									className='hover:opacity-70 active:opacity-50'
									onClick={() => onDelete(item.id)}
								>
									<MdDeleteOutline className='text-red-500 text-[20px]' />
								</button>
								<button
									className='hover:opacity-70 active:opacity-50'
									onClick={() => onUpdateProject(item.id)}
								>
									<CiEdit className='text-[20px]' />
								</button>
							</div>
						</List.Item>
					)
				}}
			/>
		</section>
	)
}
