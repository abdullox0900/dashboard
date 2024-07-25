// hooks/useFetchData.ts
import { useEffect, useState, useCallback } from 'react'

// Defining an interface for the fetched data structure
interface FetchData<T> {
	data: T | null
	loading: boolean
	error: string | null
	refetch: () => void
}

// Custom hook to fetch data from a given URL
const useFetchData = <T,>(url: string): FetchData<T> => {
	const [data, setData] = useState<T | null>(null) // State to store the fetched data
	const [loading, setLoading] = useState<boolean>(true) // State to track the loading status
	const [error, setError] = useState<string | null>(null) // State to store any errors

	// useCallback hook to define the fetchData function
	const fetchData = useCallback(async () => {
		try {
			setLoading(true) // Set loading to true before starting fetch
			const response = await fetch(url) // Fetching data from the URL
			if (!response.ok) {
				// Throwing an error if the response is not ok
				throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi.')
			}
			const result = await response.json() // Parsing the JSON response
			setData(result) // Setting the fetched data to state
		} catch (error) {
			// Setting the error state if an error occurs
			setError('Ma\'lumotlarni yuklashda xatolik yuz berdi.')
		} finally {
			// Setting the loading state to false after the fetch completes
			setLoading(false)
		}
	}, [url]) // Dependency array to re-run the fetchData function when the URL changes

	// useEffect hook to fetch data when the URL changes
	useEffect(() => {
		fetchData() // Calling the fetchData function
	}, [fetchData]) // Dependency array to re-run the effect when fetchData changes

	// Returning the data, loading, error, and refetch function
	return { data, loading, error, refetch: fetchData }
}

export default useFetchData
