import React, { useContext } from 'react'
import { setThemeContext, themeContext } from '../App'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitcher = () => {

    const theme = useContext(themeContext)
    const setTheme = useContext(setThemeContext)
    const themeCond = theme === 'light'

    return (
        <button aria-label='switch theme to dark or light' onClick={() => setTheme(themeCond? 'dark' : 'light')}>
            {themeCond? 
                <FaMoon />
            :
                <FaSun />}
        </button>
    )
}

export default ThemeSwitcher