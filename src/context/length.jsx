import { createContext, useState } from 'react'

const Context = createContext()

function LengthProvider({ children }) {
	const [length, setLength] = useState('')

	return (
		<Context.Provider value={{ length, setLength }}>
			{children}
		</Context.Provider>
	)
}
export { Context, LengthProvider }
