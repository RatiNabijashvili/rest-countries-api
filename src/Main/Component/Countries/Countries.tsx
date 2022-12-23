import React from 'react'
import Styles from './Countries.module.css'
import { Context, Theme } from '../../../Context'

interface IProps {
  image: string
  name: string
  population: string
  region: string
  capital: string
}

interface ComponentProps {
  componentName: string
  ComponentValue: string
}

const Countries = (props: IProps) => {
  const { theme } = Context()
  return (
    <div
      className={Styles['country-container']}
      style={{
        backgroundColor:
          theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
      }}
    >
      <div>
        <img
          src={props.image}
          alt='country-flag'
          className={Styles['country-flag']}
        />
      </div>
      <div className={Styles['details-container']}>
        <h2
          className={Styles['country-name']}
          style={{
            color:
              theme === Theme.Light ? ' hsl(200, 15%, 8%)' : 'hsl(0, 0%, 98%)',
          }}
        >
          {props.name}
        </h2>
        <div>
          <CountriesComponent
            componentName='Population:'
            ComponentValue={props.population}
          />
          <CountriesComponent
            componentName='Region:'
            ComponentValue={props.region}
          />
          <CountriesComponent
            componentName='Capital:'
            ComponentValue={props.capital}
          />
        </div>
      </div>
    </div>
  )
}

const CountriesComponent = (props: ComponentProps) => {
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
        {props.componentName}
      </h2>
      <h2
        className={Styles['component-value']}
        style={{
          color:
            theme === Theme.Light ? ' hsl(200, 15%, 8%)' : 'hsl(0, 0%, 78%)',
        }}
      >
        {props.ComponentValue}
      </h2>
    </div>
  )
}

export default Countries
