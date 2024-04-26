import { createContext, useState } from 'react'

const Context = createContext()

function TextProvider({ children }) {
	const [text, setText] = useState('')

	return (
		<Context.Provider value={{ text, setText }}>{children}</Context.Provider>
	)
}
export { Context, TextProvider }
