import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaBars } from 'react-icons/fa'
import { langContext } from '../App'
import LangSwitcher from './langSwitcher'
import ThemeSwitcher from './themeSwitcher'

import image1 from "../images/image1.png"
import image2 from "../images/image2.png"

const dropdownContent = [
    {
        en: "Taking action",
        ar: "تصرف"
    },
    {
        en: "My impact",
        ar: "تأثيري"
    },
    {
        en: "Carbon compensation",
        ar: "تعويض الكربون"
    },
    {
        en: "Pachama's impact",
        ar: "تأثير الباشاما"
    },
    {
        en: "we're helping the world",
        ar: "نحن نساعد العالم"
    },
    {
        en: <>Tonnes of CO<sub>2</sub> Compensated</>,
        ar: "أطنان من ثاني أكسيد الكربون تم تعويضها"
    },
]

const Navbar = () => {
    const lang = useContext(langContext)

    const links = [
        {
            id: 1,
            ar: "الرئيسية",
            en: "Home",
            active: true
        },
        {
            id: 2,
            ar: "المنتج",
            en: "Product",
        },
        {
            id: 3,
            ar: "التأثير",
            en: "Impact",
            children: (
                <div className='dropdown'>
                    <div>
                        <h5>{dropdownContent[0][lang]}</h5>
                        <div className="impact">
                            <div className="image">
                                <img src={image1} alt="" />
                            </div>
                            <div className="content">
                                <h6>{dropdownContent[1][lang]}</h6>
                                <p>{dropdownContent[2][lang]}</p>
                            </div>
                        </div>
                        <div className="impact">
                            <div className="image">
                                <img src={image2} alt="" />
                            </div>
                            <div className="content">
                                <h6>{dropdownContent[3][lang]}</h6>
                                <p>{dropdownContent[4][lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>5972</span>
                        <span>{dropdownContent[5][lang]}</span>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            ar: "التسعير",
            en: "Pricing",
        },
        {
            id: 5,
            ar: "الدخول",
            en: "Sign in",
        },
        {
            id: 6,
            ar: "التسجيل",
            en: "Register",
            primary: true
        }
    ]
    
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navFoot = useRef()

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY !== 0)
                setScrolled(true)
            else
                setScrolled(false)
        }
    }, [])


    return (
        <nav className={`${scrolled? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-head">
                    <h1 className="logo">
                        Logo
                    </h1>
                    <button onClick={() => setShow(!show)} aria-label='show or hide navbar links in mobile'>
                        <FaBars />
                    </button>
                </div>
                <div ref={navFoot} className={`nav-foot ${show? 'showed' : ""}`}>
                    <div className="links">
                        {
                            links.map(link => {
                                if(link.children){
                                    return (
                                        <span className={`link ${link.children? 'has-ch' : ""} ${link.active? 'active' : ""} ${link.primary? 'primary' : ""}`} key={link.id}>
                                            {link[lang]}
                                            <FaAngleDown/>
                                            {link.children}
                                        </span>
                                    )
                                }
                                return (
                                    <a href="/" className={`link ${link.children? 'has-ch' : ""} ${link.active? 'active' : ""} ${link.primary? 'primary' : ""}`} key={link.id}>
                                        {link[lang]}
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="switchers">
                        <ThemeSwitcher />
                        <LangSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar