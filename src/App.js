import { createContext, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import './scss/main.scss'

const langHeadVals = {
	en: 'en-US',
	ar: 'ar-MA'
}

export const langContext = createContext()
export const setLangContext = createContext()
export const themeContext = createContext()
export const setThemeContext = createContext()

function App() {

	const [lang, setLang] = useState('en')
	const [theme, setTheme] = useState('light')

	
	return (
		<div className="App">
			<Helmet htmlAttributes={{
				lang: langHeadVals[lang],
				dir: lang === 'ar'? 'rtl' : 'ltr',
				"data-theme": theme
			}} />
			<langContext.Provider value={lang}>
				<setLangContext.Provider value={setLang}>
					<themeContext.Provider value={theme}>
						<setThemeContext.Provider value={setTheme}>
							<Navbar />
						</setThemeContext.Provider>
					</themeContext.Provider>
				</setLangContext.Provider>
			</langContext.Provider>
			<header>
				<div className="container">
					<h1>{headerContent.title[lang]}</h1>
					
				</div>
			</header>
		</div>
	);
}

const headerContent = {
	title: {
		en: "Title",
		ar: "عنوان"
	},
}

export default App;
