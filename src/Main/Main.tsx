import React from 'react'
import { Context, Theme } from '../Context'
import Nav from '../Nav/Nav'
import Component from './Component/Component'

const Main = () => {
  const { theme } = Context()
  return (
    <div
      style={{
        backgroundColor:
          theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)',
        height: '100vh',
      }}
    >
      <Nav />
      <div
        style={{
          backgroundColor:
            theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)',
        }}
      >
        <Component />
      </div>
    </div>
  )
}

export default Main
