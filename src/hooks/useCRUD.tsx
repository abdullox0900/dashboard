// hooks/useCRUD.ts
import { useEffect, useState } from 'react'

interface CRUDResponse<T> {
	data: T | null
	loading: boolean
	error: string | null
}

const useCRUD = <T,>(url: string) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const [postLoading, setPostLoading] = useState<boolean>(false)
	const [postError, setPostError] = useState<string | null>(null)
	const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
	const [deleteError, setDeleteError] = useState<string | null>(null)
	const [updateLoading, setUpdateLoading] = useState<boolean>(false)
	const [updateError, setUpdateError] = useState<string | null>(null)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi.')
			}
			const result = await response.json()
			setData(result)
		} catch (error) {
			setError('Ma\'lumotlarni yuklashda xatolik yuz berdi.')
		} finally {
			setLoading(false)
		}
	}

	const postData = async (newData: T) => {
		setPostLoading(true)
		setPostError(null)
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newData),
			})
            console.log(response);
            
			if (!response.ok) {
				throw new Error('Ma\'lumotlarni yuborishda xatolik yuz berdi.')
			}
			const result = await response.json()

			setData(result)
		} catch (error) {
			setPostError('Ma\'lumotlarni yuborishda xatolik yuz berdi.')
		} finally {
			setPostLoading(false)
		}
	}

	const deleteData = async (id: string) => {
		setDeleteLoading(true)
		setDeleteError(null)
		try {
			const response = await fetch(`${url}/${id}`, {
				method: 'DELETE',
			})
			if (!response.ok) {
				throw new Error('Ma\'lumotlarni o\'chirishda xatolik yuz berdi.')
			}
			setData(null)
		} catch (error) {
			setDeleteError('Ma\'lumotlarni o\'chirishda xatolik yuz berdi.')
		} finally {
			setDeleteLoading(false)
		}
	}

	const updateData = async (id: string, updatedData: T) => {
		setUpdateLoading(true)
		setUpdateError(null)
		try {
			const response = await fetch(`${url}/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedData),
			})
			if (!response.ok) {
				throw new Error('Ma\'lumotlarni yangilashda xatolik yuz berdi.')
			}
			const result = await response.json()
			setData(result)
		} catch (error) {
			setUpdateError('Ma\'lumotlarni yangilashda xatolik yuz berdi.')
		} finally {
			setUpdateLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return { data, loading, error, postData, postLoading, postError, deleteData, deleteLoading, deleteError, updateData, updateLoading, updateError }
}

export default useCRUD
