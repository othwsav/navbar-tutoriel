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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat nisi maxime error tenetur molestias ipsa eius cupiditate sed veniam aspernatur aliquam ducimus nesciunt totam soluta, hic animi id suscipit dicta. Ipsum dolorum vel cumque officiis quibusdam? Dignissimos, temporibus? Ab quasi, dolor eaque repudiandae impedit incidunt dignissimos dolores aperiam odio quae ipsum iste. Nemo sunt aliquid neque fuga sequi obcaecati perferendis cumque animi a dolores quo, eveniet adipisci, culpa vero. Illo obcaecati voluptatibus odio quasi doloremque magni debitis sint. Cumque velit omnis error voluptatem sequi tempora vel aliquid, eum cupiditate et, ad optio odio ullam soluta tempore saepe iste assumenda obcaecati expedita recusandae deserunt voluptates! Tempora molestiae unde consectetur. Aspernatur quo veniam ullam distinctio, ipsam corporis nam. Labore tenetur error sunt eos, magnam magni, voluptas ab a sed, dolor neque tempora asperiores voluptatibus soluta illum ea minus tempore deserunt ullam ex? Porro tempora harum ab sed alias earum doloribus voluptatibus repellat atque, a, autem nisi id sunt assumenda voluptatem aliquam accusantium mollitia molestias dolorem iusto iste dolorum! Eaque magni, quisquam at tempora quam explicabo doloribus quos dolorem obcaecati, minus sunt asperiores nemo incidunt architecto nesciunt maxime ad fuga illum ab optio illo laudantium, aspernatur vel? Voluptas rerum illum esse maxime ea non inventore ipsam temporibus voluptatum, iure odio quidem quasi velit soluta asperiores dolore perferendis assumenda impedit, dicta id aliquam ad cum laboriosam! Deleniti sit aliquam quas commodi fugiat, illo tenetur ipsum dolorum beatae exercitationem placeat possimus delectus impedit voluptatem cumque doloremque nesciunt? Adipisci quis repellat ratione aliquid! Molestias nam doloremque fugiat perspiciatis accusamus. Nemo at ducimus autem sint amet exercitationem sed doloribus enim dicta aliquam voluptatum, hic quidem minima reiciendis nesciunt. Sint minus ab numquam eligendi. Similique aperiam vitae deserunt velit rem voluptatibus ad, beatae eum consequatur dolore dolorem recusandae eaque sapiente ipsa corrupti! Quisquam cumque eaque velit veniam eligendi voluptates harum voluptatum soluta a, illo cupiditate amet tempore itaque perferendis commodi maxime. Amet labore natus porro explicabo ipsa, deleniti delectus corporis provident magni deserunt ut beatae fuga possimus, voluptatem, consectetur temporibus aperiam ratione culpa. Labore perspiciatis magni doloremque dolores laboriosam ratione modi in fugiat mollitia. Ullam deleniti illo possimus iste vitae. Expedita doloremque nam consequatur vel voluptatum adipisci doloribus perspiciatis fugit beatae repellendus aliquam deleniti quae, quo quibusdam sed in? Qui, repellat error dolorum nostrum explicabo cumque ipsum facilis! Fugit, quo. Quod laudantium modi omnis porro ab nobis facilis vitae possimus doloribus. Esse quos itaque id architecto, cupiditate, sequi quam molestias laudantium, tempora quasi dolores ducimus repellat modi asperiores? Iusto repellendus in neque assumenda quos, laboriosam rerum et! Atque dolor ex a veniam! Illum nulla ullam corporis doloremque animi non quis veniam repellat! Dolores iusto, libero consectetur harum iste deleniti, officia, tempora culpa reiciendis quia quos facere beatae? Minima esse maiores nam perferendis ex magni, laboriosam magnam quia unde, assumenda nostrum ratione molestias, cum minus. Doloribus illo perspiciatis neque quis ad delectus, quod aliquam esse dolorem dolore, praesentium excepturi eaque rerum, quo distinctio? Nihil officiis necessitatibus praesentium in, iste beatae inventore nam provident quasi eaque dolore distinctio ex?
			</header>
		</div>
	);
}

export default App;
