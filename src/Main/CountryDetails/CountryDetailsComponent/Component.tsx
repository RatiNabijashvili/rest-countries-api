import React from 'react'
import Styles from './Component.module.css'
import { Context, Theme } from '../../../Context'

interface IProps {
  name: string
  value: string
}

const Component = (props: IProps) => {
  const { theme } = Context()
  return (
    <div className={Styles['component-container']}>
      <h2
        className={Styles['component-name']}
        style={{
          color:
            theme === Theme.Light ? ' hsl(200, 15%, 8%)' : 'hsl(0, 0%, 98%)',
        }}
      >
        {props.name}
      </h2>
      <h2
        className={Styles['component-value']}
        style={{
          color:
            theme === Theme.Light ? ' hsl(200, 15%, 8%)' : 'hsl(0, 0%, 98%)',
        }}
      >
        {props.value}
      </h2>
    </div>
  )
}

export default Component
