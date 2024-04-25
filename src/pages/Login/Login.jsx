import { Button, Input } from 'antd'
import { RiLockPasswordFill } from 'react-icons/ri'
import { TiUser } from 'react-icons/ti'

function Login() {
	return (
		<div className='flex items-center justify-center h-[100vh]'>
			<div className='flex flex-col gap-[20px] items-center w-[500px] p-[30px] bg-white rounded-[10px]'>
				<Input
					size='large'
					placeholder='Login'
					prefix={<TiUser className='text-gray-300' />}
				/>
				<Input
					size='large'
					placeholder='Password'
					prefix={<RiLockPasswordFill className='text-gray-300' />}
				/>
				<Button className='w-full' size='large'>
					Login
				</Button>
			</div>
		</div>
	)
}

export default Login
