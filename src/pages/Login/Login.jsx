import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Input } from 'antd'
import { RiLockPasswordFill } from 'react-icons/ri'
import { TiUser } from 'react-icons/ti'
import LoginImg from '../../assets/img/login-img.png'

function Login() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSubmit = function () {
		if (login == 'abdullox' && password == 'qwerty') {
			localStorage.setItem('token', 'nimagap')
			navigate('/')
		}
	}

	return (
		<div className='flex items-center justify-center h-[100vh]'>
			<div className='flex flex-col gap-[20px] items-center w-[500px] p-[30px] bg-white rounded-[10px]'>
				<img
					className='mb-[10px]'
					src={LoginImg}
					alt=''
					width={100}
					height={100}
				/>
				<Input
					size='large'
					placeholder='Login'
					prefix={<TiUser className='text-gray-300' />}
					onChange={e => setLogin(e.target.value)}
				/>
				<Input
					size='large'
					placeholder='Password'
					prefix={<RiLockPasswordFill className='text-gray-300' />}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button className='w-full' size='large' onClick={handleSubmit}>
					Login
				</Button>
			</div>
		</div>
	)
}

export default Login
