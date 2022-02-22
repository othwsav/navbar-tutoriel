import React, { useContext } from 'react'
import { langContext } from '../App'
import LangSwitcher from './langSwitcher'
import ThemeSwitcher from './themeSwitcher'

const links = [
    {
        id: 1,
        ar: "الرئيسية",
        en: "Home",
    },
    {
        id: 2,
        ar: "المنتج",
        en: "Product",
    },
    {
        id: 3,
        ar: "المزايا",
        en: "Features",
    },
    {
        id: 4,
        ar: "التسعير",
        en: "Pricing",
    }
]

const Navbar = () => {

    const lang = useContext(langContext)

    return (
        <nav>
            <div className="container">
                <h1 className="logo">
                    Logo
                </h1>
                <div className="links">
                    {console.log(links, links[0][lang])}
                    {
                        links.map(link => (
                            <span className="link" key={link.id}>
                                {link[lang]}
                            </span>
                        ))
                    }
                </div>
                <div className="switchers">
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </nav>
    )
}

export default Navbar