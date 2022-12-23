import React from 'react'
import DarkLogo from './img/moon-dark.png'
import LightLogo from './img/moon-light.png'
import Styles from './Nav.module.css'
import { Context, Theme } from '../Context'

const Nav = () => {
  const { theme, setTheme } = Context()
  const textColor = {
    color: theme === Theme.Light ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
  }
  return (
    <div
      style={{
        backgroundColor:
          theme === Theme.Light ? 'hsl(0, 0%, 100%)' : 'hsl(207, 26%, 17%)',
      }}
    >
      <div className={Styles['nav-container']}>
        <h2
          className={Styles['main-text']}
          style={{
            color: textColor.color,
          }}
        >
          Where in the world?
        </h2>
        <div
          className={Styles['dark-mode-container']}
          onClick={() => {
            theme === Theme.Light ? setTheme(Theme.Dark) : setTheme(Theme.Light)
          }}
        >
          <img
            src={theme === Theme.Light ? DarkLogo : LightLogo}
            alt='logo'
            className={Styles.logo}
          />
          <h2
            className={Styles['dark-mode-text']}
            style={{
              color: textColor.color,
            }}
          >
            Dark Mode
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Nav
