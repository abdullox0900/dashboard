import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'

import Students from './pages/Students/Students'
import Abdullokh from './pages/Abdullokh/Abdollokh'
import Data from './pages/Data/Data'
import Dev from './pages/Dev/Dev'
import English from './pages/English/English'
import Website from './pages/Website/Website'
import Login from './pages/Login/Login'
import { useEffect } from 'react'

function App() {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token') == 'nimagap') {
			navigate('/')
		} else {
			navigate('/login')
		}
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index path='/' element={<Dashboard />} />
					<Route path='students' element={<Students />} />
					<Route path='abdullokh' element={<Abdullokh />}></Route>
					<Route path='data' element={<Data />} />
					<Route path='dev' element={<Dev />} />

					<Route path='english' element={<English />} />
					<Route path='website' element={<Website />} />
				</Route>
				<Route path='login' element={<Login />} />
			</Routes>
		</>
	)
}

export default App
