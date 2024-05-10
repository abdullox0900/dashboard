import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'
import { TextProvider } from './context/header-title.jsx'
import { LengthProvider } from './context/length.jsx'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<TextProvider>
				<LengthProvider>
					<App />
				</LengthProvider>
			</TextProvider>
		</BrowserRouter>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)
