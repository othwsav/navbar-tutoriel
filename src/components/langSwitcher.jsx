import React, { useContext } from 'react'
import { langContext, setLangContext } from '../App'

const LangSwitcher = () => {

    const lang = useContext(langContext)
    const setLang = useContext(setLangContext)
    const langCond = lang === 'ar'

    return (
        <button aria-label='switch theme to dark or light' onClick={() => setLang(langCond? 'en' : 'ar')}>
            {langCond? 
                'EN'
            :
                'AR'}
        </button>
    )
}

export default LangSwitcher